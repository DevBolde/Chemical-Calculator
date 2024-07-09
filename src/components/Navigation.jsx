import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Navigation.css'


const Navigation = () => {
  return (
    
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Customer-Info">Customer Info</Link></li>
        </ul>
      </nav>
  );
};

export default Navigation;

