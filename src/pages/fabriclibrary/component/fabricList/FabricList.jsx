import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const fabrics = [
  {
    name: "Suitings",
    image:
      "https://images.unsplash.com/photo-1600091166971-7f9faad6c1e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    _id: "00001",
  },
  {
    name: "Shirtings",
    image:
      "https://images.unsplash.com/photo-1647013629840-13c441a3221b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    _id: "00002",
  },
];

const FabricList = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-2">
          Explore Our Fabrics
        </h2>
        <div className="w-24 h-1 bg-red-500 mx-auto mb-6 rounded-full animate-pulse"></div>
        <p className="text-gray-600 mb-14 max-w-xl mx-auto">
          Discover the rich textures and elegant patterns in our hand-picked
          collection of fabrics.
        </p>
      </motion.div>

      {/* Fabric Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {fabrics.map((fabric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 bg-white transition duration-300"
          >
            {/* Image */}
            <img
              src={fabric.image}
              alt={fabric.name}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

            {/* Content */}
            <div className="absolute bottom-6 left-6 text-left z-20">
              <h3 className="text-white text-2xl font-semibold drop-shadow-md">
                {fabric.name}
              </h3>
              <button
                onClick={() => navigate(`/library/${fabric._id}`)}
                className="mt-4 px-5 py-2 text-sm font-semibold bg-white text-indigo-900 rounded-full hover:bg-indigo-900 hover:text-white transition duration-300"
              >
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FabricList;
