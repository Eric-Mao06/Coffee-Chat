import { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid'; // Add this import

export default function BulkImport() {
  const [linkedInUrls, setLinkedInUrls] = useState(''); // Changed from linkedInUrl
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Split URLs and clean them
      const urls = linkedInUrls
        .split(',')
        .map(url => url.trim())
        .filter(url => url.length > 0);

      if (urls.length === 0) {
        throw new Error('Please enter at least one valid LinkedIn URL');
      }

      // Process each URL
      for (const url of urls) {
        // Fetch LinkedIn profile data
        const response = await fetch(`/api/linkedin-profile?linkedInUrl=${encodeURIComponent(url)}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Failed to fetch LinkedIn profile for ${url}: ${data.error}`);
        }

        const { person } = data;
        
        // Generate profile text
        const profileText = `
          Name: ${person.firstName} ${person.lastName}
          Role: ${person.headline || ''}
          Company: ${person.positions?.positionHistory?.[0]?.companyName || ''}
          Location: ${person.location || ''}
          Skills: ${person.skills?.map((skill: string | { name: string }) => 
            typeof skill === 'string' ? skill : skill.name
          ).join(', ') || ''}
          Summary: ${person.summary || ''}
          Experience: ${person.positions?.positionHistory
            ?.map((pos: { title: string; companyName: string; description: string }) => 
              `${pos.title} at ${pos.companyName}: ${pos.description || ''}`
            ).join('\n') || ''}
        `;

        // Generate embedding
        const embeddingResponse = await fetch('/api/generate-embedding', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: profileText }),
        });

        if (!embeddingResponse.ok) {
          throw new Error('Failed to generate embedding');
        }

        const { embedding } = await embeddingResponse.json();

        // Store in Pinecone with UUID
        const metadata = {
          name: `${person.firstName} ${person.lastName}`,
          role: person.headline || '',
          location: person.location || '',
          linkedin_url: url,
          profile_text: profileText,
        };

        const profileId = uuidv4(); // Generate a proper UUID
        const pineconeResponse = await fetch('/api/add-to-pinecone', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: profileId, // Use the UUID instead of timestamp
            embedding,
            metadata
          })
        });

        if (!pineconeResponse.ok) {
          throw new Error('Failed to store profile in database');
        }
      }

      setSuccess(`Successfully imported ${urls.length} profiles!`);
      setLinkedInUrls('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">Bulk Import Profiles</h1>
        <form onSubmit={handleImport} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="linkedin-url">
              LinkedIn Profile URLs (comma-separated)
            </label>
            <textarea
              id="linkedin-url"
              placeholder="https://www.linkedin.com/in/user1, https://www.linkedin.com/in/user2, https://www.linkedin.com/in/user3"
              value={linkedInUrls}
              onChange={(e) => setLinkedInUrls(e.target.value)}
              required
              className="w-full min-h-[200px] p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 text-green-500 p-3 rounded-md">
              {success}
            </div>
          )}

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Importing...
              </>
            ) : (
              'Import Profile'
            )}
          </Button>
        </form>
      </div>
    </Layout>
  );
}
