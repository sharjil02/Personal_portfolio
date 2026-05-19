import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

const BackgroundAnalytics: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 bg-[#0a0a0f] overflow-hidden">
      {/* Base Grid Layers */}
      <div className="absolute inset-0 bg-sub-grid opacity-40"></div>
      <div className="absolute inset-0 bg-data-grid opacity-25"></div>
      
      {/* Perspective Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_70%)]"></div>

      {/* Analytical Visuals - Top Right (High-Fidelity Charts) */}
      <div className="absolute top-[5%] right-[-5%] w-[400px] h-[300px] mask-radial opacity-30 hidden lg:block">
        <svg viewBox="0 0 200 100" className="w-full h-auto">
          {/* Trend Line */}
          <path d="M10,80 Q30,40 50,60 T90,20 T130,50 T170,10" fill="none" stroke="#10b981" strokeWidth="1.2" className="animate-pulse-slow" />
          {/* Bar Chart Indicators */}
          {[20, 40, 60, 80, 100, 120, 140, 160].map((x, i) => (
            <rect key={i} x={x} y={80 - (Math.random() * 40)} width="8" height={Math.random() * 40} fill="#3b82f6" opacity="0.5" />
          ))}
        </svg>
      </div>

      {/* Node-Link Network - Bottom Left (Database/AI Concept) */}
      <div className="absolute bottom-[10%] left-[-2%] w-[350px] h-[350px] opacity-15 hidden md:block">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-blue-400 fill-blue-400">
          <circle cx="20" cy="20" r="1" />
          <circle cx="50" cy="15" r="1.5" />
          <circle cx="80" cy="30" r="1" />
          <circle cx="30" cy="50" r="2" className="animate-pulse" />
          <circle cx="60" cy="60" r="1" />
          <circle cx="40" cy="85" r="1.5" />
          <line x1="20" y1="20" x2="50" y2="15" strokeWidth="0.25" />
          <line x1="50" y1="15" x2="80" y2="30" strokeWidth="0.25" />
          <line x1="30" y1="50" x2="50" y2="15" strokeWidth="0.25" />
          <line x1="30" y1="50" x2="60" y2="60" strokeWidth="0.25" />
          <line x1="60" y1="60" x2="40" y2="85" strokeWidth="0.25" />
          <line x1="30" y1="50" x2="20" y2="20" strokeWidth="0.25" />
        </svg>
      </div>

      {/* Floating Code Snippets (Professional Context) */}
      <div className="absolute inset-0 mono text-[9px] font-bold text-emerald-500/15 pointer-events-none select-none overflow-hidden">
        <span className="absolute top-[15%] left-[10%] animate-float-data opacity-60">SELECT * FROM users WHERE status = 'active';</span>
        <span className="absolute top-[45%] right-[12%] animate-float-data opacity-50" style={{ animationDelay: '2s' }}>df.groupby('region').mean()</span>
        <span className="absolute bottom-[25%] left-[15%] animate-float-data opacity-40" style={{ animationDelay: '4s' }}>plt.plot(x, y, label='Insights')</span>
        <span className="absolute top-[70%] right-[30%] animate-float-data opacity-50" style={{ animationDelay: '1s' }}>INSERT INTO analytics_log (event) VALUES ('session_start');</span>
        <span className="absolute bottom-[10%] right-[10%] animate-float-data opacity-40" style={{ animationDelay: '3s' }}>{"{ \"accuracy\": 0.98, \"loss\": 0.02 }"}</span>
      </div>

      {/* Floating Analytical Indicators */}
      <div className="absolute inset-0 mono text-[10px] font-bold text-blue-500/25 pointer-events-none select-none">
        <span className="absolute top-[12%] left-[5%] animate-float-data">Σ xi / n</span>
        <span className="absolute top-[28%] right-[5%] animate-float-data" style={{ animationDelay: '2.5s' }}>Correlation: 0.89</span>
        <span className="absolute bottom-[35%] left-[8%] animate-float-data" style={{ animationDelay: '4.5s' }}>P-Value &lt; 0.05</span>
        <span className="absolute bottom-[15%] right-[8%] animate-float-data" style={{ animationDelay: '1.5s' }}>R-Squared: 0.92</span>
      </div>

      {/* Dynamic Atmospheric Glows */}
      <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-emerald-600/10 blur-[120px] rounded-full"></div>
      
      {/* Scanline / CRT Effect (Subtle depth) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-25"></div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'journey', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-emerald-500/30 selection:text-white">
      <BackgroundAnalytics />

      <Navbar activeSection={activeSection} />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;