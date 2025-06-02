import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

import logo from "../../assets/Images/Home/Logo.jpg";

const Footer = () => {
  // Define the links array correctly
  const quickLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Fabric Library",
      link: "/library",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-white text-black pt-16 pb-6 relative overflow-hidden">
      {/* Decorative textile patterns in background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full rotate-45"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
          }}
        ></div>
      </div>

      {/* Decorative thread elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10">
        <div className="absolute w-full h-full rounded-full border-4 border-dashed border-orange-500 opacity-20"></div>
        <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full border-4 border-dashed border-orange-300 opacity-20"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-24 h-24 -mb-10 -ml-10">
        <div className="absolute w-full h-full rounded-full border-4 border-dashed border-teal-500 opacity-20"></div>
        <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full border-4 border-dashed border-teal-300 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              {/* Scissors icon in a stylized badge */}
              <img src={logo} alt="" className="h-16 w-auto" />
            </div>
            <p className="text-black">
              Founded in 2011, "Shiv Shakti Synthetics" under "Ankit Suitings"
              delivers superior uniform fabrics with refined design, texture,
              and durability.
            </p>
            <div className="pt-2">
              <div className="h-1 w-12 bg-orange-500 mb-1"></div>
              <div className="h-1 w-24 bg-orange-500"></div>
            </div>
          </div>

          {/* Quick Links - FIXED */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="inline-block w-8 h-px bg-orange-500 mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((item, index) => (
                <li
                  key={index}
                  className="transform hover:translate-x-2 transition-transform duration-300"
                >
                  <Link
                    to={item.link}
                    className="flex items-center text-black hover:text-orange-400"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full inline-block mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="inline-block w-8 h-px bg-orange-500 mr-2"></span>
              Our Services
            </h3>
            <div className="space-y-4">
              {[
                "Custom Fabric Production",
                "Textile Design Consultation",
                "Sustainable Materials",
                "Fabric Testing & QA",
                "Bulk Manufacturing",
                "Global Distribution",
              ].map((service, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-orange-500 flex-shrink-0 mt-1"></div>
                  <p className="text-black ml-3">{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="inline-block w-8 h-px bg-orange-500 mr-2"></span>
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-black ml-3">ankitsuitings@gmail.com</p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-black ml-3">+91 9413884119</p>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-black ml-3">
                  4-D-7, Opp. S.Tech College,
                  <br />
                  Near Dev Narayan Circle, Patel Nagar, Bhilwara - 311001 (Raj.)
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">
                Join our newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-black px-4 py-2 rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md transition-colors duration-300">
                  Send
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Social Media and Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors duration-300 bg-transparent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex flex-col md:flex-row items-center text-gray-400 text-sm">
              <div className="mr-0 md:mr-6 mb-2 md:mb-0">
                &copy; {new Date().getFullYear()} Ankit Suitings. All rights
                reserved.
              </div>
              <div className="flex space-x-4 z-10">
                <a
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fabric Swatch Element */}
        <div className="absolute right-12 -bottom-10 hidden lg:block">
          <div className="flex">
            {[
              "bg-orange-500",
              "bg-indigo-600",
              "bg-teal-500",
              "bg-rose-500",
              "bg-amber-500",
            ].map((color, index) => (
              <div
                key={index}
                className={`w-8 h-24 ${color} transform rotate-12 -mr-2 rounded-sm shadow-lg`}
                style={{ opacity: 0.85 - index * 0.1 }}
              ></div>
            ))}
          </div>
        </div>

        {/* Added textile bobbin decoration */}
        <div className="absolute left-1/4 bottom-16 hidden lg:block opacity-10">
          <div className="w-20 h-20 border-8 border-orange-400 rounded-full relative">
            <div className="absolute inset-0 border-4 border-dashed border-white rounded-full animate-spin-slow"></div>
            <div className="absolute h-24 w-1 bg-orange-400 -top-24 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
