import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import AxiosInstance from '../../components/utils/AxiosInstance';

const Login = () => {
    const router = useRouter();
    const { code } = router.query;
    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    });

    const handleOnchange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
    };

    const handleLoginWithGoogle = (response) => {
        console.log("id_token", response.credential);
    };

    const handleLoginWithGithub = () => {
        window.location.assign(`https://github.com/login/oauth/authorize/?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`);
    };

    const sendGithubCodeToServer = async () => {
        if (code) {
            try {
                const resp = await AxiosInstance.post('auth/github/', { 'code': code });
                const result = resp.data;
                console.log('server res: ', result);

                if (resp.status === 200) {
                    const user = {
                        'email': result.email,
                        'names': result.full_name
                    };
                    localStorage.setItem('token', JSON.stringify(result.access_token));
                    localStorage.setItem('refresh_token', JSON.stringify(result.refresh_token));
                    localStorage.setItem('user', JSON.stringify(user));
                    router.push('/profile');
                    toast.success('Login successful');
                }
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    toast.error(error.response.data.detail);
                }
            }
        }
    };

    useEffect(() => {
        if (code) {
            sendGithubCodeToServer();
        }
    }, [code]);

    useEffect(() => {
        /* global google */
        if (typeof window !== 'undefined' && window.google) {
            google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                callback: handleLoginWithGoogle
            });
            google.accounts.id.renderButton(
                document.getElementById("signInDiv"),
                { theme: "outline", size: "large", text: "continue_with", shape: "circle", width: "280" }
            );
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await AxiosInstance.post('auth/login/', logindata);
            const response = res.data;
            const user = {
                'full_name': response.full_name,
                'email': response.email
            };

            if (res.status === 200) {
                localStorage.setItem('token', JSON.stringify(response.access_token));
                localStorage.setItem('refresh_token', JSON.stringify(response.refresh_token));
                localStorage.setItem('user', JSON.stringify(user));
                router.push('/employer');
                toast.success('Login successful');
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error('Login failed');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login into your account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email Address:</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={logindata.email}
                            name="email"
                            onChange={handleOnchange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                            value={logindata.password}
                            name="password"
                            onChange={handleOnchange}
                        />
                    </div>
                    <input type="submit" value="Login" className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200 cursor-pointer" />
                    <p className="mt-4 text-center">
                        <Link href="/forget-password" className="text-blue-500 hover:underline">forgot password</Link>
                    </p>
                </form>
                <h3 className="text-center my-4 text-gray-600">Or</h3>
                <div className="flex justify-center mb-4">
                    <button onClick={handleLoginWithGithub} className="w-full p-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 transition duration-200 cursor-pointer">Sign in with Github</button>
                </div>
                <div className="flex justify-center">
                    <div id="signInDiv" className='gsignIn'></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
