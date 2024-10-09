const Features = () => (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["AI-Powered Matching", "Global Reach", "Secure Payments"].map((feature, idx) => (
            <div key={idx} className="p-6 bg-white shadow-md rounded-md text-center">
              <h3 className="font-semibold text-lg mb-2">{feature}</h3>
              <p className="text-gray-600">Brief description of the feature.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Features;
  