
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Layers, 
  Cpu, 
  Workflow, 
  TrendingUp,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { SectionId } from '../types';

const steps = [
  {
    id: 'strategy',
    title: 'Strategy & Roadmap',
    icon: Target,
    color: '#3b82f6',
    description: 'We define clear AI objectives, auditing existing data assets and identifying high-impact automation opportunities tailored to your business goals.',
    details: ['Data Readiness Audit', 'ROI Projection', 'Compliance Mapping']
  },
  {
    id: 'infra',
    title: 'Cloud Core Design',
    icon: Layers,
    color: '#6366f1',
    description: 'Architecting high-availability infrastructure across AWS, Azure, or GCP using IaC (Terraform/Pulumi) for deterministic scaling.',
    details: ['Multi-Cloud Mesh', 'Zero-Trust Security', 'Latency Optimization']
  },
  {
    id: 'model',
    title: 'Neural Engineering',
    icon: Cpu,
    color: '#8b5cf6',
    description: 'Developing and fine-tuning LLMs or specialized models. We implement RAG pipelines and vector databases for contextual intelligence.',
    details: ['Fine-tuning & LoRA', 'Vector Embedding', 'Quality Benchmarking']
  },
  {
    id: 'agents',
    title: 'Agentic Orchestration',
    icon: Workflow,
    color: '#ec4899',
    description: 'Building autonomous agent swarms that perceive and act. We create complex chains of thought for multi-step enterprise workflows.',
    details: ['Self-Correction Loops', 'Tool Integration', 'Task Decomposition']
  },
  {
    id: 'scale',
    title: 'Continuous Growth',
    icon: TrendingUp,
    color: '#10b981',
    description: 'Real-time telemetry and monitoring. We continuously refine model performance and expand agent capabilities as your needs evolve.',
    details: ['A/B Performance Testing', 'RLHF Loops', 'Automatic Scaling']
  }
];

const ProcessFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id={SectionId.WORKFLOW} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
          >
            The Bodhak Method
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Our <span className="text-blue-600">Evolutionary</span> Workflow
          </h3>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-light">
            A precision-engineered journey from raw concept to self-optimizing autonomous intelligence.
          </p>
        </div>

        {/* SVG Flow Container */}
        <div className="relative">
          {/* Connecting Line SVG */}
          <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 hidden lg:block px-12 pointer-events-none">
            <svg width="100%" height="2" viewBox="0 0 1000 2" preserveAspectRatio="none">
              <motion.path 
                d="M 0 1 L 1000 1" 
                stroke="#e2e8f0" 
                strokeWidth="2" 
                strokeDasharray="8 8" 
              />
              <motion.path 
                d="M 0 1 L 1000 1" 
                stroke="url(#grad-line)" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: (activeStep + 1) / steps.length }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="grad-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-20">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep > index;
              
              return (
                <div key={step.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(index)}
                    className={`
                      relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group
                      ${isActive ? 'scale-110' : 'scale-100 hover:scale-105'}
                    `}
                  >
                    {/* Ring */}
                    <motion.div 
                      className="absolute inset-[-4px] border-2 rounded-[1.2rem] opacity-0"
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        rotate: isActive ? 360 : 0,
                        borderColor: step.color
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Background */}
                    <div 
                      className={`
                        absolute inset-0 rounded-2xl shadow-lg transition-all duration-500
                        ${isActive ? 'bg-white' : isPast ? 'bg-blue-50' : 'bg-slate-50'}
                      `}
                      style={{ 
                        boxShadow: isActive ? `0 10px 25px -5px ${step.color}40` : 'none',
                        border: `1px solid ${isActive ? step.color : '#e2e8f0'}`
                      }}
                    />

                    <step.icon 
                      className={`w-7 h-7 relative z-10 transition-colors duration-500 ${isActive || isPast ? 'text-slate-900' : 'text-slate-400'}`} 
                      style={{ color: isActive ? step.color : undefined }}
                    />
                    
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                      {index + 1}
                    </div>
                  </button>

                  <h4 className={`mt-6 text-sm font-bold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                    {step.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Details Detail Card */}
        <div className="mt-20 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-10 md:p-16 rounded-[40px] bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] relative overflow-hidden"
            >
              <div 
                className="absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 rounded-full" 
                style={{ backgroundColor: steps[activeStep].color }}
              />
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${steps[activeStep].color}15` }}
                    >
                      {React.createElement(steps[activeStep].icon, { 
                        className: "w-5 h-5", 
                        style: { color: steps[activeStep].color } 
                      })}
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phase 0{activeStep + 1}</span>
                  </div>
                  
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    {steps[activeStep].title}
                  </h4>
                  <p className="text-slate-500 text-lg leading-relaxed mb-8">
                    {steps[activeStep].description}
                  </p>

                  <button className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest hover:gap-3 transition-all group">
                    Learn about this phase <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Core Deliverables</h5>
                  {steps[activeStep].details.map((detail, i) => (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={detail} 
                      className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100/50 group hover:border-blue-200 hover:bg-white transition-all shadow-sm"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-bold text-slate-700">{detail}</span>
                      <ChevronRight className="ml-auto w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProcessFlow;
