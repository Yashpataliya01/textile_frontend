import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../../../data/Home"; // Update this path to your image array

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="px-4 py-16 bg-white">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Photo Gallery
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-4 grid-rows-3 gap-4">
        {/* Image 1 - Tall Left */}
        <motion.div
          className="col-span-1 row-span-2 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedImage(images[0])}
        >
          <motion.img
            src={images[0]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Image 2 - Bottom Left */}
        <motion.div
          className="col-span-1 row-span-1 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onClick={() => setSelectedImage(images[1])}
        >
          <motion.img
            src={images[1]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Image 3 - Tall Centerpiece */}
        <motion.div
          className="col-span-1 row-span-3 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setSelectedImage(images[2])}
        >
          <motion.img
            src={images[2]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Image 4 */}
        <motion.div
          className="col-span-1 row-span-1 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => setSelectedImage(images[3])}
        >
          <motion.img
            src={images[3]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Image 5 */}
        <motion.div
          className="col-span-1 row-span-1 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => setSelectedImage(images[4])}
        >
          <motion.img
            src={images[4]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Image 6 */}
        <motion.div
          className="col-span-1 row-span-2 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onClick={() => setSelectedImage(images[5])}
        >
          <motion.img
            src={images[5]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Image 7 */}
        <motion.div
          className="col-span-2 row-span-4 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => setSelectedImage(images[6])}
        >
          <motion.img
            src={images[6]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>

        {/* Image 8 */}
        <motion.div
          className="col-span-2 row-span-1 overflow-hidden rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          onClick={() => setSelectedImage(images[7])}
        >
          <motion.img
            src={images[7]}
            alt=""
            className="w-full h-full object-cover cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 2, filter: "brightness(1.05)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="max-w-4xl w-full rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
