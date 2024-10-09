
const JobListings = () => {
    const jobs = [
      { title: "Full-Stack Developer", description: "Work remotely to build web apps" },
      { title: "Content Writer", description: "Create engaging content for blogs" },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {jobs.map((job, index) => (
          <div key={index} className="p-4 bg-white rounded shadow-md hover:bg-gray-100">
            <h3 className="font-bold text-xl mb-2">{job.title}</h3>
            <p>{job.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Apply</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default JobListings;
  