'use client';

import React from 'react';
import { Code, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const TechStack = () => {
  const technologies = [
    {
      name: "Next.js",
      benefit: "Blazing-fast websites with better Google rankings",
      icon: Zap,
      highlight: "Speed + SEO"
    },
    {
      name: "MERN Stack",
      benefit: "Scalable backend that grows with your business",
      icon: Code,
      highlight: "Future-proof"
    },
    {
      name: "Firebase",
      benefit: "Secure, reliable, and real-time infrastructure",
      icon: Shield,
      highlight: "Security"
    }
  ];

  return (
    <section className="py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built With Modern, Proven Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Not for buzzwords — but for speed, security, and long-term business growth.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-gray-50 rounded-2xl p-8 border 
                           hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Accent ring */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-100 
                                group-hover:ring-blue-300 transition" />

                {/* Icon */}
                <div className="relative w-14 h-14 bg-blue-600 text-white rounded-xl 
                                flex items-center justify-center mb-6
                                group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={26} />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl font-bold text-gray-900 mb-2">
                  {tech.name}
                </h3>

                <p className="relative text-gray-600 mb-4">
                  {tech.benefit}
                </p>

                {/* Highlight */}
                <span className="relative inline-block text-sm font-medium 
                                 text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {tech.highlight}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Soft CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm text-gray-500">
            Modern tech means faster load times, stronger security, and higher conversions.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
