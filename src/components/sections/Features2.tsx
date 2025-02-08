import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Brain, Calendar, Link, DollarSign, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'AI Cold Calling & Follow-Ups',
    description: 'Engage leads instantly with human-like conversations that adapt in real-time',
    benefits: ['24/7 operation', 'Natural conversations', 'Instant follow-ups']
  },
  {
    icon: Brain,
    title: 'AI Lead Qualification',
    description: 'Smart filtering ensures you only talk to high-intent prospects',
    benefits: ['Automated scoring', 'Behavior analysis', 'Priority routing']
  },
  {
    icon: Calendar,
    title: 'AI-Powered Scheduling',
    description: 'Seamlessly book meetings with qualified leads without human intervention',
    benefits: ['Smart availability', 'Timezone handling', 'Calendar sync']
  },
  {
    icon: Link,
    title: 'CRM Integration',
    description: 'Works seamlessly with your existing tools and workflows',
    benefits: ['HubSpot ready', 'Salesforce sync', 'Custom APIs']
  },
  {
    icon: DollarSign,
    title: 'Massive Cost Savings',
    description: 'Reduce your sales costs while scaling your outreach efforts',
    benefits: ['$400K+ annual savings', 'Reduced overhead', 'Better ROI']
  }
];

export function Features2() {
  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">RapidX.AI</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The most advanced AI voice solution for modern sales teams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-card p-8 rounded-2xl border border-neon-green/10 hover:border-neon-green/30 transition-all duration-300"
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              {/* Icon */}
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-green/20 to-transparent flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-neon-green" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                
                {/* Benefits List */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-2xl mb-8">
            Close more deals with AI-powered cold calling that
            <span className="text-gradient font-bold"> never stops working!</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            Schedule a Free AI Demo
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}