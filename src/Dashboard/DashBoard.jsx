import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router";
import {
  FaUsers,
  FaPlusCircle,
  FaThList,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../Context/AuthProvider";
import { HiOutlineSparkles } from "react-icons/hi";
import Swal from "sweetalert2";
import DashboardTopBar from "./DashboardTopBar";

const DashBoard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { to: "/dashboard/myGroups", label: "My Groups", icon: <FaUsers /> },
    {
      to: "/dashboard/createGroup",
      label: "Create Group",
      icon: <FaPlusCircle />,
    },
    { to: "/dashboard/allGroups", label: "All Groups", icon: <FaThList /> },
  ];

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Logout success", user.displayName);
      })
      .catch((err) => console.error(err.message));
  };

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 },
    exit: { x: "-100%" },
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ----------------- Small Screen Top Navbar ----------------- */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-teal-800 text-white px-4 py-3 z-40 flex justify-between items-center">
        <h1 className="text-xl font-bold">PassionPoint</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* ----------------- Sidebar ----------------- */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-teal-800 z-50 shadow-lg p-4 flex flex-col gap-4 md:hidden"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {/* Brand */}
              <div className="">
                <div className="flex items-center gap-2 mb-">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "linear",
                    }}
                    className="inline-block w-[30px] h-[30px]"
                  >
                    <HiOutlineSparkles className="text-white w-full h-full" />
                  </motion.div>

                  <h1 className="text-2xl text-white font-semibold">
                    PassionPoint
                  </h1>
                </div>

                {/* Nav Items */}
                <nav className="space-y-2 mt-10">
                  {navItems.map((item, i) => (
                    <NavLink
                      key={i}
                      to={item.to}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-white/20 ${
                          isActive
                            ? "bg-white text-teal-700 font-bold"
                            : "text-white"
                        }`
                      }
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </nav>
              </div>

              {/* Bottom Section */}
              <div className="mt-auto space-y-2 border-t pt-4 text-white">
                <button className="flex items-center gap-3 px-4 py-2 w-full rounded hover:bg-white/20">
                  <FaUserCircle />
                  Profile
                </button>
                <button className="flex items-center gap-3 px-4 py-2 w-full rounded hover:bg-white/20">
                  <FaCog />
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-2 w-full rounded bg-red-100 text-red-700 hover:bg-red-200 "
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ----------------- Sidebar for Large Screen ----------------- */}
      <div className="hidden md:flex flex-col w-64 bg-teal-800 text-white  justify-between p-4 pr-7 rounded-r-3xl">
        <div>
          <div className="flex items-center gap-2 mb-6">
          <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "linear",
                    }}
                    className="inline-block w-[30px] h-[30px]"
                  >
                    <HiOutlineSparkles className="text-white w-full h-full" />
                  </motion.div>
            <h1 className="text-2xl font-semibold">PassionPoint</h1>
          </div>
          <nav className="space-y-2 mt-7">
            {navItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-white/20 ${
                    isActive ? "bg-white text-teal-700 font-bold hover:text-white" : "text-white "
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="space-y-2 border-t pt-4 mt-4 text-white">
          <button className="flex items-center gap-3 px-4 py-2 w-full rounded hover:bg-white/20">
            <FaUserCircle />
            Profile
          </button>
          <button className="flex items-center gap-3 px-4 py-2 w-full rounded hover:bg-white/20">
            <FaCog />
            Settings
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-2 w-full rounded bg-red-100 text-red-700 hover:bg-red-200"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* ----------------- Main Outlet Content ----------------- */}
      <div className="flex-1 overflow-y-auto pt-[60px] md:pt-0 px-4 py-4 bg-teal-50 dark:bg-gray-800">
            <DashboardTopBar user={user}></DashboardTopBar>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
