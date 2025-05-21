import React, { useMemo } from "react";
import HobbyHeader from "../components/HobbyHeader";
import FeaturedCard from "./FeaturedCard";
import { useLoaderData } from "react-router";
import UpComingEvent from "./UpComingEvent";
import AboutHobbyHub from "./AboutHobbyHub";

const Home = () => {
  const groups = useLoaderData();
  const activeGroup = groups
    .filter(
      (group) =>
        new Date(group.startDate).setHours(0, 0, 0, 0) >=
        new Date().setHours(0, 0, 0, 0)
    )
    .slice(0, 6);

  const upcomingEvents = useMemo(
    () =>
      groups
        .filter(
          (g) =>
            new Date(g.startDate).setHours(0, 0, 0, 0) >=
            new Date().setHours(0, 0, 0, 0)
        )
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        .slice(0, 6),
    [groups]
  );

  return (
    <div>
      <HobbyHeader></HobbyHeader>
      <FeaturedCard activeGroup={activeGroup}></FeaturedCard>
      <AboutHobbyHub></AboutHobbyHub>
      <UpComingEvent upcomingEvents={upcomingEvents}></UpComingEvent>
    </div>
  );
};

export default Home;
