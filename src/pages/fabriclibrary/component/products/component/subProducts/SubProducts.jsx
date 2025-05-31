import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
];

const SubProducts = () => {
  const API_ORIGIN = "http://localhost:5000";
  const { _id } = useParams();
  const location = useLocation();
  const { categoryName, productId, categoryId } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const url = `${API_ORIGIN}/api/subproducts/getSubProducts${
        productId ? `?productId=${encodeURIComponent(productId)}` : ""
      }`;
      const res = await fetch(url);
      const json = await res.json();
      setProducts(json.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-20 bg-gray-50 relative">
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full view"
              className="max-w-4xl w-full rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(item.image)}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.id}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5 text-center space-y-2">
              <h2 className="text-3xl text-gray-500">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
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
