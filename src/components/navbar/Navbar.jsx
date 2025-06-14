import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

import logo from "../../assets/Images/Home/Logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fabricDropdownOpen, setFabricDropdownOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname; // Get the current path

  const handleDropdownClick = () => setFabricDropdownOpen(!fabricDropdownOpen);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setFabricDropdownOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const getActiveClass = (path) => {
    return currentPath === path ? "active-link" : "";
  };

  return (
    <header className="bg-white shadow-md top-0 left-0 w-full z-50 h-24">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden [@media(min-width:942px)]:flex items-center space-x-6 font-medium text-gray-700">
          <li className="list-none nav-item">
            <Link
              to="/"
              className={`transition-all duration-300 transform hover:text-blue-500 hover:scale-105 ${getActiveClass(
                "/"
              )}`}
            >
              Home
            </Link>
          </li>

          <li className="list-none nav-item">
            <Link
              to="/about"
              className={`transition-all duration-300 transform hover:text-blue-500 hover:scale-105 ${getActiveClass(
                "/about"
              )}`}
            >
              About Us
            </Link>
          </li>

          {/* Dropdown */}
          <div className="relative group nav-item">
            <Link to="/library">
              <button
                className={`transition-all duration-300 transform hover:text-blue-500 hover:scale-105 flex items-center gap-1 ${getActiveClass(
                  "/library"
                )}`}
              >
                Fabric Library
              </button>
            </Link>
          </div>

          <li className="list-none nav-item">
            <Link
              to="/blogs"
              className={`transition-all duration-300 transform hover:text-blue-500 hover:scale-105 ${getActiveClass(
                "/blogs"
              )}`}
            >
              Blogs
            </Link>
          </li>
          <li className="list-none nav-item">
            <Link
              to="/contact"
              className={`transition-all duration-300 transform hover:text-blue-500 hover:scale-105 ${getActiveClass(
                "/contact"
              )}`}
            >
              Contact Us
            </Link>
          </li>
        </nav>

        {/* Hamburger */}
        <button
          className="[@media(min-width:942px)]:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
          <span className="w-6 h-0.5 bg-gray-800 rounded"></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`fixed [@media(min-width:942px)]:hidden top-0 left-0 h-full w-full bg-white transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <a href="#" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8" />
          </a>
          <button
            className="text-gray-700 text-2xl font-bold"
            onClick={closeMobileMenu}
          >
            ×
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-lg font-medium text-gray-700 px-6 py-8">
          <li
            className={getActiveClass("/")}
            onClick={() => {
              closeMobileMenu();
            }}
          >
            <Link
              to="/"
              className="transition-all duration-300 transform hover:text-blue-500 hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li
            className={getActiveClass("/about")}
            onClick={() => {
              closeMobileMenu();
            }}
          >
            <Link
              to="/about"
              className="transition-all duration-300 transform hover:text-blue-500 hover:scale-105"
            >
              About Us
            </Link>
          </li>

          {/* Fabric Dropdown in Mobile */}
          <li>
            <Link
              to="/library"
              onClick={() => {
                closeMobileMenu();
              }}
              className="flex justify-between w-full"
            >
              <span className={getActiveClass("/library")}>Fabric Library</span>
            </Link>
          </li>
          <li
            className={getActiveClass("/blogs")}
            onClick={() => {
              closeMobileMenu();
            }}
          >
            <Link
              to="/blogs"
              className="transition-all duration-300 transform hover:text-blue-500 hover:scale-105"
            >
              Blogs
            </Link>
          </li>
          <li
            className={getActiveClass("/contact")}
            onClick={() => {
              closeMobileMenu();
            }}
          >
            <Link
              to="/contact"
              className="transition-all duration-300 transform hover:text-blue-500 hover:scale-105"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
