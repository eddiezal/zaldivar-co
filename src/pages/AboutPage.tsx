import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="section-title text-center">About Zaldivar & Co.</h1>
          <p className="section-subtitle text-center">
            We're a specialized team of strategists and technologists helping businesses 
            thrive in an increasingly complex digital landscape.
          </p>
        </motion.div>

        {/* About content placeholder - to be developed further */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">Our Story</h2>
            <p className="mb-4">
              Zaldivar & Co. was founded with a clear mission: to provide businesses with
              the strategic guidance and technical expertise they need without the
              overhead of a full-time executive team.
            </p>
            <p>
              We believe that every business deserves access to top-tier talent, regardless
              of its size or stage. Our fractional approach allows companies to leverage
              our expertise when they need it most.
            </p>
          </div>
          <div className="bg-muted-navy/5 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-4">Our Approach</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-earthy-taupe mr-2">✓</span>
                <span>We prioritize deep understanding of your business challenges</span>
              </li>
              <li className="flex items-start">
                <span className="text-earthy-taupe mr-2">✓</span>
                <span>We develop tailored strategies based on data and experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-earthy-taupe mr-2">✓</span>
                <span>We execute with precision and transparency</span>
              </li>
              <li className="flex items-start">
                <span className="text-earthy-taupe mr-2">✓</span>
                <span>We measure success through tangible business outcomes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
