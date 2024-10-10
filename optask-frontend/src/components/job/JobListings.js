import Link from 'next/link';

const JobListings = () => {
  const jobs = [
    { id: 1, title: "Full-Stack Developer", description: "Remote opportunity..." },
    { id: 2, title: "Content Writer", description: "Create engaging content..." },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {jobs.map((job) => (
        <Link href={`/worker/jobs/${job.id}`} key={job.id}>
          <div className="p-4 bg-white rounded shadow-md hover:bg-gray-100">
            <h3 className="font-bold text-xl mb-2">{job.title}</h3>
            <p>{job.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Apply</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobListings;

