'use client'

import React from 'react'
import { Search, Home, Users } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function HomePageComponent() {
  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="container mx-auto flex items-center">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
          <span className="ml-2 text-xl font-semibold">Alumni Connect</span>
        </div>
      </header>

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
                <Textarea
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
    </div>
  )
}