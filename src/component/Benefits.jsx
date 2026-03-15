import React from "react";

const benefits = [
  "Save time and increase productivity.",
  "Simplify team collaboration.",
  "Real-time insights with powerful analytics.",
  "Secure cloud-based platform.",
  "Easy to use and beginner-friendly interface.",
];

const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Choose Us</h2>
        <ul className="space-y-4 text-gray-700 text-lg md:text-xl">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-[#4A90E2] font-bold">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;