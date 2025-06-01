import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const SubProductImages = () => {
  const API_ORIGIN = "http://localhost:5000";
  const location = useLocation();
  const { productId } = location.state || {};
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const url = `${API_ORIGIN}/api/subproducts/getSubProductImage${
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
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10 flex flex-col items-center">
      {/* Fullscreen Image Modal */}
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
              alt="Zoomed view"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full flex flex-col gap-10 items-center">
        {products.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedImage(item.image)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="w-full sm:w-[90%] bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubProductImages;
