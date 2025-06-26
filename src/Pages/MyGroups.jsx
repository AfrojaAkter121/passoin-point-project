import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";
import { BiSolidEdit } from "react-icons/bi";
import { MdAutoDelete } from "react-icons/md";
import { Link } from "react-router";
import noDataAnimation from "../../public/no-data.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const MyGroups = () => {
  const { user } = useContext(AuthContext);
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

  return (
    <div className="p-6 md:p-10 min-h-screen">
      <Helmet>
        <title>My Groups _ PassionPoint</title>
      </Helmet>
      <div className="min-h-screen bg-white rounded-xl text-teal-800 border-4 border-teal-700 p-8">
        <h1 className="text-4xl font-bold text-center mb-2">My Hobby Groups</h1>
        <p className="max-w-xl text-center mx-auto mb-8">
          Here you can manage all the hobby groups you've created. View stats,
          update details, or remove groups that are no longer active.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {myGroups.length === 0 && (
            <div className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center">
              <Lottie
                animationData={noDataAnimation}
                loop={true}
                className="w-80 h-80"
              />
              <p className="text-gray-500 text-lg mt-4"> No groups found 😔</p>
            </div>
          )}

          <div
            className="relative bg-cover bg-center rounded-2xl shadow-lg overflow-hidden"
            style={{
              backgroundImage:
                'url("https://i.ibb.co/qM8wp7SK/bmx-5142643-1280.jpg")',
            }}
          >
            <div className="absolute inset-0 bg-teal-900 bg-opacity-30"></div>

            <div className="relative z-10 text-center flex flex-col justify-center h-full p-6 text-white">
              <div className="text-5xl font-bold mb-2">+</div>
              <p className="text-sm text-gray-300 mb-4">
                Create a new group and bring people together around your
                passion!
              </p>
              <Link
                to="/createGroup"
                className="px-4 py-2 bg-white text-teal-700 rounded-lg text-sm font-semibold self-center"
              >
                Create New Group →
              </Link>
            </div>
          </div>
        </div>

        {myGroups.length > 0 && (
          <div className="mt-14">
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full table-auto bg-white text-teal-800 border border-teal-400 rounded-xl shadow-xl overflow-hidden">
                <thead className="bg-gradient-to-r from-teal-700 to-teal-500 text-white text-left">
                  <tr>
                    <th className="p-3">Photo</th>
                    <th className="p-3">Group Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3 text-center">Max Members</th>
                    <th className="p-3 text-center">Start Date</th>
                    <th className="p-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {myGroups.map((group) => (
                    <tr
                      key={group._id}
                      className="hover:bg-teal-100 hover:text-teal-900 transition duration-200 text-center"
                    >
                      <td className="p-3">
                        <img
                          className="w-24 h-16 object-cover rounded-xl mx-auto"
                          src={group.imageUrl}
                          alt="group"
                        />
                      </td>
                      <td className="p-3 font-semibold text-left">{group.groupName}</td>
                      <td className="p-3 text-left">{group.category}</td>
                      <td className="p-3">{group.maxMembers}</td>
                      <td className="p-3">{group.startDate}</td>
                      <td className="p-3">
                        <div className="flex justify-center gap-3">
                          <Link to={`/dashboard/updateGroup/${group._id}`}>
                            <button className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-2 rounded-full hover:scale-105 transition">
                              <BiSolidEdit size={20} />
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(group._id)}
                            className="bg-gradient-to-r from-red-400 to-red-600 text-white p-2 rounded-full hover:scale-105 transition"
                          >
                            <MdAutoDelete size={20} />
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
                  className="bg-white text-teal-800 shadow-xl border border-teal-400 rounded-xl p-4"
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
                    <Link to={`/dashboard/updateGroup/${group._id}`}>
                      <button className="bg-gradient-to-r from-teal-600 to-teal-400 text-white p-3 rounded-full">
                        <BiSolidEdit size={25} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(group._id)}
                      className="bg-gradient-to-r from-red-400 to-red-600 text-white p-3 rounded-full"
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
