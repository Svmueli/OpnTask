import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp) {
      try {
        const res = await axios.post('http://localhost:8000/api/v1/auth/verify-email/', { otp });
        const resp = res.data;
        if (res.status === 200) {
          router.push('/auth/login');
          toast.success(resp.message);
        }
      } catch (error) {
        toast.error("Failed to verify OTP. Please try again.");
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-sm'>
        <h2 className="text-2xl font-bold mb-6 text-center">Verify Your Email</h2>
        <form onSubmit={handleOtpSubmit}>
          <div className='mb-4'>
            <label htmlFor="otp" className="block text-gray-700">Enter your OTP code:</label>
            <input
              type="text"
              className='w-full p-2 border rounded-md'
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition duration-300'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default VerifyEmail;
