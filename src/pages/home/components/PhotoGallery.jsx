import React, { useState } from "react";
import { X, ZoomIn, Heart, Share2 } from "lucide-react";
import { images } from "../../../data/Home";

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());

  const toggleLike = (index, e) => {
    e.stopPropagation();
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  const ImageCard = ({ src, index, className, onClick, style }) => (
    <div
      className={`group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${className}`}
      onClick={onClick}
      style={style}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

      {/* Clean action buttons */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          onClick={(e) => toggleLike(index, e)}
          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
            likedImages.has(index)
              ? "bg-red-500 text-white"
              : "bg-white/90 text-gray-700 hover:bg-white"
          }`}
        >
          <Heart
            className={`w-4 h-4 ${
              likedImages.has(index) ? "fill-current" : ""
            }`}
          />
        </button>
        <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white transition-all duration-300 hover:scale-110">
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <section className="min-h-screen px-6 py-20 bg-gray-50">
        {/* Clean header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of visual stories
          </p>
        </div>

        {/* Dynamic Masonry-style Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Simple stacked layout */}
          <div className="block md:hidden space-y-6">
            {images.slice(0, 8).map((img, idx) => (
              <ImageCard
                key={idx}
                src={img}
                index={idx}
                className="w-full h-64 rounded-2xl"
                onClick={() => setSelectedImage({ src: img, index: idx })}
              />
            ))}
          </div>

          {/* Desktop: Complex asymmetrical layout */}
          <div className="hidden md:block relative">
            {/* Row 1: Irregular heights and widths */}
            <div className="flex gap-6 mb-6 h-96">
              <ImageCard
                src={images[0]}
                index={0}
                className="w-1/4 h-full rounded-2xl"
                onClick={() => setSelectedImage({ src: images[0], index: 0 })}
              />
              <div className="w-2/5 flex flex-col gap-6">
                <ImageCard
                  src={images[1]}
                  index={1}
                  className="h-2/3 rounded-2xl"
                  onClick={() => setSelectedImage({ src: images[1], index: 1 })}
                />
                <ImageCard
                  src={images[2]}
                  index={2}
                  className="h-1/3 rounded-2xl"
                  onClick={() => setSelectedImage({ src: images[2], index: 2 })}
                />
              </div>
              <ImageCard
                src={images[3]}
                index={3}
                className="w-1/3 h-full rounded-2xl"
                onClick={() => setSelectedImage({ src: images[3], index: 3 })}
              />
            </div>

            {/* Row 2: Different proportions */}
            <div className="flex gap-6 mb-6 h-72">
              <ImageCard
                src={images[4]}
                index={4}
                className="w-2/5 h-full rounded-2xl"
                onClick={() => setSelectedImage({ src: images[4], index: 4 })}
              />
              <div className="w-1/5 h-full">
                <ImageCard
                  src={images[5]}
                  index={5}
                  className="h-full rounded-2xl"
                  onClick={() => setSelectedImage({ src: images[5], index: 5 })}
                />
              </div>
              <ImageCard
                src={images[6]}
                index={6}
                className="w-2/5 h-full rounded-2xl"
                onClick={() => setSelectedImage({ src: images[6], index: 6 })}
              />
            </div>

            {/* Row 3: Wide and narrow mix */}
            <div className="flex gap-6 mb-6 h-64">
              <div className="w-1/3 flex flex-col gap-6">
                <ImageCard
                  src={images[7]}
                  index={7}
                  className="h-full rounded-2xl"
                  onClick={() => setSelectedImage({ src: images[7], index: 7 })}
                />
              </div>
              <ImageCard
                src={images[8]}
                index={8}
                className="w-1/4 h-full rounded-2xl"
                onClick={() => setSelectedImage({ src: images[8], index: 8 })}
              />
              <ImageCard
                src={images[9]}
                index={9}
                className="w-5/12 h-full rounded-2xl"
                onClick={() => setSelectedImage({ src: images[9], index: 9 })}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 z-60 p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt="Selected"
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <button
                    onClick={(e) => toggleLike(selectedImage.index, e)}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      likedImages.has(selectedImage.index)
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        likedImages.has(selectedImage.index)
                          ? "fill-current"
                          : ""
                      }`}
                    />
                  </button>
                  <button className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
