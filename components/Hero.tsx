import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Facebook, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    "Data Analyst Enthusiast",
    "Passionate in Data Science"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayText === fullText) {
        setTypingSpeed(2000); // Wait at the end
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-16 scroll-mt-24 overflow-hidden relative">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Content: Text and CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-4 order-2 lg:order-1"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
              Available for Internship
            </div>
          </motion.div>
          
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-zinc-400 font-mono text-[16px] sm:text-[20px] tracking-widest"
            >
              Assalamualaikum, I'm
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-8xl font-display font-black tracking-tight leading-[0.9] bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent"
            >
              Sharjil Bin <br />
              Rashed
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="h-12 flex items-center justify-center lg:justify-start"
          >
            <p className="text-xl md:text-3xl font-black tracking-tight flex items-center gap-1">
              <span className={loopNum % 2 === 0 ? "text-emerald-400" : "text-blue-400"}>
                {displayText}
              </span>
              <span className="w-[3px] h-8 md:h-10 bg-current animate-pulse inline-block ml-1 shadow-[0_0_8px_currentColor]"></span>
            </p>
          </motion.div>

          <div className="space-y-5 max-w-md mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="space-y-1"
            >
              <p className="text-zinc-200 text-lg md:text-xl font-bold tracking-tight">
                Computer Science & Engineering Student
              </p>
              <p className="text-zinc-400 text-base md:text-lg font-bold tracking-wide">
                Specializing in <span className="text-blue-400">Data Analytics</span>
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed border-t border-white/5 pt-4"
            >
              Transforming raw data into actionable insights. Dedicated to machine learning, statistical analysis, and building data-driven solutions.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, 'projects')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-[0.15em] text-[13px] rounded-2xl transition-all hover:bg-blue-600 hover:text-white hover:scale-[1.03] active:scale-95 shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-blue-500/40 flex items-center justify-center text-center cursor-pointer"
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase tracking-[0.15em] text-[13px] rounded-2xl transition-all hover:bg-emerald-500 hover:text-white hover:scale-[1.03] active:scale-95 shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-emerald-500/40 flex items-center justify-center text-center cursor-pointer"
            >
              CONTACT ME
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content: Photo Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group flex flex-col items-center order-1 lg:order-2"
        >
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600/10 blur-[100px] sm:blur-[120px] rounded-full group-hover:bg-blue-600/20 transition-colors"></div>
          
          <motion.div 
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.5)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative z-10 glass p-4 pb-6 sm:p-5 sm:pb-8 rounded-[2.5rem] sm:rounded-[3.5rem] border-white/5 transition-all duration-500 shadow-2xl hover:border-emerald-500/20 max-w-[280px] sm:max-w-[340px] w-full mx-auto"
          >
            <div className="overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] aspect-[4/5] w-full relative">
              <img 
                src="https://image2url.com/r2/default/images/1771079701750-25f20ea9-6eb0-461a-ad6f-e2cb2a42d8fe.jpg" 
                alt="Sharjil Bin Rashed" 
                className="object-cover object-top w-full h-full transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop";
                }}
              />
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-black/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl"
              >
                <span className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                <span className="text-[7px] sm:text-[9px] font-black text-white uppercase tracking-[0.15em]">ALWAYS LEARNING</span>
              </motion.div>
            </div>

            {/* Social Icons Inside Frame */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="flex items-center justify-center gap-4 mt-4 sm:mt-6"
            >
              <a 
                href="mailto:sharjil0506@gmail.com" 
                className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-[#EA4335]/50 hover:bg-[#EA4335] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_-5px_#EA4335] group"
                title="Gmail"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sharjil-bin-rashed-b701a8385" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-[#0077B5]/50 hover:bg-[#0077B5] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_-5px_#0077B5] group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/sharjil02" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 hover:bg-zinc-700 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] group"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/sh.arjil.58" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-[#1877F2]/50 hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_-5px_#1877F2] group"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 hidden sm:block"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;