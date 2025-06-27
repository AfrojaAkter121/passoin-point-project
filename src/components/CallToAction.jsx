// CallToAction.jsx
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import rocketImg from "../assets/groupe.png"; // তুমি এখান থেকে তোমার image path দাও

const CallToAction = () => {
  return (
    <section className="bg-teal-50 text-teal-800 rounded-2xl border-dotted border-2 border-teal-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* 🖼️ Left Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            src={rocketImg}
            alt="Rocket illustration"
            className="w-72 md:w-96"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* 📣 Right Text & Button */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Ready to Discover <br className="hidden md:block" /> Your <span className="text-lime-600">Passion</span>?
          </h2>
          <p className="mb-6 text-lg text-teal-700">
            Join Passion Point and connect with vibrant hobby groups that share your interests.
          </p>
          <Link
            to="/dashboard/allGroups"
            className="inline-block bg-teal-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-lime-100 hover:text-teal-900 transition duration-300"
          >
            Join a Group Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
