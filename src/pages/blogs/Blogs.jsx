import React from "react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "The Rise of Sustainable Fabrics",
    excerpt:
      "Explore how eco-friendly materials are transforming the textile industry and what it means for the future of fashion.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop",
    date: "April 12, 2025",
  },
  {
    title: "Top 5 Trends in Uniform Suitings",
    excerpt:
      "From minimalistic shades to tech-enhanced weaves, discover what’s hot in the world of uniform fabrics.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop",
    date: "March 30, 2025",
  },
  {
    title: "Why Cotton Blends Are Here to Stay",
    excerpt:
      "A look into the durability and comfort of cotton blends — a favorite among premium shirting manufacturers.",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop",
    date: "February 18, 2025",
  },
];

const Blog = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 px-6">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 md:p-10 rounded-xl shadow-md text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-white text-5xl font-semibold mb-4 tracking-wide">
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

      {/* Blog Posts */}
      <div className="py-20 px-6 md:px-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <button className="mt-4 text-indigo-600 hover:underline text-sm font-medium">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
