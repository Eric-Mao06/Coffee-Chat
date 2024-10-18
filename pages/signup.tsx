import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import { supabase } from '../lib/supabase';

// Add this type definition
type AlumniProfile = {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  projects: string[];
  interests: string[];
  hobbies: string[];
  contact_info: string;
};

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [projects, setProjects] = useState('');
  const [interests, setInterests] = useState('');
  const [hobbies, setHobbies] = useState('');
  const [contact_info, setContactInfo] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (authError) throw authError;

      // Generate embedding based on interests
      const interestsText = interests.split(',').map(i => i.trim()).join(', ');

      const { data: profileData, error: profileError } = await supabase
        .from('alumni_profiles')
        .insert([
          {
            user_id: authData.user?.id,
            name,
            role,
            company,
            location,
            projects: projects.split(',').map(p => p.trim()),
            interests: interests.split(',').map(i => i.trim()),
            hobbies: hobbies.split(',').map(h => h.trim()),
            contact_info,
          },
        ]);

      if (profileError) throw profileError;

      const newProfile: AlumniProfile = {
        id: authData.user?.id ?? '',
        name,
        role,
        company,
        location,
        projects: projects.split(','),
        interests: interests.split(','),
        hobbies: hobbies.split(','),
        contact_info
      };
      await addToPinecone(newProfile);

      alert('Check your email for the confirmation link!');
      router.push('/login');
    } catch (error) {
      console.error('Signup error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred during signup');
    }
  };

  const addToPinecone = async (profile: AlumniProfile) => {
    try {
      // Generate embedding
      const embeddingResponse = await fetch('/api/generate-embedding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `${profile.name}: ${profile.role} at ${profile.company}. Interests: ${profile.interests.join(', ')}` }),
      });
      const { embedding } = await embeddingResponse.json();

      // Add to Pinecone
      const pineconeResponse = await fetch('/api/add-to-pinecone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: profile.id, embedding, metadata: { name: profile.name, role: profile.role, company: profile.company } }),
      });

      if (!pineconeResponse.ok) {
        throw new Error('Failed to add profile to Pinecone');
      }
    } catch (error) {
      console.error('Error adding profile to Pinecone:', error);
      // Note: We're not setting an error state here to avoid disrupting the signup flow
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleSignUp} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-2xl mb-4">Sign Up</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="role"
              type="text"
              placeholder="Current Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="company"
              type="text"
              placeholder="Current Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="City, Country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projects">
              Projects
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="projects"
              type="text"
              placeholder="Project1, Project2, Project3"
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interests">
              Interests
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="interests"
              type="text"
              placeholder="Interest1, Interest2, Interest3"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hobbies">
              Hobbies
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hobbies"
              type="text"
              placeholder="Hobby1, Hobby2, Hobby3"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact_info">
              Contact Information
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact_info"
              type="text"
              placeholder="Contact Information"
              value={contact_info}
              onChange={(e) => setContactInfo(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
