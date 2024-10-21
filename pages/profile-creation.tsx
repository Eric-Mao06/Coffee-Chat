import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';
import { AlumniProfile } from '../types';
import { useAuth } from '../lib/AuthContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ProfileCreation() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [projects, setProjects] = useState('');
  const [interests, setInterests] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [contact_info, setContactInfo] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { user, setHasCompletedProfile } = useAuth();
  const [resume, setResume] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState<string>('');

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResume(file);
      const text = await file.text();
      setResumeText(text);
    }
  };

  const handleProfileCreation = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!user) throw new Error('No user found');

      let resumeEmbedding = null;
      if (resumeText) {
        const embeddingResponse = await fetch('/api/generate-embedding', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: resumeText }),
        });
        const { embedding } = await embeddingResponse.json();
        resumeEmbedding = embedding;
      }

      const { data: profileData, error: profileError } = await supabase
        .from('alumni_profiles')
        .insert([
          {
            user_id: user.id,
            name,
            role,
            company,
            location,
            projects: projects.split(',').map(p => p.trim()),
            interests: interests.split(',').map(i => i.trim()),
            hobbies: hobbies.split(',').map(h => h.trim()),
            contact_info,
            resume_embedding: resumeEmbedding,
          },
        ]);

      if (profileError) throw profileError;

      const newProfile: AlumniProfile = {
        id: user.id,
        name,
        role,
        company,
        location,
        projects: projects.split(','),
        interests: interests.split(','),
        hobbies: hobbies.split(','),
        contact_info,
        resume_embedding: resumeEmbedding,
      };
      await addToPinecone(newProfile);
      setHasCompletedProfile(true);
      router.push('/');
    } catch (error) {
      console.error('Profile creation error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred during profile creation');
    }
  };
  const addToPinecone = async (profile: AlumniProfile) => {
    try {
      console.log('Generating embedding for Pinecone...');
      const embeddingResponse = await fetch('/api/generate-embedding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `${profile.name}: ${profile.role} at ${profile.company}. Interests: ${profile.interests.join(', ')}` }),
      });
      if (!embeddingResponse.ok) {
        throw new Error(`HTTP error! status: ${embeddingResponse.status}`);
      }
      const { embedding } = await embeddingResponse.json();

      console.log('Adding profile to Pinecone...');
      const pineconeResponse = await fetch('/api/add-to-pinecone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          id: profile.id, 
          embedding, 
          metadata: { 
            name: profile.name, 
            role: profile.role, 
            company: profile.company,
            resumeEmbedding: profile.resume_embedding ? profile.resume_embedding : undefined
          },
        }),
      });

      if (!pineconeResponse.ok) {
        throw new Error(`Failed to add profile to Pinecone: ${pineconeResponse.statusText}`);
      }

      console.log('Profile added to Pinecone successfully');
    } catch (error) {
      console.error('Error adding profile to Pinecone:', error);
      throw error; 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleProfileCreation} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl mb-4">Complete Your Profile</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            type="text"
            placeholder="Current Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            placeholder="Current Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="City, Country"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interests">
            Interests
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="interests"
            type="text"
            placeholder="Interest1, Interest2, Interest3"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
            Resume (optional)
          </label>
          <Input
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleResumeUpload}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Profile
          </Button>
        </div>
      </form>
    </div>
  );
}
