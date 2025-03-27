import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="bg-warm-white p-6 rounded-lg shadow-md border border-earthy-taupe/20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="w-12 h-12 bg-earthy-taupe rounded-full flex items-center justify-center text-warm-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3 text-muted-navy">{title}</h3>
      <p className="text-muted-navy/80">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'Fractional Leadership',
      description: 'Strategic guidance and leadership to drive your business forward without the overhead of a full-time executive.',
      icon: '👨‍💼',
    },
    {
      title: 'Go-to-Market Strategy',
      description: 'Comprehensive planning for product launches, market penetration, and customer acquisition.',
      icon: '🚀',
    },
    {
      title: 'Automation & Infrastructure',
      description: 'Streamline your operations with custom automation solutions and robust infrastructure design.',
      icon: '⚙️',
    },
    {
      title: 'Digital Advisory',
      description: 'Expert consultation on digital transformation, technology selection, and implementation.',
      icon: '💻',
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted-navy/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-muted-navy mb-4">Our Services</h2>
          <p className="text-lg text-muted-navy/80 max-w-2xl mx-auto">
            We provide a comprehensive suite of strategic and technical services to help your business thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;