import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Clock, Target, Calendar, ArrowRight, TrendingDown, AlertTriangle } from 'lucide-react';

export function CostComparison() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">
            Your Cold Calling Operation is <span className="text-red-500">Bleeding Money</span>
          </h2>
          <p className="text-xl text-gray-400">Let's Get Real</p>
        </motion.div>

        {/* Current Situation */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-dark-card p-8 rounded-2xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <DollarSign className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">$39,600 Monthly Burn</h3>
                  <p className="text-gray-400">For just 1,000 calls a day</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-card p-8 rounded-2xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Maxed Out Team</h3>
                  <p className="text-gray-400">Leads slipping, follow-ups forgotten</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-card p-8 rounded-2xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">$475,200 Annually</h3>
                  <p className="text-gray-400">Down the drain each year</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Competition's Advantage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-6">
              Meanwhile, Your Competition...
              <br />
              <span className="text-neon-green">Is crushing it with AI for just $5,000 monthly:</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-card p-6 rounded-xl border border-neon-green/20">
                <Clock className="w-6 h-6 text-neon-green mb-2" />
                <h4 className="font-bold">24/7 Operation</h4>
                <p className="text-sm text-gray-400">Never stops working</p>
              </div>
              <div className="bg-dark-card p-6 rounded-xl border border-neon-green/20">
                <Target className="w-6 h-6 text-neon-green mb-2" />
                <h4 className="font-bold">10,000+ Calls</h4>
                <p className="text-sm text-gray-400">Daily outreach</p>
              </div>
              <div className="bg-dark-card p-6 rounded-xl border border-neon-green/20">
                <Calendar className="w-6 h-6 text-neon-green mb-2" />
                <h4 className="font-bold">Perfect Follow-ups</h4>
                <p className="text-sm text-gray-400">Never misses one</p>
              </div>
              <div className="bg-dark-card p-6 rounded-xl border border-neon-green/20">
                <Target className="w-6 h-6 text-neon-green mb-2" />
                <h4 className="font-bold">AI Qualification</h4>
                <p className="text-sm text-gray-400">Smart filtering</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Math */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">The Math is Simple:</h3>
          <div className="bg-dark-card p-8 rounded-2xl border border-neon-green/20">
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="text-gray-400 mb-2">Your Current Cost</div>
                <div className="text-4xl font-bold text-red-500">$475,200</div>
              </div>
              <div className="text-2xl font-bold">vs.</div>
              <div className="text-center">
                <div className="text-gray-400 mb-2">AI System</div>
                <div className="text-4xl font-bold text-neon-green">$60,000</div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl mb-2">That's</div>
              <div className="text-3xl font-bold text-red-500">$415,200 You're Burning Every Year</div>
            </div>
          </div>
        </motion.div>

        {/* Results & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Real Results? One Company Switched and:</h3>
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2">50%</div>
              <div className="text-sm text-gray-400">Cut acquisition costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2">3X</div>
              <div className="text-sm text-gray-400">More appointments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2">$100K+</div>
              <div className="text-sm text-gray-400">Instant savings</div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Stop Bleeding Money.</h3>
            <h4 className="text-2xl">Make the Switch.</h4>
            <p className="text-xl text-red-500">Or Watch Your Competition Win.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 glow-button bg-neon-green text-black px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            Stop Wasting Money Today
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}