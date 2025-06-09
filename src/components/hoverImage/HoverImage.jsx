import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HoverImage.css";

import gst from "../../assets/Images/About/gst.png";
import img from "../../assets/Images/About/img.png";
import img2 from "../../assets/Images/About/img2.png";
import img3 from "../../assets/Images/About/img3.jpeg";

import certificate from "../../assets/Images/About/certificate.jpg";

const items = [
  {
    label: "GST Certificate",
    image: gst,
  },
  {
    label: "Import-Export Certificate",
    image: img,
  },
  {
    label: "ISO Certificate",
    image: img2,
  },
  {
    label: "Bhilwara Textile Trade Federation Certificate",
    image: img3,
  },
];

const HoverImage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseOver = (imageUrl, e) => {
    if (!isMobile) {
      setHoveredImage(imageUrl);
      e.target.style.zIndex = 99;
    }
  };

  const handleMouseMove = (e) => {
    if (!isMobile) {
      // Use viewport coordinates directly
      setCoords({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = (e) => {
    if (!isMobile) {
      setHoveredImage(null);
      e.target.style.zIndex = 1;
    }
  };

  const handleClickMobile = (imageUrl) => {
    if (isMobile) {
      setHoveredImage((prev) => (prev === imageUrl ? null : imageUrl));
    }
  };

  return (
    <>
      <div className="hover-list-container relative">
        <div className="hover-title">
          <h1>Certificates</h1>
        </div>
        <div
          className="hover-certificate"
          style={{
            backgroundImage: `url(${certificate})`,
            backgroundSize: "cover",
          }}
        ></div>
        <AnimatePresence>
          {!isMobile && hoveredImage && (
            <motion.img
              key={hoveredImage}
              src={hoveredImage}
              alt=""
              className="hover-preview-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                // Position relative to viewport center
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
              onClick={() => handleClickMobile(item.image)}
            >
              {item.label}
              {isMobile && hoveredImage === item.image && (
                <motion.img
                  key={item.image}
                  src={item.image}
                  alt=""
                  className="hover-preview-image-mobile"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HoverImage;
