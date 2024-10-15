import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // Next.js hook for navigation
import { toast } from 'react-toastify';
import AxiosInstance from "../components/utils/AxiosInstance";

const Profile = () => {
  const jwt = typeof window !== "undefined" ? localStorage.getItem('token') : null; // Check if window is defined
  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('user')) : null;
  const router = useRouter(); // useRouter instead of useNavigate

  useEffect(() => {
    if (jwt === null && !user) {
      router.push('/login'); // Navigate to login if token is not available
    } else {
      getSomeData(); // Fetch data if authenticated
    }
  }, [jwt, user, router]);

  const getSomeData = async () => {
    try {
      const res = await AxiosInstance.get('auth/get-something/');
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to fetch data.");
    }
  };

  const refresh = typeof window !== "undefined" ? JSON.parse(localStorage.getItem('refresh_token')) : null;

  const handleLogout = async () => {
    try {
      const res = await AxiosInstance.post('auth/logout/', { 'refresh_token': refresh });
      if (res.status === 204) {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        router.push('/login'); // Navigate to login after logout
        toast.warn("Logout successful");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed.");
    }
  };

  return (
    <div className='container'>
      <h2>Hi {user && user.full_name}</h2>
      <p style={{ textAlign: 'center' }}>Welcome to your profile</p>
      <button onClick={handleLogout} className='logout-btn'>Logout</button>
    </div>
  );
};

export default Profile;
