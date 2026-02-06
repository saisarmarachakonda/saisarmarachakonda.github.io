
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { SectionId } from '../types';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
              <Logo className="h-8 w-auto mr-2" />
              <span className="font-display font-bold text-xl text-slate-900">
                Bodhak<span className="text-blue-600">AI</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pioneering the future of autonomous enterprise intelligence. 
              We build systems that think, learn, and grow.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li onClick={() => scrollTo(SectionId.SHOWCASE)} className="hover:text-blue-600 cursor-pointer">Agentic Frameworks</li>
              <li onClick={() => scrollTo(SectionId.SERVICES)} className="hover:text-blue-600 cursor-pointer">Cloud Migration</li>
              <li onClick={() => scrollTo(SectionId.SERVICES)} className="hover:text-blue-600 cursor-pointer">Predictive Analytics</li>
              <li onClick={() => scrollTo(SectionId.SERVICES)} className="hover:text-blue-600 cursor-pointer">Generative AI</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="hover:text-blue-600 cursor-pointer">About Us</li>
              <li onClick={() => scrollTo(SectionId.CAREERS)} className="hover:text-blue-600 cursor-pointer">Careers</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li onClick={() => scrollTo(SectionId.CONTACT)} className="hover:text-blue-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Bodhak AI Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
            <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
