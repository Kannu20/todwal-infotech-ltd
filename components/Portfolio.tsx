
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Project = {
  title: string;
  type: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  liveLink: string;
};

/* ✅ Variants properly typed */

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
      ease: [0.25, 0.1, 0.25, 1], // ✅ type-safe easing
    },
  },
};

const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: { opacity: 0, scale: 0.9, y: 30 },
};

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "HealthCare Clinic",
      type: "Medical Clinic",
      problem: "Low online appointment bookings, outdated website",
      solution: "Modern, mobile-first website with online booking & SEO",
      result: "45% increase in appointment bookings in 3 months",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200",
      liveLink: "https://telehealth-pa.vercel.app/",
    },
    {
      title: "FitZone Gym",
      type: "Fitness Center",
      problem: "Poor visibility of classes and plans",
      solution: "Conversion-focused website with schedules & CTA funnels",
      result: "30% more membership inquiries per month",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200",
      liveLink: "https://thasneem9.github.io/elovon/",
    },
    {
      title: "Glow Beauty Salon",
      type: "E-commerce Store",
      problem: "Zero online product sales",
      solution: "E-commerce site with payments, catalog & WhatsApp checkout",
      result: "₹2L+ revenue in 6 months",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200",
      liveLink: "https://vigeandcosalon.netlify.app/",
    },
  ];

  return (
    <section id="work" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Case Studies That Convert
            </h2>
            <p className="text-lg text-gray-600">
              Not designs. Business results.
            </p>
          </div>

          <a
            href="/projects"
            className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-800 hover:bg-gray-900 hover:text-white transition"
          >
            View More
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-3xl overflow-hidden border hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-semibold"
                  >
                    <Eye size={18} />
                    View Case Study
                  </button>
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase">
                  {project.type}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-4">
                  {project.title}
                </h3>

                <div className="bg-blue-50 p-4 rounded-xl text-sm">
                  <span className="font-semibold text-blue-900">Impact</span>
                  <p className="text-blue-700 mt-1">{project.result}</p>
                </div>

                <div className="flex gap-4 mt-5">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline"
                  >
                    Details <Eye size={14} />
                  </button>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 font-medium text-sm flex items-center gap-1 hover:underline"
                  >
                    Live Site <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              variants={modalContent}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white max-w-xl w-full rounded-3xl p-8 relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 text-gray-500 hover:text-black"
              >
                <X size={22} />
              </button>

              <h3 className="text-2xl font-bold text-gray-900">
                {activeProject.title}
              </h3>
              <p className="text-sm text-blue-600 mb-6">
                {activeProject.type}
              </p>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Problem</span>
                  <p className="text-gray-600">{activeProject.problem}</p>
                </div>

                <div>
                  <span className="font-semibold text-gray-700">Solution</span>
                  <p className="text-gray-600">{activeProject.solution}</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <span className="font-semibold text-blue-900">Result</span>
                  <p className="text-blue-700">{activeProject.result}</p>
                </div>

                <a
                  href={activeProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold"
                >
                  Visit Live Project <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;

