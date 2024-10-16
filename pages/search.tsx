import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AlumniCard from '../components/AlumniCard';
import { AlumniProfile } from '../types';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState<AlumniProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (q) {
        setLoading(true);
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(q as string)}`);
          const data = await response.json();
          if (response.ok) {
            setResults(data.data);
            setIsFallback(data.fallback);
          } else {
            setError(data.error || 'An unexpected error occurred.');
          }
        } catch (err: any) {
          setError(err.message || 'An unexpected error occurred.');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResults();
  }, [q]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Search Results for "{q}"</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            {isFallback && (
              <p className="text-yellow-600 mb-4">
                Note: We're currently using a basic search due to high demand. Results may be less accurate.
              </p>
            )}
            {results.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((alumni) => (
                  <AlumniCard key={alumni.id} alumni={alumni} />
                ))}
              </div>
            ) : (
              <p>No results found.</p>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
