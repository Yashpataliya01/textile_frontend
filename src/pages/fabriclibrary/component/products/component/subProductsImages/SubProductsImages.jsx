import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// error handling for image loading
import NoData from "../../../../../../assets/Images/other/NoData.jpg";

const SubProductImages = () => {
  const API_ORIGIN = import.meta.env.VITE_ENCODED_URL;
  const location = useLocation();
  const { productId, categoryId, categoryName, categoryDescription } =
    location.state || {};

  console.log(categoryDescription);
  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  // 🔍 Filter products by heading or description
  const filteredProducts = products.filter((item) =>
    `${item.heading || ""} ${item.description || ""}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

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

      {/* Sticky Header */}
      <div className="sticky top-0 z-30 w-full bg-transparent flex justify-center mb-4">
        <div className="backdrop-blur-md bg-white/80 border-b border-gray-200 w-full max-w-screen-md px-6 sm:px-12 py-5 rounded-b-xl shadow-md">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
            {categoryName}
          </h1>
          <p className="mt-1 text-base sm:text-lg text-gray-600 text-center">
            {categoryDescription}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-screen-md px-6 sm:px-12 mb-8">
        <input
          type="text"
          placeholder="Search by heading or description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-800 placeholder-gray-400 transition duration-200"
        />
      </div>

      {/* Image Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-screen-xxl">
        {filteredProducts.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => setSelectedImage(item.image)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
          >
            <div className="h-64 sm:h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.heading}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {item.heading}
              </h2>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-500 mt-10">
            No images found.
          </div>
        )}
      </div>
    </div>
  );
};

export default SubProductImages;
