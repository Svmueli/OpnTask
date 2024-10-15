import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Head from 'next/head'; // Import Head from next/head

const Signup = () => {
  const router = useRouter();
  const [formdata, setFormdata] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");

  const handleOnchange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSigninWithGoogle = async (response) => {
    try {
      const payload = response.credential;
      const server_res = await axios.post(
        "http://localhost:8000/api/v1/auth/google/",
        { access_token: payload }
      );
      console.log(server_res.data);
      toast.success("Signed in successfully!");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Google Sign-In failed. Please try again.");
    }
  };

  useEffect(() => {
    /* global google */
    console.log("Google Client ID:", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

    if (typeof google !== 'undefined') { // Ensure google is defined
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleSigninWithGoogle,
      });
      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        theme: "outline",
        size: "large",
        text: "continue_with",
        shape: "circle",
        width: "280",
      });
    }
  }, []);

  const { email, first_name, last_name, password, password2 } = formdata;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/auth/register/",
        formdata
      );
      console.log(response.data);
      const result = response.data;
      if (response.status === 201) {
        router.push("/auth/otp-verify");
        toast.success(result.message);
      }
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
      </Head>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Email Address:</label>
            <input
              type="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              name="email"
              value={email}
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              name="first_name"
              value={first_name}
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              name="last_name"
              value={last_name}
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              name="password"
              value={password}
              onChange={handleOnchange}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Confirm Password:</label>
            <input
              type="password"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
              name="password2"
              value={password2}
              onChange={handleOnchange}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Submit
          </button>
        </form>
        <h3 className="text-center text-gray-600 mt-4">Or</h3>
        <div className="flex justify-center mt-4">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300">
            Sign up with Github
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <div id="signInDiv" className="gsignIn"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
