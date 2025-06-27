import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith("/auth/signin");
  const isRegister = location.pathname.startsWith("/auth/signup");

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
    }
  }, [darkMode]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success(`${user.displayName} Logout Success!`, {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const links = (
    <div className="flex flex-col items-center md:flex-row gap-6 text-lg px-6 py-2">
      {["/", "/about", "/upComing", "/contact"].map((path, idx) => {
        const labels = ["Home", "About Us", "Upcoming Event", "Contact"];
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "border-b-2 text-center text-white bg-teal-600 px-3 py-1 rounded-lg"
                : `${
                    isLoginPage || isRegister ? "text-white" : "text-teal-600"
                  } font-semibold`
            }
          >
            {labels[idx]}
          </NavLink>
        );
      })}

      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-center text-white bg-teal-600 px-3 py-1 rounded-lg"
              : `${
                  isLoginPage || isRegister ? "text-white" : "text-teal-600"
                } font-semibold`
          }
        >
          Dashboard
        </NavLink>
      )}
    </div>
  );

  return (
    <nav
      className={`sticky top-0 z-50 py-3 transition-all duration-300 
        ${isLoginPage || isRegister
          ? "bg-black"
          : darkMode
          ? "bg-[#121212]"
          : "bg-white"}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <HiOutlineSparkles size={40} className="text-3xl text-teal-700" />
          </motion.div>
          <h1
            className={`text-2xl font-semibold bg-gradient-to-r from-[#7d8885] to-[#0ea899] bg-clip-text text-transparent`}
          >
            PassionPoint
          </h1>
        </div>

        {/* NavLinks (Desktop) */}
        <div className="hidden md:flex items-center justify-center">
          {links}
        </div>

        {/* Right Side - Profile or Login */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover cursor-pointer"
                />
                <div
                  className={`absolute top-12 left-0 ${
                    !darkMode ? "bg-gray-100 text-black" : "bg-white text-black"
                  } px-2 py-1 rounded shadow hidden group-hover:block z-50`}
                >
                  {user.displayName}
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] text-white px-5 py-2 rounded-full font-semibold"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth/signin"
              className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] text-white px-5 py-2 rounded-full font-semibold"
            >
              Login
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            className="text-2xl ml-2"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞" : "🌜"}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 px-4 flex flex-col gap-4 font-semibold">
          {links}
          <div className="flex flex-col gap-2">
            {user ? (
              <div className="flex items-center gap-4">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span>{user.displayName}</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] text-white px-5 py-2 rounded-full font-semibold"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth/signin"
                className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] text-white px-5 py-2 rounded-full font-semibold"
              >
                Login
              </Link>
            )}
          </div>
          {/* Dark Mode Toggle (Mobile) */}
          <button
            className="text-2xl w-fit mt-2"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "🌞" : "🌜"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
