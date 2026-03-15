import React from "react";
import heroImage from "../assets/Home/image1.jpg"; // replace with your image path

const HeroSection = () => {
  return (
    <section className="bg-[#4A90E2] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Manage Tasks Like a Pro
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Easily organize, track, and collaborate on your daily tasks.
          </p>
          <button className="bg-white text-[#4A90E2] font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition">
            Get Started for Free
          </button>
          <p className="text-sm mt-3 text-white/80">
            No credit card required.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Dashboard Illustration"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;