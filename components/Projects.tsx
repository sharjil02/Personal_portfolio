import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Hotel Management Dashboard',
    description: 'Developed an Excel-based hotel management dashboard to track bookings, occupancy, revenue, and customer records using Power Query and Pivot Tables.',
    tech: ['Excel', 'Power Query', 'Pivot Tables'],
    category: 'Excel',
    github: 'https://github.com/sharjil02/Hospitality-Management-',
    image: 'https://image2url.com/r2/default/images/1771079128703-db79f4d8-1f57-4cdb-9187-78480a689f5c.jpg'
  },
  {
    title: 'Dengue Surveillance Dashboard – Dhaka Region',
    description: 'An Excel dashboard for monitoring and analyzing dengue cases across Dhaka. Quickly identify hotspots, trends, and demographic breakdowns using charts, slicers, and pivot tables.',
    tech: ['Excel', 'Power Query', 'Dashboard'],
    category: 'Excel',
    github: 'https://github.com/sharjil02/Dengue-Surveillance',
    image: 'https://image2url.com/r2/default/images/1771079065992-b96c4d24-2606-4acd-b4c6-07b88f649711.jpg'
  },
  {
    title: 'Airline Management System',
    description: 'A comprehensive database-driven application designed to streamline airline operations, including flight scheduling, passenger bookings, and fleet data management.',
    tech: ['SQL', 'NetBeans'],
    category: 'SQL',
    github: 'https://github.com/sharjil02/Airline-Management-System-',
    image: 'https://image2url.com/r2/default/images/1771952757664-bf1644be-a38b-400f-a52c-6a6242062fd3.png'
  },
  {
    title: 'Amar Dukan – Online Shopping Website',
    description: 'A modern e-commerce platform featuring a responsive design, dynamic product listings, and a seamless user experience built with core web technologies.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript (DOM)'],
    category: 'Web',
    github: 'https://sharjil02.github.io/Mid_Project/',
    image: 'https://image2url.com/r2/default/images/1771953971565-d9165e72-750f-4771-9fad-03a61bbc5e37.png'
  },
  {
    title: 'FreshCart – E-Commerce Website',
    description: 'A full-featured E-Commerce platform built with React and Vite. Features user authentication, search functionality, product details, shopping cart, and a wishlist.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    category: 'Web',
    github: 'https://github.com/sharjil02/Tools_Final_Project',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000'
  }
];

const Projects: React.FC = () => {
  const getCategoryBadge = (category: string) => {
    if (category === 'Excel') {
      return (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#1D6F42] text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
          </svg>
          Excel
        </div>
      );
    }
    if (category === 'SQL') {
      return (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#F29111] text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 4.02 2 6.5V17.5C2 19.98 6.48 22 12 22C17.52 22 22 19.98 22 17.5V6.5C22 4.02 17.52 2 12 2ZM12 4C17.03 4 20 5.42 20 6.5C20 7.58 17.03 9 12 9C6.97 9 4 7.58 4 6.5C4 5.42 6.97 4 12 4ZM4 17.5V14.83C5.97 15.89 8.83 16.5 12 16.5C15.17 16.5 18.03 15.89 20 14.83V17.5C20 18.58 17.03 20 12 20C6.97 20 4 18.58 4 17.5ZM4 12.33V9.67C5.97 10.73 8.83 11.33 12 11.33C15.17 11.33 18.03 10.73 20 9.67V12.33C20 13.41 17.03 14.83 12 14.83C6.97 14.83 4 13.41 4 12.33Z" />
          </svg>
          SQL
        </div>
      );
    }
    if (category === 'Web') {
      return (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          Web
        </div>
      );
    }
    return (
      <div className="absolute top-4 left-4 z-20 bg-blue-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs shadow-lg">
        {category}
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto scroll-mt-24">
      <div className="flex flex-col items-center text-center mb-16 gap-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
        >
          My Work
        </motion.div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Featured Works</h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto"></div>
        </div>
        <p className="text-zinc-500 max-w-sm text-sm mx-auto">
          A selection of projects that showcase my problem-solving abilities and technical craftsmanship.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative flex flex-col glass p-6 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] h-full">
            <div className="mb-6 overflow-hidden rounded-2xl bg-zinc-900 aspect-[16/9] relative border border-white/5">
               {getCategoryBadge(project.category)}
               <img 
                 src={project.image || `https://picsum.photos/seed/${project.title}/600/400`} 
                 alt={project.title}
                 className="object-cover w-full h-full opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
               />
            </div>

            <h3 className="text-xl font-black text-white mb-3 group-hover:text-blue-400 transition-colors tracking-tight">{project.title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-grow font-medium">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map(t => (
                <span key={t} className="text-[9px] font-mono font-bold text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded-lg border border-zinc-800 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all duration-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-auto pt-5 border-t border-white/5">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] font-black uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-2 transition-all group/link bg-zinc-800/50 hover:bg-blue-600/20 px-4 py-2 rounded-xl border border-zinc-700/50 hover:border-blue-500/50"
                >
                  Source
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[10px] font-black uppercase tracking-widest text-white hover:text-blue-400 flex items-center gap-2 transition-all bg-blue-600/20 hover:bg-blue-600/40 px-4 py-2 rounded-xl border border-blue-500/30 hover:border-blue-500/50"
                >
                  Live Demo <span className="text-lg">↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;