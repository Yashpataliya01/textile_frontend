import React from "react";
import { motion } from "framer-motion";
import HoverImage from "../../components/hoverImage/HoverImage";

const points = [
  {
    title: "Our Vision",
    description:
      "We envision a future where our products and services create lasting value and trust for every customer we serve. By consistently raising the bar on quality and customer experience, we strive to become a benchmark of excellence in our industry. Our goal is to innovate with purpose, stay ahead of evolving needs, and leave a meaningful impact in every interaction we have.",
    image:
      "https://images.unsplash.com/photo-1524292332709-b33366a7f165?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to build meaningful and long-lasting relationships with our clients by delivering innovative solutions rooted in modern technology and personalized care. We are committed to achieving excellence through continuous improvement, ethical business practices, and customer-first thinking. Every product we build and every service we provide is designed to add value, foster trust, and drive long-term success.",
    image:
      "https://images.unsplash.com/photo-1707398254391-86c3a634f962?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Our Values",
    description:
      "We are guided by a strong foundation of values that shape who we are and how we operate. Respect, honesty, and transparency are at the core of our interactions—with clients, partners, and team members. We believe in the power of creativity, innovation, and continuous learning. Our ethical approach to business ensures that every decision is made with integrity, responsibility, and a deep sense of purpose.",
    image:
      "https://images.unsplash.com/photo-1528490194198-c3759e5e684c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Growth Philosophy",
    description:
      "We believe that true growth stems from the desire to constantly evolve and improve. Our philosophy is rooted in a forward-thinking mindset that embraces change, challenges limitations, and encourages bold innovation. We invest in learning, adapt quickly to market dynamics, and remain committed to delivering excellence through cutting-edge technology and visionary leadership. Growth, for us, means growing together—with our team, our clients, and the community around us.",
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
                Founded in 2011, “Shiv Shakti Synthetics” under “Ankit Suitings”
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

      <HoverImage />
    </div>
  );
};

export default AboutUs;
