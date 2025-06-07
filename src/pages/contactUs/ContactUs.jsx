import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope className="text-indigo-600 text-xl" />,
    label: "Email",
    value: "ankitsuitings@gmail.com",
  },
  {
    icon: <FaPhone className="text-indigo-600 text-xl" />,
    label: "Phone",
    value: "+91 9413884119",
  },
  {
    icon: <FaMapMarkerAlt className="text-indigo-600 text-xl" />,
    label: "Address",
    value:
      "4-D-7, Opp. S.Tech College,Near Dev Narayan Circle, Patel Nagar, Bhilwara - 311001 (Raj.)",
  },
  {
    icon: <FaClock className="text-indigo-600 text-xl" />,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
];

const ContactUs = () => {
  return (
    <>
      {/* Custom CSS for 800px breakpoint */}
      <style>{`
        @media (min-width: 800px) {
          .flex-wrap-800 {
            display: flex;
            flex-direction: row;
            gap: 4rem; /* equivalent to gap-16 */
          }
        }
        @media (max-width: 799px) {
          .flex-wrap-800 {
            display: flex;
            flex-direction: column;
            gap: 4rem;
          }
        }
      `}</style>

      <div className="bg-white text-gray-800 overflow-hidden">
        {/* Hero Section */}
        <div
          className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="relative z-10 px-6">
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 md:p-10 rounded-xl shadow-md text-center max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-white text-5xl font-semibold mb-4 tracking-wide">
                  Contact Us
                </h1>
                <p className="text-gray-100 text-lg leading-relaxed">
                  We'd love to hear from you. Reach out for inquiries,
                  partnerships, or just to say hello.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="relative py-24 px-6 md:px-24 max-w-7xl mx-auto">
          {/* Subtle Background Shapes */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-200 rounded-full opacity-20 filter blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-200 rounded-full opacity-20 filter blur-3xl"></div>

          {/* flex container with custom breakpoint */}
          <div className="relative z-10 flex-wrap-800">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-3xl p-12"
              style={{ flex: "1 1 50%" }}
            >
              <h2 className="text-3xl font-semibold text-indigo-800 mb-10 border-b border-indigo-200 pb-4">
                Send us a message
              </h2>
              <form className="space-y-8">
                {["Name", "Email", "Message"].map((label, i) => {
                  const isMessage = label === "Message";
                  return (
                    <div key={i} className="relative">
                      {isMessage ? (
                        <textarea
                          rows={5}
                          placeholder={`Enter your ${label.toLowerCase()}`}
                          className="peer w-full rounded-xl border border-gray-300 px-5 pt-5 pb-4 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                        />
                      ) : (
                        <input
                          type={label === "Email" ? "email" : "text"}
                          placeholder={`Enter your ${label.toLowerCase()}`}
                          className="peer w-full rounded-xl border border-gray-300 px-5 pt-5 pb-4 text-gray-900 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
                        />
                      )}
                      <label
                        htmlFor={label}
                        className="absolute left-5 top-5 text-gray-500 text-sm font-medium pointer-events-none transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-indigo-600 peer-focus:text-sm"
                      >
                        {label}
                      </label>
                    </div>
                  );
                })}
                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 rounded-xl shadow-md transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg p-12"
              style={{ flex: "1 1 50%" }}
            >
              <h2 className="text-3xl font-semibold text-indigo-800 mb-10 border-b border-indigo-200 pb-4">
                Get in Touch
              </h2>
              <div className="space-y-8">
                {contactDetails.map(({ label, value, icon }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-5 p-5 rounded-2xl bg-indigo-50 border border-indigo-100 shadow-sm transition hover:shadow-md"
                  >
                    <div className="p-3 bg-indigo-100 rounded-full text-indigo-700 shadow-inner">
                      {icon}
                    </div>
                    <div>
                      <p className="font-semibold text-indigo-900">{label}</p>
                      <p className="text-gray-700 text-sm leading-snug max-w-xs">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-indigo-100 py-20 text-center px-6 md:px-24"
        >
          <h3 className="text-3xl font-semibold text-indigo-900 mb-6 tracking-wide">
            Visit Our Office
          </h3>
          <p className="text-indigo-700 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
            Whether you want to discuss a new project or just say hello, our
            doors are always open. Come by and let's chat over coffee.
          </p>
          <button className="bg-indigo-700 text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-800 transition">
            Get Directions
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default ContactUs;
