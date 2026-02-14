// 'use client';

// import React from 'react';
// import { Check, Globe, Zap, ShoppingCart } from 'lucide-react';
// import { motion } from 'framer-motion';

// // Animation variants
// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: 'easeOut',
//     },
//   },
// };

// const Services = () => {
//   const services = [
//     {
//       title: "Local Business Website",
//       icon: <Globe size={28} />,
//       description: "High-converting websites designed to turn visitors into calls and leads.",
//       features: [
//         "Lead-focused design that drives action",
//         "WhatsApp & Call integration",
//         "SEO-ready to rank on Google",
//         "Fast performance for better engagement"
//       ],
//       highlight: true
//     },
//     {
//       title: "Website Redesign & Speed Optimization",
//       icon: <Zap size={28} />,
//       description: "Upgrade slow, outdated websites into fast, conversion-focused experiences.",
//       features: [
//         "Fix slow loading issues",
//         "Improve UX & reduce bounce rate",
//         "Higher conversions with better layout",
//         "Mobile-first responsive design"
//       ]
//     },
//     {
//       title: "E-commerce Website",
//       icon: <ShoppingCart size={28} />,
//       description: "Scalable online stores built to sell more with better user experience.",
//       features: [
//         "Secure authentication",
//         "Payment gateway integration",
//         "Conversion-focused product pages",
//         "Easy inventory management"
//       ]
//     }
//   ];

//   return (
//     <section id="services" className="py-24 px-4 sm:px-6 bg-white">
//       <div className="max-w-6xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Services That Actually Grow Your Business
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Everything is built with one goal — more leads, more sales, more revenue.
//           </p>
//         </div>

//         {/* Animated Cards */}
//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               className={`relative rounded-2xl p-8 border transition-all duration-300 
//                 hover:-translate-y-2 hover:shadow-xl
//                 ${service.highlight ? 'border-blue-600 shadow-lg' : 'border-gray-200'}
//               `}
//             >
//               {/* Accent bar */}
//               <div className="absolute top-0 left-0 h-1 w-full bg-blue-600 rounded-t-2xl" />

//               {/* Icon */}
//               <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-6">
//                 {service.icon}
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                 {service.title}
//               </h3>

//               <p className="text-gray-600 mb-6">
//                 {service.description}
//               </p>

//               <ul className="space-y-3">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start">
//                     <Check
//                       className="text-blue-600 mr-3 flex-shrink-0 mt-1"
//                       size={18}
//                     />
//                     <span className="text-gray-700">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Subtle CTA hint */}
//               <p className="mt-6 text-sm text-blue-600 font-medium">
//                 Ideal for growing businesses →
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Services;

"use client";

import React from "react";
import { Check, Globe, Zap, ShoppingCart } from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ✅ Properly typed animation variants */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // type-safe easing
    },
  },
};

const Services = () => {
  const services = [
    {
      title: "Local Business Website",
      icon: <Globe size={28} />,
      description:
        "High-converting websites designed to turn visitors into calls and leads.",
      features: [
        "Lead-focused design that drives action",
        "WhatsApp & Call integration",
        "SEO-ready to rank on Google",
        "Fast performance for better engagement",
      ],
      highlight: true,
    },
    {
      title: "Website Redesign & Speed Optimization",
      icon: <Zap size={28} />,
      description:
        "Upgrade slow, outdated websites into fast, conversion-focused experiences.",
      features: [
        "Fix slow loading issues",
        "Improve UX & reduce bounce rate",
        "Higher conversions with better layout",
        "Mobile-first responsive design",
      ],
    },
    {
      title: "E-commerce Website",
      icon: <ShoppingCart size={28} />,
      description:
        "Scalable online stores built to sell more with better user experience.",
      features: [
        "Secure authentication",
        "Payment gateway integration",
        "Conversion-focused product pages",
        "Easy inventory management",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Services That Actually Grow Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything is built with one goal — more leads, more sales, more revenue.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                service.highlight
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-blue-600 rounded-t-2xl" />

              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check
                      className="text-blue-600 mr-3 flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-blue-600 font-medium">
                Ideal for growing businesses →
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;

