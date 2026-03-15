import React from "react";
import { FaTasks, FaUsers, FaChartLine, FaBell, FaCloud } from "react-icons/fa";

const features = [
  {
    icon: <FaTasks className="w-6 h-6 text-[#4A90E2]" />,
    title: "Easy Task Management",
    description: "Create, edit, and delete tasks in seconds.",
  },
  {
    icon: <FaUsers className="w-6 h-6 text-[#4A90E2]" />,
    title: "Team Collaboration",
    description: "Share tasks and assign roles for smooth teamwork.",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-[#4A90E2]" />,
    title: "Analytics & Reporting",
    description: "Track progress with visual reports and charts.",
  },
  {
    icon: <FaBell className="w-6 h-6 text-[#4A90E2]" />,
    title: "Notifications & Reminders",
    description: "Never miss deadlines with automatic reminders.",
  },
  {
    icon: <FaCloud className="w-6 h-6 text-[#4A90E2]" />,
    title: "Cloud Sync",
    description: "Access your tasks anywhere, anytime.",
  },
];

const ProductFeatures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;