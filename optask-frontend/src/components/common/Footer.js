import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 py-6 text-center">
    <div className="container mx-auto">
      <p className="text-sm">&copy; 2024 OpnTask. All rights reserved.</p>
      
      {/* Links to About, Contact, Terms, Privacy */}
      <div className="flex justify-center mt-2 space-x-4">
        {["About", "Contact", "Terms of Service", "Privacy Policy"].map((item, index) => (
          <a href="#" key={index} className="hover:text-blue-400" aria-label={item}>
            {item}
          </a>
        ))}
      </div>
      
      {/* Social Media  */}
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#" aria-label="Facebook" className="hover:text-blue-400">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-blue-400">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
