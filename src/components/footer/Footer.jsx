import React from "react";
import "./Footer.css"; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Textura</h2>
          <p>
            Quality textiles crafted for comfort, style, and sustainability.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@textura.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Surat, Gujarat, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Textura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
