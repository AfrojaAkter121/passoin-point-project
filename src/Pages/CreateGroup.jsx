import React from "react";
import { FaBasketballBall, FaBiking, FaFutbol, FaRegCircle, FaSwimmer } from "react-icons/fa";
import Swal from "sweetalert2";

const CreateGroup = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formEntries = Object.fromEntries(formData.entries());
        console.log(formEntries);

        // sent data to the server
        fetch('http://localhost:4000/groups',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formEntries),
        })
        .then(res => {
          console.log('object', res);
          Swal.fire({
            title: "Create Group Success!",
            icon: "success",
            draggable: true
          });
        }).catch(err => {
          console.error('Error:', err);
        })

    }

  return (
    <div>
      <div className="mt-10 mx-auto bg-teal-600  p-5 border border-white/40 shadow-xl rounded mt-6">
      <h2 className="text-xl text-black font-bold mb-4">Create a New Hobby Group</h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="groupName"
            placeholder="Group Name"
            className="w-full bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md border p-2 rounded"
            required
          />

          <select
            name="category"
            className="w-full border p-2 bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 font-medium shadow-md rounded"
            required
          >
            <option className="text-black" value="">Select Hobby Category</option>
            <option className="text-black" value="Drawing & Painting">Drawing & Painting</option>
            <option className="text-black" value="Photography">Photography</option>
            <option className="text-black" value="Video Gaming">Video Gaming</option>
            <option className="text-black" value="Fishing">Fishing</option>
            <option className="text-black" value="Running">Running</option>
            <option className="text-black" value="Cooking">Cooking</option>
            <option className="text-black" value="Reading">Reading</option>
            <option className="text-black" value="Writing">Writing</option>
          </select>

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md text-black font-medium shadow-md  p-2 rounded"
            required
          />

          <input
            name="meetingLocation"
            placeholder="Meeting Location"
            className="w-full bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md border p-2 rounded"
            required
          />
          <input
            type="number"
            name="maxMembers"
            placeholder="Max Members"
            className="w-full bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md border p-2 rounded"
            required
          />

          <input
            type="date"
            name="startDate"
            className="w-full bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md border p-2 rounded"
            required
          />

          <input
            name="userName"
            defaultValue="Afroja"
            readOnly
            className="w-full bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md border p-2 rounded bg-gray-100"
          />
          <input
            name="userEmail"
            defaultValue="afroja@example.com"
            readOnly
            className="w-full bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md border p-2 rounded bg-gray-100"
          />
        </div>

        <input
          name="imageUrl"
          placeholder="Image URL"
          className="w-full bg-gradient-to-l from-[#68fced] via-gray-600 to-gray-900 text-white font-medium shadow-md border p-2 rounded"
          required
        />

        <button
          type="submit"
          className="px-6 w-full py-3 mt-8 rounded-full bg-gradient-to-r from-white via-white to-[#1ad3bd] text-black font-medium shadow-md hover:scale-105 transition-transform"
        >
          Create Group
        </button>
      </form>
    </div>
    </div>
  );
};

export default CreateGroup;
