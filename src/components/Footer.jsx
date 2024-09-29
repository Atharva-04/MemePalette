import React from 'react';
import './Footer.css'; // Import CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 MemePalette. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Atharva-04" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/atharva-dhokrat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
