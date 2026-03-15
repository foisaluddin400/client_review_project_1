import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icon

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-[#4A90E2]">
          TaskMaster
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li className="cursor-pointer hover:text-[#4A90E2] transition">Features</li>
          <li className="cursor-pointer hover:text-[#4A90E2] transition">Pricing</li>
          <li className="cursor-pointer hover:text-[#4A90E2] transition">Testimonials</li>
          <li className="cursor-pointer hover:text-[#4A90E2] transition">Contact</li>
        </ul>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <button className="bg-[#4A90E2] text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <HiX className="w-6 h-6 text-[#4A90E2]" />
            ) : (
              <HiMenu className="w-6 h-6 text-[#4A90E2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 px-6 py-4 text-gray-600 font-medium">
            <li className="cursor-pointer hover:text-[#4A90E2] transition" onClick={toggleMenu}>Features</li>
            <li className="cursor-pointer hover:text-[#4A90E2] transition" onClick={toggleMenu}>Pricing</li>
            <li className="cursor-pointer hover:text-[#4A90E2] transition" onClick={toggleMenu}>Testimonials</li>
            <li className="cursor-pointer hover:text-[#4A90E2] transition" onClick={toggleMenu}>Contact</li>
            <li>
              <button className="w-full bg-[#4A90E2] text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};