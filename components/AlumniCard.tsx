/* add calender feature for people to auto book meetings with alumni */
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
      {alumni.blurb && (
        <p className="text-sm text-gray-700 mb-4">{alumni.blurb}</p>
      )}
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Interests:</h3>
        <div className="flex flex-wrap">
          {Array.isArray(alumni.interests) && alumni.interests.length > 0 ? (
            alumni.interests.map((interest, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                {interest}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No interests listed</span>
          )}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Projects:</h3>
        {Array.isArray(alumni.projects) && alumni.projects.length > 0 ? (
          <ul className="list-disc list-inside">
            {alumni.projects.map((project, index) => (
              <li key={index} className="text-sm text-gray-600">{project}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No projects listed</p>
        )}
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-1">Hobbies:</h3>
        <div className="flex flex-wrap">
          {Array.isArray(alumni.hobbies) && alumni.hobbies.length > 0 ? (
            alumni.hobbies.map((hobby, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-xs font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                {hobby}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No hobbies listed</span>
          )}
        </div>
      </div>
      <Link href={`/profile/${alumni.id}`} className="text-blue-600 hover:text-blue-800">
        View Full Profile
      </Link>
    </div>
  );
}
