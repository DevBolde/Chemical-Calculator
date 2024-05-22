import React from 'react';
import '../Style/Footer.css'
const Footer = (props) => {
  return (
    <footer style={props.style} className="footer">
      <p>&copy; {new Date().getFullYear()} Chemical Calculator. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

