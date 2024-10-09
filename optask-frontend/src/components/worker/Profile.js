const Profile = () => (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile Summary</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input type="text" defaultValue="Jane Doe" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Skills</label>
        <input type="text" defaultValue="Web Development, Graphic Design" className="w-full p-2 border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Portfolio</label>
        <input type="url" defaultValue="https://portfolio.com/janedoe" className="w-full p-2 border rounded" />
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Save Changes</button>
    </div>
  );
  
  export default Profile;
  