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
      {/* Customize With Us Section */}
      <div className="customize-section">
        <div className="customize-image">
          <img
            src="https://ashafabs.com/wp-content/uploads/2024/10/Collage-1.webp"
            alt="Fabric customization process"
          />
        </div>
        <div className="customize-content">
          <motion.h2
            className="section-title"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Customize With Us!
          </motion.h2>

          <motion.p
            className="section-description"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Customizing the fabric is an important service that we offer. Every
            institution is unique in its own way and its uniform should be no
            different. Uniform gives the sense of pride to the people who wear
            it and work for the organization. Therefore we offer various
            customization in fabric. We start from the scratch, Customer can
            tell us their colour preferences; weave and designs and yarn blends.
            Our development team will create the sample fabric as per customer
            specifications.
          </motion.p>

          <div className="process-steps">
            {[
              {
                icon: "https://static.vecteezy.com/system/resources/previews/005/309/629/non_2x/customer-care-logo-template-design-vector.jpg",
                title: "Step 1:",
                desc: "Customer Specification",
              },
              {
                icon: "https://www.creativefabrica.com/wp-content/uploads/2022/10/11/Development-icon-Graphics-41176066-1.jpg",
                title: "Step 2:",
                desc: "Yarn Development",
              },
              {
                icon: "https://static.vecteezy.com/system/resources/previews/045/710/418/non_2x/gear-logo-icon-vector.jpg",
                title: "Step 3:",
                desc: "Weaving",
              },
              {
                icon: "https://www.shutterstock.com/image-vector/round-convenient-icon-like-easy-260nw-2178023117.jpg",
                title: "Step 4:",
                desc: "Processing & Finishing",
              },
              {
                icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC35Q8JcwS5D4jxWTc2zCZ5OI4g5G66B20Xg&s",
                title: "Step 5:",
                desc: "Sample Ready",
              },
            ].map((step, idx) => (
              <motion.div
                className="step"
                key={idx}
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="step-icon">
                  <img src={step.icon} alt={step.desc} />
                </div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

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
