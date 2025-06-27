import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import GroupCard from "./GroupCard";
import noDataAnimation from "../../public/no-group.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const AllGroups = () => {
  const [groups, setGroups] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  // ✅ Fetching groups with filters
  useEffect(() => {
    const url = `http://localhost:4000/groups?search=${search}&category=${category}&sort=${sortBy}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, [search, category, sortBy]);

  return (
    <div className="px-4 pb-10 pt-4">
      <Helmet>
        <title>All Groups | PassionPoint</title>
      </Helmet>

      {/* ✅ Filters Layout */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
        {/* 🔍 Search + Sort Combined Box */}
        <div className="flex items-center bg-white shadow shadow-teal-900 rounded-full px-4 py-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="search bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none flex-grow text-sm placeholder:text-black"
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-sm font-medium text-black outline-none ml-4"
          >
            <option value="">Shots</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
            <option value="startDate">Newest</option>
            <option value="memberCount">Most Members</option>
          </select>

          <button className="ml-4 bg-teal-800 rounded-full p-2">
            <svg
              className="h-4 w-4 text-white"
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
          </button>
        </div>

        {/* 🧭 Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select rounded-full shadow shadow-teal-800 max-w-xs w-full md:w-auto "
        >
          <option value="">Select Hobby Category</option>
          <option value="Drawing & Painting">Drawing & Painting</option>
          <option value="Photography">Photography</option>
          <option value="Video Gaming">Video Gaming</option>
          <option value="Fishing">Fishing</option>
          <option value="Running">Running</option>
          <option value="Cooking">Cooking</option>
          <option value="Reading">Reading</option>
          <option value="Writing">Writing</option>
        </select>
      </div>

      {/* ✅ Group Grid or Empty State */}
      {groups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {groups.map((group, index) => (
            <GroupCard key={group._id} index={index} group={group} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center">
          <Lottie animationData={noDataAnimation} loop className="w-72 h-72" />
          <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-2">
            No groups found.
          </h1>
          <p className="text-lg text-teal-700 mb-4">
            Create a new group to get started and bring people together!
          </p>
          <Link
            to="/dashboard/createGroup"
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
