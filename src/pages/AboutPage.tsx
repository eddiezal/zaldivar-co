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
          <h1 className="text-center">About Zaldivar & Co.</h1>
          <p className="section-subtitle text-center">
            We're a specialized team of strategists and technologists helping businesses thrive in an increasingly complex digital landscape.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-26313E">Our Story</h2>
            <p className="text-26313E/80">
              Zaldivar & Co. was founded with a clear mission: to provide businesses with
              the strategic guidance and technical expertise they need without the
              overhead of a full-time executive team.
            </p>
          </div>
          <div className="bg-26313E/5 p-8 rounded-lg">
            <h2 className="text-26313E">Our Approach</h2>
            <ul className="space-y-4">
              <li>✓ We prioritize understanding of your business challenges.</li>
              <li>✓ We develop tailored strategies based on data and experience.</li>
              <li>✓ We execute with precision and transparency.</li>
              <li>✓ We measure success through tangible business outcomes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
