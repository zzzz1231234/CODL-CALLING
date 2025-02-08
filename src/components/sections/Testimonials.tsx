import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We replaced our entire cold calling team with RapidX.AI and saw a 5X increase in appointments booked!",
    author: "John D.",
    role: "CEO",
    company: "SaaS Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150",
    rating: 5
  },
  {
    quote: "AI cold calling helped us scale without hiring more agents. Game-changer!",
    author: "Sarah K.",
    role: "Head of Sales",
    company: "B2B Company",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150",
    rating: 5
  },
  {
    quote: "The ROI is incredible. We're booking more meetings while saving on operational costs.",
    author: "Michael R.",
    role: "Sales Director",
    company: "Tech Solutions Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-dark-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join hundreds of companies transforming their sales with AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-dark-bg p-8 rounded-2xl border border-neon-green/10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-neon-green flex items-center justify-center">
                <Quote className="w-4 h-4 text-black" />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-neon-green fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-neon-green/30"
                />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}