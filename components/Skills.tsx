import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, PieChart, Database as DbIcon, Globe, Cpu, LayoutGrid } from 'lucide-react';
import { Skill } from '../types';

// Professional SVGs for brand logos
const Icons = {
  Python: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="pyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3776AB" />
        <stop offset="100%" stopColor="#1e4d73" />
      </linearGradient>
      <linearGradient id="pyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD43B" />
        <stop offset="100%" stopColor="#ccaa2f" />
      </linearGradient>
      <path d="M12 2C9.5 2 7.7 2.2 6.5 2.7C4.6 3.5 4 4.8 4 7.2V9H12V10H2.5C1.1 10 1 11.2 1 12.3C1 14.5 1.5 16 3 16.5C4 16.8 5.5 17 7 17V15.2C7 13 8.3 11.2 11 11.2H15V6.8C15 4.3 14.2 2 12 2Z" fill="url(#pyGrad1)"/>
      <path d="M12 22C14.5 22 16.3 21.8 17.5 21.3C19.4 20.5 20 19.2 20 16.8V15H12V14H21.5C22.9 14 23 12.8 23 11.7C23 9.5 22.5 8 21 7.5C20 7.2 18.5 7 17 7V8.8C17 11 15.7 12.8 13 12.8H9V17.2C9 19.7 9.8 22 12 22Z" fill="url(#pyGrad2)"/>
      <circle cx="8.5" cy="5.5" r="0.8" fill="white"/>
      <circle cx="15.5" cy="18.5" r="0.8" fill="white"/>
    </svg>
  ),
  Cpp: () => (
    <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cppHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00599C" />
          <stop offset="100%" stopColor="#004482" />
        </linearGradient>
      </defs>
      <path d="M50 5 L90 27.5 L90 72.5 L50 95 L10 72.5 L10 27.5 Z" fill="url(#cppHexGrad)" />
      <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="white" style={{ fontSize: '38px', fontWeight: 'bold', fontFamily: 'Arial' }}>C++</text>
    </svg>
  ),
  C: () => (
    <svg viewBox="0 0 100 100" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#2D5FA3" />
      <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle" fill="white" style={{ fontSize: '55px', fontWeight: '900', fontFamily: 'Arial' }}>C</text>
    </svg>
  ),
  Excel: () => (
    <div className="w-10 h-10 bg-zinc-950 rounded-full flex items-center justify-center border border-white/10 shadow-xl">
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <rect x="10" y="10" width="80" height="80" rx="10" fill="#111" />
        <line x1="25" y1="20" x2="25" y2="80" stroke="#333" strokeWidth="1" />
        <line x1="45" y1="20" x2="45" y2="80" stroke="#333" strokeWidth="1" />
        <line x1="65" y1="20" x2="65" y2="80" stroke="#333" strokeWidth="1" />
        <line x1="20" y1="35" x2="80" y2="35" stroke="#333" strokeWidth="1" />
        <line x1="20" y1="55" x2="80" y2="55" stroke="#333" strokeWidth="1" />
        <line x1="20" y1="75" x2="80" y2="75" stroke="#333" strokeWidth="1" />
        <rect x="28" y="45" width="12" height="35" rx="2" fill="#86EFAC" />
        <rect x="48" y="60" width="12" height="20" rx="2" fill="#F472B6" />
        <rect x="68" y="30" width="12" height="50" rx="2" fill="#60A5FA" />
      </svg>
    </div>
  ),
  PowerBI: () => (
    <div className="w-8 h-8 bg-[#F2C811]/10 rounded-md flex items-center justify-center border border-[#F2C811]/20">
      <svg viewBox="0 0 32 32" className="w-5 h-5">
        <rect x="6" y="18" width="5" height="8" rx="1" fill="#F2C811" />
        <rect x="13.5" y="10" width="5" height="16" rx="1" fill="#F2C811" />
        <rect x="21" y="4" width="5" height="22" rx="1" fill="#F2C811" />
      </svg>
    </div>
  ),
  Metabase: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#3B82F6">
      <path d="M12 2L2 12L12 22L22 12L12 2Z" />
      <path d="M12 2L7 12L12 22L17 12L12 2Z" fill="white" opacity="0.3"/>
    </svg>
  ),
  SQL: () => (
    <div className="w-10 h-10 bg-zinc-950 rounded-full flex items-center justify-center border border-white/10 shadow-xl">
      <svg viewBox="0 0 100 100" className="w-7 h-7">
        <rect x="25" y="25" width="50" height="25" rx="4" fill="#8B5CF6" />
        <rect x="25" y="55" width="50" height="25" rx="4" fill="#8B5CF6" />
        <rect x="35" y="32" width="30" height="10" rx="2" fill="white" opacity="0.3" />
        <rect x="35" y="62" width="30" height="10" rx="2" fill="white" opacity="0.3" />
      </svg>
    </div>
  ),
  MongoDB: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.193 11.235c-.15-.465-.436-.885-.815-1.22-.38-.335-.838-.574-1.334-.697-.497-.123-1.01-.132-1.505-.027-.495.105-.957.31-1.353.598-.396.289-.723.656-.957 1.076-.234.42-.378.887-.423 1.368-.045.481.011.966.162 1.424.15.458.4.873.729 1.216l3.352-2.71c.101-.082.253-.082.354 0l1.79 1.446c.101.082.101.215 0 .297l-3.352 2.71c.42.336.913.567 1.44.675.527.108 1.07.086 1.587-.064.516-.15 1.004-.42 1.425-.79.42-.37.766-.826 1.01-1.33.245-.505.385-1.055.408-1.61.024-.555-.07-1.107-.275-1.624a4.136 4.136 0 0 0-.845-1.343c-.365-.362-.806-.638-1.291-.806l.334-.73c.045-.098-.027-.215-.13-.215H15.1c-.104 0-.176.117-.13.215l.334.73c-.5.174-.954.464-1.33.848-.376.384-.658.851-.825 1.366z" fill="#4DB33D"/>
      <path d="M12.44 2.11c-.13-.15-.35-.15-.48 0L3.26 12.33c-.11.13-.11.31 0 .44l8.7 10.22c.13.15.35.15.48 0l8.7-10.22c.11-.13.11-.31 0-.44L12.44 2.11z" fill="#47A248" opacity="0.2"/>
    </svg>
  ),
  Oracle: () => (
    <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#F80000"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.89 15.67L5.26 7.05C5.31 6.74 5.6 6.51 5.92 6.51C6.23 6.51 6.52 6.74 6.57 7.05L7.94 15.67C7.3 16.03 6.63 16.23 5.92 16.23C5.2 16.23 4.53 16.03 3.89 15.67ZM16.03 12.22L12.42 5.37C12.27 5.09 11.89 5.09 11.74 5.37L8.13 12.22C10.43 11.23 13.73 11.23 16.03 12.22Z" fill="#FFA000"/>
      <path d="M20.11 15.67L18.74 7.05C18.69 6.74 18.4 6.51 18.08 6.51C17.77 6.51 17.48 6.74 17.43 7.05L16.06 15.67C16.7 16.03 17.37 16.23 18.08 16.23C18.8 16.23 19.47 16.03 20.11 15.67Z" fill="#F57C00"/>
      <path d="M5.92 16.23C9.27 16.23 12 18.96 12 22.31C12 18.96 14.73 16.23 18.08 16.23C14.73 16.23 12 13.5 12 10.15C12 13.5 9.27 16.23 5.92 16.23Z" fill="#FFCA28"/>
    </svg>
  ),
  HTML: () => (
    <svg viewBox="0 0 512 512" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.357 460.819L30.272 0h451.456l-41.085 460.819L256 512z" fill="#E44D26"/>
      <path d="M256 472.261l148.834-41.28L442.271 43.12H256z" fill="#F16529"/>
      <path d="M256 208.261h-93.5l-6.5-73.4h100v-70.2H85.8l19.5 219.8h150.7zM256 380.861l-0.2.1-74.6-20.2-4.8-53.4H106.2l9.4 105.2 140.2 38.9z" fill="#ECECEC"/>
      <path d="M256 208.261v76.2h93.5l-8.8 98.7-84.7 22.9v78.4l140.2-38.9 19.5-219.8H256zM256 134.861v-70.2h170.2l-6.2 70.2H256z" fill="#FFF"/>
    </svg>
  ),
  CSS: () => (
    <svg viewBox="0 0 512 512" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M71.357 460.819L30.272 0h451.456l-41.085 460.819L256 512z" fill="#264DE4"/>
      <path d="M256 472.261l148.834-41.28L442.271 43.12H256z" fill="#2965F1"/>
      <path d="M256 208.261h-93.5l-6.5-73.4h100v-70.2H85.8l19.5 219.8h150.7zM256 380.861l-0.2.1-74.6-20.2-4.8-53.4H106.2l9.4 105.2 140.2 38.9z" fill="#ECECEC"/>
      <path d="M256 208.261v76.2h93.5l-8.8 98.7-84.7 22.9v78.4l140.2-38.9 19.5-219.8H256zM256 134.861v-70.2h170.2l-6.2 70.2H256z" fill="#FFF"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0z" fill="#F7DF1E"/>
      <path d="M19.1 16.5c-.3-.2-.5-.3-.9-.4-.4-.1-.6-.2-.8-.2-.3-.1-.4-.2-.5-.3s-.1-.2-.1-.3c0-.1 0-.2.1-.3.1-.1.2-.2.4-.2.2 0 .4.1.7.2l.6.3.3-1.8c-.3-.1-.6-.2-1-.3s-.9-.1-1.4-.1c-.7 0-1.3.2-1.8.6-.4.4-.7.9-.7 1.5s.2 1.1.6 1.4c.4.3.9.6 1.7.8l1 .3c.3.1.5.2.6.3.1.1.2.3.2.5s-.1.3-.2.4c-.2.1-.5.2-.9.2-.5 0-.9-.2-1.2-.5l-.4-.4-.6 1.5c.3.3.7.5 1.1.6.4.2 1 .3 1.6.3 1 0 1.8-.3 2.3-.8.5-.5.8-1.2.8-2 0-.6-.1-1.1-.5-1.4zm-6.6-4.3c-.6 0-1.1.1-1.6.3l-.6.3.3 1.7.6-.3c.3-.1.5-.2.8-.2.2 0 .3.1.5.2.1.1.2.2.2.4V21h2v-6.3c0-1.1-.3-1.9-.9-2.3-.5-.4-1.2-.6-1.9-.6z" fill="#323330"/>
    </svg>
  ),
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#38BDF8" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  ),
  Nodejs: () => (
    <svg viewBox="0 0 256 256" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M110.8 183c2 2.1 4.8 3.2 7.7 3.2 2.1 0 4.1-.6 5.9-1.8 11.2-7.5 13-23.7 4.1-34.5-2.2-2.7-5.4-4.2-8.7-4.2-3.3 0-6.6 1.5-8.8 4.2-8.8 10.9-7 27.1 4.2 34.6l-4.4-1.5zm82.8-111.4l-53.1-30.7c-7.7-4.4-17.1-4.4-24.8 0L62.6 71.6c-7.7 4.4-12.4 12.6-12.4 21.5v61.4c0 8.9 4.7 17 12.4 21.5l53.1 30.7c7.7 4.4 17.1 4.4 24.8 0l53.1-30.7c7.7-4.4 12.4-12.6 12.4-21.5V93.1c.1-8.9-4.7-17.1-12.4-21.5zM128 209.6L74.9 179c-2.6-1.5-4.1-4.2-4.1-7.2V111c0-3 1.5-5.7 4.1-7.2l53.1-30.7c2.6-1.5 5.7-1.5 8.2 0l53.1 30.7c2.6 1.5 4.1 4.2 4.1 7.2v60.8c0 3-1.5 5.7-4.1 7.2L136.2 209.6c-2.5 1.5-5.6 1.5-8.2 0z" fill="#68A063"/>
    </svg>
  ),
  Express: () => (
    <svg viewBox="0 0 256 256" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="#828282" style={{ fontSize: '42px', fontWeight: 'bold', fontFamily: 'Inter, sans-serif' }}>express</text>
    </svg>
  ),
  DBMS: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="5" rx="9" ry="3" fill="#3B82F6" opacity="0.8"/>
      <path d="M3 5v7c0 1.66 4.03 3 9 3s9-1.34 9-3V5c0 1.66-4.03 3-9 3s-9-1.34-9-3z" fill="#2563EB"/>
      <path d="M3 12v7c0 1.66 4.03 3 9 3s9-1.34 9-3v-7c0 1.66-4.03 3-9 3s-9-1.34-9-3z" fill="#1D4ED8"/>
    </svg>
  ),
  DSA: () => (
    <svg viewBox="0 0 100 100" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#3B82F6" strokeWidth="3" fill="none">
        {/* Level 0 to 1 */}
        <line x1="50" y1="12" x2="30" y2="35" />
        <line x1="50" y1="12" x2="70" y2="35" />
        {/* Level 1 to 2 */}
        <line x1="30" y1="35" x2="15" y2="58" />
        <line x1="30" y1="35" x2="45" y2="58" />
        <line x1="70" y1="35" x2="85" y2="58" />
        
        {/* Nodes (Circles) */}
        <circle cx="50" cy="12" r="7" strokeWidth="3" />
        <circle cx="30" cy="35" r="7" strokeWidth="3" />
        <circle cx="70" cy="35" r="7" strokeWidth="3" />
        <circle cx="15" cy="58" r="7" strokeWidth="3" />
        <circle cx="45" cy="58" r="7" strokeWidth="3" />
        <circle cx="85" cy="58" r="7" strokeWidth="3" />
      </g>
      {/* Bold blue text "DSA" */}
      <text x="50" y="90" textAnchor="middle" fill="#2563EB" style={{ fontSize: '28px', fontWeight: '900', fontFamily: 'Arial Black, sans-serif' }}>DSA</text>
    </svg>
  ),
  Vite: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L2 12h5v10l10-10h-5L22 2H12z" fill="#646CFF" />
    </svg>
  ),
  Default: (name: string) => <span className="text-4xl">🛠️</span>
};

