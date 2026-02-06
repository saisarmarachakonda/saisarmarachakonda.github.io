
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Code, Server, Cpu, Globe } from 'lucide-react';
import { SectionId } from '../types';

const openings = [
  {
    role: 'Senior AI Agent Engineer',
    team: 'Agentic Core',
    location: 'Remote',
    icon: Cpu,
    tags: ['Python', 'LLMs', 'Orchestration'],
  },
  {
    role: 'Cloud Solutions Architect',
    team: 'Infrastructure',
    location: 'Hyderabad / Remote',
    icon: Server,
    tags: ['AWS/GCP', 'Kubernetes', 'IaC'],
  },
  {
    role: 'Full Stack Engineer (AI)',
    team: 'Product',
    location: 'Hybrid',
    icon: Code,
    tags: ['React', 'Next.js', 'Vercel'],
  }
];

const Careers: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id={SectionId.CAREERS} className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">
              Careers at Bodhak
            </span>
            <h2 className="text-4xl font-display font-bold mb-6 tracking-tight">
              Build the <span className="text-blue-400">Future of Autonomy</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
              We are a team of engineers building the next generation of enterprise intelligence. Join us in architecting the autonomous frontier.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {openings.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={scrollToContact}
              className="group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-900 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <job.icon className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors">{job.role}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-slate-500 font-medium">{job.team}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Globe className="w-3 h-3" /> {job.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-between md:justify-end flex-wrap">
                <div className="flex gap-2">
                  {job.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 rounded bg-slate-800/50 border border-slate-700/50 text-[9px] font-mono text-slate-400 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500 transition-all">
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 pt-12 border-t border-slate-900 text-center"
        >
          <p className="text-slate-500 text-sm mb-6 font-light">
            Don't see a specific role? We're always looking for exceptional talent.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-white bg-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/20"
          >
            Open Application <Briefcase className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
