import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AlumniCard from '../components/AlumniCard';
import { AlumniProfile } from '../types';
import { Loader2 } from 'lucide-react';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [results, setResults] = useState<AlumniProfile[]>([]);
  const [randomAlumni, setRandomAlumni] = useState<AlumniProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [randomLoading, setRandomLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [randomError, setRandomError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState(false);
  const [dataReady, setDataReady] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      if (q) {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/search?q=${encodeURIComponent(q as string)}`);
          const data = await response.json();
          
          if (response.ok) {
            setResults(data.data || []);
            setDataReady(true);
            setIsFallback(data.fallback);
            if (data.data.length === 0) {
              setRandomLoading(true);
              const randomResponse = await fetch('/api/random-alumni');
              const randomData = await randomResponse.json();
              if (randomResponse.ok) {
                setRandomAlumni(randomData.data);
              } else {
                setRandomError(randomData.error || 'Failed to fetch random alumni');
              }
              setRandomLoading(false);
            }
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
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        ) : (
          <>
            {isFallback && (
              <p className="text-yellow-600 mb-4">
                Note: We're currently using a basic search due to high demand. Results may be less accurate.
              </p>
            )}
            {dataReady && results.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((alumni, index) => (
                  <AlumniCard key={`${alumni.id}-${index}`} alumni={alumni} />
                ))}
              </div>
            )}
            {results.length === 0 && (
              <>
                <p className="text-gray-600 text-center py-8">No results found. Here are two alumni profiles:</p>
                {randomLoading ? (
                  <div className="flex justify-center items-center h-64">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                  </div>
                ) : randomError ? (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{randomError}</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {randomAlumni.map((alumni) => (
                      <AlumniCard key={alumni.id} alumni={alumni} />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
