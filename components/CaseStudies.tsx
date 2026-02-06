
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionId, CaseStudy } from '../types';
import { 
  ShieldCheck, Truck, Stethoscope, ArrowUpRight, 
  X, Server, Database, Activity, Cpu, 
  Cloud, Lock, Zap, ArrowRight 
} from 'lucide-react';

const cases: CaseStudy[] = [
  {
    id: 'aws-fraud',
    title: 'FinTech Fraud Swarm',
    provider: 'AWS',
    description: 'Autonomous transaction monitoring system. Detects anomalies in <10ms.',
    metric: '99.9%',
    metricLabel: 'Detection Accuracy',
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    shadow: 'group-hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]',
    problem: 'Traditional rule-based systems were failing to keep pace with high-frequency trading fraud, resulting in a 12% loss margin and high false-positive rates that frustrated legitimate users.',
    solution: 'We deployed a multi-agent "Swarm" architecture on AWS. Unlike linear processing, these agents work in parallel: one analyzing velocity, another checking geolocation markers, and a third performing real-time graph analysis on social connections.',
    architecture: [
      { label: 'EventBridge', description: 'Real-time event bus routing 50k transactions/sec.', icon: Zap },
      { label: 'Lambda Swarm', description: 'Parallel execution of specialized fraud-detection agents.', icon: Cpu },
      { label: 'DynamoDB', description: 'Ultra-low latency state storage for agent memory.', icon: Database },
      { label: 'Neptune', description: 'Graph database identifying fraud rings in real-time.', icon: Activity }
    ]
  },
  {
    id: 'azure-logistics',
    title: 'Supply Chain Mind',
    provider: 'Azure',
    description: 'Multi-agent logistics optimizer reducing last-mile delivery costs.',
    metric: '35%',
    metricLabel: 'Cost Reduction',
    icon: Truck,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    shadow: 'group-hover:shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)]',
    problem: 'Fragmentation in third-party logistics data led to unpredictable delivery windows and significant "dead miles" in the last-mile segment, costing the client millions in fuel and labor.',
    solution: 'Built an Agentic Orchestrator using Azure Semantic Kernel. Specialized agents negotiate with carrier APIs in real-time, autonomously rerouting fleets based on live traffic, weather, and port congestion data.',
    architecture: [
      { label: 'IoT Hub', description: 'Ingesting live telemetry from over 10,000 fleet assets.', icon: Server },
      { label: 'OpenAI Service', description: 'GPT-4o powered reasoning for complex route negotiation.', icon: Cloud },
      { label: 'Stream Analytics', description: 'On-the-fly processing of spatial-temporal data.', icon: Activity },
      { label: 'Logic Apps', description: 'Autonomous execution of dispatch commands.', icon: Zap }
    ]
  },
  {
    id: 'gcp-clinical',
    title: 'Clinical Data Pipeline',
    provider: 'GCP',
    description: 'HIPAA-compliant ingestion automating record summarization.',
    metric: '12hrs',
    metricLabel: 'Time Saved per Week',
    icon: Stethoscope,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    shadow: 'group-hover:shadow-[0_0_40px_-10px_rgba(8,145,178,0.5)]',
    problem: 'Oncology practitioners were spending 30% of their day on manual data entry from patient notes, leading to burnout and delayed treatment plans.',
    solution: 'Developed a secure RAG (Retrieval Augmented Generation) pipeline. The system autonomously extracts key clinical markers, cross-references medical literature, and prepares structured summaries for physician review.',
    architecture: [
      { label: 'Vertex AI', description: 'Enterprise-grade Med-PaLM 2 fine-tuned on oncology.', icon: Cpu },
      { label: 'Cloud Storage', description: 'HIPAA-compliant bucket storage for unstructured notes.', icon: Database },
      { label: 'BigQuery', description: 'Analytics warehouse for population health patterns.', icon: Activity },
      { label: 'Cloud IAM', description: 'Zero-trust security layer for patient data privacy.', icon: Lock }
    ]
  }
];

