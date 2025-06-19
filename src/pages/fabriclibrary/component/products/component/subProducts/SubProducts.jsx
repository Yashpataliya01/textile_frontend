import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// error handling for image loading
import NoData from "../../../../../../assets/Images/other/NoData.jpg";

const SubProducts = () => {
  const API_ORIGIN = import.meta.env.VITE_ENCODED_URL;
  const { _id } = useParams();
  const location = useLocation();
  const { categoryName, productId, categoryId, description } =
    location.state || {};
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#0f1130]">
          {categoryName}
        </h1>
        <div className="w-20 h-1 bg-[#0f1130] mx-auto mt-4 rounded-full animate-pulse"></div>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group cursor-pointer h-full min-h-[450px]"
              onClick={() =>
                navigate(`/library/${categoryId}/${productId}/${item._id}`, {
                  state: {
                    categoryName: item.name,
                    productId: item._id,
                    categoryId: categoryName,
                    categoryDescription: item.description,
                  },
                })
              }
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.id}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow text-center">
                <div className="mb-4">
                  <h2 className="text-3xl text-gray-500">{item.name}</h2>
                  <p className="text-sm text-gray-500 mt-2 whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
                <Link
                  to={`/library/${categoryId}/${productId}/${item._id}`}
                  state={{
                    categoryName: item.name,
                    productId: item._id,
                    categoryId: categoryName,
                    categoryDescription: item.description,
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-auto w-full bg-[#0f1130] text-white py-2 rounded-lg text-sm font-medium transition duration-300 hover:bg-[#1f214f]"
                  >
                    View
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src={NoData}
            alt="No Data"
            className="w-64 h-64 object-cover mb-4"
          />
          <h2 className="text-2xl text-gray-600">No Products Available</h2>
          <p className="text-gray-500 mt-2">
            Please check back later or explore other categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default SubProducts;
