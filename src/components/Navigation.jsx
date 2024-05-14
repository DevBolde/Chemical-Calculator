import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li style={{ color: 'white' }}><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

