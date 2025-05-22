import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { GrGoogle } from 'react-icons/gr';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase.config';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const {loginUser} = use(AuthContext)
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    loginUser(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(`${location.state ? location.state: '/'}`);
      Swal.fire({
        title: "Login Success!",
        icon: "success",
        draggable: true
      });
    }).catch((err => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }))
  }

  // google sign in

  const handleGoogleSignIn = () => {


    signInWithPopup(auth, provider)
    .then(() => {
      Swal.fire({
        title: "Google Login Success!",
        icon: "success",
        draggable: true
      });
      navigate(`${location.state ? location.state: '/'}`);
    }).catch(err => {
      console.error("❌ Google Sign-In Error", err); 
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
          "url('https://i.ibb.co/ymyTfLHx/gustavo-zambelli-JMK4lyhn-GM-unsplash.jpg)",
      }}
    >
      <Helmet>
        <title>Log In _ PassionPoint</title>
      </Helmet>
      <form onSubmit={handleSubmit} className="flex text-white bg-gradient-to-r from-[#1ad3bd] via-gray-800 to-gray-900 backdrop-blur-lg bg-white/20  border border-white/40 shadow-xl rounded-2xl flex-col gap-4 py-10 px-8 w-lg ">
        <h1 className="text-3xl mb-4">Login Your Account</h1>
        <input
          className="bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 rounded px-4 py-2 focus:outline-none"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 rounded px-4 py-2  focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
        />
        <a href='#' className="text-sm text-black underline">Forgot password</a>

        <button className="px-6 py-3 mt-8 rounded-full bg-gradient-to-r from-white via-white to-[#1ad3bd] text-black font-medium shadow-md hover:scale-105 transition-transform">
          Log In
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
          <Link to='/auth/signup' className="text-pink-300 underline">
            Sign Up
          </Link>
        </p>
      </form>

    </div>
    );
};

export default Login;