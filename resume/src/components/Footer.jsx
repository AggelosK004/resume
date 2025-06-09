import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Aggelos Kolitsis. All rights reserved.</p>
          <div className="contact-links">
            <a 
              href="https://github.com/AggelosK004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/aggeloskolitsis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:aggelosk2004@gmail.com" 
              className="contact-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