const skills: Skill[] = [
  // Programming
  { name: 'Python', icon: 'Python', category: 'Programming', color: 'bg-[#0a0f18]' },
  { name: 'C++', icon: 'Cpp', category: 'Programming', color: 'bg-[#0a0f18]' },
  { name: 'C', icon: 'C', category: 'Programming', color: 'bg-[#0a0f18]' },

  // Data Analysis
  { name: 'Excel', icon: 'Excel', category: 'Data Analysis', color: 'bg-[#0a1810]' },
  { name: 'Power BI', icon: 'PowerBI', category: 'Data Analysis', color: 'bg-[#18150a]' },
  { name: 'Metabase', icon: 'Metabase', category: 'Data Analysis', color: 'bg-[#0a1018]' },
  
  // Database
  { name: 'SQL', icon: 'SQL', category: 'Database', color: 'bg-[#0a1018]' },
  { name: 'MongoDB', icon: 'MongoDB', category: 'Database', color: 'bg-[#0a180a]' },
  { name: 'Oracle', icon: 'Oracle', category: 'Database', color: 'bg-[#180a0a]' },
  { name: 'Firebase', icon: 'Firebase', category: 'Database', color: 'bg-[#18140a]' },

  // Web Development
  { name: 'HTML', icon: 'HTML', category: 'Web Development', color: 'bg-[#180d0a]' },
  { name: 'CSS', icon: 'CSS', category: 'Web Development', color: 'bg-[#0a1018]' },
  { name: 'JavaScript', icon: 'JavaScript', category: 'Web Development', color: 'bg-[#18180a]' },
  { name: 'React', icon: 'React', category: 'Web Development', color: 'bg-[#0a1818]' },
  { name: 'Tailwind', icon: 'Tailwind', category: 'Web Development', color: 'bg-[#0a1818]' },
  { name: 'Node.js', icon: 'Nodejs', category: 'Web Development', color: 'bg-[#0a180a]' },
  { name: 'Express JS', icon: 'Express', category: 'Web Development', color: 'bg-[#121212]' },
  { name: 'Vite', icon: 'Vite', category: 'Web Development', color: 'bg-[#1e1e20]' },

  // Concepts
  { name: 'DSA', icon: 'DSA', category: 'Concepts', color: 'bg-[#0a1814]' },
  { name: 'DBMS', icon: 'DBMS', category: 'Concepts', color: 'bg-[#0a1018]' },
];

