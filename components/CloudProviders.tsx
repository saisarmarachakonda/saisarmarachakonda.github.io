import React from 'react';
import { motion } from 'framer-motion';

const CloudProviders: React.FC = () => {
  const providers = [
    {
      name: 'Amazon Web Services',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      height: 'h-8 md:h-10',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(255,153,0,0.2)]',
    },
    {
      name: 'Microsoft Azure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
      height: 'h-7 md:h-9',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(0,120,212,0.2)]',
    },
    {
      name: 'Google Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      height: 'h-8 md:h-10',
      glow: 'group-hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.2)]',
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] mb-16"
        >
          Interoperable Cloud Intelligence
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 px-4">
          {providers.map((provider, idx) => (
            <motion.div 
              key={provider.name}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-[-24px] rounded-[32px] opacity-0 group-hover:opacity-100 transition-all duration-700 bg-white blur-2xl ${provider.glow} -z-10`} />
              
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{ 
                    y: [0, -6, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.7 
                  }}
                  className="relative flex items-center justify-center cursor-pointer"
                >
                  <img 
                    src={provider.logo} 
                    alt={provider.name} 
                    className={`${provider.height} w-auto object-contain transition-all duration-700 opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110`}
                    loading="lazy"
                  />
                </motion.div>
                
                <span className="mt-6 text-[8px] font-bold text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                  {provider.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudProviders;