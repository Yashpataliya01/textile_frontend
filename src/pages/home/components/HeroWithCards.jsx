import React from "react";
import { cards } from "../../../data/Home";
import { motion } from "framer-motion";

const UniformCard = ({ icon, title, description }) => {
  return (
    <div
      className="relative rounded-2xl shadow-xl p-6 flex flex-col items-center text-center h-full transform transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group"
      style={{
        backgroundColor: "white",
        backgroundImage:
          "radial-gradient(rgba(10, 10, 10, 0.05) 3px,transparent 0",
        backgroundSize: "30px 30px",
        backgroundPosition: "-5px -5px",
      }}
    >
      {/* Hover Image */}
      <img
        src="https://images.unsplash.com/photo-1660733101148-21a9c1ad85d6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hover"
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0"
      />

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-400 z-10"></div>

      {/* Content */}
      <div className="relative z-20">
        <div className="text-4xl mb-4 text-navy-800 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-200 text-sm mb-6 flex-grow transition-colors duration-300">
          {description}
        </p>
        <button className="bg-black text-white mt-auto px-6 py-2 bg-navy-800 group-hover:bg-white group-hover:text-black text-sm font-semibold rounded-full transition-colors duration-300">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

const HeroWithCards = () => {
  return (
    <div className="flex flex-col w-full relative">
      {/* Hero Section */}
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-gray-800">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/6460112/6460112-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="absolute inset-0 bg-navy-900 bg-opacity-60 flex flex-col justify-center items-center text-center px-6 py-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Premium Uniform Fabrics
          </h1>
          <p className="mt-4 max-w-2xl text-white text-base md:text-lg">
            Specialized fabrics engineered for performance, comfort, and
            durability
          </p>
        </motion.div>
      </div>

      {/* Cards Grid with Overlap */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 -mt-24 md:-mt-32">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <UniformCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AddCustomStyles = () => {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .bg-navy-800 { background-color: #0b1340; }
      .bg-navy-900 { background-color: #070c2e; }
      .hover\\:bg-navy-900:hover { background-color: #070c2e; }
      .text-navy-800 { color: #0b1340; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

export default HeroWithCards;
