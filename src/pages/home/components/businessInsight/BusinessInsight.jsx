import React from "react";
import { motion } from "framer-motion";
import "./BusinessInsight.css";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const BusinessInsight = () => {
  return (
    <div className="business-insight-container">
      {/* Business Insight Section */}
      <div className="insight-section">
        <motion.h2
          className="section-title"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Business Insight
        </motion.h2>

        <motion.p
          className="section-description"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          We are delivering next-generation textile production processes that
          will be radically efficient & sustainable manufacturer
        </motion.p>

        <div className="stats-container">
          {[
            {
              icon: "https://www.shutterstock.com/image-vector/client-loyalty-customer-satisfaction-icon-600nw-2174562919.jpg",
              number: "15+",
              label: "Years in Business",
            },
            {
              icon: "https://thumbs.dreamstime.com/b/black-textile-isolated-vector-icon-simple-element-illustration-industry-concept-icons-editable-logo-symbol-design-white-143598601.jpg",
              number: "5,00,000+",
              label: "Visitors Count",
            },
            {
              icon: "https://www.shutterstock.com/image-vector/customer-vector-logo-sign-symbol-600nw-2522587743.jpg",
              number: "1,600+",
              label: "Satisfied Clients",
            },
          ].map((stat, idx) => (
            <motion.div
              className="stat-item"
              key={idx}
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.label} />
              </div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessInsight;
