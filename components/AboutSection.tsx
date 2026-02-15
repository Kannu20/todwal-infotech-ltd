// 'use client';

// import React from 'react';
// import { Target, Users, TrendingUp } from 'lucide-react';
// import { motion } from 'framer-motion';

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

// const AboutTodwal = () => {
//   return (
//     <section className="py-28 px-4 bg-white">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//         >
//           <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
//             About Todwal Infotech
//           </span>

//           <h2 className="text-4xl font-bold text-gray-900 mb-6">
//             We Build Digital Products That Help Businesses Grow
//           </h2>

//           <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//             Todwal Infotech is a modern tech startup focused on building 
//             high-performance websites and digital solutions for startups, 
//             small businesses, and growing brands.
//           </p>

//           <p className="text-lg text-gray-600 mb-10 leading-relaxed">
//             We don’t believe in generic designs or one-size-fits-all solutions. 
//             Every product we build is designed with a clear business goal: 
//             more leads, better conversions, and long-term scalability.
//           </p>

//           {/* Highlights */}
//           <motion.div
//             className="grid sm:grid-cols-3 gap-6"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ staggerChildren: 0.15 }}
//           >
//             {[
//               {
//                 icon: <Target className="text-blue-600 mb-3" />,
//                 title: 'Goal Driven',
//                 desc: 'Business-first approach, not just design.',
//               },
//               {
//                 icon: <Users className="text-blue-600 mb-3" />,
//                 title: 'Client Focused',
//                 desc: 'Clear communication & transparency.',
//               },
//               {
//                 icon: <TrendingUp className="text-blue-600 mb-3" />,
//                 title: 'Growth Oriented',
//                 desc: 'Solutions that scale with your business.',
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 className="bg-gray-50 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition"
//               >
//                 {item.icon}
//                 <h4 className="font-bold text-gray-900 mb-1">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm text-gray-600">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Right Visual */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="relative"
//         >
//           <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-2xl">
//             <h3 className="text-2xl font-bold mb-4">
//               Why Businesses Trust Todwal Infotech
//             </h3>

//             <ul className="space-y-4 text-sm">
//               <li>✔ Clean, modern & scalable code</li>
//               <li>✔ Conversion-focused UI/UX</li>
//               <li>✔ Fast delivery with clear milestones</li>
//               <li>✔ Post-launch support & optimization</li>
//             </ul>

//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-block mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold"
//             >
//               Let’s Work Together →
//             </motion.a>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default AboutTodwal;

'use client';

import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

/* ===============================
   Animation Variants (TS Safe)
================================ */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // easeOut (Bezier)
    },
  },
};

/* ===============================
   Component
================================ */

const AboutTodwal: React.FC = () => {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            About Todwal Infotech
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We Build Digital Products That Help Businesses Grow
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Todwal Infotech is a modern tech startup focused on building
            high-performance websites and digital solutions for startups,
            small businesses, and growing brands.
          </p>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We don’t believe in generic designs or one-size-fits-all solutions.
            Every product we build is designed with a clear business goal:
            more leads, better conversions, and long-term scalability.
          </p>

          {/* HIGHLIGHTS */}
          <motion.div
            className="grid sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {[
              {
                icon: <Target className="text-blue-600 mb-3" />,
                title: 'Goal Driven',
                desc: 'Business-first approach, not just design.',
              },
              {
                icon: <Users className="text-blue-600 mb-3" />,
                title: 'Client Focused',
                desc: 'Clear communication & transparency.',
              },
              {
                icon: <TrendingUp className="text-blue-600 mb-3" />,
                title: 'Growth Oriented',
                desc: 'Solutions that scale with your business.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-50 rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-transform"
              >
                {item.icon}
                <h4 className="font-bold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative"
        >
          <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Why Businesses Trust Todwal Infotech
            </h3>

            <ul className="space-y-4 text-sm">
              <li>✔ Clean, modern & scalable code</li>
              <li>✔ Conversion-focused UI/UX</li>
              <li>✔ Fast delivery with clear milestones</li>
              <li>✔ Post-launch support & optimization</li>
            </ul>

            <motion.a
              href="contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block mt-8 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold"
            >
              Let’s Work Together →
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutTodwal;

