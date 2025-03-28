import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/ui/Services';

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="section bg-C5A98D">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title text-center">Our Services</h1>
            <p className="section-subtitle text-center">
              We provide comprehensive strategic and technical solutions
              tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>
      
      <Services />
      
      {/* Additional service details will go here */}
      <section className="section bg-C5A98D">
        <div className="container">
          <h2 className="text-2xl font-serif font-semibold mb-6 text-26313E">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-C5A98D p-6 rounded-lg shadow-md border border-earthy-taupe/20">
              <div className="w-12 h-12 bg-earthy-taupe rounded-full flex items-center justify-center text-warm-white mb-4">
                1
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-26313E">Discovery</h3>
              <p className="text-26313E/80">We begin by deeply understanding your business, goals, and challenges.</p>
            </div>
            <div className="bg-C5A98D p-6 rounded-lg shadow-md border border-earthy-taupe/20">
              <div className="w-12 h-12 bg-earthy-taupe rounded-full flex items-center justify-center text-warm-white mb-4">
                2
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-26313E">Strategy</h3>
              <p className="text-26313E/80">We develop a tailored approach based on your unique situation and objectives.</p>
            </div>
            <div className="bg-C5A98D p-6 rounded-lg shadow-md border border-earthy-taupe/20">
              <div className="w-12 h-12 bg-earthy-taupe rounded-full flex items-center justify-center text-warm-white mb-4">
                3
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-26313E">Execution</h3>
              <p className="text-26313E/80">We implement solutions with precision and adapt based on performance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
