import { FaHome, FaInfoCircle, FaEnvelope, FaTachometerAlt, FaBell } from "react-icons/fa";
import { Link } from "react-router";

const DashboardTopBar = ({ user }) => {
  return (
    <div className="hidden md:flex justify-between items-center px-6 py-4 bg-teal-800 rounded-xl shadow-sm mt-2 mx-3">
      
      {/* Left: Home, About, Contact Us icons */}
      <div className="flex items-center gap-6">
        <Link to='/' title="Home" className="text-teal-900 bg-teal-50 rounded-full p-3 text-lg">
          <FaHome />
        </Link>
        <button title="About" className="text-teal-900 bg-teal-50 rounded-full p-3 text-lg">
          <FaInfoCircle />
        </button>
        <button title="Contact Us" className="text-teal-900 bg-teal-50 rounded-full p-3 text-lg">
          <FaEnvelope />
        </button>
      </div>

      {/* Center: Dashboard icon + text */}
      <div className="flex items-center gap-2 text-teal-50 font-semibold text-2xl">
        <FaTachometerAlt />
        <span>Dashboard</span>
      </div>

      {/* Right: User info + notification icons */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-sm text-gray-100">{user?.displayName}</p>
          <p className="text-xs text-teal-50">{user?.email}</p>
        </div>
       
        <button className="text-teal-900 bg-teal-50 rounded-full p-3 text-lg">
          <FaBell className="" />
        </button>
        <div className="flex items-center gap-2">
          <img
            src={user?.photoURL || "/default-avatar.png"}
            alt="avatar"
            className="w-10 h-10 rounded-full border-2 border-teal-50"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardTopBar;
