import React from "react";
import { lazy, Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";

// Textile themed loading component
const TextileLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50">
      <div className="relative w-32 h-32 mb-6">
        {/* Bobbin/Spool animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Center circle/spool */}
          <div className="absolute inset-0 m-auto w-16 h-16 bg-orange-600 rounded-full border-8 border-orange-400 animate-pulse"></div>

          {/* Thread winding animation */}
          <div className="absolute inset-0 m-auto w-28 h-28 border-4 border-dashed border-transparent border-t-orange-400 border-r-orange-400 rounded-full animate-spin"></div>
          <div className="absolute inset-0 m-auto w-24 h-24 border-4 border-dashed border-transparent border-b-indigo-500 border-l-indigo-500 rounded-full animate-spin-slow"></div>

          {/* Thread strands coming off the spool */}
          <div className="absolute top-1/2 -right-8 w-12 h-1 bg-orange-400 animate-pulse"></div>
          <div className="absolute -top-8 left-1/2 w-1 h-12 bg-indigo-500 animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-12 h-1 bg-orange-400 animate-pulse"></div>
          <div className="absolute -bottom-8 left-1/2 w-1 h-12 bg-indigo-500 animate-pulse"></div>
        </div>

        {/* Shuttle motion animation */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gray-200 rounded-full animate-bounce"></div>
      </div>

      {/* Weaving pattern */}
      <div className="w-32 h-12 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 flex justify-between">
          {[...Array(8)].map((_, i) => (
            <div key={`v-${i}`} className="w-0.5 h-12 bg-orange-500"></div>
          ))}
        </div>

        <div className="relative">
          {[...Array(4)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="w-32 h-0.5 bg-indigo-500 my-2.5"
              style={{
                animation: "weaveMotion 1.8s infinite",
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <p className="text-white font-medium mt-8 text-center">
        <span className="inline-block animate-pulse">Weaving</span> your
        experience...
      </p>

      {/* Add inline CSS for the custom animation */}
      <style jsx="true">{`
        @keyframes weaveMotion {
          0% {
            transform: translateX(-16px);
          }
          50% {
            transform: translateX(16px);
          }
          100% {
            transform: translateX(-16px);
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

// import Components
const Navbar = lazy(() => import("../components/navbar/Navbar"));

const Public = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<TextileLoader />}>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </Suspense>
  );
};

export default Public;
