import React from "react";
import { lazy, Suspense, useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";

// import Components
const Navbar = lazy(() => import("../components/navbar/Navbar"));

const Public = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </Suspense>
  );
};

export default Public;
