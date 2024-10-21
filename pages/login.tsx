import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/AuthContext';
import Layout from '../components/Layout';
import { Button } from "@/components/ui/button";
import { FcGoogle } from 'react-icons/fc';

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const { signInWithGoogle, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred during Google login');
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-2xl mb-4">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <Button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </Layout>
  );
}
