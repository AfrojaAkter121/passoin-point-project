import React, { useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { PiArrowUpRight } from "react-icons/pi";
import { Link, useLoaderData } from "react-router";
import noDataAnimation from "../../public/no-active.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const UpComingEvent = () => {
  const groups = useLoaderData();
  const upcomingEvents = useMemo(
    () =>
      groups
        .filter(
          (g) =>
            new Date(g.startDate).setHours(0, 0, 0, 0) >=
            new Date().setHours(0, 0, 0, 0)
        )
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        .slice(0, 6),
    [groups]
  );

  return (
    <div>
      <h2 className="text-3xl font-bold text-teal-700 mb-2 text-center my-14">
        Upcoming Events
      </h2>
      <p className=" max-w-xl text-center mx-auto">
        Discover exciting hobby group events happening this week! Join
        workshops, meet like-minded people, and explore your passions—don't miss
        out on the fun.
      </p>

      {upcomingEvents.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center">
          <Lottie
            animationData={noDataAnimation}
            loop={true}
            className="w-80 h-80"
          />
          <p className="text-green-700 text-lg mt-4">
            {" "}
            No Upcoming Event Group
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-10 p-5">
        {upcomingEvents.map((event) => (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
            key={event._id}
            className="bg-teal-800 rounded-lg cursor-pointer shadow-lg p-4"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full font-sans">
              <div className="relative">
                <img
                  src={event.imageUrl}
                  alt="Event"
                  className="w-full h-60 object-cover"
                />

                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                    {event.meetingLocation}
                  </span>
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                    {event.category}
                  </span>
                  <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
                    {event.groupName}
                  </span>
                </div>

                <div className="absolute top-2 right-2 bg-white bg-opacity-80 text-gray-900 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span>{event.maxMembers}</span>
                </div>
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {event.userName}
                </h2>
                <p className="text-sm text-gray-500 mb-1">{event.startDate}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {event.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    $169.43
                  </span>
                  <Link
                    to={`/dashboard/groups/${event._id}`}
                    className="bg-teal-800 text-white text-sm px-4 py-2 rounded-full flex items-center gap-1"
                  >
                    See more <PiArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpComingEvent;
