import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const GroupCard = ({ group }) => {
  return (
    <motion.div
      className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-80 h-[460px] bg-white border border-gray-300 rounded-lg shadow-md flex flex-col items-center justify-start relative overflow-hidden font-sans transition-transform duration-300 hover:scale-105 border-2 border-teal-800">
        {/* Top red bars */}
        <div className="absolute top-0 left-0 w-full px-3 pt-3">
          <div className="bg-teal-800 text-white text-sm font-bold px-4 py-2 w-fit rounded-full">
            {group.category}
          </div>
          <div className="bg-teal-800 h-4 mt-3 w-[70%] h-[20px] rounded-full"></div>
        </div>

        {/* Group Image */}
        <div className="mt-24 mb-4 border-[6px] border-teal-800 rounded-full p-1">
          <img
            src={group.imageUrl}
            alt={group.groupName}
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Group Info */}
        <div className="text-center px-4 ">
          <h2 className="text-lg font-semibold text-gray-800">
            {group.groupName}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Location: {group.meetingLocation}
          </p>
          <p className="text-sm text-gray-600">Start: {group.startDate}</p>
          <p className="text-sm text-gray-600">
            Max Members: {group.maxMembers}
          </p>
          <p className="text-sm text-gray-600">Organizer: {group.userName}</p>
        </div>

        {/* Bottom red bars and See More */}
        <div className="absolute bottom-5 w-full px-3 pt-8 flex flex-col justify-end items-end">
          <div className="bg-teal-800 h-[20px] w-[70%] rounded-full mt-7 mb-3"></div>
          <Link
            to={`/groups/${group._id}`}
            className="bg-teal-800 w-[50%] rounded-full text-white py-2 px-3  flex justify-center items-center gap-2"
          >
            See More <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default GroupCard;
