// src/components/ui/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Zaldivar & Co. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
// This Footer component provides a simple copyright notice for the website.
// It dynamically displays the current year using JavaScript's Date object.