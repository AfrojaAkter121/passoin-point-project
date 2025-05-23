import React from "react";
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaTag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "framer-motion";
const Feature = ({ group }) => {
  return (
    <motion.div
      className="cursor-pointer bg-white shadow-lg rounded-lg p-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
    >
      <Link
        to={`/groups/${group._id}`}
        className=" bg-teal-800 flex items-center justify-center  rounded-2xl"
      >
        <div className="bg-teal-800 text-white p-6 rounded-lg  w-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white transform rotate-45 translate-x-1/3 -translate-y-1/3 z-0"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="rounded-full border-4 border-white overflow-hidden w-40 h-40">
              <img
                src={group.imageUrl}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-2xl text-black md:text-white md:text-3xl font-bold">
                {group.groupName}
              </h1>
              <p className="text-gray-300 mb-4">⭐⭐⭐⭐</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 bg-gray-800 p-2 rounded">
                  <FaUsers className="text-teal-600" />
                  {group.userName}
                </div>
                <div className="flex items-center gap-2 bg-gray-800 p-2 rounded">
                  <FaCalendarAlt className="text-teal-500" />
                  {group.startDate}
                </div>
                <div className="flex items-center gap-2 bg-gray-800 p-2 rounded">
                  <MdEmail className="text-teal-500" />
                  {group.userEmail}
                </div>
                <div className="flex items-center gap-2 bg-gray-800 p-2 rounded">
                  <FaTag className="text-teal-500" />
                  {group.category}
                </div>
                <div className="col-span-1 sm:col-span-2 flex items-center gap-2 bg-gray-800 p-2 rounded">
                  <FaMapMarkerAlt className="text-red-500" />
                  {group.meetingLocation} Country
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Feature;
