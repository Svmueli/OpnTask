
import { useState } from 'react';

const EmployerProfile = () => {
  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employer Profile</h2>

      {/* Profile Picture Upload */}
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-2">
          {profilePic ? (
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
        </div>
        <input type="file" onChange={handleProfilePicChange} className="text-sm" />
      </div>

      {/* Employer Information */}
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" defaultValue="John Doe" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Company</label>
        <input type="text" defaultValue="Acme Corp" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input type="email" defaultValue="john.doe@acme.com" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input type="tel" defaultValue="+123 456 7890" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Website</label>
        <input type="url" defaultValue="https://www.acmecorp.com" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input type="text" defaultValue="New York, USA" className="w-full p-2 border rounded" />
      </div>

      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save Changes</button>
    </div>
  );
};

export default EmployerProfile;
