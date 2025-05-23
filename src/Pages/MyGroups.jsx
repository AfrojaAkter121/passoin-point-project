import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { BiSolidEdit } from "react-icons/bi";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router";
import noDataAnimation from "../../public/no-data.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const MyGroups = () => {
  const { user } = use(AuthContext);
  const [myGroups, setMyGroups] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://passion-point-server.vercel.app/myGroups?email=${user?.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyGroups(data))
        .catch((error) => {
          console.error("Error fetching user groups:", error);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This group will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://passion-point-server.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = myGroups.filter((g) => g._id !== id);
              setMyGroups(remaining);
              Swal.fire("Deleted!", "Your group has been deleted.", "success");
            }
          });
      }
    });
  };

  console.log(myGroups);
  return (
    <div className="p-6 md:p-10 min-h-screen">
      <Helmet>
        <title>My Groups _ PassionPoint</title>
      </Helmet>
      <div className="min-h-screen bg-white rounded-xl text-[#ac2d6d] rounded-lg border-4 border-[#ac2d6d] p-8">
        <h1 className="text-4xl font-bold text-center mb-2">My Hobby Groups</h1>
        <p className="max-w-xl text-center mx-auto mb-8">
          Here you can manage all the hobby groups you've created. View stats,
          update details, or remove groups that are no longer active.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {myGroups.length === 0 && (
            <div className="w-ful flex flex-col items-center justify-center min-h-[70vh] text-center">
              <Lottie
                animationData={noDataAnimation}
                loop={true}
                className="w-80 h-80"
              />
              <p className="text-gray-500 text-lg mt-4"> No groups found 😔</p>
            </div>
          )}

          {/* CTA Card */}
          <div
            className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/qM8wp7SK/bmx-5142643-1280.jpg")',
            }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-[#610834] bg-opacity-0"></div>

            <div className="relative z-10 text-center flex flex-col justify-center h-full p-6 text-white">
              <div className="text-5xl font-bold mb-2">+</div>
              <p className="text-sm text-gray-300 mb-4">
                Create a new group and bring people together around your
                passion!
              </p>
              <Link
                to="/createGroup"
                className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold self-center"
              >
                Create New Group →
              </Link>
            </div>
          </div>
        </div>
        {myGroups.length > 0 && (
  <div className="mt-14">
    {/* Large screen table */}
    <div className="hidden md:block overflow-x-auto">
      <table className="min-w-full table-auto bg-white text-[#ac2d6d] border-2 border-[#ac2d6d] rounded-xl shadow-xl">
        <thead className="bg-gradient-to-r from-[#ac2d6d] to-[#d84d3a] text-white">
          <tr>
            <th className="p-3 text-left">Photo</th>
            <th className="p-3 text-left">Group Information</th>
            <th className="p-3 text-center">Update & Delete</th>
          </tr>
        </thead>
        <tbody>
          {myGroups.map((group) => (
            <tr
              key={group._id}
              className="text-center hover:bg-[#8d3661] hover:text-white transition"
            >
              <td className="p-4">
                <img
                  className="w-48 h-32 object-cover rounded-2xl"
                  src={group.imageUrl}
                  alt="group"
                />
              </td>
              <td className="p-3 text-left">
                <ul className="space-y-1">
                  <li className="font-semibold">{group.groupName}</li>
                  <li>{group.category}</li>
                  <li>Max Members: {group.maxMembers}</li>
                  <li>Start Date: {group.startDate}</li>
                </ul>
              </td>
              <td >
                <div className="space-x-4 flex justify-center items-center">
                <Link to={`/updateGroup/${group._id}`}>
                  <button className="bg-gradient-to-r from-[#2dacac] to-[#04767a] text-white p-3 rounded-full">
                    <BiSolidEdit size={25} />
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(group._id)}
                  className="bg-gradient-to-r from-[#ac2d6d] to-[#d84d3a] text-white p-3 rounded-full"
                >
                  <MdAutoDelete size={25} />
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Small screen stacked cards */}
    <div className="md:hidden space-y-6">
      {myGroups.map((group) => (
        <div
          key={group._id}
          className="bg-white text-[#ac2d6d] shadow-xl border-2 border-[#ac2d6d] rounded-xl p-4"
        >
          <img
            src={group.imageUrl}
            alt="group"
            className="w-full h-40 object-cover rounded-xl mb-4"
          />
          <ul className="space-y-1 mb-4">
            <li className="font-bold text-lg">{group.groupName}</li>
            <li>{group.category}</li>
            <li>Max Members: {group.maxMembers}</li>
            <li>Start Date: {group.startDate}</li>
          </ul>
          <div className="flex justify-center gap-4">
            <Link to={`/updateGroup/${group._id}`}>
              <button className="bg-gradient-to-r from-[#2dacac] to-[#04767a] text-white p-3 rounded-full">
                <BiSolidEdit size={25} />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(group._id)}
              className="bg-gradient-to-r from-[#ac2d6d] to-[#d84d3a] text-white p-3 rounded-full"
            >
              <MdAutoDelete size={25} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default MyGroups;
