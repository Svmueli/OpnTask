
const Footer = () => (
    <footer className="bg-gray-800 text-gray-400 py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">&copy; 2024 OpnTask. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-4">
          {["About", "Contact", "Terms of Service", "Privacy Policy"].map((item, index) => (
            <a href="#" key={index} className="hover:text-blue-400">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
  
  export default Footer;
  