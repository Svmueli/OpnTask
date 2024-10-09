
const ApplicantList = () => {
    const applicants = [
      { name: "John Doe", status: "Pending", id: 1 },
      { name: "Jane Smith", status: "Reviewed", id: 2 },
    ];
  
    return (
      <div className="p-4 bg-white rounded shadow-md mt-6">
        <h2 className="text-2xl font-bold mb-4">Applicant Management</h2>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Applicant Name</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{applicant.name}</td>
                <td className="px-4 py-2 border-b">{applicant.status}</td>
                <td className="px-4 py-2 border-b">
                  <button className="px-2 py-1 bg-blue-500 text-white rounded mr-2">View Profile</button>
                  <button className="px-2 py-1 bg-green-500 text-white rounded mr-2">Approve</button>
                  <button className="px-2 py-1 bg-red-500 text-white rounded">Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ApplicantList;
  