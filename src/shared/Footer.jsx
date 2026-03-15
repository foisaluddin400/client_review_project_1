import React from "react";


export const Footer = () => {
  return (
 <footer className="bg-[#1A1A1A] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#4A90E2]">TaskMaster</div>

        {/* Links */}
        <ul className="flex flex-wrap gap-6 text-gray-300 text-sm">
          <li className="hover:text-[#4A90E2] cursor-pointer">Features</li>
          <li className="hover:text-[#4A90E2] cursor-pointer">Pricing</li>
          <li className="hover:text-[#4A90E2] cursor-pointer">Testimonials</li>
          <li className="hover:text-[#4A90E2] cursor-pointer">Contact</li>
        </ul>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} TaskMaster. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
