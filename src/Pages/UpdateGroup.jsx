import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const UpdateGroup = () => {
  const { user } = use(AuthContext);
  const group = useLoaderData();
  const navigate = useNavigate()


  
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData.entries())
    

    // save the database 
    fetch(`http://localhost:4000/updateGroup/${group._id}`,{
      method: 'PUT',
      headers: {
        'Content-type' : 'Application/json',
      },
      body: JSON.stringify(formEntries)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount){
        Swal.fire({
          title: "Update!",
          icon: "success",
          draggable: true
        });
        navigate('/myGroups')
      }
    })
  };

  return (
    <div className="flex w-full min-h-[800px] py-10  ">
      {/* Right Form Section */}
      <form
        onSubmit={handleUpdate}
        className="w-1/2 p-12 bg-white rounded-l-xl flex flex-col justify-center border-t-4 border-l-4 border-b-4 border-teal-700"
      >
        <h2 className="text-2xl text-teal-700 font-semibold font-bold mb-4">
          Update Your Hobby Group
        </h2>

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">
            Group Name And Category
          </label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              name="groupName"
              placeholder="Group Name"
              defaultValue={group.groupName}
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
            <select
              name="category"
              defaultValue={group.category}
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

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">
            Description
          </label>
          <textarea
            name="description"
            defaultValue={group.description}
            placeholder="Description"
            className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">
            Locaion & Max Member & Date
          </label>
          <div className="grid grid-cols-3 gap-4 mt-2">
            <input
              name="meetingLocation"
              defaultValue={group.meetingLocation}
              placeholder="Meeting Location"
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
            <input
              type="number"
              name="maxMembers"
              defaultValue={group.maxMembers}
              placeholder="Max Members"
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
            <input
              type="date"
              name="startDate"
              defaultValue={group.startDate}
              className="border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
              required
            />
          </div>
          <div></div>
        </div>

        <div className="mb-6">
          <label className="text-sm font-semibold text-teal-800">
            User Name and Email
          </label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              name="userName"
              defaultValue={user.displayName}
              readOnly
              className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            />
            <input
              name="userEmail"
              defaultValue={user.email}
              readOnly
              className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            />
          </div>
          <div></div>
        </div>

        <div className="mb-8">
          <label className="text-sm font-semibold text-teal-700">
            Photo Url
          </label>
          <input
            name="imageUrl"
            defaultValue={group.imageUrl}
            placeholder="Image URL"
            className="w-full border-2 border-teal-700 focus:border-teal-500 focus:outline-none px-4 py-2 rounded text-[#3e9287] font-semibold transition duration-500"
            required
          />
        </div>

        <div className="flex items-center gap-6">
          <button
            type="submit"
            className="px-6 w-full py-3 mt-8 rounded-full bg-gradient-to-r from-teal-700 via-teal-400 to-teal-500 text-black font-medium shadow-md hover:scale-105 transition-transform"
          >
            Update Group
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ccc]"></div>
          <div className="w-2 h-2 rounded-full bg-[#ccc]"></div>
          <div className="w-2 h-2 rounded-full bg-[#cc5e33]"></div>
        </div>
      </form>

         {/* Left Image Section */}
         <div
        className="w-1/2  min-h-[800px] rounded-r-xl bg-cover bg-center border-t-4 border-r-4 border-b-4 border-teal-700"
        style={{
          backgroundImage:
            `url(${group.imageUrl})`,
        }}
      ></div>
    </div>
  );
};

export default UpdateGroup;
