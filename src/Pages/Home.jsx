import React from 'react';
import HobbyHeader from '../components/HobbyHeader';
import FeaturedCard from './FeaturedCard';
import { useLoaderData } from 'react-router';

const Home = () => {
    const groups =  useLoaderData()
    const activeGroup = groups.filter(group => new Date(group.startDate).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0)).slice(0, 6)

    return (
        <div>
            <HobbyHeader></HobbyHeader>
            <FeaturedCard activeGroup={activeGroup}></FeaturedCard>
        </div>
    );
};

export default Home;