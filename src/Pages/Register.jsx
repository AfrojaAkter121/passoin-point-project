import React, { use, useState } from "react";
import { FaGithub, FaSquareFacebook } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { ProviderId, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { Bounce, } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  const {createUser, setUser} = use(AuthContext)
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

     // Validation Rules
     if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    } else {
      setError(""); // Everything is valid
    }


    createUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      updateProfile(auth.currentUser , {
        displayName:name,
        photoURL:photo
      }).then(()=> {
        setUser({...user, displayName:name, photoURL:photo})
        Swal.fire({
          title: "User Created Success!",
          icon: "success",
          draggable: true
        });
        navigate("/");
      })
    }).catch((err => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }))
  }

   // google sign up

   const handleGoogleSignIn = () => {


    signInWithPopup(auth, ProviderId)
    .then(() => {
      Swal.fire({
        title: "Google Signup Success!",
        icon: "success",
        draggable: true
      });
      navigate(`${location.state ? location.state: '/'}`);
    }).catch(err => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    })
  }
  

  return (
    <div
      className="flex justify-center items-center min-h-screen py-16 bg-center bg-cover bg-no-repeat bg-blend-overlay "
      style={{
        backgroundImage:
          "url('https://i.ibb.co/ymyTfLHx/gustavo-zambelli-JMK4lyhn-GM-unsplash.jpg')",
      }}
    >
      <form onSubmit={handleSubmit} className="flex text-white bg-gradient-to-r from-[#1ad3bd] via-gray-800 to-gray-900 backdrop-blur-lg bg-white/20  border border-white/40 shadow-xl rounded-2xl flex-col gap-4 py-10 px-8 w-lg ">
        <h1 className="text-3xl">Register Your Account</h1>

        <input
          className="bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 rounded px-4 py-2 focus:outline-none"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 rounded px-4 py-2  focus:outline-none"
          type="text"
          name="photo"
          placeholder="Photo URL"
        />
        <input
          className="bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 rounded px-4 py-2 focus:outline-none"
          type="email"
          name="email"
          placeholder="Your Email Address"
        />
        <input
          className="bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 rounded px-4 py-2  focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
        />
        <p className="text-sm text-red-500">{error}</p>

        <button className="px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-white via-white to-[#1ad3bd] text-black font-medium shadow-md hover:scale-105 transition-transform">
          Sign Up
        </button>

        <h1 className="text-center text-xl"> Or</h1>

        <button
          className="flex items-center 
          justify-center gap-2 px-4 py-2
           bg-gradient-to-l from-[#68fced]
            via-gray-600 to-gray-900 text-white
            rounded-full"
        >
          <FaGithub size={20}></FaGithub>
          Continue with Github
        </button>
        <button
        onClick={handleGoogleSignIn}
          className="flex items-center
           justify-center gap-2 px-4
            py-2 bg-gradient-to-l from-[#68fced]
             via-gray-600 to-gray-900
             text-white rounded-full"
        >
          <GrGoogle size={20} />
          Continue with Google
        </button>

        <p className="text-sm text-gray-900">
          Already have account?{" "}
          <Link to='/auth/signin' className="text-pink-300 underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
