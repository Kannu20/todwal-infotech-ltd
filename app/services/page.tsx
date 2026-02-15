'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from "next/navigation";

import {
  Globe, Smartphone, Megaphone, Code2,
  Zap, ShoppingCart, Search, Palette,
  BarChart3, Mail, Share2, Video,
  CheckCircle, ArrowRight, Sparkles, TrendingUp,
  Rocket, Star, Eye, MessageCircle
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Typing animation
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const router = useRouter();

  const fullText = "Transform Your Digital Presence Together";

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


  interface Service {
    id: number;
    category: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
    title: string;
    description: string;
    features: string[];
    price: string;
    gradient: string;
    popular?: boolean;
  }

  const services: Service[] = [
    // Web Services
    {
      id: 1,
      category: 'web',
      icon: Globe,
      title: 'Custom Website Development',
      description: 'Professional, responsive websites built with modern technologies that convert visitors into customers.',
      features: [
        'Mobile-first responsive design',
        'SEO optimized structure',
        'Fast loading performance',
        'Content management system',
        'Analytics integration'
      ],
      price: 'Custom Quote',
      gradient: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      id: 2,
      category: 'web',
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payments, inventory management, and order tracking.',
      features: [
        'Product catalog management',
        'Secure payment gateway',
        'Order tracking system',
        'Customer accounts',
        'Inventory management'
      ],
      price: 'Custom Quote',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      category: 'web',
      icon: Zap,
      title: 'Website Redesign & Optimization',
      description: 'Transform your outdated website into a high-performing conversion machine.',
      features: [
        'Modern UI/UX redesign',
        'Speed optimization',
        'Mobile responsiveness',
        'SEO improvements',
        'Security enhancements'
      ],
      price: 'Custom Quote',
      gradient: 'from-orange-500 to-red-500'
    },

    // App Services
    {
      id: 4,
      category: 'app',
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with seamless user experience.',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'Push notifications',
        'Offline functionality',
        'App store deployment'
      ],
      price: 'Custom Quote',
      gradient: 'from-green-500 to-emerald-500',
      popular: true
    },
    {
      id: 5,
      category: 'app',
      icon: Code2,
      title: 'Progressive Web Apps (PWA)',
      description: 'App-like experiences that work on any device with a single codebase.',
      features: [
        'Works offline',
        'Install on home screen',
        'Fast & reliable',
        'Push notifications',
        'Cross-platform compatibility'
      ],
      price: 'Custom Quote',
      gradient: 'from-blue-600 to-purple-600'
    },

    // Digital Marketing Services
    {
      id: 6,
      category: 'digital',
      icon: Search,
      title: 'SEO & Local SEO',
      description: 'Rank higher on Google and get found by customers searching for your services.',
      features: [
        'Keyword research & optimization',
        'Google My Business setup',
        'Local citations',
        'Content optimization',
        'Monthly reporting'
      ],
      price: 'Custom Quote',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      id: 7,
      category: 'digital',
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage with customers on social platforms.',
      features: [
        'Content creation & posting',
        'Ad campaign management',
        'Community engagement',
        'Analytics & insights',
        'Brand strategy'
      ],
      price: 'Custom Quote',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 8,
      category: 'digital',
      icon: Mail,
      title: 'Email Marketing',
      description: 'Automated email campaigns that nurture leads and drive repeat business.',
      features: [
        'Email template design',
        'List management',
        'Automated workflows',
        'A/B testing',
        'Performance tracking'
      ],
      price: 'Custom Quote',
      gradient: 'from-indigo-500 to-purple-500'
    },

    // Software Services
    {
      id: 9,
      category: 'software',
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored software solutions to automate your business processes and boost efficiency.',
      features: [
        'Business process automation',
        'CRM & ERP systems',
        'API development',
        'Database design',
        'Cloud integration'
      ],
      price: 'Custom Quote',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 10,
      category: 'software',
      icon: BarChart3,
      title: 'Business Analytics Dashboard',
      description: 'Real-time dashboards to track KPIs and make data-driven decisions.',
      features: [
        'Custom metrics tracking',
        'Real-time data visualization',
        'Automated reporting',
        'Multi-source integration',
        'Mobile access'
      ],
      price: 'Custom Quote',
      gradient: 'from-violet-500 to-purple-500'
    },

    // Additional Digital Services
    {
      id: 11,
      category: 'digital',
      icon: Palette,
      title: 'Brand Identity & Design',
      description: 'Create a memorable brand with professional logo, colors, and visual identity.',
      features: [
        'Logo design',
        'Brand guidelines',
        'Marketing materials',
        'Social media templates',
        'Business stationery'
      ],
      price: 'Custom Quote',
      gradient: 'from-rose-500 to-pink-500'
    },
    {
      id: 12,
      category: 'digital',
      icon: Video,
      title: 'Content Creation',
      description: 'Engaging content that tells your story and connects with your audience.',
      features: [
        'Video production',
        'Blog writing',
        'Social media content',
        'Product photography',
        'Copywriting'
      ],
      price: 'Custom Quote',
      gradient: 'from-amber-500 to-orange-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Sparkles },
    { id: 'web', name: 'Web Services', icon: Globe },
    { id: 'app', name: 'App Services', icon: Smartphone },
    { id: 'digital', name: 'Digital Marketing', icon: Megaphone },
    { id: 'software', name: 'Software Services', icon: Code2 }
  ];

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const stats = [
    { icon: Rocket, value: '30+', label: 'Projects Built' },
    { icon: Star, value: 'Early', label: 'Client Collaborations' },
    { icon: TrendingUp, value: 'Focused', label: 'Quality Delivery' },
    { icon: Zap, value: 'Fast', label: 'Response & Support' }
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

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down">
              <Sparkles className="w-4 h-4" />
              <span>Complete Digital Solutions</span>
            </div>

            {/* Typing Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight min-h-[80px] animate-fade-in-up">
              {displayedText}
              <span className="animate-blink">|</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
              From stunning websites to powerful apps, we deliver digital solutions that help your business grow and succeed online.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
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
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 bg-white border-b sticky top-16 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  <IconComponent size={20} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent animate-fade-in-up overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Animated Border Glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500`} />

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      ⭐ Popular
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                      <div>
                        <div className="text-sm text-gray-500">Starting at</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {service.price}
                        </div>
                      </div>
                      {/* <button className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2">
                        Get Started
                        <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" size={18} />
                      </button> */}
                      <button
                        onClick={() => router.push("/contact")}
                        className="group/btn bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                      >
                        Get Started
                        <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" size={18} />
                      </button>

                    </div>
                  </div>

                  {/* Sparkle on hover */}
                  {hoveredService === service.id && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <Sparkles className="text-yellow-400 w-16 h-16 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Fast Delivery',
                description: 'Projects delivered on time without compromising quality. We respect your deadlines.',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Star,
                title: 'Quality First',
                description: 'Modern design, clean code, and best practices ensure long-lasting results.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: MessageCircle,
                title: '24/7 Support',
                description: 'Ongoing support and maintenance. We are here whenever you need us.',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
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
            <Rocket className="w-4 h-4" />
            <span>Ready to Transform Your Business?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how our services can help your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="contact"
              className="group inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>
            <a
              href="https://wa.me/919001012065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="mr-2" size={20} />
              Chat on WhatsApp
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

export default ServicesPage;
