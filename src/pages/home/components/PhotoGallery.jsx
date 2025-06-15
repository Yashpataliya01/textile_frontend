import React, { useEffect, useState } from "react";
import { X, ZoomIn, Heart, Share2 } from "lucide-react";

// error handling for image loading
import NoData from "../../../assets/Images/other/NoData.jpg";

const PhotoGallery = () => {
  const API_ORIGIN = import.meta.env.VITE_ENCODED_URL;
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_ORIGIN}/api/galaries/getGalaries`);
        const data = await res.json();
        setImages(data.data || []);
      } catch (err) {
        console.error("Error fetching gallery images:", err);
      }
    })();
  }, []);

  useEffect(() => {
    const isModalOpen = selectedImage || viewAllOpen;
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage, viewAllOpen]);

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
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
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
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A curated collection of visual stories
          </p>
        </div>

        {images.length > 0 ? (
          <div className="max-w-7xl mx-auto">
            <div className="block md:hidden space-y-6">
              {images.slice(0, 8).map((img, idx) => (
                <ImageCard
                  key={idx}
                  src={img?.image}
                  index={idx}
                  className="w-full h-64 rounded-2xl"
                  onClick={() =>
                    setSelectedImage({ src: img.image, index: idx })
                  }
                />
              ))}
            </div>

            <div className="hidden md:block relative">
              <div className="flex gap-6 mb-6 h-96">
                {images[0] && (
                  <ImageCard
                    src={images[0].image}
                    index={0}
                    className="w-1/4 h-full rounded-2xl"
                    onClick={() =>
                      setSelectedImage({ src: images[0].image, index: 0 })
                    }
                  />
                )}
                <div className="w-2/5 flex flex-col gap-6">
                  {images[1] && (
                    <ImageCard
                      src={images[1].image}
                      index={1}
                      className="h-2/3 rounded-2xl"
                      onClick={() =>
                        setSelectedImage({ src: images[1].image, index: 1 })
                      }
                    />
                  )}
                  {images[2] && (
                    <ImageCard
                      src={images[2].image}
                      index={2}
                      className="h-1/3 rounded-2xl"
                      onClick={() =>
                        setSelectedImage({ src: images[2].image, index: 2 })
                      }
                    />
                  )}
                </div>
                {images[3] && (
                  <ImageCard
                    src={images[3].image}
                    index={3}
                    className="w-1/3 h-full rounded-2xl"
                    onClick={() =>
                      setSelectedImage({ src: images[3].image, index: 3 })
                    }
                  />
                )}
              </div>

              <div className="flex gap-6 mb-6 h-72">
                {images[4] && (
                  <ImageCard
                    src={images[4].image}
                    index={4}
                    className="w-2/5 h-full rounded-2xl"
                    onClick={() =>
                      setSelectedImage({ src: images[4].image, index: 4 })
                    }
                  />
                )}
                {images[5] && (
                  <div className="w-1/5 h-full">
                    <ImageCard
                      src={images[5].image}
                      index={5}
                      className="h-full rounded-2xl"
                      onClick={() =>
                        setSelectedImage({ src: images[5].image, index: 5 })
                      }
                    />
                  </div>
                )}
                {images[6] && (
                  <ImageCard
                    src={images[6].image}
                    index={6}
                    className="w-2/5 h-full rounded-2xl"
                    onClick={() =>
                      setSelectedImage({ src: images[6].image, index: 6 })
                    }
                  />
                )}
              </div>

              <div className="flex gap-6 mb-6 h-64">
                {images[7] && (
                  <div className="w-1/3 flex flex-col gap-6">
                    <ImageCard
                      src={images[7].image}
                      index={7}
                      className="h-full rounded-2xl"
                      onClick={() =>
                        setSelectedImage({ src: images[7].image, index: 7 })
                      }
                    />
                  </div>
                )}
                {images[8] && (
                  <ImageCard
                    src={images[8].image}
                    index={8}
                    className="w-1/4 h-full rounded-2xl"
                    onClick={() =>
                      setSelectedImage({ src: images[8].image, index: 8 })
                    }
                  />
                )}
                {images[9] && (
                  <ImageCard
                    src={images[9].image}
                    index={9}
                    className="w-5/12 h-full rounded-2xl"
                    onClick={() =>
                      setSelectedImage({ src: images[9].image, index: 9 })
                    }
                  />
                )}
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setViewAllOpen(true)}
              >
                View All
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <img
              src={NoData}
              alt="No Data Found"
              className="w-64 h-64 object-contain mb-6"
            />
            <p className="text-gray-600 text-xl font-medium">
              No images found in the gallery.
            </p>
          </div>
        )}
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
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

      {viewAllOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm overflow-auto"
          onClick={() => setViewAllOpen(false)}
        >
          <button
            className="absolute top-6 right-6 z-60 p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300"
            onClick={() => setViewAllOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-6xl w-full bg-white rounded-3xl p-8 shadow-2xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: "90vh" }}
          >
            <h3 className="text-3xl font-semibold mb-6">All Images</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {images.map((img, idx) => (
                <ImageCard
                  key={idx}
                  src={img?.image}
                  index={idx}
                  className="h-48 rounded-2xl"
                  onClick={() =>
                    setSelectedImage({ src: img.image, index: idx })
                  }
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
