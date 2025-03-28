import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-26313E text-C5A98D pt-12 pb-8">
      <div className="container">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-serif font-semibold text-C9A66B font-serif font-semibold mb-4">Zaldivar & Co.</h2>
            <p className="text-C5A98D mb-4">
              Fractional Strategy & Technical Execution, crafted with care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl leading-relaxed text-26313E/90 font-serif font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:text-C9A66B transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-C9A66B transition">About Us</a>
              </li>
              <li>
                <a href="/services" className="hover:text-C9A66B transition">Services</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl leading-relaxed text-26313E/90 font-serif font-medium mb-4">Contact</h3>
            <p>Email: <a href="mailto:hello@zaldivar.co" className="text-C9A66B hover:underline">hello@zaldivar.co</a></p>
            <p>Phone: (123) 456-7890</p>
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
            <a href="/privacy-policy" className="text-sm text-warm-paper/70 hover:text-C9A66B transition">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-warm-paper/70 hover:text-C9A66B transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
