import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Diamond, Shield, Zap, X, ChevronDown } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '2,500',
    icon: Zap,
    description: 'Perfect for small teams looking to automate their cold calling',
    features: [
      '500 calls a day',
      'Unlimited Agents',
      'Unlimited Leads (600M FREE LEAD Database)',
      'DIY Setup',
      'Up to 5 Fully Customizable Call Scripts',
      'Multi-Channel Outreach',
      'Dynamic Workflows',
      'Advanced analytics dashboard',
      'Weekly strategy consultations',
      'White-Glove Onboarding',
      '24/7 Support'
    ]
  },
  {
    name: 'Professional',
    price: '5,500',
    icon: Diamond,
    description: 'For growing teams that need more power and customization',
    popular: true,
    features: [
      '1,000 calls a day',
      'Unlimited Agents (Human Realistic with Low Latency)',
      'Unlimited Leads (600M FREE LEAD Database)',
      'Additional Weekly Lead sourcing',
      'DWY Setup Done with You',
      'Up to 10 Fully Customizable Call Scripts',
      'Advanced Objection Handling',
      'Multi-Channel Outreach',
      'Dynamic Workflows + Build your Own',
      'Advanced analytics dashboard',
      'Weekly Report and Bi-weekly Expert optimization',
      'Weekly strategy consultations',
      '24/7 Outreach Helper',
      'White-Glove Onboarding',
      '24/7 Priority Support'
    ]
  },
  {
    name: 'Enterprise',
    price: '20,000',
    icon: Shield,
    description: 'Maximum power and support for large-scale operations',
    features: [
      'Unlimited Calls',
      'Unlimited Agents (Human Realistic, Lowest Latency)',
      'Expressive Features (Um and Ahs)',
      'Unlimited Leads (600M FREE LEAD Database)',
      'Additional Weekly Lead sourcing',
      'Manual Lead Fetching for Highest Quality',
      'DFY Setup Done For You by Industry Experts',
      'Legal Protection against AI Cold Calling Issues',
      'Unlimited Customizable Call Scripts',
      'Advanced Objection Handling & Persuasion',
      'Personalized Calling',
      'Multi-Channel + Social Media Outreach',
      'Completely Autonomous System',
      'Advanced analytics with Weekly Reports',
      'Direct Access to Industry Experts',
      'White-Glove Onboarding',
      '24/7 Highest Priority Support'
    ]
  }
];

interface Feature {
  name: string;
  description: string;
}

const featureDetails: Record<string, Feature> = {
  'Unlimited Agents': {
    name: 'Unlimited AI Agents',
    description: 'Deploy as many AI agents as you need without any additional cost. Each agent can handle multiple calls simultaneously.'
  },
  'DIY Setup': {
    name: 'DIY Setup Process',
    description: 'Get started quickly with our step-by-step setup guide and documentation. Our support team is available to help if needed.'
  },
  'Advanced Objection Handling': {
    name: 'Advanced Objection Handling',
    description: 'AI agents intelligently handle common sales objections using proven techniques and adapt their responses in real-time.'
  },
  'Legal Protection': {
    name: 'Legal Protection',
    description: 'Full coverage against any legal issues related to AI calling, including compliance with TCPA and other regulations.'
  }
};

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [showFeatureInfo, setShowFeatureInfo] = useState<string | null>(null);
  const [yearlyBilling, setYearlyBilling] = useState(false);

  const handlePlanHover = (index: number | null) => {
    setSelectedPlan(index);
  };

  const getPrice = (price: string) => {
    const numPrice = parseInt(price.replace(',', ''));
    return yearlyBilling ? 
      (numPrice * 0.8).toLocaleString() : // 20% discount for yearly
      price;
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-neon-green/10 px-6 py-2 rounded-full border border-neon-green/30 mb-4">
            <span className="text-neon-green font-semibold">Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Power Level</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Scale your outreach with AI that pays for itself in the first month
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`${!yearlyBilling ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setYearlyBilling(!yearlyBilling)}
              className={`w-16 h-8 rounded-full p-1 transition-colors ${
                yearlyBilling ? 'bg-neon-green' : 'bg-gray-700'
              }`}
            >
              <motion.div
                className="w-6 h-6 bg-white rounded-full"
                animate={{ x: yearlyBilling ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`${yearlyBilling ? 'text-white' : 'text-gray-400'}`}>
              Yearly
              <span className="ml-2 text-neon-green text-sm">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => handlePlanHover(index)}
              onMouseLeave={() => handlePlanHover(null)}
              className={`relative bg-dark-card rounded-2xl border ${
                selectedPlan === index
                  ? 'border-neon-green shadow-lg shadow-neon-green/20 scale-105'
                  : plan.popular
                  ? 'border-neon-green shadow-lg shadow-neon-green/20'
                  : 'border-neon-green/10 hover:border-neon-green/30'
              } transition-all duration-300 overflow-hidden`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-neon-green text-black text-sm font-bold px-4 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <plan.icon className="w-6 h-6 text-neon-green" />
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                    </div>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${getPrice(plan.price)}</span>
                    <span className="text-gray-400 ml-2">/{yearlyBilling ? 'year' : 'month'}</span>
                  </div>
                  {yearlyBilling && (
                    <div className="text-neon-green text-sm mt-2">
                      Save ${((parseInt(plan.price.replace(',', '')) * 0.2 * 12).toLocaleString())} yearly
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                      {featureDetails[feature] && (
                        <button
                          onClick={() => setShowFeatureInfo(showFeatureInfo === feature ? null : feature)}
                          className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ChevronDown className="w-4 h-4 text-neon-green" />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className={`w-full py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-2 ${
                    selectedPlan === index || plan.popular
                      ? 'bg-neon-green text-black'
                      : 'bg-dark-bg border border-neon-green/30 hover:bg-neon-green/10'
                  } transition-colors`}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showFeatureInfo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowFeatureInfo(null)} />
              <motion.div
                className="relative bg-dark-card p-6 rounded-2xl border border-neon-green/30 max-w-md w-full"
                layoutId={`feature-${showFeatureInfo}`}
              >
                <button
                  onClick={() => setShowFeatureInfo(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
                <h3 className="text-xl font-bold mb-2">{featureDetails[showFeatureInfo].name}</h3>
                <p className="text-gray-400">{featureDetails[showFeatureInfo].description}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-2xl mb-6">
            Not sure which plan is right for you?<br />
            <span className="text-gradient font-bold">Book a demo and we'll help you decide</span>
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}