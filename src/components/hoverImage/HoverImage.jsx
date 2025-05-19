import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HoverImage.css";

const items = [
  {
    label: "WOMAN",
    image: "https://ct112013.files.wordpress.com/2013/07/pasteeel.jpg",
  },
  {
    label: "MAN",
    image:
      "https://i.pinimg.com/736x/1a/e9/ff/1ae9ff68eddb75113cc797f1324515b9--color-coordination-reiss.jpg",
  },
  {
    label: "KID",
    image: "http://www.todaysparent.com/wp-content/uploads/2014/02/Mint1.jpg",
  },
];

const HoverImage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseOver = (imageUrl, e) => {
    setHoveredImage(imageUrl);
    e.target.style.zIndex = 99;
  };

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = (e) => {
    setHoveredImage(null);
    e.target.style.zIndex = 1;
  };

  return (
    <div className="hover-list-container">
      <AnimatePresence>
        {hoveredImage && (
          <motion.img
            key={hoveredImage}
            src={hoveredImage}
            alt=""
            className="hover-preview-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: coords.x - window.innerWidth / 2,
              y: coords.y - window.innerHeight / 2,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.3 },
            }}
          />
        )}
      </AnimatePresence>

      <ul className="hover-list">
        {items.map((item, index) => (
          <li
            key={index}
            className="hover-item"
            onMouseOver={(e) => handleMouseOver(item.image, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HoverImage;
