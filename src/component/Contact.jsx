import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white p-8 rounded-lg shadow-md"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows="5"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
          />
          <button
            type="submit"
            className="bg-[#4A90E2] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;