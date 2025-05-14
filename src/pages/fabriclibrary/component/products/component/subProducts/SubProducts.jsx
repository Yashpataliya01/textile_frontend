import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const subProducts = [
  {
    id: "F1",
    image:
      "https://ashafabs.com/wp-content/uploads/2024/09/designer-Shirting-PGNo.44.webp",
    details: {
      blend: "Blend",
      material: "Polyester Cotton blended",
      weight: "Weight 130 GSM",
    },
  },
  {
    id: "F2",
    image:
      "https://ashafabs.com/wp-content/uploads/2024/09/designer-Shirting-PGNo.44.webp",
    details: {
      blend: "Blend",
      material: "Polyester Cotton blended",
      weight: "Weight 120 GSM",
    },
  },
  {
    id: "F3",
    image:
      "https://ashafabs.com/wp-content/uploads/2024/09/designer-Shirting-PGNo.44.webp",
    details: {
      blend: "Blend",
      material: "Polyester Cotton blended",
      weight: "Weight 120 GSM",
    },
  },
  // Add more...
];

const SubProducts = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f1130]">
          Premium Check Shirting
        </h1>
        <div className="w-20 h-1 bg-[#0f1130] mx-auto mt-4 rounded-full animate-pulse"></div>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-relaxed">
          Discover high-quality shirting fabrics with timeless check patterns.
          Comfort and elegance blended for both casual and formal wear.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {subProducts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.id}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5 text-center space-y-2">
              <h3 className="text-lg font-semibold text-[#0f1130]">
                S.NO.-{item.id}
              </h3>
              <p className="text-sm text-gray-500">{item.details.blend}</p>
              <p className="text-sm text-gray-500">{item.details.material}</p>
              <p className="text-sm text-gray-500">{item.details.weight}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-[#0f1130] text-white py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-[#1f214f]"
              >
                Enquire Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubProducts;
