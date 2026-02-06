
import React from 'react';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import { SectionId } from '../types';

const ContactUs: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3">Connect With Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Ready to <span className="text-blue-600">Automate</span> Your Future?
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-lg">
              Our team of senior AI architects and cloud engineers is ready to discuss your enterprise requirements. Let's build something extraordinary.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Our Architects</h4>
                  <p className="text-slate-500 text-sm">solutions@bodhak.co.in</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Direct Consulting</h4>
                  <p className="text-slate-500 text-sm">+919502790901</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Innovation Hub</h4>
                  <p className="text-slate-500 text-sm">Madhapur, Hyderabad</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-[80px] rounded-full -z-10" />
            <div className="p-10 rounded-[32px] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company Email</label>
                    <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Service Interest</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm appearance-none">
                    <option>Agentic Frameworks</option>
                    <option>Cloud Migration</option>
                    <option>Predictive Analytics</option>
                    <option>Generative AI Integration</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea rows={4} placeholder="Briefly describe your project goals..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                  Submit Inquiry <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
