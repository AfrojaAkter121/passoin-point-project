import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router"; // ✅ ঠিক করলাম
import GroupCard from "./GroupCard";
import noDataAnimation from "../../public/no-group.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const AllGroups = () => {
  const [search, setSearch] = useState("");
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch(`https://passion-point-server.vercel.app/groups?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, [search]);

  const sortGroupe = groups.sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  return (
    <div className="px-4 py-10">
      <Helmet>
        <title>All Groups | PassionPoint</title>
      </Helmet>


    <label className="flex items-center border-2 border-teal-600 rounded mb-7 px-3 py-1 focus-within:border-teal-800 max-w-sm">
      <svg
        className="h-4 w-4 opacity-50 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-grow bg-transparent border-none focus:outline-none text-sm"
      />
    </label>



      {/* Groups Grid */}
      {groups.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortGroupe.map((group, index) => (
            <GroupCard key={group._id} index={index} group={group} />
          ))}
        </div>
      )}

      {/* No Groups Message */}
      {groups.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center">
          <Lottie
            animationData={noDataAnimation}
            loop={true}
            className="w-72 h-72" // Responsive size
          />
          <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-2">
            No groups found.
          </h1>
          <p className="text-lg text-teal-700 mb-4">
            Create a new group to get started and bring people together!
          </p>
          <Link
            to="/createGroup"
            className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-lg font-semibold transition"
          >
            Create New Group →
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllGroups;
