import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLoaderData, Link } from 'react-router';
import GroupCard from './GroupCard';
import noDataAnimation from '../../public/no-group.json'
import Lottie from 'lottie-react';
import { Helmet } from 'react-helmet-async';

const AllGroups = () => {
  const groups = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>All Groups _ PassionPoint</title>
      </Helmet>
       {
                groups.length === 0 &&  <div className="w-ful flex flex-col items-center justify-center min-h-[70vh] text-center">
                <Lottie
                  animationData={noDataAnimation}
                  loop={true}
                  className="w-100 h-100"
                />
                <h1 className='text-center text-3xl text-teal-700'>No groups found.</h1>
                <p className='text-center text-lg text-teal-700'>Create a new group to get started and bring people together!</p>
                <Link
                to="/createGroup"
                className="px-4 py-2 bg-teal-700 text-white rounded-lg text-lg font-semibold self-center mt-4"
              >
                Create New Group →
              </Link>
              </div>
            }
      <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            groups.map(((group, index) => <GroupCard key={group._id} index={index} group={group}></GroupCard>))
        }
    </div>
    </div>
  );
};

export default AllGroups;
