import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, Clock, TrendingUp, CheckCircle, ArrowRight, Users, Target, Phone } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const monthlyData = [
  { month: 'Jan', calls: 1000, meetings: 20 },
  { month: 'Feb', calls: 5000, meetings: 120 },
  { month: 'Mar', calls: 12000, meetings: 280 },
  { month: 'Apr', calls: 25000, meetings: 520 },
  { month: 'May', calls: 45000, meetings: 890 },
  { month: 'Jun', calls: 75000, meetings: 1450 }
];

const savingsData = [
  { month: 'Month 1', savings: 35000 },
  { month: 'Month 2', savings: 70000 },
  { month: 'Month 3', savings: 105000 },
  { month: 'Month 4', savings: 140000 },
  { month: 'Month 5', savings: 175000 },
  { month: 'Month 6', savings: 210000 }
];

const metrics = [
  {
    title: 'Calls Made',
    value: '75K+',
    change: '+7400%',
    description: 'Monthly outbound calls',
    icon: Phone,
    color: '#00FF00'
  },
  {
    title: 'Meetings Booked',
    value: '1,450',
    change: '+725%',
    description: 'Monthly appointments',
    icon: Calendar,
    color: '#00DD00'
  },
  {
    title: 'Response Rate',
    value: '32%',
    change: '+180%',
    description: 'Prospect engagement',
    icon: Target,
    color: '#00BB00'
  },
  {
    title: 'Cost Savings',
    value: '$210K',
    change: '-78%',
    description: 'In 6 months',
    icon: DollarSign,
    color: '#009900'
  }
];

const comparisonData = [
  { factor: 'Monthly Cost', traditional: '$39,600', ai: '$5,000', savings: '$34,600' },
  { factor: 'Calls Per Day', traditional: '1,000', ai: '12,500', improvement: '12.5x' },
  { factor: 'Meetings Set', traditional: '200', ai: '1,450', improvement: '7.25x' },
  { factor: 'Cost Per Meeting', traditional: '$198', ai: '$3.45', savings: '$194.55' }
];

export function CaseStudy() {
  return (
    <section id="case-studies" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-neon-green/10 px-6 py-2 rounded-full border border-neon-green/30 mb-6">
            <span className="text-neon-green font-semibold">Real Customer Results</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            From Struggling to <span className="text-gradient">Scaling</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how a B2B SaaS company transformed their outbound sales with AI cold calling
          </p>
        </motion.div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-card p-8 rounded-2xl border border-neon-green/10 hover:border-neon-green/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-neon-green/20 to-transparent">
                  <metric.icon className="w-6 h-6 text-neon-green" />
                </div>
                <span className={`text-sm font-medium ${
                  metric.change.startsWith('+') ? 'text-neon-green' : 'text-red-500'
                }`}>
                  {metric.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-1">{metric.value}</h3>
              <p className="text-gray-400 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-dark-card p-8 rounded-2xl border border-neon-green/10"
          >
            <h3 className="text-2xl font-bold mb-6">6-Month Growth</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="callsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FF00" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00FF00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" />
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis stroke="#ffffff" />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(10, 10, 10, 0.95)',
                      border: '1px solid #00FF00',
                      borderRadius: '8px'
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="calls"
                    stroke="#00FF00"
                    fill="url(#callsGradient)"
                    name="Calls"
                  />
                  <Area
                    type="monotone"
                    dataKey="meetings"
                    stroke="#FFFFFF"
                    fill="rgba(255, 255, 255, 0.1)"
                    name="Meetings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Cost Savings Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-dark-card p-8 rounded-2xl border border-neon-green/10"
          >
            <h3 className="text-2xl font-bold mb-6">Cumulative Savings</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={savingsData}>
                  <defs>
                    <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00FF00" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00FF00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 0, 0.1)" />
                  <XAxis dataKey="month" stroke="#ffffff" />
                  <YAxis
                    stroke="#ffffff"
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: 'rgba(10, 10, 10, 0.95)',
                      border: '1px solid #00FF00',
                      borderRadius: '8px'
                    }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Savings']}
                  />
                  <Area
                    type="monotone"
                    dataKey="savings"
                    stroke="#00FF00"
                    fill="url(#savingsGradient)"
                    name="Savings"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-dark-card rounded-2xl border border-neon-green/10 overflow-hidden mb-20"
        >
          <div className="grid grid-cols-4 gap-4 p-6 font-bold text-lg border-b border-neon-green/10">
            <div>Metric</div>
            <div>Traditional</div>
            <div>RapidX.AI</div>
            <div>Improvement</div>
          </div>
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-4 gap-4 p-6 border-b border-neon-green/10 last:border-0"
            >
              <div className="font-medium">{row.factor}</div>
              <div className="text-gray-400">{row.traditional}</div>
              <div className="text-neon-green">{row.ai}</div>
              <div className="flex items-center gap-2 text-neon-green">
                <TrendingUp className="w-4 h-4" />
                {row.improvement || row.savings}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-2xl mb-8 max-w-3xl mx-auto">
            "We replaced our entire cold calling team with RapidX.AI and saw a
            <span className="text-gradient font-bold"> 725% increase in meetings booked</span> while reducing costs by
            <span className="text-gradient font-bold"> 78%</span>"
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=50&h=50"
              alt="CEO"
              className="w-12 h-12 rounded-full border-2 border-neon-green/30"
            />
            <div className="text-left">
              <div className="font-bold">David Chen</div>
              <div className="text-sm text-gray-400">CEO, TechStart</div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            Get These Results
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}