import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const benefits = [
  '100% Free Consultation',
  'See AI Cold Calling in Action',
  'Save Time & Money Instantly'
];

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
}

export function FinalCTA() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone
        }]);
      
      if (error) throw error;
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-dark-card p-12 rounded-2xl border border-neon-green/30">
              <div className="w-20 h-20 bg-neon-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-neon-green" />
              </div>
              <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
              <p className="text-xl text-gray-400 mb-8">
                We've received your request and will be in touch shortly.<br />
                One of our AI experts will contact you within 24 hours.
              </p>
              <div className="bg-dark-bg p-6 rounded-xl border border-neon-green/10">
                <h3 className="text-lg font-semibold mb-2">What happens next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center">
                      <span className="text-neon-green font-bold">1</span>
                    </div>
                    <span>Expert review of your requirements</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center">
                      <span className="text-neon-green font-bold">2</span>
                    </div>
                    <span>Personalized demo of our AI solution</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center">
                      <span className="text-neon-green font-bold">3</span>
                    </div>
                    <span>Custom implementation plan</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-6">
              Ready to <span className="text-gradient">Automate</span> Your Sales?
            </h2>
            <p className="text-xl text-gray-400">
              Join the AI revolution today. See how RapidX.AI can transform your lead generation.
            </p>
          </div>

          <div className="bg-dark-card p-8 md:p-12 rounded-2xl border border-neon-green/10">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.form
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                      errors.name ? 'border-red-500' : 'border-neon-green/20'
                    } focus:border-neon-green focus:ring-1 focus:ring-neon-green focus:outline-none transition-colors text-white`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                      errors.email ? 'border-red-500' : 'border-neon-green/20'
                    } focus:border-neon-green focus:ring-1 focus:ring-neon-green focus:outline-none transition-colors text-white`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                      errors.company ? 'border-red-500' : 'border-neon-green/20'
                    } focus:border-neon-green focus:ring-1 focus:ring-neon-green focus:outline-none transition-colors text-white`}
                    placeholder="Acme Inc"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-dark-bg border ${
                      errors.phone ? 'border-red-500' : 'border-neon-green/20'
                    } focus:border-neon-green focus:ring-1 focus:ring-neon-green focus:outline-none transition-colors text-white`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                {submitError && (
                  <div className="text-red-500 text-sm">{submitError}</div>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  disabled={isSubmitting}
                  className="w-full glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book a Free Demo
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col justify-center"
              >
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-neon-green/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-neon-green" />
                      </div>
                      <span className="text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-dark-bg rounded-xl border border-neon-green/10">
                  <p className="text-gray-400 italic">
                    "RapidX.AI helped us achieve in one month what would normally take a year. The ROI is incredible!"
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=50&h=50"
                      alt="CEO"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium">David Chen</div>
                      <div className="text-sm text-gray-400">CEO, TechStart</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}