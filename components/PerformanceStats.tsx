import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { SectionId } from '../types';

const data = [
  { month: 'Jan', traditional: 40, agentic: 45 },
  { month: 'Feb', traditional: 42, agentic: 52 },
  { month: 'Mar', traditional: 45, agentic: 65 },
  { month: 'Apr', traditional: 46, agentic: 78 },
  { month: 'May', traditional: 48, agentic: 92 },
  { month: 'Jun', traditional: 50, agentic: 115 },
];

const PerformanceStats: React.FC = () => {
  return (
    <section id={SectionId.STATS} className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                Outperform with <br/>
                <span className="text-blue-600">Agentic Efficiency</span>
              </h2>
              <p className="text-slate-500 text-xl font-light mb-12 leading-relaxed">
                Legacy automation reaches a threshold of diminishing returns. Our Bodhak Agentic systems are engineered for exponential scalability through iterative learning.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-10 bg-white rounded-[32px] border border-slate-200 shadow-sm group hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="text-5xl font-bold text-emerald-600 mb-3 group-hover:scale-110 transition-transform duration-500">+240%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Throughput Velocity</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-10 bg-white rounded-[32px] border border-slate-200 shadow-sm group hover:border-blue-500/30 transition-all duration-500"
              >
                <div className="text-5xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform duration-500">-65%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Operational Overhead</div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[500px] bg-white p-10 rounded-[40px] border border-slate-200 shadow-2xl shadow-slate-200/50 backdrop-blur-sm relative"
          >
            <div className="mb-10 flex items-center justify-between">
              <div>
                <h3 className="text-slate-900 font-bold text-xl">Task Optimization Curve</h3>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-bold">Bodhak Performance Engine v3.1</p>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>Agentic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <span>Legacy</span>
                </div>
              </div>
            </div>

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorAgentic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.05}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    stroke="#cbd5e1" 
                    tick={{fontSize: 10, fontWeight: 600}} 
                    tickLine={false} 
                    axisLine={false} 
                    dy={15}
                  />
                  <YAxis 
                    stroke="#cbd5e1" 
                    tick={{fontSize: 10, fontWeight: 600}} 
                    tickLine={false} 
                    axisLine={false} 
                  />
                  <Tooltip 
                    cursor={{ stroke: '#2563eb', strokeWidth: 1, strokeDasharray: '4 4' }}
                    contentStyle={{ 
                      backgroundColor: '#ffffff', 
                      borderRadius: '16px', 
                      border: '1px solid #e2e8f0', 
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
                      fontSize: '12px'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="traditional" 
                    stroke="#94a3b8" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorTrad)" 
                    name="Legacy Automation"
                    animationDuration={2500}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="agentic" 
                    stroke="#2563eb" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorAgentic)" 
                    name="Bodhak Agentic"
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 pt-6">
              <span>Projection: Q4 2025</span>
              <span className="text-blue-600">Model: Gemini-3-Pro Powered</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;