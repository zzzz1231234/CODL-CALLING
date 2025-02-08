import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Users, Calendar, Bot } from 'lucide-react';

export function Features() {
  const features = [
    { icon: Phone, title: 'AI Cold Calling', desc: 'Automated, human-like outreach' },
    { icon: Users, title: 'Lead Qualification', desc: 'AI ensures only high-intent prospects' },
    { icon: Calendar, title: 'Smart Scheduling', desc: 'Seamless calendar integration' },
    { icon: Bot, title: '24/7 Sales Assistance', desc: 'AI never stops working' },
  ];

  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20">
          Why <span className="text-gradient">RapidX.AI</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="feature-card p-8 rounded-2xl"
            >
              <feature.icon className="w-12 h-12 text-neon-green mb-6" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}