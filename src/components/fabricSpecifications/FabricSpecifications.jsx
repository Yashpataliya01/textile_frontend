import React from "react";
import { motion } from "framer-motion";

const data = {
  "Yarn count": [
    "75D; 80D; 150D (100% Polyester)",
    "30s, 40s, 45s 2/60s, 2/80s (65%Polyester / 35% Cotton)",
    "30s, 40s, 45s 2/60s, 2/76s (100% Spun Polyester)",
    "2/15s; 2/18s; 2/30s; 2/40; 2/50, 2/60s, 2/80s (70%Polyester / 30% Viscose)",
  ],
  Weave: ["1/1 Plain", "2/1 Twill", "2/2 Twill", "3/1 Drill"],
  Blends: [
    "100% polyester",
    "65%Polyester / 35% Cotton",
    "70%Polyester / 30% Viscose",
  ],
  Finish: [
    "TR Finish",
    "Water and stain resistant",
    "Anti - Microbial",
    "Peach Finish",
    "Bio - Finish",
  ],
};

const FabricSpecifications = () => {
  return (
    <div className="px-4 py-16 bg-white text-gray-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold mb-2">
          Detailed Fabric Specifications
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          These fabrics offer versatility in applications, ensuring both comfort
          and long-lasting wear across different garment types.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {Object.entries(data).map(([title, items], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group overflow-hidden rounded-xl shadow-sm border border-gray-200 bg-white transition-all duration-300 hover:shadow-md"
          >
            {/* Animated hover background gradient */}
            <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-r from-[#1B1C2D]/80 to-[#2E2F44]/80 left-0 top-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out will-change-transform" />

            {/* White overlay to avoid flickering on hover */}
            <div className="absolute inset-0 z-[1] bg-white opacity-90 pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />

            {/* Card content */}
            <div className="relative z-10 p-6 transition-colors duration-300 group-hover:text-white">
              <h3 className="text-xl font-semibold mb-4">{title}:</h3>
              <ul className="space-y-2 list-disc list-inside text-sm">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FabricSpecifications;
