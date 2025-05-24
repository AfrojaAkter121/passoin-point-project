import React, { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Context/AuthProvider";
import { Slide } from "react-awesome-reveal";
import CustomSlider from "./CustomSlider";

export default function HobbyHeader() {
  const { darkMode } = useContext(AuthContext);
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:py-20 max-w-7xl mx-auto">
      {/* Left text content */}
      <div className="max-w-xl w-1/2">
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
        <div className="">
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
        </div>
        <div className="flex gap-4">
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
      <CustomSlider></CustomSlider>
    </section>
  );
}
