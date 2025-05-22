import React, { useContext } from "react";
import {
  FaSwimmer,
  FaBiking,
  FaBasketballBall,
  FaFutbol,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../Context/AuthProvider";

export default function HobbyHeader() {
  const { darkMode } = useContext(AuthContext);
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-10 md:py-20 max-w-7xl mx-auto">
      {/* Left text content */}
      <div className="max-w-xl">
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
        <p className={`${!darkMode ? "text-gray-600" : "text-white"} mb-6`}>
          At HobbyHub, we believe that hobbies aren’t just pastimes—they’re
          gateways to discovery, creativity, and meaningful connections.
        </p>
        <p className={`${!darkMode ? "text-gray-600" : "text-white"} mb-6`}>
          Whether you're a seasoned enthusiast or a curious beginner, HobbyHub
          is the place to explore new interests, connect with like-minded
          individuals, and showcase your passion projects.
        </p>
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
      <div className="relative mt-12 md:mt-0 w-full md:w-1/2 flex justify-center items-center">
        {/* Icons */}
        <FaSwimmer
          size={30}
          className="absolute top-0 left-20 text-gray-400 text-xl"
        />
        <FaBasketballBall
          size={30}
          className="absolute top-0 right-10 text-gray-400 text-xl"
        />
        <FaFutbol
          size={30}
          className="absolute bottom-20 left-12 text-gray-400 text-xl"
        />
        <FaBiking
          size={20}
          className="absolute bottom-10 right-14 text-gray-400 text-xl"
        />

        {/* Images */}
        <div className="relative w-[380px] h-[380px]">
          <img
            src="https://i.ibb.co/1G3pfGXY/kid-1241817-1280.jpg"
            alt="Golf"
            className="rounded-full border-4 border-white shadow-lg w-[220px] h-[220px] object-cover absolute top-0 left-1/2 -translate-x-1/2"
          />
          <img
            src="https://i.ibb.co/CKmR0Hpy/photographer-407068-1280.jpg"
            alt="Football"
            className="rounded-full border-4 border-white shadow-lg w-[200px] h-[200px] object-cover absolute top-[100px] right-0"
          />
          <img
            src="https://i.ibb.co/v6wD4s6j/read-1342499-1280.jpg"
            alt="Cycling"
            className="rounded-full border-4 border-white shadow-lg w-[180px] h-[180px] object-cover absolute bottom-0 left-10"
          />
        </div>
      </div>
    </section>
  );
}
