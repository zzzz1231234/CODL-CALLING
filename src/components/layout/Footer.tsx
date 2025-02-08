import React from 'react';
import { motion } from 'framer-motion';
import { Diamond, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
];

const legalLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Cookie Policy', href: '#' }
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram }
];

const contactInfo = [
  { icon: Mail, text: 'contact@rapidx.ai' },
  { icon: Phone, text: '+1 (555) 123-4567' },
  { icon: MapPin, text: 'San Francisco, CA' }
];

export function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-neon-green/10">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <Diamond className="w-6 h-6 text-neon-green transform rotate-45" />
              <span className="text-2xl font-bold tracking-tight">
                Rapid<span className="text-neon-green">X</span>.AI
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing sales with AI-powered cold calling and lead qualification.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-dark-card border border-neon-green/10 flex items-center justify-center hover:border-neon-green/30 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-neon-green transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <info.icon className="w-5 h-5 text-neon-green" />
                  <span className="text-gray-400">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest AI sales insights.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-dark-card border border-neon-green/20 focus:border-neon-green focus:ring-1 focus:ring-neon-green focus:outline-none transition-colors text-white"
              />
              <button className="w-full px-6 py-3 bg-neon-green text-black rounded-xl font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-neon-green/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 RapidX.AI. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-neon-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}