const CaseStudies: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedCase = cases.find(c => c.id === selectedId);

  return (
    <section id={SectionId.CASE_STUDIES} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
          >
            Engineering Impact
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Proven <span className="text-blue-600">Architectures</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div 
              layoutId={item.id}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group relative p-10 rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="flex justify-between items-start mb-10">
                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.shadow} flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">{item.metric}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.metricLabel}</div>
                </div>
              </div>
              
              <div className="mb-10">
                <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{item.provider} Optimized</span>
                <h4 className="text-2xl font-bold text-slate-900 mt-1 mb-3">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>
              </div>

              <div className="flex items-center text-slate-900 font-bold text-xs group-hover:text-blue-600 transition-colors">
                View Architecture <ArrowUpRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {selectedId && selectedCase && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[60] flex items-center justify-center p-4 md:p-8"
            />
            <motion.div 
              layoutId={selectedId}
              className="fixed inset-4 md:inset-x-20 md:inset-y-12 bg-white z-[70] rounded-[40px] shadow-2xl overflow-y-auto"
            >
              <div className="absolute top-8 right-8 z-10">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                {/* Left Panel: Content */}
                <div className="lg:col-span-7 p-8 md:p-16">
                   <div className="flex items-center gap-3 mb-8">
                     <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                        {selectedCase.provider} Enterprise
                     </span>
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Case Study #{selectedCase.id.split('-')[0]}
                     </span>
                   </div>

                   <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-12">
                     {selectedCase.title}
                   </h2>

                   <div className="space-y-12">
                     <section>
                       <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                         <div className="w-4 h-px bg-blue-600" /> The Challenge
                       </h4>
                       <p className="text-slate-600 text-lg leading-relaxed">
                         {selectedCase.problem}
                       </p>
                     </section>

                     <section>
                       <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                         <div className="w-4 h-px bg-blue-600" /> Our Solution
                       </h4>
                       <p className="text-slate-600 text-lg leading-relaxed">
                         {selectedCase.solution}
                       </p>
                     </section>

                     <div className="flex flex-wrap gap-8 pt-8">
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                           <div className="text-3xl font-bold text-slate-900">{selectedCase.metric}</div>
                           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{selectedCase.metricLabel}</div>
                        </div>
                        <button 
                          onClick={() => {
                            setSelectedId(null);
                            document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="flex-grow flex items-center justify-center gap-3 bg-blue-600 text-white rounded-2xl px-8 py-6 font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                        >
                          Request Technical Briefing <ArrowRight className="w-5 h-5" />
                        </button>
                     </div>
                   </div>
                </div>

                {/* Right Panel: Architecture Visual */}
                <div className="lg:col-span-5 bg-slate-50 p-8 md:p-16 border-l border-slate-100 relative overflow-hidden">
                   {/* Background Blueprint Grid */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                      <svg width="100%" height="100%">
                         <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1"/>
                         </pattern>
                         <rect width="100%" height="100%" fill="url(#grid)" />
                      </svg>
                   </div>

                   <h4 className="text-xs font-bold text-slate-900 uppercase tracking-[0.2em] mb-12 relative">
                     Architectural Design
                   </h4>

                   <div className="space-y-6 relative">
                     {selectedCase.architecture.map((step, i) => (
                       <motion.div 
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.2 + (i * 0.1) }}
                         key={i} 
                         className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-200 transition-colors group"
                       >
                         <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                           <step.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                         </div>
                         <div>
                           <div className="font-bold text-slate-900 text-sm mb-1">{step.label}</div>
                           <p className="text-slate-500 text-xs leading-relaxed">{step.description}</p>
                         </div>
                       </motion.div>
                     ))}
                   </div>

                   {/* Tech stack badge list */}
                   <div className="mt-16 pt-8 border-t border-slate-200/50">
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">Core Stack</div>
                      <div className="flex flex-wrap gap-2">
                        {['Docker', 'Terraform', 'SOC2', 'K8s'].map(tag => (
                          <span key={tag} className="px-2 py-1 rounded bg-white border border-slate-200 text-[9px] font-mono text-slate-500">{tag}</span>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CaseStudies;