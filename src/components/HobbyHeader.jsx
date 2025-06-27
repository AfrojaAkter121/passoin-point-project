import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Context/AuthProvider";
import { Slide } from "react-awesome-reveal";
import CustomSlider from "./CustomSlider";

export default function HobbyHeader() {
  const { darkMode } = useContext(AuthContext);
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 mt-10 max-w-7xl mx-auto">
      {/* Left text content */}
      <div className="w-full md:w-1/2 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your Gateway to <br />
          <span className="text-teal-600">
            <Typewriter
              words={["Passion", "Creativity", "Connection", "Growth", "Fun"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <Slide direction="up" cascade damping={0.1} triggerOnce>
          <p className={`${!darkMode ? "text-gray-600" : "text-white"} mb-6`}>
            At HobbyHub, we believe that hobbies aren’t just pastimes—they’re
            gateways to discovery, creativity, and meaningful connections.
          </p>
          <p className={`${!darkMode ? "text-gray-600" : "text-white"} mb-6`}>
            Whether you're a seasoned enthusiast or a curious beginner, HobbyHub
            is the place to explore new interests, connect with like-minded
            individuals, and showcase your passion projects.
          </p>
        </Slide>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-teal-700 hover:bg-teal-400 text-white px-6 py-2 rounded-md">
            Get Started
          </button>
          <button
            className={`${
              !darkMode ? "text-gray-600" : "text-white"
            } hover:underline font-medium hidden md:block`}
          >
            Discover new hobbies …
          </button>
        </div>
      </div>

      {/* Right image collage */}
      <div className="w-full md:w-1/2 mt-20 md:mt-0">
        <CustomSlider />
      </div>
    </section>
  );
}
