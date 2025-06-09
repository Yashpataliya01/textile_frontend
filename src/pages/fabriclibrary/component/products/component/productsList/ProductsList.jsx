import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ProductsList = () => {
  const API_ORIGIN = "http://localhost:5000";
  const location = useLocation();
  const { categoryName, name } = location.state || {};
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const url = `${API_ORIGIN}/api/products/getProducts${
        categoryName ? `?category=${encodeURIComponent(categoryName)}` : ""
      }`;
      const res = await fetch(url);
      const json = await res.json();
      setProducts(json.data || []);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://fabricpandit.com/cdn/shop/products/fabric-pandit-fabric-eggplant-violet-twill-premium-suiting-fabric-width-58-inches-36283619672239.jpg?v=1682078526&width=1946')",
        }}
      >
        <div className="bg-black/60 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium {name}
          </h1>
          <p className="text-gray-200 text-lg">
            Discover luxury fabrics crafted for modern elegance — suited for
            every style.
          </p>
        </div>
      </motion.div>

      {/* Product Grid */}
      <div className="px-4 md:px-16 mt-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-gray-800 mb-10 text-center"
        >
          Our Suiting Collection
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() =>
                navigate(`/library/${categoryName}/${item._id}`, {
                  state: {
                    categoryName: item?.name,
                    productId: item?._id,
                    categoryId: categoryName,
                  },
                })
              }
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer group"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
