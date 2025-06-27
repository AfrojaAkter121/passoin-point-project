import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Helmet } from "react-helmet-async";
import { RiBarChartGroupedLine, RiGroupFill } from "react-icons/ri";
import { FaUserCheck } from "react-icons/fa";
import "react-calendar/dist/Calendar.css"; // base styles import করো
import ChartAndCalendar from "./ChartAndCalendar";

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [myGroups, setMyGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [categoryCount, setCategoryCount] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // My Groups
    fetch(
      `https://passion-point-server.vercel.app/myGroups?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyGroups(data));

    //   user data
    fetch(`http://localhost:4000/users`)
      .then((res) => res.json())
      .then((data) => setUsers(data));

    // All Groups
    fetch(`http://localhost:4000/groups`)
      .then((res) => res.json())
      .then((data) => {
        setAllGroups(data);

        // Count categories
        const count = {};
        data.forEach((group) => {
          count[group.category] = (count[group.category] || 0) + 1;
        });
        setCategoryCount(count);
      });
  }, [user]);

  const barData = {
    labels: Object.keys(categoryCount),
    datasets: [
      {
        label: "Group Count",
        data: Object.values(categoryCount),
        backgroundColor: "#7c3aed",
      },
    ],
  };

  return (
    <div className="p-6 md:p-10 min-h-screen ">
      <Helmet>
        <title>Dashboard Overview | PassionPoint</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-teal-800 mb-6">
        Dashboard Overview
      </h1>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-16">
        <div className="bg-white shadow-2xl flex flex-col items-center p-6 rounded-xl text-center ">
          <div className="flex justify-center items-center rounded-full mb-2 bg-teal-50 text-teal-800 p-3 w-16 h-16">
            <RiBarChartGroupedLine size={25} />
          </div>
          <p className="text-xl font-semibold text-teal-700">Total Groups</p>
          <p className="text-3xl font-bold">{allGroups.length}</p>
        </div>

        <div className="bg-white shadow-2xl flex flex-col items-center p-6 rounded-xl text-center ">
          <div className="flex justify-center items-center rounded-full  bg-teal-50 text-teal-800 p-3 w-16 h-16 ">
            <RiGroupFill size={25} />
          </div>
          <p className="text-xl font-semibold text-teal-700">My Groups</p>
          <p className="text-3xl font-bold">{myGroups.length}</p>
        </div>

        <div className="bg-white shadow-2xl p-6 flex flex-col justify-center  items-center rounded-xl text-center ">
          <div className="flex justify-center items-center rounded-full mb-2 bg-teal-50 text-teal-800 p-3 w-16 h-16">
            <FaUserCheck size={25} />
          </div>
          <p className="text-xl font-semibold text-teal-700">Users</p>
          <p className="text-3xl font-bold">{users.length}+</p>
        </div>

        <div className="bg-white shadow-2xl p-6 rounded-xl text-center hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex justify-center mb-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
              alt="icon"
              className="w-10 h-10 animate-bounce"
            />
          </div>
          <p className="text-xl font-semibold text-teal-700">This Week</p>
          <p className="text-3xl font-bold">Active</p>
        </div>
      </div>

      {/* Chart and Calendar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-xl">
          <p className="text-lg font-semibold text-teal-700 mb-4">
            Category-wise Group Chart
          </p>
          <Bar data={barData} />
        </div>

        <ChartAndCalendar
          barData={barData}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </div>
  );
};

export default DashboardOverview;
