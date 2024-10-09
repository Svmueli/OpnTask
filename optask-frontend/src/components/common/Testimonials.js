const Testimonials = () => (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {["Great platform!", "Helped me find work!", "Amazing experience!"].map((quote, idx) => (
            <blockquote key={idx} className="border border-blue-500 p-4 bg-gray-50 rounded-md w-full md:w-1/3">
              <p className="italic text-gray-800">“{quote}”</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Testimonials;
  