import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HoverImage.css";

import gst from "../../assets/Images/About/gst.png";
import img from "../../assets/Images/About/img.png";
import img2 from "../../assets/Images/About/img2.png";
import img3 from "../../assets/Images/About/img3.jpeg";

const items = [
  { label: "GST Certificate", year: "2021", image: gst },
  { label: "Import-Export Certificate", year: "2024", image: img },
  { label: "ISO Certificate", year: "2023", image: img2 },
  {
    label: "Bhilwara Textile Trade Federation Certificate",
    year: "2024",
    image: img3,
  },
];

const HoverImage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="hover-image-wrapper">
      <div className="hover-image-table">
        <div className="table-header">
          <div className="column year">Year</div>
          <div className="column label">Certificate</div>
        </div>
        {items.map((item, index) => (
          <div key={index} className="table-row-wrapper">
            <div
              className={`table-row ${selectedIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              <div className="column year">{item.year}</div>
              <div className="column label">{item.label}</div>
            </div>

            <AnimatePresence>
              {selectedIndex === index && (
                <motion.div
                  className="preview-row"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.image} alt={item.label} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverImage;
