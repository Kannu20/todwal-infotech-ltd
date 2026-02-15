'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MessageCircle, MapPin, Clock, Send, CheckCircle, Sparkles, Zap, HeadphonesIcon, Calendar } from 'lucide-react';
import emailjs from "@emailjs/browser";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string>('');


  // Typing animation for headline
  const fullText = "Let's Build Your Dream Website Together";

  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (charIndex < fullText.length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else {
      // Pause after full text
      timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
      }, 2000); // pause duration
    }

    return () => clearTimeout(timeout);
  }, [charIndex, fullText]);


  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   // Simulate API call
  //   setTimeout(() => {
  //     console.log('Form submitted:', formData);
  //     setIsLoading(false);
  //     setIsSubmitted(true);

  //     // Reset form after 5 seconds
  //     setTimeout(() => {
  //       setFormData({
  //         name: '',
  //         email: '',
  //         phone: '',
  //         businessType: '',
  //         projectType: '',
  //         budget: '',
  //         message: '',
  //         timeline: ''
  //       });
  //       setIsSubmitted(false);
  //     }, 5000);
  //   }, 2000);
  // };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.phone || !formData.message) {
    alert("Please fill all required fields");
    return;
  }

  setIsLoading(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    businessType: formData.businessType,
    projectType: formData.projectType,
    budget: formData.budget,
    timeline: formData.timeline,
    message: formData.message,
  };

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_KEY!
    )
    .then(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        projectType: "",
        budget: "",
        message: "",
        timeline: "",
      });
    })
    .catch((error) => {
      console.error("Email error:", error);
      setIsLoading(false);
      alert("Something went wrong. Try again.");
    });
};


  interface ContactInfo {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    title: string;
    value: string;
    link: string;
    description: string;
    gradient: string;
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: "Email",
      value: "todwalinfotech@gmail.com",
      link: "mailto:todwalinfotech@gmail.com",
      description: "Get response within 24 hours",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 90010 12065",
      link: "tel:+919001012065",
      description: "Mon-Sat, 9AM-7PM IST",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat Now",
      link: "https://wa.me/919001012065",
      description: "Instant responses available",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Jaipur, Rajasthan",
      link: "#",
      description: "Available for remote projects",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most projects take 2-4 weeks from start to launch, depending on complexity. We'll give you a clear timeline after understanding your requirements.",
      icon: Clock
    },
    {
      question: "What information do you need to get started?",
      answer: "We need your business goals, target audience, preferred design style, and any specific features you want. We'll discuss everything in detail during our consultation.",
      icon: HeadphonesIcon
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer post-launch support and maintenance packages. You can also reach out anytime for updates or issues.",
      icon: Zap
    },
    {
      question: "Can you help with content and images?",
      answer: "Absolutely. We can help with content strategy and can source professional images. You can also provide your own content and photos.",
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-down">
            <Sparkles className="w-4 h-4" />
            <span>Free Website Audit • No Commitment Required</span>
          </div>

          {/* Typing Effect Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 min-h-[120px] animate-fade-in-up">
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
            Get a free website audit and consultation. We'll analyze your needs and show you exactly
            how a modern website can transform your business and drive real results.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-100 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-1">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-100 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Free Audit</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-pink-100 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-pink-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards with Glow Effects */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 text-center overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <div className="text-blue-600 font-semibold mb-2 text-sm">
                      {info.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {info.description}
                    </div>
                  </div>

                  {/* Sparkle on hover */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Sparkles className="text-yellow-400 w-5 h-5" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form with Enhanced Interactions */}
            <div className="relative animate-fade-in-up">
              {/* Glow behind form */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50" />

              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Send className="text-white" size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Get Free Website Audit
                    </h2>
                    <p className="text-sm text-gray-500">Takes only 2 minutes</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed
                  analysis of how we can help grow your business.
                </p>

                {isSubmitted ? (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center animate-scale-in">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-green-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700 mb-4">
                      Thank you for reaching out to Todwal Infotech. We'll respond within 24 hours.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-green-600">
                      <Calendar size={16} />
                      <span className="text-sm">Expect a response by tomorrow</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 ${focusedField === 'name'
                              ? 'border-blue-500 ring-4 ring-blue-100'
                              : 'border-gray-200 hover:border-gray-300'
                            }`}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="relative">
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 ${focusedField === 'email'
                              ? 'border-blue-500 ring-4 ring-blue-100'
                              : 'border-gray-200 hover:border-gray-300'
                            }`}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 ${focusedField === 'phone'
                            ? 'border-blue-500 ring-4 ring-blue-100'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField('')}
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Type of Business
                      </label>
                      <select
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 ${focusedField === 'businessType'
                            ? 'border-blue-500 ring-4 ring-blue-100'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        onFocus={() => setFocusedField('businessType')}
                        onBlur={() => setFocusedField('')}
                      >
                        <option value="">Select your business type</option>
                        <option value="clinic">Medical Clinic</option>
                        <option value="gym">Gym / Fitness Center</option>
                        <option value="salon">Salon / Spa</option>
                        <option value="coaching">Coaching Center</option>
                        <option value="restaurant">Restaurant / Cafe</option>
                        <option value="retail">Retail Store</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        What do you need?
                      </label>
                      <select
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 ${focusedField === 'projectType'
                            ? 'border-blue-500 ring-4 ring-blue-100'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        onFocus={() => setFocusedField('projectType')}
                        onBlur={() => setFocusedField('')}
                      >
                        <option value="">Select project type</option>
                        <option value="new">New Website</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="ecommerce">E-commerce Store</option>
                        <option value="optimization">Speed Optimization</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Budget Range
                        </label>
                        <select
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 ${focusedField === 'budget'
                              ? 'border-blue-500 ring-4 ring-blue-100'
                              : 'border-gray-200 hover:border-gray-300'
                            }`}
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          onFocus={() => setFocusedField('budget')}
                          onBlur={() => setFocusedField('')}
                        >
                          <option value="">Select budget</option>
                          <option value="10-25k">₹10,000 - ₹25,000</option>
                          <option value="25-50k">₹25,000 - ₹50,000</option>
                          <option value="50-100k">₹50,000 - ₹1,00,000</option>
                          <option value="100k+">₹1,00,000+</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-sm">
                          Timeline
                        </label>
                        <select
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 ${focusedField === 'timeline'
                              ? 'border-blue-500 ring-4 ring-blue-100'
                              : 'border-gray-200 hover:border-gray-300'
                            }`}
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          onFocus={() => setFocusedField('timeline')}
                          onBlur={() => setFocusedField('')}
                        >
                          <option value="">When do you need it?</option>
                          <option value="urgent">ASAP (1-2 weeks)</option>
                          <option value="normal">Normal (3-4 weeks)</option>
                          <option value="flexible">Flexible (1-2 months)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Tell us about your project *
                      </label>
                      <textarea
                        rows={5}
                        required
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 text-gray-700 resize-none ${focusedField === 'message'
                            ? 'border-blue-500 ring-4 ring-blue-100'
                            : 'border-gray-200 hover:border-gray-300'
                          }`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        placeholder="What are your goals? What problems are you trying to solve? Any specific features you need?"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      We'll review your information and respond within 24 hours with a free audit
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              {/* WhatsApp CTA with Pulse Animation */}
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-8 overflow-hidden animate-fade-in-up animation-delay-100 group hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <MessageCircle className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Prefer to Chat?
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Get instant answers to your questions on WhatsApp. Available Mon-Sat, 9AM-7PM IST.
                  </p>
                  <a
                    href="https://wa.me/919001012065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up animation-delay-200">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Working Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="font-bold text-blue-600">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="font-bold text-blue-600">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="font-medium text-gray-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-3xl p-8 animate-fade-in-up animation-delay-300">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Sparkles className="text-blue-600" />
                  What Happens Next?
                </h3>
                <ul className="space-y-4">
                  {[
                    "You'll receive a confirmation email immediately",
                    "We'll review your project within 24 hours",
                    "Get a free audit with actionable recommendations",
                    "Schedule a call to discuss your project"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white" size={14} />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <faq.icon className="text-blue-600" />
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default ContactPage;