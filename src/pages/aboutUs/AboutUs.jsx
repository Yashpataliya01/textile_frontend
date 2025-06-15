import React from "react";
import { motion } from "framer-motion";
import HoverImage from "../../components/hoverImage/HoverImage";
import ServiceCard from "../../components/serviceCard/ServiceCard";

import hero from "../../assets/Images/About/About_hero.png";

// const import icons
import { FaEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { SiTicktick } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi";
import FabricSpecifications from "../../components/fabricSpecifications/FabricSpecifications";

const points = [
  {
    title: "Our Vision",
    description:
      "We envision a future where our products and services create lasting value and trust for every customer we serve. By consistently raising the bar on quality and customer experience, we strive to become a benchmark of excellence in our industry. Our goal is to innovate with purpose, stay ahead of evolving needs, and leave a meaningful impact in every interaction we have.",
    icon: <FaEye className="text-[#1B1C2D] text-2xl" />,
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to build meaningful and long-lasting relationships with our clients by delivering innovative solutions rooted in modern technology and personalized care. We are committed to achieving excellence through continuous improvement, ethical business practices, and customer-first thinking. Every product we build and every service we provide is designed to add value, foster trust, and drive long-term success.",
    icon: <TbTargetArrow className="text-[#1B1C2D] text-2xl" />,
  },
  {
    title: "Our Values",
    description:
      "We are guided by a strong foundation of values that shape who we are and how we operate. Respect, honesty, and transparency are at the core of our interactions—with clients, partners, and team members. We believe in the power of creativity, innovation, and continuous learning. Our ethical approach to business ensures that every decision is made with integrity, responsibility, and a deep sense of purpose.",
    icon: <SiTicktick className="text-[#1B1C2D] text-2xl" />,
  },
  {
    title: "Growth Philosophy",
    description:
      "We believe that true growth stems from the desire to constantly evolve and improve. Our philosophy is rooted in a forward-thinking mindset that embraces change, challenges limitations, and encourages bold innovation. We invest in learning, adapt quickly to market dynamics, and remain committed to delivering excellence through cutting-edge technology and visionary leadership. Growth, for us, means growing together—with our team, our clients, and the community around us.",
    icon: <FiTrendingUp className="text-[#1B1C2D] text-2xl" />,
  },
];
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 md:p-10 rounded-xl shadow-md max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-white text-5xl font-semibold mb-4 tracking-wide">
                About Us
              </h1>
              <p className="text-gray-100 text-lg leading-relaxed">
                Founded in 2011, “Shiv Shakti Synthetics” under “Ankit Suitings”
                delivers superior uniform fabrics with refined design, texture,
                and durability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white transition-all duration-300 hover:shadow-md"
              >
                {/* Animated background */}
                <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#1B1C2D]/80 to-[#2E2F44]/80 left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out will-change-transform" />

                {/* Optional fix to prevent rendering line */}
                <div className="absolute inset-0 z-[1] bg-white opacity-90 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

                {/* Card content */}
                <div className="relative z-10 p-6 transition-colors duration-300 group-hover:text-white">
                  <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-white/20 mb-4 transition-all duration-300">
                    {React.cloneElement(point.icon, {
                      className:
                        "text-[#1B1C2D] group-hover:text-white text-xl transition-colors duration-300",
                    })}
                  </div>
                  <h3 className="text-lg font-medium mb-2 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ServiceCard />
      <FabricSpecifications />
      <HoverImage />
    </div>
  );
};

export default AboutUs;
