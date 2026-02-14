'use client';

import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
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
    y: 40,
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

const Process = () => {
  const steps = [
    {
      step: "01",
      title: "Free Audit & Strategy Call",
      desc: "We understand your business, goals, and bottlenecks before touching design.",
      icon: <Search size={26} />
    },
    {
      step: "02",
      title: "Design That Sells",
      desc: "You review the layout, flow, and messaging. Nothing moves without approval.",
      icon: <PenTool size={26} />
    },
    {
      step: "03",
      title: "Clean Development",
      desc: "Fast, scalable, and SEO-ready code built using modern technologies.",
      icon: <Code2 size={26} />
    },
    {
      step: "04",
      title: "Launch, Optimize & Support",
      desc: "Website goes live. We monitor, optimize, and support post-launch.",
      icon: <Rocket size={26} />
    }
  ];

  return (
    <section className="py-28 px-4 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-5 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            Simple. Transparent. Result-Driven.
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Work Together
          </h2>

          <p className="text-lg text-gray-600">
            A clear 4-step process designed to remove confusion and deliver results.
          </p>
        </div>

        {/* Animated Process Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-10 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-blue-100" />

          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative bg-white border rounded-3xl p-8 text-center 
                         hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 
                              bg-blue-600 text-white px-4 py-1 rounded-full 
                              text-sm font-bold shadow">
                Step {item.step}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center 
                              rounded-2xl bg-blue-50 text-blue-600 mx-auto mb-6
                              transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-gray-600 mb-6">
            Ready to start? Let’s talk about your business goals.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 
                       bg-blue-600 text-white px-12 py-4 rounded-2xl 
                       font-semibold text-lg hover:bg-blue-700 
                       transition shadow-lg hover:shadow-xl"
          >
            Start With a Free Consultation →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
