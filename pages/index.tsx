import React, { useState } from 'react';
import { Search, Home, Users } from 'lucide-react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Layout from '../components/Layout';
import AlumniCard from '../components/AlumniCard';
import { AlumniProfile } from '../types';
import { useRouter } from 'next/router';

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
      <div className="container mx-auto mt-8 px-4">
        <div className="flex">
          <aside className="w-64 pr-8">
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Home className="w-5 h-5" />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <Users className="w-5 h-5" />
                <span>Discover alumni</span>
              </a>
            </nav>
          </aside>

          <main className="flex-1">
            <h1 className="text-4xl font-bold text-center mb-8">Ask a question, get an expert</h1>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  type="text" 
                  placeholder="Ask anything..." 
                  className="pl-10 pr-4 py-2 w-full text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2" 
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

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Try asking</h2>
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => handleTryAsking("How do I find alumni working in tech startups?")}
                  >
                    <span className="bg-yellow-100 text-yellow-800 p-1 rounded mr-2">💼</span>
                    How do I find alumni working in tech startups?
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => handleTryAsking("Can you recommend alumni mentors in data science?")}
                  >
                    <span className="bg-green-100 text-green-800 p-1 rounded mr-2">🏆</span>
                    Can you recommend alumni mentors in data science?
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-left"
                    onClick={() => handleTryAsking("How do I connect with alumni for career advice?")}
                  >
                    <span className="bg-red-100 text-red-800 p-1 rounded mr-2">📢</span>
                    How do I connect with alumni for career advice?
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
