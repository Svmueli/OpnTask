import { useState } from 'react';
import Link from 'next/link';
import Profile from '../../components/worker/Profile';
import JobRecommendations from '../../components/worker/JobRecommendations';
import JobApplicationTracker from '../../components/worker/JobApplicationTracker';
import Portfolio from '../../components/worker/Portfolio';

const WorkerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-600 p-6">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
        
        {/* Welcome Note and Search Bar */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
          <h1 className="text-2xl font-bold text-green-700 mb-4 lg:mb-0">Howdy mate? Welcome.</h1>
          
          <div className="flex items-center space-x-4 w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Search for jobs..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
            />
            <Link href={`/worker/search?query=${searchTerm}`} legacyBehavior>
              <a className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Search
              </a>
            </Link>
          </div>
        </div>

        {/* Profile and Job Recommendations */}
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0 bg-gradient-to-br from-indigo-50 to-blue-100 p-4 rounded-lg shadow-md border border-blue-200">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Profile Summary</h2>
            <Profile />
          </div>
          <div className="flex-1 lg:w-2/3 bg-gradient-to-br from-indigo-50 to-yellow-100 p-4 rounded-lg shadow-md border border-yellow-200">
            <h2 className="text-xl font-bold text-yellow-600 mb-2">Job Recommendations</h2>
            <JobRecommendations maxDisplay={4} />
            <div className="text-center mt-4">
              <Link href="/worker/job-recommendations" legacyBehavior>
                <a className="inline-block px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
                  See More
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Job Application Tracker and Portfolio */}
        <div className="flex flex-col lg:flex-row lg:space-x-6 mt-6">
          <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0 bg-gradient-to-br from-green-100 to-blue-200 p-4 rounded-lg shadow-md border border-green-300">
            <h2 className="text-xl font-bold text-green-700 mb-2">Job Application Tracker</h2>
            <JobApplicationTracker />
          </div>
          <div className="flex-1 lg:w-2/3 bg-gradient-to-br from-yellow-100 to-blue-200 p-4 rounded-lg shadow-md border border-yellow-300">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Portfolio</h2>
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
