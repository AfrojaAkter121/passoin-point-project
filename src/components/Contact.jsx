import React, { useState } from "react";
import contactAnimation from "../../public/contact.json"; // তোমার লোটি JSON ফাইল
import Lottie from "lottie-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে API call বা form submit করতে পারো
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 bg-gradient-to-br from-white text-gray-900 bg-teal-50 rounded-2xl">
      
      {/* Left side: Animation */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0" data-aos="fade-right">
        <Lottie
          loop
          animationData={contactAnimation}
          play
          style={{ width: 850, height: 550 }}
        />
      </div>

      {/* Right side: Contact Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white p-8 rounded-xl shadow-lg" data-aos="fade-left">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">Get in Touch</h2>
        <p className="mb-6 text-gray-700">
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </p>

        {submitted && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Thank you for contacting me! I will reply shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-teal-700 text-white font-semibold py-3 rounded-md hover:bg-teal-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
