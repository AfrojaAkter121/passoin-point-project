import React, { use, useState } from "react";
import { FaGithub, FaSquareFacebook } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import {
  GoogleAuthProvider,
  ProviderId,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validation Rules
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      toast.error("Password must contain at least one lowercase letter.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number.");
      toast.error("password must contain at least one number.");
      return;
    } else {
      setError(""); // Everything is valid
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // save profile info in the db
        fetch("https://passion-point-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name, photo, email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          Swal.fire({
            title: "User Created Success!",
            icon: "success",
            draggable: true,
          });
          navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
        });
      });
  };

  // google sign up

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          title: "Google Signup Success!",
          icon: "success",
          draggable: true,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.message,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen py-16 bg-center bg-cover bg-no-repeat bg-blend-overlay px-3 md:px-0"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/Df2yygdr/cat-9401282-1920.jpg')",
      }}
    >
      <Helmet>
        <title>Register _ PassionPoint</title>
      </Helmet>
      <motion.form
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
        onSubmit={handleSubmit}
        className="flex text-white bg-gradient-to-r from-[#1ad3bd] via-gray-800 to-gray-900 backdrop-blur-lg bg-white/20  border border-white/40 shadow-xl rounded-2xl flex-col gap-4 py-10 px-8 w-lg "
      >
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

        <button
          type="submit"
          className="px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-white via-white to-[#1ad3bd] text-black font-medium shadow-md hover:scale-105 transition-transform"
        >
          Sign Up
        </button>

        <h1 className="text-center text-xl"> Or</h1>

        <button
          type="button"
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
          type="button"
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
          <Link to="/auth/signin" className="text-pink-300 underline">
            Sign in
          </Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
