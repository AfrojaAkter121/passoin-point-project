import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import { Bounce, toast } from "react-toastify";

const GroupDetails = () => {
  const group = useLoaderData();

  const handleJoin = () => {
    toast.info("🤝 Welcome to the group!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
  }

  return (
    <div className="flex w-full min-h-screen items-center justify-center p-6">
      <Helmet>
        <title>Group Details _ PassionPoint</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="bg-teal-800 text-white p-10 relative overflow-hidden">
          {/* Brush Effect */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-left opacity-10"
            style={{
              backgroundImage: `url(${group.imageUrl})`,
              backgroundSize: "cover",
              zIndex: 0,
            }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">{group.groupName}</h2>
            <p className="mb-4 text-sm text-white"><strong>Description :</strong> {group.description}</p>

            <ul className="space-y-3 mb-6 text-lg">
              <li>
                <strong>Category:</strong> {group.category}
              </li>
              <li>
                <strong>Start Date:</strong> {group.startDate}
              </li>
              <li>
                <strong>Max Members:</strong> {group.maxMembers}
              </li>
              <li>
                <strong>Location:</strong> {group.meetingLocation}
              </li>
            </ul>

            <div className="mb-6">
              <p className="font-bold">Created by: {group.userName}</p>
              <p className="text-sm">Email: {group.userEmail}</p>
            </div>

            {new Date(group.startDate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0) ? (
              <button onClick={handleJoin} className="flex items-center gap-2 bg-teal-600 hover:bg-[#042f3d] text-white rounded-full px-6 py-3 transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26L3 18V8zM14 8h7v10h-7z" />
                </svg>
                Join Group
              </button>
            ) : (
              <p className="mt-4 px-4 py-2 bg-red-100 text-red-600 rounded-md inline-block">
                This group is no longer active.
              </p>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center justify-center p-10 bg-white">
          <img
            src={group.imageUrl}
            alt={group.groupName}
            className="rounded border-4 border-teal-800 w-60 h-60 object-cover shadow"
          />

          <div className="mt-6 w-full space-y-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="border-t border-dashed border-gray-400"
              ></div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-teal-800"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
