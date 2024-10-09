
import JobPostForm from '../../components/employer/JobPostForm';
import JobManagement from '../../components/employer/JobManagement';
import ApplicantList from '../../components/employer/ApplicantList';

const EmployerDashboard = () => (
  <div className="container mx-auto p-6">
    <JobPostForm />
    <JobManagement />
    <ApplicantList />
  </div>
);

export default EmployerDashboard;
