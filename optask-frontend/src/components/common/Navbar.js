import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo Image Link */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image 
              src="/images/logo.png" 
              alt="OpnTask Logo" 
              width={50} 
              height={50} 
            />
            <span className="text-2xl font-bold text-blue-500">OpnTask</span>
          </div>
        </Link>
        
        <div className="flex space-x-6">
          <Link href="/">
            <span className="flex items-center text-gray-600 hover:text-blue-500 space-x-1">
              <FaHome />
              <span>Home</span>
            </span>
          </Link>
          <Link href="/auth/login">
            <span className="flex items-center text-gray-600 hover:text-blue-500 space-x-1">
              <FaSignInAlt />
              <span>Login</span>
            </span>
          </Link>
          <Link href="/auth/register">
            <span className="flex items-center text-blue-500 border border-blue-500 rounded-full px-4 py-1 hover:bg-blue-500 hover:text-white space-x-1">
              <FaUserPlus />
              <span>Sign Up</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
