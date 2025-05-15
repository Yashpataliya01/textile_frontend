import React from "react";
import { motion } from "framer-motion";

const points = [
  {
    title: "Our Vision",
    description:
      "To provide quality products and services that exceed the expectations of our esteemed customers.",
    image:
      "https://images.unsplash.com/photo-1524292332709-b33366a7f165?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Mission",
    description:
      "To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.",
    image:
      "https://images.unsplash.com/photo-1707398254391-86c3a634f962?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Values",
    description:
      "We believe in treating our customers with respect and faith. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning.",
    image:
      "https://images.unsplash.com/photo-1528490194198-c3759e5e684c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Growth Philosophy",
    description:
      "We believe in growth through innovation and technology. We are committed to continuous improvement and strive to be the best in our industry.",
    image:
      "https://images.unsplash.com/photo-1627032578588-bd0c2bb09a7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1707472362166-cf11e5752ade?q=80")',
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
                Founded in 2013, “Shiv Shakti Synthetics” under “Ankit Suitings”
                delivers superior uniform fabrics with refined design, texture,
                and durability.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="py-20 px-6 md:px-20 space-y-24">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
            style={{
              backgroundColor: "white",
              backgroundImage:
                "radial-gradient(rgba(10, 10, 10, 0.05) 3px,transparent 0",
              backgroundSize: "30px 30px",
              backgroundPosition: "-5px -5px",
            }}
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500">
              <img
                src={point.image}
                alt={point.title}
                className="w-full h-80 object-cover rounded-xl transform hover:scale-105 transition duration-700 ease-out"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {point.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed tracking-wide">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
