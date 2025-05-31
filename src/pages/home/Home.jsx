import React, { useEffect } from "react";
import HeroWithCards from "./components/HeroWithCards";
import Whoweare from "./components/Whoweare";
import PhotoGallery from "./components/PhotoGallery";
import BusinessInsight from "./components/businessInsight/BusinessInsight";
import "./Home.css";
import useScrollAnimate from "../../components/animation/UseScrollAnimate";
import ServiceCard from "../../components/serviceCard/ServiceCard";

import img7 from "../../assets/Images/Home/img7.jpg";

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
            backgroundImage: `url(${img7})`,
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
