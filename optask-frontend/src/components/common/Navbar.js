import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold text-blue-500">OpnTask</a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-600 hover:text-blue-500">Home</a>
          </Link>
          <Link href="/auth/login" legacyBehavior>
            <a className="text-gray-600 hover:text-blue-500">Login</a>
          </Link>
          <Link href="/auth/register" legacyBehavior>
            <a className="text-blue-500 border border-blue-500 rounded-full px-4 py-1 hover:bg-blue-500 hover:text-white">
              Sign Up
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
