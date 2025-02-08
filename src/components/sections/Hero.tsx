import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TypewriterText } from '../ui/TypewriterText';

interface HeroProps {
  mouseX: number;
}

export function Hero({ mouseX }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="mb-4">
            <div className="h-0.5 w-24 bg-neon-green mb-2 mx-auto" />
            <p className="text-neon-green text-sm font-medium">RapidX AI Voice Agents</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight">
            AI that <TypewriterText /> on Autopilot?
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium inline-flex items-center mb-16"
          >
            Book a Demo <ArrowRight className="ml-2" />
          </motion.button>

          <div>
            <h3 className="text-2xl font-bold mb-8">Endorsed by the Best</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
              {[
                { name: 'NVIDIA', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
                { name: 'X', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png' },
                { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
                { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
                { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
                { name: 'Anthropic', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Anthropic_logo.svg' }
              ].map((company) => (
                <div 
                  key={company.name}
                  className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="h-8 object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}