'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Check, Code, Zap, Shield, Target, Users, Award, Rocket, TrendingUp, Star, Sparkles, ChevronRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [charIndex, setCharIndex] = useState<number>(0);

  // Typing effect words
  const typingWords: string[] = ['Innovation', 'Excellence', 'Growth', 'Success'];

  // Typing animation
  useEffect(() => {
    const currentWord = typingWords[currentWordIndex];
    
    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedText('');
        setCurrentWordIndex((prev) => (prev + 1) % typingWords.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentWordIndex]);

  interface Skill {
    name: string;
    level: number;
    icon: React.ComponentType<{ className?: string; size?: number }>;
    color: string;
  }

  const skills: Skill[] = [
    { name: "Frontend Development", level: 95, icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 90, icon: Shield, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", level: 85, icon: Target, color: "from-orange-500 to-red-500" },
    { name: "Performance Optimization", level: 92, icon: Zap, color: "from-green-500 to-emerald-500" }
  ];

  interface Value {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    title: string;
    description: string;
    gradient: string;
  }

  const values: Value[] = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your business goals drive every decision we make. We build websites that solve real problems and deliver measurable results.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "We respect your time and deadlines. Projects are delivered on schedule without compromising on quality.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Clean code, modern design, and best practices ensure your website performs well and stands the test of time.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every feature is designed with conversion in mind. Our websites don't just look good—they generate leads and sales.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const experience = [
    {
      year: "2024",
      title: "Founded Todwal Infotech",
      company: "Startup Journey Begins",
      description: "Launched with a mission to help local businesses thrive online. Building high-converting websites for clinics, gyms, salons, and coaching centers.",
      icon: Rocket
    },
    {
      year: "2022-2024",
      title: "Enterprise Solutions",
      company: "Tech Solutions Inc.",
      description: "Developed 30+ client projects using MERN stack. Led team of 3 developers on enterprise applications.",
      icon: TrendingUp
    },
    {
      year: "2020-2022",
      title: "Agency Experience",
      company: "Digital Agency",
      description: "Created responsive websites and web applications. Worked with clients across healthcare, education, and e-commerce.",
      icon: Code
    },
    {
      year: "2019",
      title: "The Beginning",
      company: "Self-Taught Developer",
      description: "Started web development journey. Built first freelance project within 6 months of learning.",
      icon: Star
    }
  ];

  const certifications = [
    "Meta Frontend Developer Professional Certificate",
    "AWS Certified Solutions Architect",
    "Google UX Design Professional Certificate",
    "Advanced React & Next.js Certification"
  ];

  const technologies = [
    { name: "React", gradient: "from-cyan-400 to-blue-500" },
    { name: "Next.js", gradient: "from-gray-700 to-gray-900" },
    { name: "TypeScript", gradient: "from-blue-500 to-blue-700" },
    { name: "Node.js", gradient: "from-green-500 to-green-700" },
    { name: "MongoDB", gradient: "from-green-600 to-green-800" },
    { name: "Firebase", gradient: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", gradient: "from-cyan-400 to-blue-500" },
    { name: "Git", gradient: "from-orange-500 to-red-500" },
    { name: "Vercel", gradient: "from-gray-800 to-black" },
    { name: "AWS", gradient: "from-orange-400 to-yellow-500" },
    { name: "Figma", gradient: "from-purple-500 to-pink-500" },
    { name: "REST APIs", gradient: "from-indigo-500 to-purple-500" },

    { name: "Angular", gradient: "from-red-500 to-red-700" },
  { name: "MERN Stack", gradient: "from-green-500 to-blue-500" },
  { name: "MEAN Stack", gradient: "from-red-500 to-green-500" },
  { name: "Full Stack", gradient: "from-indigo-500 to-blue-600" },
  { name: "Kotlin", gradient: "from-purple-500 to-indigo-500" },
  { name: "Redux", gradient: "from-purple-600 to-indigo-600" },
  { name: "React Native", gradient: "from-cyan-500 to-blue-600" },
  { name: "Vue.js", gradient: "from-green-400 to-green-600" },
  { name: "Supabase", gradient: "from-emerald-500 to-green-700" },
  { name: "Nginx", gradient: "from-green-600 to-lime-600" },
{ name: "Spring Boot", gradient: "from-green-500 to-emerald-700" },
  { name: "Apache Kafka", gradient: "from-gray-700 to-black" },
  { name: "Hibernate", gradient: "from-yellow-600 to-orange-700" }

  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse-slow">
                <Sparkles className="w-4 h-4" />
                <span>New Startup • Fresh Ideas • Modern Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300">
                  Todwal Infotech
                </span>
              </h1>

              {/* Typing Effect Headline */}
              <div className="text-2xl sm:text-3xl font-bold text-gray-700 mb-6 h-12">
                Building for{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {displayedText}
                  <span className="animate-blink">|</span>
                </span>
              </div>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A fresh startup specializing in creating high-converting websites for local businesses. 
                We combine modern technology with proven strategies to help you grow online.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="contact" 
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Let's Work Together
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                </a>
                <a 
                  href="work" 
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 bg-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  View Our Work
                </a>
              </div>
            </div>

            {/* Stats Card with Glow */}
           <div className="relative animate-fade-in-up animation-delay-200">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow" />

  <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-500">
    
    <div className="grid grid-cols-2 gap-6">
      
      <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
        <div className="text-5xl font-bold mb-2 animate-count-up">30+</div>
        <div className="text-blue-100 text-sm">Projects Built</div>
      </div>

      <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
        <div className="text-5xl font-bold mb-2 animate-count-up">Early</div>
        <div className="text-blue-100 text-sm">Client Collaborations</div>
      </div>

      <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
        <div className="text-5xl font-bold mb-2 animate-count-up">New</div>
        <div className="text-blue-100 text-sm">Tech Stack</div>
      </div>

      <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
        <div className="text-5xl font-bold mb-2 animate-count-up">Aim</div>
        <div className="text-blue-100 text-sm">Quality Delivery</div>
      </div>

    </div>

    {/* Floating Badge */}
    <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce-slow">
      🚀 Early Stage Startup
    </div>

  </div>
</div>

          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Todwal Infotech Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Todwal Infotech began in <strong>2026</strong> with a simple mission: help local businesses thrive in the digital world. 
              As a fresh startup, we bring energy, innovation, and a customer-first approach to every project.
            </p>
            <p className="text-lg leading-relaxed">
              Our founder started the web development journey in 2022, teaching himself to code through online resources and real-world projects. 
              The turning point came with a local dental clinic struggling with low appointment bookings. After rebuilding their website, 
              they saw a <strong className="text-blue-600">45% increase in appointments</strong> within three months.
            </p>
            
            <p className="text-lg leading-relaxed">
              Today, Todwal Infotech focuses exclusively on building conversion-focused websites for local businesses. 
              We combine <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">modern technology</strong> with 
              proven marketing principles to create websites that deliver real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Progress Bars */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              What We Excel At
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100 hover:border-transparent relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg">{skill.name}</h3>
                        <div className="text-sm text-gray-500">{skill.level}% Proficiency</div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-2000 animate-progress`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section with Cards */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Todwal Infotech Stands For
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-10 rounded-bl-full`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4">
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Glow background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${tech.gradient} rounded-lg mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="font-bold text-white text-lg">{tech.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold mb-4">
              Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Learning
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group flex items-start bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100 hover:border-blue-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Check className="text-white" size={24} />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
            <span>Ready to Launch Your Success?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to take your business online? Todwal Infotech is here to help you grow with modern, high-converting websites.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="contact" 
              className="group inline-flex items-center justify-center bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              Get Free Website Audit
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </a>
            <a 
              href="work" 
              className="inline-flex items-center justify-center border-2 border-white text-white bg-white/10 backdrop-blur-sm px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Our Work
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
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    @keyframes progress {
      from { width: 0%; }
    }

    .animate-blob {
      animation: blob 7s infinite;
    }

    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }

    .animate-gradient {
      background-size: 300% 300%;
      animation: gradient 3s ease infinite;
    }

    .animate-blink {
      animation: blink 1s step-end infinite;
    }

    .animate-pulse-slow {
      animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .animate-bounce-slow {
      animation: bounce 2s infinite;
    }

    .animate-progress {
      animation: progress 2s ease-out forwards;
    }

    .bg-300 {
      background-size: 300% 300%;
    }

    .bg-grid-pattern {
      background-image: linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
      background-size: 50px 50px;
    }

    .animation-delay-100 { animation-delay: 100ms; }
    .animation-delay-200 { animation-delay: 200ms; }
    .animation-delay-300 { animation-delay: 300ms; }
    .animation-delay-400 { animation-delay: 400ms; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
  `}</style>
</div>
);
};
export default AboutPage;
