
import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">

      {/* CTA STRIP */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-bold text-center md:text-left">
            Ready to grow your business online?
          </h3>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Get Free Website Audit <ArrowRight />
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Todwal Infotech</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              We help startups and local businesses build high-performance
              websites that convert visitors into customers.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <ShieldCheck size={16} />
              Trusted by growing businesses
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              {/* <li><a href="\" className="hover:text-white">Home</a></li>
              <li><a href="services" className="hover:text-white">Services</a></li>
              <li><a href="work" className="hover:text-white">Case Studies</a></li>
              <li><a href="about" className="hover:text-white">About Us</a></li>
              <li><a href="contact" className="hover:text-white">Contact</a></li> */}

              <li>
                <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/services" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="/work" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Case Studies
                </a>
              </li>

              <li>
                <a href="/about" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Local Business Websites</li>
              <li>Website Redesign</li>
              <li>E-commerce Development</li>
              <li>Speed & SEO Optimization</li>
              <li>Ongoing Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} /> todwalinfotech@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 90010 12065
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Jaipur, Rajasthan, India
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 px-6 py-6 text-center text-sm text-gray-500">
        © {currentYear} Todwal Infotech Pvt Ltd. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
