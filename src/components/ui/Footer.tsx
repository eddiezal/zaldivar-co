import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-warm-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">Zaldivar & Co.</h2>
            <p className="text-warm-light mb-4">
              Fractional Strategy & Technical Execution, crafted with care.
            </p>
            <p className="text-sm text-warm-paper/70">
              Empowering businesses through strategy, technology, and execution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-earthy-taupe transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-earthy-taupe transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-earthy-taupe transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/case-studies" className="hover:text-earthy-taupe transition">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-earthy-taupe transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Contact</h3>
            <p className="text-warm-paper/80 mb-2">Email: 
              <a
                href="mailto:hello@zaldivar.co"
                className="text-earthy-taupe hover:underline"
              >
                hello@zaldivar.co
              </a>
            </p>
            <p className="text-warm-paper/80 mb-2">Phone: (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://linkedin.com/company/zaldivar-co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earthy-taupe transition"
                aria-label="LinkedIn"
              >
                <span className="text-2xl">🔗</span>
              </a>
              <a
                href="https://twitter.com/zaldivar_co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earthy-taupe transition"
                aria-label="Twitter"
              >
                <span className="text-2xl">🐦</span>
              </a>
              <a
                href="https://instagram.com/zaldivar_co"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earthy-taupe transition"
                aria-label="Instagram"
              >
                <span className="text-2xl">📸</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-earthy-taupe/20 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-warm-paper/60">
            © {currentYear} Zaldivar & Co. All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-sm text-warm-paper/70 hover:text-earthy-taupe transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-sm text-warm-paper/70 hover:text-earthy-taupe transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
