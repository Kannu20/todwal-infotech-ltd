'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ExternalLink, Eye, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  client: string;
  year: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  image: string;
  features: string[];
  link: string;
  demoLink?: string;
}

const WorkPage: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

const fullText = "Built for Real Businesses";

useEffect(() => {
  let timeout: NodeJS.Timeout;

  if (charIndex < fullText.length) {
    // typing
    timeout = setTimeout(() => {
      setDisplayedText(fullText.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, 80);
  } else {
    // pause, then restart
    timeout = setTimeout(() => {
      setDisplayedText('');
      setCharIndex(0);
    }, 2000); // pause after full text
  }

  return () => clearTimeout(timeout);
}, [charIndex, fullText]);


  const projects: Project[] = [
    {
      id: 1,
      title: "HealthCare Clinic Website",
      category: "Medical Clinic",
      client: "Dr. Sharma's Clinic",
      year: "2026",
      problem: "The clinic had an outdated website with no online booking system. Patients were calling during business hours, creating phone congestion and missed appointments.",
      solution: "Built a modern, mobile-responsive website with integrated online appointment booking, doctor profiles, and service information. Added WhatsApp integration for quick queries.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Firebase"],
      results: [
        "45% increase in appointment bookings",
        "30% reduction in phone call volume",
        "60% of bookings now come through the website",
        "4.8/5 patient satisfaction rating"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
      features: ["Online Booking", "Patient Portal", "Mobile Responsive", "SEO Optimized"],
      link: "#",
      demoLink: "https://telehealth-pa.vercel.app/"
    },
    {
      id: 2,
      title: "FitZone Gym & Fitness Center",
      category: "Fitness & Wellness",
      client: "FitZone Gym",
      year: "2026",
      problem: "Gym struggled to showcase membership plans and class schedules online. Potential members had to visit in person to get information.",
      solution: "Created a dynamic website with class schedule integration, membership plan comparison, trainer profiles, and online membership signup with payment gateway.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: [
        "30% increase in membership inquiries",
        "50+ online signups in first month",
        "25% reduction in front desk workload",
        "Improved brand credibility"
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
      features: ["Membership Plans", "Class Schedules", "Payment Gateway", "Trainer Profiles"],
      link: "#",
      demoLink: "https://thasneem9.github.io/elovon/"
    },
    {
      id: 3,
      title: "Glow Beauty Salon E-commerce",
      category: "E-commerce",
      client: "Glow Beauty Salon",
      year: "2026",
      problem: "Salon had no online presence for retail products. All sales were in-store only, limiting revenue potential.",
      solution: "Developed full-featured e-commerce platform with product catalog, secure checkout, inventory management, and delivery tracking integration.",
      technologies: ["Next.js", "MERN Stack", "Razorpay", "AWS"],
      results: [
        "₹2L+ in online sales within 6 months",
        "150+ registered customers",
        "40% of revenue now from online sales",
        "Expanded to 3 neighboring cities"
      ],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop",
      features: ["Product Catalog", "Secure Payments", "Order Tracking", "Customer Reviews"],
      link: "#",
      demoLink: "https://vigeandcosalon.netlify.app/"
    },
    {
      id: 4,
      title: "Mind & Body Coaching Center",
      category: "Education & Coaching",
      client: "Mind & Body Institute",
      year: "2026",
      problem: "Coaching center relied on word-of-mouth and had no professional online presence. Unable to reach students outside local area.",
      solution: "Built comprehensive website with course catalog, online registration, payment integration, student dashboard, and blog for content marketing.",
      technologies: ["React", "Firebase", "Tailwind CSS", "Google Analytics"],
      results: [
        "3x increase in course enrollments",
        "Students from 5+ cities enrolled",
        "Blog generating 500+ monthly visitors",
        "60% reduction in manual admin work"
      ],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop",
      features: ["Course Management", "Student Portal", "Blog System", "Analytics Dashboard"],
      link: "#",
      demoLink: "https://demo-coaching.vercel.app/"
    },
    {
      id: 5,
      title: "Taste of India Restaurant",
      category: "Food & Beverage",
      client: "Taste of India",
      year: "2026",
      problem: "Restaurant had basic menu listing on third-party platforms. No direct ordering system, losing 20-30% to commission fees.",
      solution: "Created custom restaurant website with online menu, table reservation system, direct ordering with delivery integration, and loyalty program.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Twilio"],
      results: [
        "₹1.5L monthly savings on platform fees",
        "200+ direct online orders monthly",
        "85% customer retention via loyalty program",
        "Improved profit margins by 15%"
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
      features: ["Online Ordering", "Table Reservations", "Loyalty Program", "SMS Notifications"],
      link: "#",
      demoLink: "https://demo-restaurant.vercel.app"
    },
    {
      id: 6,
      title: "Dental Care Clinic Redesign",
      category: "Healthcare",
      client: "Smile Dental Care",
      year: "2026",
      problem: "Old website was slow (8+ seconds load time), not mobile-friendly, and had poor Google ranking. Losing patients to competitors.",
      solution: "Complete redesign and rebuild with modern stack, optimized images, lazy loading, SEO best practices, and improved user experience.",
      technologies: ["Next.js", "TypeScript", "Vercel", "Google Search Console"],
      results: [
        "Load time reduced to 1.2 seconds",
        "Moved from page 3 to page 1 on Google",
        "55% increase in organic traffic",
        "Mobile traffic increased by 120%"
      ],
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop",
      features: ["Speed Optimization", "SEO", "Mobile-First Design", "Accessibility"],
      link: "#",
      demoLink: "https://demo-dental.vercel.app"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section with Animation */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge with slide-in animation */}
          <span className="inline-block mb-6 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full animate-fade-in-down">
            <Sparkles className="inline-block w-4 h-4 mr-1" />
            Selected client projects
          </span>

          {/* Heading with staggered animation */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Our Recent Work
            {/* <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              Built for Real Businesses
            </span> */}
            {/* Typing Headline */}
            <h1 className="block text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
              {displayedText}
              <span className="animate-blink">|</span>
            </h1>
          </h1>

          {/* Sub text */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Websites designed with one clear goal — solve real business problems
            and create a strong online presence that converts visitors into leads.
          </p>

          {/* CTA with pulse animation */}
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="contact"
              className="group inline-flex items-center bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
            >
              Start Your Project
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-6 text-sm text-gray-500 animate-fade-in-up animation-delay-400">
            Early-stage projects • Honest work • Modern tech stack
          </p>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-12 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "30+", label: "Projects Built" },
              { value: "Early", label: "Client Work" },
              { value: "Focused", label: "Quality Delivery" },
              { value: "Modern", label: "Tech Stack" }

            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-bold mb-2 hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with Scroll Animations */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image with Glow Effect */}
                <div
                  className={`${index % 2 === 1 ? 'md:order-2' : ''} group`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-blue-500/50 hover:scale-105">
                    {/* Glow border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                    {/* Image */}
                    <div className="relative z-10 bg-white rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Overlay with View Demo button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <Eye size={20} />
                            View Live Demo
                            <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>

                      {/* Sparkle effect on hover */}
                      {hoveredProject === project.id && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                          <Sparkles className="text-white w-16 h-16 animate-pulse" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h2>
                  </div>

                  <div className="mb-4 text-sm text-gray-500">
                    <span className="font-medium">{project.client}</span> • {project.year}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="group">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-1 h-6 bg-blue-600 rounded-full" />
                        The Challenge:
                      </h3>
                      <p className="text-gray-600 pl-3">{project.problem}</p>
                    </div>

                    <div className="group">
                      <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-600 rounded-full" />
                        The Solution:
                      </h3>
                      <p className="text-gray-600 pl-3">{project.solution}</p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Key Features:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-300 cursor-default"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results with Glow Box */}
                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-100 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 hover:opacity-20 blur transition-opacity duration-500" />
                    <div className="relative">
                      <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Sparkles className="text-blue-600" size={20} />
                        Results:
                      </h3>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-gray-700 group">
                            <ArrowRight className="text-blue-600 mr-2 flex-shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1" size={16} />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Demo Link */}
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                  >
                    <Eye size={20} className="transition-transform duration-300 group-hover:scale-110" />
                    View Live Demo
                    <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-100">
            Let's build a website that grows your business and generates real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-200">
            <a
              href="contact"
              className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get Free Website Audit
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>
            <a
              href="https://wa.me/9001012065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 bg-white px-8 py-4 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom Animations CSS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animation-delay-100 {
          animation-delay: 100ms;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default WorkPage;

