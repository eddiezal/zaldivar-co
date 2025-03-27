import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Case study data - to be replaced with actual data from Firestore later
const caseStudies = [
  {
    id: 1,
    title: 'SaaS Growth Strategy',
    category: 'Strategy',
    imageUrl: '/placeholder-case-study-1.jpg',
    description: 'Implemented go-to-market strategy for a B2B SaaS company, resulting in 150% growth in ARR.',
  },
  {
    id: 2,
    title: 'Marketing Automation',
    category: 'Technology',
    imageUrl: '/placeholder-case-study-2.jpg',
    description: 'Designed and implemented automation workflows, reducing manual tasks by 75%.',
  },
  {
    id: 3,
    title: 'E-commerce Optimization',
    category: 'Strategy',
    imageUrl: '/placeholder-case-study-3.jpg',
    description: 'Optimized conversion funnel for an e-commerce brand, increasing conversion rate by 32%.',
  },
  {
    id: 4,
    title: 'Cloud Infrastructure',
    category: 'Technology',
    imageUrl: '/placeholder-case-study-4.jpg',
    description: 'Migrated legacy systems to cloud infrastructure, reducing costs by 40%.',
  },
];

const CaseStudiesPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', 'Strategy', 'Technology'];
  
  const filteredCaseStudies = filter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filter);

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="section-title">Case Studies</h1>
          <p className="section-subtitle">
            Explore how we've helped our clients achieve their business goals through
            strategic thinking and technical execution.
          </p>
        </motion.div>
        
        {/* Filter buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-all ${
                filter === category
                  ? 'bg-earthy-taupe text-warm-white'
                  : 'bg-muted-navy/5 hover:bg-earthy-taupe/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-warm-white rounded-lg overflow-hidden shadow-md border border-earthy-taupe/10"
            >
              <div className="h-48 bg-muted-navy/10 flex items-center justify-center">
                {/* Placeholder for actual images */}
                <span className="text-3xl">📊</span>
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-wider text-earthy-taupe font-medium">
                  {study.category}
                </span>
                <h3 className="text-xl font-serif font-semibold mt-2 mb-3">{study.title}</h3>
                <p className="text-muted-navy/80 mb-4">{study.description}</p>
                <a 
                  href={`/case-studies/${study.id}`} 
                  className="text-earthy-taupe hover:
