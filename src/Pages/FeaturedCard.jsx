import React from "react";
import Feature from "./Feature";
import noDataAnimation from "../../public/no-upcoming.json";
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const FeaturedCard = ({ activeGroup }) => {
  return (
    <div>
      <h1 className="text-3xl text-center font-thin py-3">
        ✨ Active Communities to Explore
      </h1>
      <p className=" text-center">
        Looking for something inspiring to be a part of? These featured groups
        are hand-picked based on popularity,
        <br /> upcoming events, and community buzz. Find your tribe and join the
        fun today!
      </p>
      {activeGroup.length === 0 && (
        <div className="w-ful flex flex-col items-center justify-center min-h-[70vh] text-center">
          <Lottie
            animationData={noDataAnimation}
            loop={true}
            className="w-100 h-100"
          />
          <p className="text-teal-500 text-lg"> No Active Group</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16">
        {activeGroup.map((group) => (
          <Feature key={group._id} group={group}></Feature>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCard;
