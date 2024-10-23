/* add calender feature for people to auto book meetings with alumni */
import Link from 'next/link';
import { AlumniProfile } from '../types';

interface AlumniCardProps {
  alumni: AlumniProfile;
}

export default function AlumniCard({ alumni }: AlumniCardProps) {
  console.log('Alumni data:', {
    name: alumni.name,
    linkedin_url: alumni.linkedin_url,
    typeof_url: typeof alumni.linkedin_url
  });

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
      {alumni.linkedin_url && alumni.linkedin_url !== 'null' ? (
        <a 
          href={alumni.linkedin_url}
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
