/* add calender feature for people to auto book meetings with alumni */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlumniProfile } from '../types';

interface AlumniCardProps {
  alumni: AlumniProfile;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  const [linkedinUrl, setLinkedinUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinkedInUrl = async () => {
      try {
        const response = await fetch(`/api/profile?id=${alumni.id}`);
        if (response.ok) {
          const data = await response.json();
          setLinkedinUrl(data.linkedin_url);
        } else {
          console.error('Failed to fetch LinkedIn URL');
        }
      } catch (error) {
        console.error('Error fetching LinkedIn URL:', error);
      }
    };

    fetchLinkedInUrl();
  }, [alumni.id]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{alumni.name}</h2>
      <p className="text-gray-600 mb-2">{alumni.role}</p>
      <p className="text-gray-500 mb-4">{alumni.location}</p>
      {alumni.blurb && (
        <p className="text-sm text-gray-700 mb-4">{alumni.blurb}</p>
      )}
      {linkedinUrl ? (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#0077b5] hover:bg-[#006396] rounded-md transition-colors"
        >
          View LinkedIn Profile
        </a>
      ) : (
        <span className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-md">
          No LinkedIn Profile Available
        </span>
      )}
    </div>
  );
}
