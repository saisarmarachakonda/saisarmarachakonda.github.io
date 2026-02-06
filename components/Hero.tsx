
import React, { useEffect, useRef, useState } from 'react';
import { motion, useTransform, useSpring, useMotionValue, useScroll, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionId } from '../types';
import Logo from './Logo';

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const scrollToContact = () => {
    document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById(SectionId.SERVICES)?.scrollIntoView({ behavior: 'smooth' });
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Spotlight effect for the grid
  const spotlightLeft = useTransform(springX, [-0.5, 0.5], ['30%', '70%']);
  const spotlightTop = useTransform(springY, [-0.5, 0.5], ['30%', '70%']);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) - 0.5;
      const y = (e.clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Canvas Constellation Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', resize);
    resize();

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 20), 80);
    const connectionDistance = 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 1.5 + 0.5;
        this.color = '#3b82f6';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse influence on background
      const mx = (mouseX.get() + 0.5) * width;
      const my = (mouseY.get() + 0.5) * height;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        // Interaction with mouse
        const dxm = mx - p1.x;
        const dym = my - p1.y;
        const distm = Math.sqrt(dxm * dxm + dym * dym);
        if (distm < 200) {
          p1.vx += dxm * 0.00005;
          p1.vy += dym * 0.00005;
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);



  return (
    <section
      ref={ref}
      id={SectionId.HERO}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-50"
    >
      {/* Dynamic Visual Background Layers */}
      <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/30 blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-100/30 blur-[160px]" />

        {/* Constellation Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />

        {/* Cursor Spotlight Overlay for Grid */}
        <motion.div
          style={{
            background: `radial-gradient(600px circle at ${spotlightLeft} ${spotlightTop}, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)`
          }}
          className="absolute inset-0 z-10 mix-blend-overlay opacity-40"
        />

        {/* Tech Grid System */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#1e293b" />
              </pattern>
              <pattern id="largeGrid" width="160" height="160" patternUnits="userSpaceOnUse">
                <rect width="160" height="160" fill="url(#dotPattern)" />
                <path d="M 160 0 L 0 0 0 160" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
              <linearGradient id="glowGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#6366f1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#largeGrid)" />
          </svg>
        </div>

        {/* Pulsing "Data Packet" Circuit Paths */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
            {[1, 2, 3].map((i) => (
              <motion.path
                key={i}
                d={`M -100 ${150 * i * 1.5} L ${400 + (i * 100)} ${150 * i * 1.5} L ${500 + (i * 100)} ${250 * i} L ${900} ${250 * i} L ${1100} ${150 * i} L 1600 ${150 * i}`}
                stroke="url(#glowGrad)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="40 1000"
                animate={{
                  strokeDashoffset: [1040, 0]
                }}
                transition={{
                  duration: 6 + (i * 2),
                  ease: "linear",
                  repeat: Infinity,
                  delay: i * 1.5
                }}
              />
            ))}
          </svg>
        </div>
      </motion.div>

      {/* Hero Content Section */}
      <div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        <div className="inline-flex items-center space-x-3 bg-white/70 border border-white/50 rounded-full px-4 py-2 mb-10 backdrop-blur-xl shadow-xl shadow-blue-500/5 group hover:bg-white/90 transition-all duration-300">
          <div className="relative">
            <Logo className="h-6 w-auto" />
            <motion.div
              animate={{ opacity: [0, 0.5, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-blue-400 blur-md rounded-full -z-10"
            />
          </div>
          <span className="text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase flex items-center">
            Precision AI Engineering <Sparkles className="ml-2 w-3 h-3 text-blue-500" />
          </span>
        </div>

        <div className="mb-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 tracking-tight leading-[1.05]">
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">Autonomous Enterprise</span>
          </h1>
        </div>

        <p className="max-w-2xl text-xl text-slate-500 mb-14 leading-relaxed font-light">
          We engineer high-performance agentic frameworks and multi-cloud AI infrastructures that empower global organizations to scale with unprecedented precision.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={scrollToContact}
            className="group relative overflow-hidden px-12 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center"
          >
            <span className="relative z-10 flex items-center">
              Start Transformation
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </button>

          <button
            onClick={scrollToServices}
            className="px-12 py-5 bg-white/50 border border-slate-200 text-slate-900 rounded-2xl font-bold text-lg hover:bg-white hover:border-blue-200 transition-all backdrop-blur-md shadow-sm active:scale-95"
          >
            Explore Architectures
          </button>
        </div>
      </div>

      {/* Dynamic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{ opacity: opacityHero }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
