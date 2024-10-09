
const JobManagement = () => {
    const jobs = [
      { title: "Back-End Developer", actions: "Edit / Delete" },
      { title: "UI/UX Designer", actions: "Edit / Delete" },
    ];
  
    return (
      <div className="p-4 bg-white rounded shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4">Manage Job Postings</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Job Title</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{job.title}</td>
                <td className="px-4 py-2 border-b">{job.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default JobManagement;
  