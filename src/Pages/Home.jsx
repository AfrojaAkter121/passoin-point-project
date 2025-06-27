import React, { useMemo } from "react";
import HobbyHeader from "../components/HobbyHeader";
import FeaturedCard from "./FeaturedCard";
import { useLoaderData } from "react-router";
import UpComingEvent from "./UpComingEvent";
import AboutHobbyHub from "./AboutHobbyHub";
import { Helmet } from "react-helmet-async";
import NewsletterSignup from "../components/NewsletterSignup";
import UserTestimonials from "../components/UserTestimonials";
import Leaderboard from "../components/Leaderboard";
import CallToAction from "../components/CallToAction";

const Home = () => {
  const groups = useLoaderData();
  const activeGroup = groups
    .filter(
      (group) =>
        new Date(group.startDate).setHours(0, 0, 0, 0) >=
        new Date().setHours(0, 0, 0, 0)
    )
    .slice(0, 6);

 
  return (
    <div>
      <Helmet>
        <title>Home _ PassionPoint</title>
      </Helmet>
      <HobbyHeader></HobbyHeader>
      <FeaturedCard activeGroup={activeGroup}></FeaturedCard>
      <CallToAction></CallToAction>
      <UpComingEvent ></UpComingEvent>
      <AboutHobbyHub></AboutHobbyHub>
      <Leaderboard></Leaderboard>
      <UserTestimonials></UserTestimonials>
      <NewsletterSignup></NewsletterSignup>
    </div>
  );
};

export default Home; 