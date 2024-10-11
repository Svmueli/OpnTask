const Contact = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-indigo-600 p-6">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          We’d love to hear from you! If you have any questions, suggestions, or feedback, feel free to reach out to us using the form below.
        </p>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="p-3 border rounded-lg h-32"></textarea>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
  
  export default Contact;
  