import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope className="text-indigo-600 text-xl" />,
    label: "Email",
    value: "info@shivshaktisynthetics.com",
  },
  {
    icon: <FaPhone className="text-indigo-600 text-xl" />,
    label: "Phone",
    value: "+91 9876543210",
  },
  {
    icon: <FaMapMarkerAlt className="text-indigo-600 text-xl" />,
    label: "Address",
    value: "123 Fabric Lane, Surat, Gujarat, India",
  },
  {
    icon: <FaClock className="text-indigo-600 text-xl" />,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
];

const Contact = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80")',
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

      {/* Contact Section */}
      <div className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-white to-indigo-50 overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div className="grid md:grid-cols-2 gap-14 items-start relative z-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-indigo-800">
              Send us a message
            </h2>
            <form className="space-y-6">
              {["Name", "Email", "Message"].map((label, i) => (
                <div key={i} className="relative">
                  <input
                    type={label === "Email" ? "email" : "text"}
                    className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    placeholder=" "
                    rows={label === "Message" ? 5 : undefined}
                    as={label === "Message" ? "textarea" : "input"}
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                    {label}
                  </label>
                </div>
              ))}
              <button
                type="submit"
                className="bg-indigo-700 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-indigo-800">
              Get in Touch
            </h2>
            <div className="space-y-6 text-gray-600">
              {contactDetails.map(({ label, value, icon }, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 bg-white/80 p-5 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100"
                >
                  <div className="mt-1">{icon}</div>
                  <div>
                    <p className="font-semibold text-gray-800">{label}</p>
                    <p className="text-sm">{value}</p>
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
        className="bg-indigo-50 py-20 text-center px-6 md:px-20"
      >
        <h3 className="text-3xl font-semibold text-indigo-800 mb-4">
          Visit Our Office
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Whether you want to discuss a new project or just say hello, our doors
          are always open. Come by and let's chat over coffee.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
          Get Directions
        </button>
      </motion.div>
    </div>
  );
};

export default Contact;
