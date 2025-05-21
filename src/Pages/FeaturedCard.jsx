import React from 'react';
import Feature from './Feature';

const FeaturedCard = ({activeGroup}) => {
    
    return (
        <div>
            <h1 className='text-3xl text-center font-thin py-3'>✨ Active Communities to Explore</h1>
            <p className=' text-center'>Looking for something inspiring to be a part of? These featured groups are hand-picked based on popularity,<br/> upcoming events, and community buzz. Find your tribe and join the fun today!</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-16'>
            
            {
                activeGroup.map(group => <Feature key={group._id} group={group}></Feature>)
            }
           
        </div>
        </div>
    );
};

export default FeaturedCard;