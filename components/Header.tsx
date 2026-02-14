'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">Todwal Infotech</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="\" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </a>
            <a href="work" className="text-gray-700 hover:text-blue-600 transition">
              Work
            </a>
            <a href="about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a 
              href="contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a 
              href="#home" 
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#about" 
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;