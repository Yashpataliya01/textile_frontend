import React, { useEffect } from "react";
import HeroWithCards from "./components/HeroWithCards";
import Whoweare from "./components/Whoweare";
import PhotoGallery from "./components/PhotoGallery";
import BusinessInsight from "./components/businessInsight/BusinessInsight";
import "./Home.css";
import useScrollAnimate from "../../components/animation/UseScrollAnimate";

const Home = () => {
  useScrollAnimate();
  return (
    <>
      <div className="home-container">
        <HeroWithCards />
        <Whoweare />
        <PhotoGallery />

        {/* The background image section with fixed background */}
        <div
          className="background-section"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1562869929-bda0650edb1f?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
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
