'use client';

import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState('');

  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   alert('Thanks! I will contact you within 24 hours.');
  //   setFormData({ name: '', email: '', phone: '', message: '' });
  // };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      setError('Please fill all details');
      return;
    }

    setError('');

    const message = `New Website Audit Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Details: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(`https://wa.me/919001012065?text=${encodedMessage}`, "_blank");

    setFormData({ name: '', email: '', phone: '', message: '' });
  };


  return (
    <section id="contact" className="py-28 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
            Free Website Audit
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let’s Build a Website That Actually Converts
          </h2>

          <p className="text-lg text-gray-600">
            No pressure. No sales talk. Just clear suggestions to grow your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get Your Free Audit
            </h3>

            <div className="space-y-5">
              {[
                { label: 'Name', type: 'text', key: 'name', placeholder: 'Your full name' },
                { label: 'Email', type: 'email', key: 'email', placeholder: 'you@example.com' },
                { label: 'Phone', type: 'tel', key: 'phone', placeholder: '+91 XXXXX XXXXX' }
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={(formData as any)[field.key]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-700"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Briefly describe your project or problem..."
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-600 outline-none text-gray-700"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
              >
                Get My Free Audit →
              </motion.button>

              {/* Trust Notes */}
              <motion.div
                className="flex flex-wrap gap-4 text-sm text-gray-600 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="flex items-center gap-1">
                  <ShieldCheck size={16} /> No spam
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> 24hr response
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={16} /> Free consultation
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Info */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Contact Todwal Infotech
              </h3>

              <div className="space-y-4 text-gray-700">
                <a href="mailto:todwalinfotech@gmail.com" className="flex items-center gap-3 hover:text-blue-600">
                  <Mail className="text-blue-600" /> todwalinfotech@gmail.com
                </a>
                <a href="tel:+919001012065" className="flex items-center gap-3 hover:text-blue-600">
                  <Phone className="text-blue-600" /> +91 90010 12065
                </a>
              </div>
            </div>

            {/* WhatsApp Highlight */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-green-50 rounded-3xl p-8 border"
            >
              <h4 className="text-xl font-bold mb-3 text-gray-900">
                Need Quick Answers?
              </h4>
              <p className="text-gray-700 mb-6">
                Chat directly on WhatsApp for instant response.
              </p>

              <a
                href="https://wa.me/919001012065"
                target="_blank"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600"
              >
                <MessageCircle /> Chat on WhatsApp
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
