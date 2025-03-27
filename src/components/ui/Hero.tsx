import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-warm-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.h1 
          className="text-5xl md:text-6xl font-serif font-bold text-muted-navy mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Zaldivar & Co.
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-earthy-taupe max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Leading fractional strategy and technical execution—crafted with care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#services" 
            className="inline-block bg-earthy-taupe text-warm-white px-8 py-3 rounded-md text-lg font-medium transition-all hover:bg-muted-navy"
          >
            Explore Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;