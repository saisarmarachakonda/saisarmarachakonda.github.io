
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { label: 'Services', id: SectionId.SERVICES },
    { label: 'Showcase', id: SectionId.SHOWCASE },
    { label: 'Workflow', id: SectionId.WORKFLOW },
    { label: 'Case Studies', id: SectionId.CASE_STUDIES },
    { label: 'Careers', id: SectionId.CAREERS },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection(SectionId.HERO)}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Logo className="h-10 w-auto mr-3 relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
              Bodhak<span className="text-blue-600">AI</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-semibold transition-all hover:bg-slate-50"
                >
                  {link.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection(SectionId.CONTACT)}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10 hover:shadow-blue-600/20 active:scale-95"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.id)}
                className="text-slate-600 hover:text-blue-600 block px-3 py-3 rounded-md text-base font-semibold w-full text-left hover:bg-slate-50"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="mt-4 w-full text-center bg-blue-600 text-white px-5 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
