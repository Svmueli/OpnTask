import Link from 'next/link';
import Profile from '../../components/worker/Profile';
import JobRecommendations from '../../components/worker/JobRecommendations';
import JobApplicationTracker from '../../components/worker/JobApplicationTracker';
import Portfolio from '../../components/worker/Portfolio';

const WorkerDashboard = () => (
  <div className="container mx-auto p-6">
    <Profile />
    <JobRecommendations />
    <JobApplicationTracker />
    <Portfolio />
    <div className="mt-6">
      <Link href="/worker/search">
        <a className="px-4 py-2 bg-blue-500 text-white rounded">Search for Jobs</a>
      </Link>
    </div>
  </div>
);

export default WorkerDashboard;
