'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink, Eye, Sparkles, TrendingUp, Award, ArrowRight, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = [
  { id: 'All', name: 'All Projects', icon: '🎯' },
  { id: 'Healthcare', name: 'Healthcare', icon: '🏥' },
  { id: 'Fitness', name: 'Fitness', icon: '💪' },
  { id: 'E-Commerce', name: 'E-Commerce', icon: '🛒' },
  { id: 'Education & Coaching', name: 'Education', icon: '📚' },
  { id: 'Food & Beverage', name: 'Food & Beverage', icon: '🍽️' },
];

type Project = {
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
  demoLink: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'HealthCare Clinic Website',
    category: 'Healthcare',
    client: "Dr. Sharma's Clinic",
    year: '2026',
    problem: 'Outdated website with no online booking.',
    solution: 'Modern website with booking and WhatsApp integration.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    results: [
      '45% increase in bookings',
      '30% fewer phone calls',
      '60% bookings via website',
      '4.8/5 patient rating'
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    features: ['Online Booking', 'Mobile Responsive', 'SEO Optimized'],
    link: '#',
    demoLink: 'https://telehealth-pa.vercel.app/',
    featured: true
  },
  {
    id: 2,
    title: 'FitZone Gym & Fitness Center',
    category: 'Fitness',
    client: 'FitZone Gym',
    year: '2026',
    problem: 'No online membership or schedule visibility.',
    solution: 'Membership plans, schedules, and online signup.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    results: [
      '30% more inquiries',
      '50+ online signups',
      '25% workload reduction',
      'Improved credibility'
    ],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop',
    features: ['Membership Plans', 'Online Signup', 'Payment Gateway'],
    link: '#',
    demoLink: 'https://thasneem9.github.io/elovon/',
  },
  {
    id: 3,
    title: 'Glow Beauty Salon E-commerce',
    category: 'E-Commerce',
    client: 'Glow Beauty Salon',
    year: '2026',
    problem: 'No online product sales.',
    solution: 'Full e-commerce platform.',
    technologies: ['Next.js', 'MERN', 'Razorpay', 'AWS'],
    results: [
      '₹2L+ online sales',
      '40% revenue from e-commerce',
      '150+ registered customers',
      'Expanded to 3 cities'
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop',
    features: ['Payments', 'Order Tracking', 'Inventory Management'],
    link: '#',
    demoLink: 'https://vigeandcosalon.netlify.app/',
    featured: true
  },
  
  {
    id: 4,
    title: 'Mind & Body Coaching Center',
    category: 'Education & Coaching',
    client: 'Mind & Body Institute',
    year: '2026',
    problem: 'No professional online presence.',
    solution: 'Course platform with payments.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    results: [
      '3x enrollments',
      'Students from 5+ cities',
      '500+ blog visitors',
      '60% admin work reduction'
    ],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop',
    features: ['Student Portal', 'Payments', 'Blog System'],
    link: '#',
    demoLink: 'https://demo-coaching.vercel.app',
  },
  {
    id: 5,
    title: 'Taste of India Restaurant',
    category: 'Food & Beverage',
    client: 'Taste of India',
    year: '2026',
    problem: 'High commission losses.',
    solution: 'Direct ordering system.',
    technologies: ['Next.js', 'PostgreSQL', 'Twilio'],
    results: [
      '₹1.5L monthly savings',
      '200+ direct orders',
      '85% retention rate',
      '15% profit margin increase'
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop',
    features: ['Online Ordering', 'Loyalty Program', 'SMS Alerts'],
    link: '#',
    demoLink: 'https://demo-restaurant.vercel.app',
  },
  {
    id: 6,
    title: 'Dental Care Clinic Redesign',
    category: 'Healthcare',
    client: 'Smile Dental Care',
    year: '2026',
    problem: 'Slow, non-mobile site.',
    solution: 'Optimized rebuild with SEO.',
    technologies: ['Next.js', 'TypeScript', 'Vercel'],
    results: [
      '1.2s load time',
      '55% organic traffic increase',
      'Page 1 on Google',
      '120% mobile traffic increase'
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&h=800&fit=crop',
    features: ['SEO', 'Performance', 'Mobile-First'],
    link: '#',
    demoLink: 'https://demo-dental.vercel.app',
    featured: true
  },
];

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Typing animation - fixed flickering
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const fullText = 'Real Projects. Real Results.';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(p => p.category === activeCategory);

  const stats = [
    { icon: TrendingUp, value: '6+', label: 'Projects Completed' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
    { icon: Star, value: '40+', label: 'Happy Clients' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down">
            <Sparkles className="w-4 h-4" />
            <span>Portfolio Showcase</span>
          </div>

          {/* Typing Headline - Fixed */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            {displayedText}
            {!isTypingComplete && <span className="animate-blink">|</span>}
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            These projects generated traffic, leads, and revenue for real businesses. 
            Each one built with modern technology and conversion-focused design.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:scale-105 transition-all duration-300 group"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 bg-white border-b sticky top-16 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                {/* Animated Border Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    ⭐ Featured
                  </div>
                )}

                <div className="relative z-10">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg"
                        >
                          <Eye size={18} />
                          View Demo
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="text-sm text-gray-500 mb-4">
                      {project.client} • {project.year}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-2 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={project.link}
                      className="group/link inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      View Case Study
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>

                  {/* Sparkle on hover */}
                  {hoveredCard === project.id && (
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <Sparkles className="text-yellow-400 w-12 h-12 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4" />
            <span>Ready for Results Like These?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's build something that actually converts visitors into customers and grows your revenue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="group inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Start Your Project
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center border-2 border-white text-white bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-fade-in-down { animation: fadeInDown 0.6s ease-out forwards; }
        .animate-blink { animation: blink 1s step-end infinite; }

        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default ProjectsPage;