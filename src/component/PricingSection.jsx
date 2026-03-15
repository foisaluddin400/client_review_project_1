import React from "react";

const plans = [
  { name: "Basic", price: "$9/month", description: "Personal use, up to 50 tasks", highlight: false },
  { name: "Pro", price: "$19/month", description: "Team collaboration, unlimited tasks", highlight: true },
  { name: "Enterprise", price: "$49/month", description: "Advanced analytics, priority support", highlight: false },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-1 p-8 rounded-lg shadow-md border ${
                plan.highlight ? "border-[#4A90E2] bg-white scale-105" : "bg-white"
              } transition transform hover:scale-105`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <button className={`w-full py-3 rounded-lg font-medium ${
                plan.highlight ? "bg-[#4A90E2] text-white" : "bg-gray-200 text-gray-800"
              } hover:opacity-90 transition`}>
                Choose Your Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;