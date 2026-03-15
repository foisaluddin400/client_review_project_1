import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-[#4A90E2] text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start organizing your tasks today!
        </h2>
        <button className="bg-white text-[#4A90E2] font-semibold px-8 py-4 rounded-lg shadow-md hover:opacity-90 transition">
          Get Started for Free
        </button>
        <p className="text-white/80 mt-3">No credit card required.</p>
      </div>
    </section>
  );
};

export default CallToAction;