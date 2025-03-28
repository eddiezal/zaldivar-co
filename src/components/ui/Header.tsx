import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header bg-26313E">
      <nav>
        <ul>
          <li><Link to="/" className="header-link text-C5A98D">Home</Link></li>
          <li><Link to="/services" className="header-link text-C5A98D">Services</Link></li>
          <li><Link to="/work" className="header-link text-C5A98D">Work</Link></li>
          <li><Link to="/about" className="header-link text-C5A98D">About</Link></li>
          <li><Link to="/contact" className="header-link text-C5A98D">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
