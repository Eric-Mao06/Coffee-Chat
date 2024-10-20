import React, { useState } from 'react';
import { Search, Home, Users, ArrowUpRight } from 'lucide-react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Layout from '../components/Layout';
import AlumniCard from '../components/AlumniCard';
import { AlumniProfile } from '../types';
import { useRouter } from 'next/router';
import { Textarea } from "@/components/ui/textarea"

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<AlumniProfile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setError('Please enter a search query');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();

      if (response.ok) {
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      } else {
        setError(data.error || 'An unexpected error occurred');
      }
    } catch (err) {
      setError('Failed to fetch search results');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTryAsking = (question: string) => {
    setSearchQuery(question);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 flex items-center justify-center h-[calc(100vh-18rem)]">
        <main className="w-full max-w-2xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-8">
            Find and be Found
          </h1>
          <div className="relative">
            <Textarea 
              placeholder="Ask anything..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              rows={4}
            />
            <Button 
              className="absolute right-2 bottom-2" 
              size="sm"
              onClick={handleSearch}
              disabled={isLoading}
            >
              {isLoading ? 'Searching...' : 'Ask'}
            </Button>
          </div>

          {error && <p className="text-red-500 mt-2">{error}</p>}

          {searchResults.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map((alumni) => (
                  <AlumniCard key={alumni.id} alumni={alumni} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Button 
                variant="tryAsking" 
                size="xs"
                onClick={() => handleTryAsking("Alumni working on tech startups")}
              >
                Alumni working on tech startups
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
              <Button 
                variant="tryAsking" 
                size="xs"
                onClick={() => handleTryAsking("Can you recommend alumni mentors in data science?")}
              >
                Alumni mentors in data science
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
              <Button 
                variant="tryAsking" 
                size="xs"
                onClick={() => handleTryAsking("Alumni who changed careers")}
              >
                Alumni who changed careers
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
