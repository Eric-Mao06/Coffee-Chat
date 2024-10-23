import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import { AlumniProfile } from '../types';
import { useAuth } from '../lib/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfileCreation() {
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user, setHasCompletedProfile } = useAuth();

  const handleProfileCreation = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
  
    try {
      if (!user) throw new Error('No user found');
      console.log('Fetching LinkedIn profile...');
      const response = await fetch(`/api/linkedin-profile?linkedInUrl=${encodeURIComponent(linkedInUrl)}`);
      const data = await response.json();
      console.log('LinkedIn profile data received:', data);
  
      if (!response.ok) throw new Error(data.error || 'Failed to fetch LinkedIn profile');
      if (!data.person) throw new Error('No profile data received');
  
      const { person } = data;
      console.log('Creating profile text...');
      const profileText = `
        Name: ${person.firstName} ${person.lastName}
        Role: ${person.headline || ''}
        Company: ${person.positions?.positionHistory?.[0]?.companyName || ''}
        Location: ${person.location || ''}
        Skills: ${person.skills?.join(', ') || ''}
        Summary: ${person.summary || ''}
        Experience: ${person.positions?.positionHistory
          ?.map((pos: { title: string; companyName: string; description: string }) => 
            `${pos.title} at ${pos.companyName}: ${pos.description || ''}`
          ).join('\n') || ''}
        Education: ${person.schools?.educationHistory
          ?.map((edu: { schoolName: string; degreeName?: string }) => 
            `${edu.schoolName}${edu.degreeName ? `: ${edu.degreeName}` : ''}`
          ).join('\n') || ''}
      `;
  
      console.log('Generating embedding...');
      const embeddingResponse = await fetch('/api/generate-embedding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: profileText }),
      });
  
      if (!embeddingResponse.ok) {
        const errorText = await embeddingResponse.text();
        console.error('Embedding generation failed:', errorText);
        throw new Error('Failed to generate embedding');
      }
  
      const { embedding } = await embeddingResponse.json();
      console.log('Embedding generated successfully');
      console.log('Preparing Supabase insert...');
  
      const profileData = {
        user_id: user.id,
        name: `${person.firstName} ${person.lastName}`,
        role: person.headline || '',
        company: person.positions?.positionHistory?.[0]?.companyName || '',
        location: person.location || '',
        interests: person.skills || [],
        projects: person.positions?.positionHistory?.map((pos: { description: string }) => pos.description).filter(Boolean) || [],
        hobbies: [],
        linkedin_url: linkedInUrl,
        contact_info: linkedInUrl,
        summary: person.summary || '',
        education: person.schools?.educationHistory?.map((edu: { schoolName: string; degreeName?: string }) => 
          `${edu.schoolName}${edu.degreeName ? `: ${edu.degreeName}` : ''}`
        ) || [],
        experience: person.positions?.positionHistory?.map((pos: { title: string; companyName: string }) => 
          `${pos.title} at ${pos.companyName}`
        ) || [],
        embeddings: embedding,
      };
  
      console.log('Inserting profile into Supabase...', { userId: user.id });
      const { data: insertedProfile, error: insertError } = await supabase
        .from('alumni_profiles')
        .insert([profileData])
        .select()
        .single();

      if (insertError) {
        console.error('Supabase insertion error:', insertError);
        throw insertError;
      }
      console.log('Supabase response:', {
        profile: insertedProfile,
        error: insertError
      });

      if (!insertedProfile) {
        console.error('No profile data returned from Supabase');
        throw new Error('Failed to create profile - no data returned');
      }

      console.log('Adding profile to Pinecone...', {
        profileId: insertedProfile.id,
        embeddingLength: embedding.length
      });

      const pineconeResponse = await fetch('/api/add-to-pinecone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: insertedProfile.id, 
          embedding: embedding,
          metadata: {
            name: `${person.firstName} ${person.lastName}`,
            role: person.headline || '',
            company: person.positions?.positionHistory?.[0]?.companyName || '',
            location: person.location || '',
            interests: Array.isArray(person.skills) ? person.skills : [],
            projects: person.positions?.positionHistory
              ?.map((pos: { description: string }) => pos.description)
              ?.filter(Boolean) || [],
            hobbies: [],
            summary: person.summary || '',
            education: person.schools?.educationHistory
              ?.map((edu: { schoolName: string; degreeName?: string }) => 
                `${edu.schoolName}${edu.degreeName ? `: ${edu.degreeName}` : ''}`
              ) || [],
            experience: person.positions?.positionHistory
              ?.map((pos: { title: string; companyName: string }) => 
                `${pos.title} at ${pos.companyName}`
              ) || []
          }
        })
      });
  
      if (!pineconeResponse.ok) {
        const errorText = await pineconeResponse.text();
        console.error('Pinecone insertion failed:', {
          status: pineconeResponse.status,
          statusText: pineconeResponse.statusText,
          error: errorText
        });
        throw new Error(`Failed to add profile to vector database: ${errorText}`);
      }
      console.log('Profile added to Pinecone successfully');
  
      setHasCompletedProfile(true);
      router.push('/');
    } catch (error) {
      console.error('Profile creation error:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      });
      
      let errorMessage = 'An unexpected error occurred';
      if (error instanceof Error) {
        if (error.message.includes('ScrapIn API')) {
          errorMessage = 'Failed to fetch LinkedIn profile data. Please check your LinkedIn URL and try again.';
        } else if (error.message.includes('embedding')) {
          errorMessage = 'Error processing profile data. Please try again.';
        } else if (error.message.includes('vector database') || error.message.includes('Pinecone')) {
          errorMessage = 'Error saving profile to search index. Please try again.';
        } else if (error.message.includes('duplicate')) {
          errorMessage = 'A profile already exists for this LinkedIn URL.';
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleProfileCreation} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl mb-4">Complete Your Profile</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
            LinkedIn Profile URL
          </label>
          <Input
            id="linkedin"
            type="url"
            placeholder="https://www.linkedin.com/in/yourprofile"
            value={linkedInUrl}
            onChange={(e) => setLinkedInUrl(e.target.value)}
            required
            pattern="https://www\.linkedin\.com/in/.*"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Profile...' : 'Create Profile'}
          </Button>
        </div>
      </form>
    </div>
  );
}
