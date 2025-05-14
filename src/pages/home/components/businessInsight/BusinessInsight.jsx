import React, { useEffect, useState } from "react";
import "./BusinessInsight.css";

const BusinessInsight = () => {
  // State to track which elements are visible for animations
  const [visibleElements, setVisibleElements] = useState({
    customizeSection: false,
    insightSection: false,
    stats: false,
  });

  // Set up intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = entry.target.id;
          setVisibleElements((prev) => ({
            ...prev,
            [targetId]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe sections
    const sections = document.querySelectorAll(".scroll-animate");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="business-insight-container">
      {/* Customize With Us Section */}
      <div
        id="customizeSection"
        className={`customize-section scroll-animate ${
          visibleElements.customizeSection ? "visible" : ""
        }`}
      >
        <div className="customize-image">
          <img
            src="https://ashafabs.com/wp-content/uploads/2024/10/Collage-1.webp"
            alt="Fabric customization process"
          />
        </div>
        <div className="customize-content">
          <h2 className="section-title">Customize With Us!</h2>
          <p className="section-description">
            Customizing the fabric is an important service that we offer. Every
            institution is unique in its own way and its uniform should be no
            different. Uniform gives the sense of pride to the people who wear
            it and work for the organization. Therefore we offer various
            customization in fabric. We start from the scratch, Customer can
            tell us their colour preferences; weave and designs and yarn blends.
            Our development team will create the sample fabric as per customer
            specifications.
          </p>

          <div className="process-steps">
            <div className="step">
              <div className="step-icon">
                <img src="/icons/thumbs-up.svg" alt="Specification" />
              </div>
              <div className="step-content">
                <h3>Step 1:</h3>
                <p>Customer Specification</p>
              </div>
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/icons/yarn.svg" alt="Yarn" />
              </div>
              <div className="step-content">
                <h3>Step 2:</h3>
                <p>Yarn Development</p>
              </div>
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/icons/weaving.svg" alt="Weaving" />
              </div>
              <div className="step-content">
                <h3>Step 3:</h3>
                <p>Weaving</p>
              </div>
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/icons/processing.svg" alt="Processing" />
              </div>
              <div className="step-content">
                <h3>Step 4:</h3>
                <p>Processing & Finishing</p>
              </div>
            </div>

            <div className="step">
              <div className="step-icon">
                <img src="/icons/sample.svg" alt="Sample" />
              </div>
              <div className="step-content">
                <h3>Step 5:</h3>
                <p>Sample Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Insight Section */}
      <div
        id="insightSection"
        className={`insight-section scroll-animate ${
          visibleElements.insightSection ? "visible" : ""
        }`}
      >
        <h2 className="section-title">Business Insight</h2>
        <p className="section-description">
          We are delivering next-generation textile production processes that
          will be radically efficient & sustainable manufacturer
        </p>

        <div
          id="stats"
          className={`stats-container scroll-animate ${
            visibleElements.stats ? "visible" : ""
          }`}
        >
          <div className="stat-item">
            <div className="stat-icon">
              <img src="/icons/calendar.svg" alt="Years" />
            </div>
            <h3 className="stat-number">33+</h3>
            <p className="stat-label">Years in Business</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <img src="/icons/fabric.svg" alt="Production" />
            </div>
            <h3 className="stat-number">8.4M+</h3>
            <p className="stat-label">Meters Annually</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              <img src="/icons/clients.svg" alt="Clients" />
            </div>
            <h3 className="stat-number">600+</h3>
            <p className="stat-label">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInsight;
