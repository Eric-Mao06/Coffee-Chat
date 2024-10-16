import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import ProfileDetails from '../../components/ProfileDetails';
import { AlumniProfile } from '../../types';
import { useAuth } from '../../lib/AuthContext';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();
  const [profile, setProfile] = useState<AlumniProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        router.push('/login');
        return;
      }

      if (id) {
        setLoading(true);
        try {
          const response = await fetch(`/api/profile?id=${id}`);
          const data = await response.json();
          if (response.ok) {
            setProfile(data);
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

    fetchProfile();
  }, [id, user]);

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : profile ? (
          <ProfileDetails profile={profile} />
        ) : (
          <p>Profile not found</p>
        )}
      </div>
    </Layout>
  );
}
