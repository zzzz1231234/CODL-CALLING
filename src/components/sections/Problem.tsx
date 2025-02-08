import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

const costData = [
  { name: 'Traditional', cost: 475200, label: 'Traditional: $475,200' },
  { name: 'RapidX.AI', cost: 60000, label: 'RapidX.AI: $60,000' }
];

const productivityData = Array.from({ length: 12 }, (_, i) => ({
  name: `Hour ${i + 1}`,
  traditional: Math.floor(Math.random() * 40 + 80),
  ai: Math.floor(Math.random() * 400 + 800)
}));

const roadmapData = [
  {
    title: 'Manual Prospecting',
    description: 'Hours spent researching leads',
    icon: Clock,
    color: '#FF4444'
  },
  {
    title: 'Cold Calling',
    description: '100+ attempts per day',
    icon: TrendingDown,
    color: '#FF6B6B'
  },
  {
    title: 'Follow-ups',
    description: 'Manual tracking & scheduling',
    icon: AlertTriangle,
    color: '#FF9F9F'
  },
  {
    title: 'High Costs',
    description: '$475,200 annual expense',
    icon: DollarSign,
    color: '#FFC2C2'
  }
];

export function Problem() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            The <span className="text-gradient">Problem</span> with Traditional Cold Calling
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Traditional cold calling is holding your sales team back. Here's why it's time for a change.
          </p>
        </motion.div>

        {/* Roadmap Visualization */}
        <div className="mb-32 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-green/20 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {roadmapData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neon-green shadow-lg shadow-neon-green/50" />
                <div className="bg-dark-card p-8 rounded-2xl border border-neon-green/10 hover:border-neon-green/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-green/20 to-transparent flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-neon-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < roadmapData.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-neon-green/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Cost Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-dark-card p-8 rounded-2xl border border-neon-green/10"
          >
            <h3 className="text-2xl font-bold mb-6">Annual Cost Comparison</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costData} barSize={60}>
                  <defs>
                    <linearGradient id="costGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00FF00" stopOpacity={0.8}/>
                      <stop offset="100%" stopColor="#00FF00" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="#ffffff" axisLine={false} tickLine={false} />
                  <YAxis 
                    stroke="#ffffff" 
                    axisLine={false} 
                    tickLine={false}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{ 
                      background: 'rgba(10, 10, 10, 0.95)', 
                      border: '1px solid #00FF00',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 255, 0, 0.1)'
                    }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Bar 
                    dataKey="cost" 
                    fill="url(#costGradient)"
                    radius={[8, 8, 0, 0]}
                    label={{ 
                      position: 'top', 
                      fill: '#ffffff',
                      formatter: (value) => `$${value.toLocaleString()}`
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Productivity Comparison Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-dark-card p-8 rounded-2xl border border-neon-green/10"
          >
            <h3 className="text-2xl font-bold mb-6">Hourly Call Volume</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={productivityData}>
                  <defs>
                    <linearGradient id="traditionalGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#666666" stopOpacity={0.3}/>
                      <stop offset="100%" stopColor="#666666" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="aiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00FF00" stopOpacity={0.3}/>
                      <stop offset="100%" stopColor="#00FF00" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" vertical={false} />
                  <XAxis dataKey="name" stroke="#ffffff" axisLine={false} tickLine={false} />
                  <YAxis 
                    stroke="#ffffff" 
                    axisLine={false} 
                    tickLine={false}
                    tickFormatter={(value) => `${value} calls`}
                  />
                  <Tooltip
                    contentStyle={{ 
                      background: 'rgba(10, 10, 10, 0.95)', 
                      border: '1px solid #00FF00',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0, 255, 0, 0.1)'
                    }}
                    labelStyle={{ color: '#ffffff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="traditional" 
                    stroke="#666666" 
                    fill="url(#traditionalGradient)" 
                    name="Traditional"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="ai" 
                    stroke="#00FF00" 
                    fill="url(#aiGradient)" 
                    name="RapidX.AI"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium"
          >
            See How AI Solves This →
          </motion.button>
        </div>
      </div>
    </section>
  );
}