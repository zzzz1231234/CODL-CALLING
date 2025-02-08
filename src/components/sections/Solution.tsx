import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Bell, PiggyBank, Clock } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { month: 'Jan', traditional: 100, ai: 150 },
  { month: 'Feb', traditional: 120, ai: 280 },
  { month: 'Mar', traditional: 150, ai: 450 },
  { month: 'Apr', traditional: 180, ai: 650 },
  { month: 'May', traditional: 200, ai: 880 },
  { month: 'Jun', traditional: 220, ai: 1150 }
];

const savingsData = [
  { month: 'Month 1', savings: 35000 },
  { month: 'Month 2', savings: 70000 },
  { month: 'Month 3', savings: 105000 },
  { month: 'Month 4', savings: 140000 },
  { month: 'Month 5', savings: 175000 },
  { month: 'Month 6', savings: 210000 }
];

export function Solution() {
  return (
    <section className="py-32 bg-dark-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            The <span className="text-gradient">Solution</span>: AI-Powered Calling
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Replace your entire cold calling team with AI that works 24/7, never gets tired, and delivers consistent results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Performance Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-dark-bg p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Performance Comparison</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" />
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip
                    contentStyle={{ background: '#0A0A0A', border: '1px solid #00FF00' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Line type="monotone" dataKey="traditional" stroke="#666666" name="Traditional" />
                  <Line type="monotone" dataKey="ai" stroke="#00FF00" name="RapidX.AI" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Cumulative Savings Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-dark-bg p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Cumulative Savings</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={savingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" />
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip
                    contentStyle={{ background: '#0A0A0A', border: '1px solid #00FF00' }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Area type="monotone" dataKey="savings" stroke="#00FF00" fill="rgba(0, 255, 0, 0.2)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: '10X More Calls',
              desc: 'AI makes 10,000+ calls per day, compared to 1,000 with human agents'
            },
            {
              icon: Target,
              title: 'Smart Qualification',
              desc: 'AI automatically identifies and filters high-quality leads'
            },
            {
              icon: Bell,
              title: 'Perfect Follow-ups',
              desc: 'Never miss a follow-up with automated scheduling'
            },
            {
              icon: PiggyBank,
              title: 'Massive Savings',
              desc: 'Save $415,200+ annually compared to traditional cold calling'
            },
            {
              icon: Clock,
              title: '24/7 Operation',
              desc: 'AI works around the clock, across all time zones'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="feature-card p-8 rounded-2xl"
            >
              <item.icon className="w-12 h-12 text-neon-green mb-6" />
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}