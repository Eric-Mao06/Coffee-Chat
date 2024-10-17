import React from 'react';
import { Search, Home, Users } from 'lucide-react';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import Layout from '../components/Layout';

export default function HomePage() {
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
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2" size="sm">
                  Ask
                </Button>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Try asking</h2>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start text-left">
                    <span className="bg-yellow-100 text-yellow-800 p-1 rounded mr-2">💼</span>
                    How do I find alumni working in tech startups?
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left">
                    <span className="bg-green-100 text-green-800 p-1 rounded mr-2">🏆</span>
                    Can you recommend alumni mentors in data science?
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left">
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
