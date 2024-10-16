import { AlumniProfile } from '../types';

interface ProfileDetailsProps {
  profile: AlumniProfile;
}

export default function ProfileDetails({ profile }: ProfileDetailsProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold mb-4">{profile.name}</h1>
      <p className="text-xl text-gray-600 mb-4">{profile.role} at {profile.company}</p>
      <p className="text-lg text-gray-500 mb-6">{profile.location}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          {profile.projects.map((project, index) => (
            <li key={index} className="mb-1">{project}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Interests</h2>
        <div className="flex flex-wrap">
          {profile.interests.map((interest, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded">
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Hobbies</h2>
        <div className="flex flex-wrap">
          {profile.hobbies.map((hobby, index) => (
            <span key={index} className="bg-green-100 text-green-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded">
              {hobby}
            </span>
          ))}
        </div>
      </div>

      {profile.contact_info && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>{profile.contact_info}</p>
        </div>
      )}
    </div>
  );
}
