import Link from 'next/link';
import { AlumniProfile } from '../types';

interface AlumniCardProps {
  alumni: AlumniProfile;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{alumni.name}</h2>
      <p className="text-gray-600 mb-2">{alumni.role} at {alumni.company}</p>
      <p className="text-gray-500 mb-4">{alumni.location}</p>
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Interests:</h3>
        <div className="flex flex-wrap">
          {alumni.interests.map((interest, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
              {interest}
            </span>
          ))}
        </div>
      </div>
      <Link href={`/profile/${alumni.id}`}>
        <a className="text-blue-600 hover:text-blue-800">View Full Profile</a>
      </Link>
    </div>
  );
}
