// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 Cloud-Ops. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>|</span>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>|</span>
          <a href="/about">About Us</a>
        </div>
      </div>
    </footer>
  );
};

// This line makes the component available for import
export default Footer;

