import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const UpdateGroup = () => {
  const { user } = useContext(AuthContext);
  const group = useLoaderData();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries());

    fetch(`https://passion-point-server.vercel.app/updateGroup/${group._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formEntries),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update!",
            icon: "success",
            draggable: true,
          });
          navigate("/myGroups");
        }
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
        console.error(error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
      className="flex flex-col md:flex-row w-full max-w-screen-xl mx-auto rounded-xl border-4 border-teal-700 m-7 overflow-hidden box-border"
    >
      <Helmet>
        <title>Update Your Group _ PassionPoint</title>
      </Helmet>

      {/* Right Form Section */}
      <form
        onSubmit={handleUpdate}
        className="flex-1 p-6 md:p-12 bg-white flex flex-col justify-center min-h-[800px] box-border"
      >
        <h2 className="text-2xl text-teal-700 font-semibold font-bold mb-4">
          Update Your Hobby Group
        </h2>

        {/* ... form inputs same as before ... */}

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">
            Group Name And Category
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input
              name="groupName"
              placeholder="Group Name"
              defaultValue={group?.groupName || ""}
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
            <select
              name="category"
              defaultValue={group?.category || ""}
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            >
              <option className="text-black" value="">
                Select Hobby Category
              </option>
              <option className="text-black" value="Drawing & Painting">
                Drawing & Painting
              </option>
              <option className="text-black" value="Photography">
                Photography
              </option>
              <option className="text-black" value="Video Gaming">
                Video Gaming
              </option>
              <option className="text-black" value="Fishing">
                Fishing
              </option>
              <option className="text-black" value="Running">
                Running
              </option>
              <option className="text-black" value="Cooking">
                Cooking
              </option>
              <option className="text-black" value="Reading">
                Reading
              </option>
              <option className="text-black" value="Writing">
                Writing
              </option>
            </select>
          </div>
        </div>

        {/* ...rest of the form... */}

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">Description</label>
          <textarea
            name="description"
            defaultValue={group?.description || ""}
            placeholder="Description"
            className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">
            Location & Max Member & Date
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <input
              name="meetingLocation"
              defaultValue={group?.meetingLocation || ""}
              placeholder="Meeting Location"
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
            <input
              type="number"
              name="maxMembers"
              defaultValue={group?.maxMembers || ""}
              placeholder="Max Members"
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
            <input
              type="date"
              name="startDate"
              defaultValue={group?.startDate || ""}
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">User Name and Email</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <input
              name="userName"
              defaultValue={user?.displayName || ""}
              readOnly
              className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            />
            <input
              name="userEmail"
              defaultValue={user?.email || ""}
              readOnly
              className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            />
          </div>
        </div>

        <div className="mb-8">
          <label className="text-sm font-semibold text-teal-700">Photo Url</label>
          <input
            name="imageUrl"
            defaultValue={group?.imageUrl || ""}
            placeholder="Image URL"
            className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            required
          />
        </div>

        <div className="flex items-center gap-6">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 w-full py-3 mt-8 rounded-full bg-gradient-to-r from-teal-700 via-teal-400 to-teal-500 text-black font-medium shadow-md hover:scale-105 transition-transform ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Updating..." : "Update Group"}
          </button>
        </div>
      </form>

      {/* Left Image Section */}
      <div
        className="flex-1 min-h-[800px] bg-cover bg-center box-border"
        style={{
          backgroundImage: `url(${group?.imageUrl || ""})`,
        }}
      ></div>
    </motion.div>
  );
};

export default UpdateGroup;
