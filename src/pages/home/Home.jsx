import React from "react";
import HeroWithCards from "./components/HeroWithCards";
import Whoweare from "./components/Whoweare";
import PhotoGallery from "./components/PhotoGallery";
import BusinessInsight from "./components/businessInsight/BusinessInsight";
import "./Home.css";
import useScrollAnimate from "../../components/animation/UseScrollAnimate";
import ServiceCard from "../../components/serviceCard/ServiceCard";

import img3 from "../../assets/Images/Home/Business_Insight.jpg";

const Home = () => {
  useScrollAnimate();
  return (
    <>
      <div className="home-container">
        <HeroWithCards />
        <Whoweare />
        <ServiceCard />
        <PhotoGallery />

        {/* The background image section with fixed background */}
        <div
          className="background-section"
          style={{
            backgroundImage: `url(${img3})`,
          }}
        >
          <div>
            <BusinessInsight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
