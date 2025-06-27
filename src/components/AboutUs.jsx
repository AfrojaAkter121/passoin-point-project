import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import aboutImg1 from "../assets/groupe.png"; // Replace with your actual image
import aboutImg2 from "../assets/WhatsApp Image 2025-06-15 at 23.21.44_c90ec495.jpg";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaDatabase,
  FaServer,
} from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skills = [
    {
      name: "HTML",
      description: "Markup language for structuring web content.",
      icon: <FaHtml5 className="text-orange-600" />,
    },
    {
      name: "CSS",
      description:
        "Styling language to make web pages beautiful and responsive.",
      icon: <FaCss3Alt className="text-blue-600" />,
    },
    {
      name: "JavaScript",
      description:
        "Programming language for dynamic and interactive web experiences.",
      icon: <FaJsSquare className="text-yellow-500" />,
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces.",
      icon: <FaReact className="text-cyan-500" />,
    },
    {
      name: "MongoDB",
      description: "NoSQL database for storing flexible, JSON-like documents.",
      icon: <FaDatabase className="text-green-600" />,
    },
    {
      name: "Express",
      description: "Minimal and flexible Node.js web application framework.",
      icon: <FaServer className="text-gray-700" />,
    },
  ];

  return (
    <div className="px-6 md:px-20 py-10 bg-gradient-to-br text-gray-800">
      <h1
        className="text-4xl font-bold text-center mb-12 text-teal-700"
        data-aos="fade-down"
      >
        About Passion Point
      </h1>

      {/* Section 1: About Passion Point */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src={aboutImg1}
          alt="Passion"
          className="rounded-2xl shadow-lg"
          data-aos="zoom-in-right"
        />
        <div data-aos="fade-left">
          <h2 className="text-2xl font-semibold mb-4">
            What is Passion Point?
          </h2>
          <p className="text-lg leading-relaxed">
            Passion Point is a platform where people can create or join
            passion-based groups, share their skills, and collaborate with
            like-minded individuals. Whether it's hobbies, learning, or
            communities – this is the perfect place to grow and connect.
          </p>
        </div>
      </div>

      {/* Section 2: About Developer */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold mb-4">Meet the Developer</h2>
          <p className="text-lg leading-relaxed">
            Hi, I'm{" "}
            <span className="font-bold text-teal-600">Afroja Akter</span> – a
            passionate and creative Frontend Developer. I love building
            beautiful and functional web apps using modern technologies like
            React and Tailwind CSS. I enjoy learning and sharing my skills with
            others.
          </p>
          <p className="mt-4">
            📧 <span className="text-teal-600">afrojaakter121@gmail.com</span>
          </p>
        </div>
        <img
          src={aboutImg2}
          alt="Afroja"
          className="rounded-2xl shadow-lg"
          data-aos="zoom-in-left"
        />
      </div>

      {/* Section 3: Skills */}
      {/* Skills Section */}
      <section data-aos="fade-up" className="mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map(({ name, description, icon }, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                {icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
