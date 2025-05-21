import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { BiSolidEdit } from "react-icons/bi";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router";

const MyGroups = () => {
  const { user } = use(AuthContext);
  const [myGroups, setMyGroups] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:4000/myGroups?email=${user?.email}`)
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
        fetch(`http://localhost:4000/groups/${id}`, {
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
    <div className="p-6 md:p-10  min-h-screen">
      <div className="min-h-screen bg-gradient-to-r from-[#2dacac] to-[#04767a] text-white rounded-xl text-white p-8">
        <h1 className="text-4xl font-bold mb-2">My Hobby Groups</h1>
        <p className="max-w-xl text-white mb-8">
          Here you can manage all the hobby groups you've created. View stats,
          update details, or remove groups that are no longer active.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Groups Card */}
          <div className="bg-teal-700 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4">YOUR GROUPS</h2>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl font-bold mb-2">6</div>
                <div className="text-sm text-gray-400">Total Created</div>
              </div>
              <ul className="text-sm space-y-1">
                <li className="text-green-400">• 4 Active</li>
                <li className="text-yellow-400">• 1 Pending</li>
                <li className="text-red-400">• 1 Archived</li>
              </ul>
            </div>
          </div>

          {/* Members Overview */}
          <div className="bg-teal-700 text-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4">MEMBERS</h2>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-5xl font-bold mb-2">128</div>
                <div className="text-sm text-gray-400">Total Members</div>
              </div>
              <ul className="text-sm space-y-1">
                <li className="text-purple-400">• 73 Active</li>
                <li className="text-blue-400">• 15 Joined Today</li>
                <li className="text-gray-400">• 40 Inactive</li>
              </ul>
            </div>
          </div>

          {/* CTA Card */}
          <div
            className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/qM8wp7SK/bmx-5142643-1280.jpg")',
            }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0"></div>

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

        {/* table group  */}
        <div className="overflow-x-auto rounded-xl mt-14">
          <table className="min-w-full table-auto bg-white text-teal-900 rounded-xl shadow-xl">
            <thead className="bg-gradient-to-r from-[#ac2d6d] to-[#d84d3a] text-white text-gray-800 rounded-xl">
              <tr>
                <th className="p-3 text-left">Photo</th>
                <th className="p-3 text-left">Group Information</th>

                <th className="p-3 ">Update and Delete</th>
              </tr>
            </thead>
            <tbody>
              {myGroups.map((group) => (
                <tr
                  key={group._id}
                  className="text-center hover:bg-teal-600 hover:text-white"
                >
                  <td>
                    <img
                      className="w-40 h-40 p-5 rounded-full"
                      src={group.imageUrl}
                      alt=""
                    />
                  </td>
                  <td className="p-3 text-left">
                    <li>{group.groupName}</li>
                    <li>{group.category}</li>
                    <li>maxMembers : {group.maxMembers}</li>
                    <li>{group.startDate}</li>
                  </td>

                  <td className="p-3 space-x-4">
                    <button className="bg-gradient-to-r from-[#2dacac] to-[#04767a] text-white p-3 rounded-full">
                      <BiSolidEdit size={25} />
                    </button>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="bg-gradient-to-r from-[#ac2d6d] to-[#d84d3a] text-white p-3 rounded-full text-center"
                    >
                      <MdAutoDelete size={25} />
                    </button>
                  </td>
                </tr>
              ))}
              {myGroups.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">
                    You haven't created any groups yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyGroups;
