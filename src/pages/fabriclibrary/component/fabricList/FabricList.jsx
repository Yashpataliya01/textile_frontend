import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// error handling for image loading
import NoData from "../../../../assets/Images/other/NoData.jpg";

const FabricList = () => {
  const API_ORIGIN = import.meta.env.VITE_ENCODED_URL;
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(`${API_ORIGIN}/api/categories/getCategories`);
      const json = await res.json();
      if (json.success) setCategories(json.data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

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
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {categories.map((fabric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 bg-white transition duration-300 cursor-pointer"
              onClick={() =>
                navigate(`/library/${fabric._id}`, {
                  state: { categoryName: fabric._id, name: fabric.name },
                })
              }
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
                  onClick={() =>
                    navigate(`/library/${fabric._id}`, {
                      state: { categoryName: fabric._id, name: fabric.name },
                    })
                  }
                  className="mt-4 px-5 py-2 text-sm font-semibold bg-white text-indigo-900 rounded-full hover:bg-indigo-900 hover:text-white transition duration-300"
                >
                  View More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96">
          <img
            src={NoData}
            alt="No Data"
            className="w-48 h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-700">
            No Fabrics Available
          </h3>
          <p className="text-gray-500">
            Please check back later or contact support.
          </p>
        </div>
      )}
    </section>
  );
};

export default FabricList;
