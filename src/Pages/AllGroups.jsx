import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLoaderData, Link } from 'react-router';
import GroupCard from './GroupCard';

const AllGroups = () => {
  const groups = useLoaderData();

  return (
    <div className='p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            groups.map((group => <GroupCard key={group._id} group={group}></GroupCard>))
        }
    </div>
  );
};

export default AllGroups;
