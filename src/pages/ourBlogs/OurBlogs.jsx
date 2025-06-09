import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const OurBlog = () => {
  const API_ORIGIN = "http://localhost:5000"; // Change when deployed
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const dummyBlogs = [
    {
      _id: "dummy1",
      title: "The Legacy of Shiv Shakti Synthetics: From 2011 to Today",
      image: "/images/factory-legacy.jpg",
      description:
        "Founded in 2011, Shiv Shakti Synthetics under the esteemed label Ankit Suitings has become a trusted name in the textile industry. With a focus on delivering premium-quality uniform fabrics, our journey started with a vision to combine refined design, unmatched texture, and long-lasting durability.",
      createdAt: new Date().toISOString(),
    },
    {
      _id: "dummy2",
      title: "Why Uniform Fabric Quality Matters — And How We Lead the Way",
      image: "/images/uniform-quality.jpg",
      description:
        "At Shiv Shakti Synthetics, we believe that the fabric you wear defines the brand you represent. That’s why our team at Ankit Suitings crafts fabrics that go beyond just looks. Our materials are carefully engineered to be resilient, breathable, and colorfast, making them ideal for long hours of daily use.",
      createdAt: new Date().toISOString(),
    },
  ];

  useEffect(() => {
    fetch(`${API_ORIGIN}/api/blogs/getBlogs`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.length > 0) {
          setBlogs(data.data);
        } else {
          setBlogs(dummyBlogs);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch blogs:", err);
        setBlogs(dummyBlogs);
      });
  }, []);

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(isoDate).toLocaleDateString("en-IN", options);
  };

  const truncateText = (text, wordLimit = 30) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 px-6">
          <div className="text-center max-w-3xl mx-auto backdrop-blur-md bg-black/10 border border-white/20 px-6 py-10 md:p-10 rounded-xl shadow-md max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-white text-7xl font-semibold mb-4 tracking-wide">
                Insights & Stories
              </h1>
              <p className="text-gray-100 text-lg leading-relaxed">
                Stay informed with trends, innovations, and the craftsmanship
                behind premium fabrics.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-900">
          Latest Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {truncateText(blog.description)}
                </p>
                <div className="text-xs text-gray-500 mt-3">
                  <span>By Admin</span> •{" "}
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-lg">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-red-100 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500 hover:text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-64 object-cover rounded-md mb-5"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              By Admin • {formatDate(selectedBlog.createdAt)}
            </p>
            <p className="text-gray-700 whitespace-pre-line">
              {selectedBlog.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurBlog;
