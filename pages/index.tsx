import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Coffee Chat with Alumni</h1>
        <SearchBar query={query} setQuery={setQuery} onSubmit={handleSearch} />
      </div>
    </Layout>
  );
}
