// src/components/ui/About.tsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-warm-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              We're a boutique consultancy that bridges the gap between strategy and execution.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square bg-muted-navy/10 rounded-lg flex items-center justify-center text-8xl">
                {/* Placeholder for founder image */}
                👤
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-serif font-bold text-muted-navy mb-4">Our Story</h3>
              <p className="text-muted-navy/80 mb-6">
                Zaldivar & Co. was founded with a simple mission: provide strategic clarity and technical excellence to businesses ready to transform. We combine decades of leadership experience with cutting-edge technical knowledge.
              </p>
              <p className="text-muted-navy/80 mb-6">
                Our unique approach bridges the gap between high-level strategy and practical implementation, ensuring your vision becomes reality.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center">
                  <div className="mr-3 text-2xl">🌟</div>
                  <div>
                    <h4 className="font-bold">10+ Years</h4>
                    <p className="text-sm text-muted-navy/70">Industry Experience</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="mr-3 text-2xl">🏆</div>
                  <div>
                    <h4 className="font-bold">50+</h4>
                    <p className="text-sm text-muted-navy/70">Successful Projects</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;