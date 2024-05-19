import React from 'react';
import '../Style/Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Chemical Calculator. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
