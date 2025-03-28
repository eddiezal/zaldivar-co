import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/" className="header-link">Home</Link></li>
          <li><Link to="/services" className="header-link">Services</Link></li>
          <li><Link to="/work" className="header-link">Work</Link></li>
          <li><Link to="/about" className="header-link">About</Link></li>
          <li><Link to="/contact" className="header-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
