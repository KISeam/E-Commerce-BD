import React from "react";
import OurTeam from "./About Components/OurTeam";
import Review from "./About Components/Review";
import StatsCards from "./About Components/StatsCards";
import HeadDetails from "../../Components/HeadDetails";
import Services from "../../Components/Services";
import AboutDetails from "./About Components/AboutDetails";
import PageHeader from "../../Components/PageHeader";

const About = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-12">
        <PageHeader page={"About"} />
        <div>
          <AboutDetails />
          <div className="flex flex-col gap-6 py-10">
            <HeadDetails
              title={"Our"}
              colortitle={"Services"}
              subtitle={
                "Customer service should not be a department. It should be the entire company."
              }
            />
            <Services />
          </div>
          <Review />
          <StatsCards />
          <OurTeam />
        </div>
      </div>
    </div>
  );
};

export default About;
