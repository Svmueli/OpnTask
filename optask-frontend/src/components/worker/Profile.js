import { useState } from 'react';

const Profile = () => {
  const [profilePic, setProfilePic] = useState('/images/default-profile.png'); // Default profile picture

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Profile Summary</h2>
      
      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
        />
        <label className="text-sm font-medium text-blue-500 cursor-pointer hover:text-blue-600">
          Change Profile Picture
          <input 
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleProfilePicChange}
          />
        </label>
      </div>

      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Name</label>
        <input 
          type="text" 
          defaultValue="Jane Doe" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none"
        />
      </div>

      {/* Skills Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-1">Skills</label>
        <input 
          type="text" 
          defaultValue="Web Development, Graphic Design" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none"
        />
      </div>

      {/* Portfolio Field */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-1">Portfolio</label>
        <input 
          type="url" 
          defaultValue="https://portfolio.com/janedoe" 
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-400 focus:outline-none"
        />
      </div>

      {/* Save Changes Button */}
      <button className="w-full px-4 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200">
        Save Changes
      </button>
    </div>
  );
};

export default Profile;
