import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { Player } from "@lottiefiles/react-lottie-player";
import newsletterAnim from "../../public/newsLetter.json";
import Swal from "sweetalert2";
// ❌ এই লাইনটা বাদ দাও:
// import { form } from "framer-motion/client";

const NewsletterSignup = () => {
  const formRef = useRef();

  return (
    <section
      data-aos="fade-up"
      className="bg-teal-50 px-6 lg:px-20 border-2 border-teal-200 rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Animation */}
        <div className="flex justify-center">
          <Player
            autoplay
            loop
            src={newsletterAnim}
            style={{ height: "500px", width: "500px" }}
          />
        </div>

        {/* Form */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <MdEmail className="text-teal-800 text-3xl" />
            <h2 className="text-3xl font-bold text-teal-800">Stay Updated!</h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-md">
            Subscribe to get the latest group updates, exclusive events, and inspiring stories from our active communities.
          </p>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              Swal.fire("Subscribed successfully!");
              if (formRef.current) {
                formRef.current.reset();
              }
            }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 w-full sm:w-auto border border-teal-400 rounded-full outline-none focus:ring-2 focus:ring-teal-700"
            />
            <button
              type="submit"
              className="bg-teal-800 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
