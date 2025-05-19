import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { GrGoogle } from 'react-icons/gr';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div
      className="flex justify-center items-center min-h-screen py-16 bg-center bg-cover bg-no-repeat bg-blend-overlay bg-gradient-to-l from-[#8ce2f8] via-gray-800 to-gray-900"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/N6CYjXQ6/steve-busch-nn-VJjtopahg-unsplash.jpg')",
      }}
    >
      <form className="flex text-white bg-gradient-to-r from-[#8ce2f8] via-gray-800 to-gray-900 backdrop-blur-lg bg-white/20  border border-white/40 shadow-xl rounded-2xl flex-col gap-4 py-10 px-8 w-lg ">
        <h1 className="text-3xl mb-4">Login Your Account</h1>
        <input
          className="bg-gradient-to-l from-[#79e0fa] via-gray-600 to-gray-900 rounded px-4 py-2 focus:outline-none"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="bg-gradient-to-l from-[#79e0fa] via-gray-600 to-gray-900 rounded px-4 py-2  focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
        />
        <a href='#' className="text-sm text-black underline">Forgot password</a>

        <button className="px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-white via-white to-[#0aa8cf] text-black font-medium shadow-md hover:scale-105 transition-transform">
          Log In
        </button>

        <h1 className="text-center text-xl"> Or</h1>

        <button
          className="flex items-center 
          justify-center gap-2 px-4 py-2
           bg-gradient-to-l from-[#79e0fa]
            via-gray-600 to-gray-900 text-white
            rounded-full"
        >
          <FaGithub size={20}></FaGithub>
          Continue with Apple
        </button>
        <button
          className="flex items-center
           justify-center gap-2 px-4
            py-2 bg-gradient-to-l from-[#79e0fa]
             via-gray-600 to-gray-900
             text-white rounded-full"
        >
          <GrGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-sm text-gray-900">
          Already have account?{" "}
          <Link to='/signup' className="text-pink-300 underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
    );
};

export default Login;