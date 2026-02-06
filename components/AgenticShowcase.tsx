
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Search, 
  FileCheck, 
  ShieldAlert, 
  Workflow, 
  Zap, 
  Cpu, 
  Network,
  MessageSquare,
  Repeat
} from 'lucide-react';
import { SectionId } from '../types';

interface Agent {
  id: string;
  name: string;
  role: string;
  icon: React.ElementType;
  color: string;
  description: string;
  tasks: string[];
}

const agents: Agent[] = [
  {
    id: 'researcher',
    name: 'Discovery Agent',
    role: 'Perception & Retrieval',
    icon: Search,
    color: '#3b82f6',
    description: 'Specialized in multi-modal data ingestion and semantic indexing across enterprise silos.',
    tasks: ['Semantic Search', 'Context Retrieval', 'Document Parsing']
  },
  {
    id: 'planner',
    name: 'Strategic Architect',
    role: 'Reasoning & Planning',
    icon: Workflow,
    color: '#8b5cf6',
    description: 'Breaks down complex business objectives into actionable execution chains.',
    tasks: ['Task Decomposition', 'Chain-of-Thought', 'Constraint Analysis']
  },
  {
    id: 'executor',
    name: 'Operation Unit',
    role: 'Action & Tooling',
    icon: Zap,
    color: '#10b981',
    description: 'Integrates directly with ERP, CRM, and Cloud APIs to execute planned operations.',
    tasks: ['API Integration', 'Code Generation', 'Workflow Execution']
  },
  {
    id: 'validator',
    name: 'Governance Sentry',
    role: 'Compliance & Verification',
    icon: ShieldAlert,
    color: '#ef4444',
    description: 'Ensures all actions meet corporate safety guidelines and regulatory compliance.',
    tasks: ['Bias Detection', 'Policy Enforcement', 'Audit Logging']
  }
];

const AgenticShowcase: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0]);

  return (
    <section id={SectionId.SHOWCASE} className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
          >
            The Era of Autonomous Action
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight"
          >
            Agentic <span className="text-blue-600">Orchestration</span>
          </motion.h3>
          <p className="mt-6 max-w-2xl text-xl text-slate-500 mx-auto font-light leading-relaxed">
            Witness how Bodhak AI agents collaborate in a self-correcting loop to transform static data into dynamic enterprise value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Interactive Agent Graph Visualization */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {/* Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Lines from center to satellites */}
              <motion.line x1="300" y1="300" x2="100" y2="150" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
              <motion.line x1="300" y1="300" x2="500" y2="150" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
              <motion.line x1="300" y1="300" x2="100" y2="450" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
              <motion.line x1="300" y1="300" x2="500" y2="450" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="5,5" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
            </svg>

            {/* Central Orchestrator Node */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative z-20 w-32 h-32 rounded-full bg-white border-4 border-blue-500 shadow-2xl flex items-center justify-center group"
            >
              <div className="absolute inset-[-10px] rounded-full border border-blue-200 animate-ping opacity-20" />
              <Network className="w-12 h-12 text-blue-600" />
              <div className="absolute -bottom-8 whitespace-nowrap text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master Orchestrator</div>
            </motion.div>

            {/* Satellite Agents */}
            <div className="absolute inset-0 flex items-center justify-center">
              {agents.map((agent, i) => {
                const angles = [210, 330, 150, 30]; // Custom positions
                const radius = 200;
                const angle = (angles[i] * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.button
                    key={agent.id}
                    onClick={() => setSelectedAgent(agent)}
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x, y, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`absolute w-20 h-20 rounded-2xl bg-white border-2 shadow-xl flex items-center justify-center transition-all ${selectedAgent.id === agent.id ? 'ring-4 ring-blue-500/20' : 'border-slate-100 hover:border-blue-200'}`}
                    style={{ 
                      borderColor: selectedAgent.id === agent.id ? agent.color : undefined 
                    }}
                  >
                    <agent.icon className="w-8 h-8" style={{ color: agent.color }} />
                    <div className={`absolute -bottom-10 whitespace-nowrap text-[9px] font-bold uppercase tracking-widest transition-colors ${selectedAgent.id === agent.id ? 'text-blue-600' : 'text-slate-400'}`}>
                      {agent.name}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Agent Info Display */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAgent.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-10 rounded-[40px] border border-slate-200 shadow-xl shadow-slate-200/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${selectedAgent.color}15` }}>
                    <selectedAgent.icon className="w-8 h-8" style={{ color: selectedAgent.color }} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{selectedAgent.role}</span>
                    <h4 className="text-2xl font-bold text-slate-900">{selectedAgent.name}</h4>
                  </div>
                </div>

                <p className="text-slate-500 text-lg leading-relaxed mb-10">
                  {selectedAgent.description}
                </p>

                <div className="space-y-4">
                  <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Core Capabilities</h5>
                  {selectedAgent.tasks.map((task, i) => (
                    <motion.div 
                      key={task}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-blue-200 transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: selectedAgent.color }} />
                      <span className="text-sm font-bold text-slate-700">{task}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-between pt-8 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2">Active in v2.5</span>
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="p-2 bg-blue-50 rounded-full"
                  >
                    <Repeat className="w-4 h-4 text-blue-600" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Dynamic Showcase Cards - Bottom */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Financial Agent Swarm",
              desc: "Collaborative agents performing real-time fraud detection and portfolio rebalancing.",
              icon: MessageSquare
            },
            {
              title: "Self-Healing Infra",
              desc: "Ops-agents monitoring cloud health and autonomously provisioning failovers.",
              icon: Cpu
            },
            {
              title: "Customer Intent Agent",
              desc: "High-EQ agents analyzing support requests to trigger automated resolution chains.",
              icon: MessageSquare
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
              </div>
              <h5 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h5>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgenticShowcase;
