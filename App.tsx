
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CloudProviders from './components/CloudProviders';
import Services from './components/Services';
import AgenticShowcase from './components/AgenticShowcase';
import ProcessFlow from './components/ProcessFlow';
import CaseStudies from './components/CaseStudies';
import Careers from './components/Careers';
import PerformanceStats from './components/PerformanceStats';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/20">
      <Navbar />
      <main>
        <Hero />
        <CloudProviders />
        <Services />
        <AgenticShowcase />
        <ProcessFlow />
        <CaseStudies />
        <Careers />
        <PerformanceStats />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;
