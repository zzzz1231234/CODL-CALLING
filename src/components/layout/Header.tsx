import React from 'react';
import { motion } from 'framer-motion';
import { Diamond } from 'lucide-react';
import { NavLink } from '../ui/NavLink';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Features', href: '#features' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' }
];

export function Header() {
  return (
    <div className="fixed w-full z-50 px-6 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-12"
          >
            <a href="#home" className="flex items-center space-x-2">
              <Diamond className="w-6 h-6 text-neon-green transform rotate-45" />
              <span className="text-2xl font-bold tracking-tight">Rapid<span className="text-neon-green">X</span>.AI</span>
            </a>
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <NavLink key={item.name} {...item} />
              ))}
            </nav>
          </motion.div>
          <motion.a
            href="#pricing"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="glow-button bg-neon-green text-black px-6 py-2 rounded-full text-sm font-medium"
          >
            Book a Demo
          </motion.a>
        </div>
      </div>
    </div>
  );
}