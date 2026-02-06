import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, BarChart3, Sparkles } from 'lucide-react';
import { SectionId, ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Agentic Frameworks',
    description: 'We build autonomous multi-agent systems that perceive, plan, and execute complex workflows without human intervention. Our frameworks enable self-correcting logic.',
    icon: Brain,
  },
  {
    id: '2',
    title: 'Cloud Migration',
    description: 'Accelerate your digital transformation by moving legacy infrastructure to cloud-native architectures. Seamless migration for AWS, Azure, and GCP.',
    icon: Cloud,
  },
  {
    id: '3',
    title: 'Predictive Analytics',
    description: 'Leverage historical data to forecast future trends. Our deep learning models optimize supply chains and customer behavior prediction with high accuracy.',
    icon: BarChart3,
  },
  {
    id: '4',
    title: 'Generative AI',
    description: 'Deploy enterprise-grade LLMs and RAG pipelines. From custom content generation to intelligent semantic search, we tailor models to your data.',
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] }
  },
};

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-32 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-bold tracking-widest uppercase text-[10px] mb-4"
          >
            Engineering Excellence
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
          >
            Enterprise <span className="text-blue-600">AI Spectrum</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-xl text-slate-500 mx-auto font-light leading-relaxed"
          >
            A cohesive suite of technologies designed to bridge the gap between human strategy and autonomous execution.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative p-12 rounded-[40px] bg-slate-50/50 border border-slate-200/60 hover:border-blue-500/20 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.08)] overflow-hidden backdrop-blur-sm"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-indigo-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:shadow-blue-500/10 transition-all duration-500 group-hover:scale-110">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-lg font-light flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-10 pt-8 border-t border-slate-200/50 flex items-center justify-between">
                  <div className="flex items-center text-blue-600 text-sm font-bold uppercase tracking-widest cursor-pointer group/btn">
                    Architecture Detail 
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-slate-50" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;