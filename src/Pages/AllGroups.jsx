import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLoaderData, Link } from 'react-router'; // ✅ ঠিক করলাম
import GroupCard from './GroupCard';
import noDataAnimation from '../../public/no-group.json';
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';

const AllGroups = () => {
  const groups = useLoaderData();

  return (
    <div className='px-4 py-10'>
      <Helmet>
        <title>All Groups | PassionPoint</title>
      </Helmet>

      {/* No Groups Message */}
      {groups.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center min-h-[70vh] text-center">
          <Lottie
            animationData={noDataAnimation}
            loop={true}
            className="w-72 h-72" // Responsive size
          />
          <h1 className="text-2xl md:text-3xl font-bold text-teal-700 mb-2">
            No groups found.
          </h1>
          <p className="text-lg text-teal-700 mb-4">
            Create a new group to get started and bring people together!
          </p>
          <Link
            to="/createGroup"
            className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-lg font-semibold transition"
          >
            Create New Group →
          </Link>
        </div>
      )}

      {/* Groups Grid */}
      {groups.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <GroupCard key={group._id} index={index} group={group} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllGroups;
