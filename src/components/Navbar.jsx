import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { MdLightMode } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut, darkMode, setDarkMode } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const isLoginPage = location.pathname.startsWith('/auth/signin')
  const isRegister = location.pathname.startsWith('/auth/signup')


  useEffect(() => {
    if(darkMode){
      document.body.style.backgroundColor = "#121212 ";
      document.body.style.color = "white";
    }else{
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  },[darkMode])


  const handleLogout = () => {
      logOut().then(() => {
        toast.success(`${user.displayName} Logout Success!`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }).catch(err => {
        toast.error(err.message)
      })
  };
  const links = (
    <div className="flex flex-col md:flex-row gap-8 text-lg px-8 py-2">
    
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `border-b-2 text-center text-white bg-teal-600 w-30 h-8 font-semibold rounded-lg`
            : ` ${isLoginPage || isRegister ? 'text-white' : ' text-teal-600'} font-semibold`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/myGroups"
        className={({ isActive }) =>
          isActive
            ? `border-b-2 text-center text-white bg-teal-600 w-30 h-8 font-semibold rounded-lg`
            : ` ${isLoginPage || isRegister ? 'text-white' : ' text-teal-600'} font-semibold`
        }
      >
        My Groups
      </NavLink>
      <NavLink
        to="/createGroup"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive
            ? `border-b-2 text-center text-white bg-teal-600 w-30 h-8 font-semibold rounded-lg`
            : ` ${isLoginPage || isRegister ? 'text-white' : ' text-teal-600'} font-semibold`
        }
      >
        Create Group
      </NavLink>
      <NavLink
        to="/allGroups"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          isActive
            ? `border-b-2 text-center text-white bg-teal-600 w-30 h-8 font-semibold rounded-lg`
            : ` ${isLoginPage || isRegister ? 'text-white' : ' text-teal-600'} font-semibold`
        }
      >
        All Group
      </NavLink>
    </div>
  );

  return (
    <nav
      className="px-4 py-3"
     
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2 ">
          <img
            src="https://i.ibb.co/4w7F3s7L/gradient-hub-logo-design-23-2149872182.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <h1 className={`text-2xl font-semibold ${isLoginPage || isRegister ? 'bg-gradient-to-r from-[#e0e9e6] to-[#61dacd] bg-clip-text': 'bg-gradient-to-r from-[#7d8885] to-[#0ea899] bg-clip-text'} bg-gradient-to-r from-[#7d8885] to-[#0ea899] bg-clip-text text-transparent`}>
            PassionPoint
          </h1>
        </div>

        {/* Center: NavLinks */}
        <div className="hidden md:flex gap-6 font-bold items-center justify-center">
          {links}
        </div>

        {/* Right: User Login/Logout */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative group flex items-center">
            {user ? (
              <div className="flex">
                <img
                   src={user.photoURL}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-5 cursor-pointer object-cover"
                />
                <div className={`absolute top-12 left-0 ${!darkMode ? "bg-gray-100" : "text-black bg-white"}  p-2 rounded shadow hidden group-hover:block`}>
                  {user.displayName}
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] font-semibold shadow-xl text-white px-6 py-2 w-30 h-12 text-lg text-center rounded-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth/signin"
                className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] font-semibold shadow-xl text-white px-6 py-2 w-30 h-12 text-lg text-center rounded-full"
              >
                Login
              </Link>
            )}
          </div>

           {/* Dark Mode Toggle */}
        <div>
          <button  className="flex items-center text-2xl" onClick={()=> setDarkMode(!darkMode)}>
            {
              darkMode ? '🌞sf'  :  '🌜sdfds ' 
            }
          </button>
        </div>

        </div>


        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden font-semibold flex flex-col gap-4 mt-4">
          {links}

          <div className="flex flex-col gap-2">
           
            {
              user ? (
                <div className="flex">
                   <div className="flex group">
                <img
                   src={user.photoURL}
                  alt="Profile"
                  className="w-12 h-12 rounded-full mr-5 cursor-pointer object-cover"
                />
                <div className="absolute top-12 left-0 bg-gray-100 p-2 rounded shadow hidden group-hover:block">
                  {user.displayName}
                </div>
                </div>
                <button
              onClick={() => (handleLogout(), setIsOpen(false))}
              className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] font-semibold shadow-xl text-white px-6 py-2 rounded-full"
            >
              Logout
            </button>
                </div>
                 
              ) : (
                <Link
            to="/auth/signin"
            className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] font-semibold shadow-xl text-white px-6 py-2 rounded-full"
          >
            Login
          </Link>
              )
            }
            
          </div>

          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
