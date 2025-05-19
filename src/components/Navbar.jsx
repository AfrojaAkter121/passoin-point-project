import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  // const { user,logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    //   logOut().then(() => {
    //     toast.success(`${user.displayName} Logout Success!`, {
    //       position: "bottom-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: false,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "dark",
    //       transition: Bounce,
    //       });
    //   }).catch(err => {
    //     console.log(err)
    //   })
  };
  const links = <div className="flex flex-col md:flex-row gap-8 text-lg px-8 py-2">
    <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 text-black border-black" : "text-black"
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "border-b-2 text-black border-black" : "text-black"
            }
          >
            My Profile
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "border-b-2 text-black border-black" : "text-black"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "border-b-2 text-black border-black" : "text-black"
            }
          >
            Blogs
          </NavLink>
  </div>

  return (
    <nav
      className="px-4 mb-10
     
        py-3" 
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/YvbM15b/images.png"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#363a39] to-[#0ea899] bg-clip-text text-transparent">PassionPoint</h1>
        </div>

        {/* Center: NavLinks */}
        <div className="hidden md:flex gap-6 font-bold items-center justify-center">
          {links}
        </div>

        {/* Right: User Login/Logout */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative group flex items-center">
            <img
              //    src={user.photoURL}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-5 cursor-pointer object-cover"
            />
            <div className="absolute top-12 left-0 bg-gray-100 p-2 rounded shadow hidden group-hover:block">
              {/* {user.displayName} */}
            </div>
            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] font-semibold shadow-xl text-white px-6 py-2 w-30 h-12 text-lg text-center rounded-full"
            >
              Logout
            </button>
          </div>

          <Link
            to="/signin"
            className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] font-semibold shadow-xl text-white px-6 py-2 w-30 h-12 text-lg text-center rounded-full"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
            <img
              //    src={user.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            {/* <p>{user.displayName}</p> */}
            <button
              onClick={() => (handleLogout(), setIsOpen(false))}
              className="bg-black font-semibold text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>

          <Link
            to="/auth/login"
             className="bg-gradient-to-r from-[#262727] to-[#1ad3bd] font-semibold shadow-xl text-white px-6 py-2 rounded-full"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
