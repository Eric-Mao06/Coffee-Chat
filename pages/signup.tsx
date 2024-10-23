import { useState } from 'react';
import Layout from '../components/Layout';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../lib/AuthContext';
import { Button } from "@/components/ui/button";

export default function SignUp() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignUp = async () => {
    if (isLoading) return; 
    
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Google signup error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred during Google signup');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-2xl mb-4">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <Button
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            {isLoading ? 'Signing up...' : 'Sign up with Google'}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