const Skills: React.FC = () => {
  const categories: Skill['category'][] = [
    'Programming',
    'Data Analysis',
    'Database',
    'Web Development',
    'Concepts'
  ];

  const [activeCategory, setActiveCategory] = useState<Skill['category']>(categories[0]);

  const categoryMap: Record<string, { label: string; icon: any }> = {
    Programming: { label: 'Languages', icon: Code2 },
    'Data Analysis': { label: 'Analytical Tools', icon: PieChart },
    Database: { label: 'Databases', icon: DbIcon },
    'Web Development': { label: 'Web Tech', icon: Globe },
    Concepts: { label: 'Core Concepts', icon: Cpu }
  };

  const renderIcon = (skill: Skill) => {
    const IconComponent = (Icons as any)[skill.icon];
    if (IconComponent) return <IconComponent />;
    return <span className="text-3xl">{skill.icon}</span>;
  };

  const filteredCategories = [activeCategory];

  return (
    <section id="skills" className="py-32 px-6 scroll-mt-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Technical Stack
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white">Skills & Expertise</h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto mb-10"></div>
          
          {/* Filter Bar - Styled like the requested image */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              const Icon = categoryMap[cat].icon;
              
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as any)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
                    isActive 
                    ? 'bg-gradient-to-r from-blue-400 to-cyan-400 border-transparent text-zinc-950 shadow-[0_0_25px_rgba(56,189,248,0.3)]' 
                    : 'bg-zinc-900/40 border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{categoryMap[cat].label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat, idx) => (
              <motion.div 
                key={cat}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass rounded-[3rem] p-8 md:p-12 border-white/5 hover:border-blue-500/20 transition-all duration-500 flex flex-col items-center group/cat w-full max-w-2xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-10 w-full relative z-10">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl font-black text-white tracking-tight uppercase italic">
                      {categoryMap[cat].label}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    {skills.filter(s => s.category === cat).length} Units
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-4 w-full relative z-10">
                  {skills.filter(s => s.category === cat).map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`group relative flex flex-col items-center justify-center p-6 rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-emerald-500/30 hover:scale-[1.02] shadow-xl ${skill.color || 'bg-zinc-950'} w-[140px] h-[140px]`}
                    >
                      <div className="mb-4 transform group-hover:scale-110 transition-all duration-500 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        {renderIcon(skill)}
                      </div>
                      
                      <span className="text-[10px] font-black text-zinc-500 group-hover:text-white transition-colors duration-300 text-center uppercase tracking-widest">
                        {skill.name}
                      </span>
                      
                      <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-emerald-500 transition-colors duration-500"></div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;