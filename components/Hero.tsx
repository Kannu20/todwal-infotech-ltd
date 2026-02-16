'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Star, TrendingUp, Zap } from 'lucide-react';

const Hero: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [typedText, setTypedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);


    // Rotating words for dynamic headline
    const rotatingWords: string[] = ['leads', 'customers', 'revenue', 'growth'];

    // Trigger animations on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);


    useEffect(() => {
        const word = rotatingWords[currentWordIndex];
        let timeoutId: NodeJS.Timeout;

        setTypedText('');

        const typeNextChar = (index: number) => {
            if (index < word.length) {
                setTypedText((prev) => prev + word[index]);

                timeoutId = setTimeout(() => {
                    typeNextChar(index + 1);
                }, 130); // typing speed
            } else {
                // pause after full word
                timeoutId = setTimeout(() => {
                    setCurrentWordIndex(
                        (prev) => (prev + 1) % rotatingWords.length
                    );
                }, 2000);
            }
        };

        typeNextChar(0);

        return () => clearTimeout(timeoutId);
    }, [currentWordIndex]);


    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);


    // Stats data with TypeScript interface
    interface Stat {
        id: number;
        value: string;
        label: string;
        icon: React.ReactNode;
        delay: string;
    }


    return (
        <section
            id="home"
            className="relative pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden"
        >
            {/* Animated Background Elements */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
                <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
            </div> */}
            

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="max-w-3xl">
                    {/* Badge with slide-in animation */}
                    <div
                        className={`inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                            }`}
                    >
                        <Star className="fill-blue-600 text-blue-600" size={16} />
                        <span>Trusted by 20+ Local Businesses</span>
                    </div>

                    {/* Main Headline with staggered animation */}
                    <h1
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        We help local businesses get more{' '}
                        <span className="relative inline-block">
                            <span
                                className={`text-blue-600 transition-all duration-300 ${typedText ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {/* {rotatingWords[currentWordIndex]} */}
                                {typedText}
                                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1`}>
                                    |
                                </span>
                            </span>
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded-full transform origin-left animate-underline" />
                        </span>
                        {' '}with fast, high-converting websites
                    </h1>

                    {/* Subheadline with fade-in */}
                    <p
                        className={`text-xl text-gray-600 mb-8 leading-relaxed transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        Professional websites that turn visitors into customers. Built for clinics, gyms,
                        salons, and coaching centers that need real business results.
                    </p>

                    {/* CTA Buttons with hover effects */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 mb-12 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            Book Free Website Audit
                            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
                        </a>
                        <a
                            href="https://wa.me/9001012065"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                        >
                            <MessageCircle className="mr-2 transition-transform duration-300 group-hover:rotate-12" size={20} />
                            WhatsApp Us
                        </a>
                    </div>


                    {/* Floating Social Proof Badge */}
                    <div
                        className={`mt-8 inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100 transform transition-all duration-700 delay-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white" />
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white" />
                        </div>
                        <div className="text-sm">
                            <div className="font-semibold text-gray-900">Join 40+ businesses</div>
                            <div className="text-gray-500">that grew with our websites</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes underline {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-underline {
          animation: underline 0.3s ease-in-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
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
      `}</style>
        </section>
    );
};

export default Hero;
