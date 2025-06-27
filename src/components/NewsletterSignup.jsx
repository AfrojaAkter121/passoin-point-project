import React, { useRef } from "react";
import { MdEmail } from "react-icons/md";
import { Player } from "@lottiefiles/react-lottie-player";
import newsletterAnim from "../../public/newsLetter.json";
import Swal from "sweetalert2";

const NewsletterSignup = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Subscribed!",
      text: "You have successfully subscribed to our newsletter.",
      icon: "success",
      confirmButtonText: "Great",
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <section
      data-aos="fade-up"
      className="bg-teal-50 px-4 sm:px-8 md:px-20 py-10 border-2 border-teal-200 rounded-2xl shadow-lg"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Animation */}
        <div className="flex justify-center">
          <Player
            autoplay
            loop
            src={newsletterAnim}
            style={{ height: "300px", width: "300px" }}
            className="sm:h-400 sm:w-400 md:h-500 md:w-500"
          />
        </div>

        {/* Form */}
        <div className="text-center md:text-left px-4 md:px-0">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <MdEmail className="text-teal-800 text-4xl sm:text-5xl" />
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-800">
              Stay Updated!
            </h2>
          </div>
          <p className="text-gray-600 mb-6 max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Subscribe to get the latest group updates, exclusive events, and
            inspiring stories from our active communities.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 max-w-md mx-auto md:mx-0"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 w-full sm:w-auto border border-teal-400 rounded-full outline-none focus:ring-2 focus:ring-teal-700 transition"
            />
            <button
              type="submit"
              className="bg-teal-800 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all duration-300 w-full sm:w-auto"
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
