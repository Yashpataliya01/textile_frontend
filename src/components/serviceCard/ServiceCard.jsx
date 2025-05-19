import React from "react";

const ServiceCard = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Need Any Textiles Services Help?
        </h1>

        {/* Orange dots and line decoration */}
        <div className="flex items-center mb-6">
          <div className="flex space-x-1">
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
          </div>
          <div className="h-1 w-12 bg-red-500 ml-2"></div>
        </div>

        <p className="text-lg mb-8 max-w-2xl">
          Have questions or need more information? We're here to help. Contact
          us now to speak with one of our textile expert, and let's start
          creating something extraordinary together.
        </p>

        {/* Buttons container */}
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-6 rounded-md font-medium">
            Enquire Now
          </button>
          <button className="bg-white text-gray-900 hover:bg-gray-100 py-3 px-6 rounded-md font-medium flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            +91 9999255392
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
