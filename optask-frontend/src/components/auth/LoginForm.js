import { useState } from 'react';
import Button from '../common/Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic
  };

  return (
    <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
      <label className="block mb-2 text-gray-700">Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
      
      <label className="block mb-2 text-gray-700">Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" required />
      
      <Button text="Log In" ariaLabel="Log in" />
    </form>
  );
};

export default LoginForm;
