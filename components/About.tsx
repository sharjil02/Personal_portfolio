
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto scroll-mt-24 relative">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="space-y-16"
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]"
          >
            Profile Overview
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mb-4 text-white"
          >
            About Me
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1.5 bg-emerald-500 rounded-full mx-auto"
          ></motion.div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Side: About Me Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8 text-left"
          >
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed font-medium">
              I am <span className="text-white font-bold">Sharjil Bin Rashed</span>, a Computer Science and Engineering (CSE) student at <span className="text-emerald-400 font-bold">International Islamic University Chittagong</span>, with a strong interest in Data Science and Analytics. I am passionate about understanding how data can be transformed into meaningful insights that support better decision-making. Through my academic journey, I have developed a solid foundation in database systems, data analysis, and core programming concepts.
            </p>
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
              I am continuously working to improve my technical and analytical skills by exploring new tools, technologies, and real-world problem-solving approaches. My goal is to build innovative solutions and contribute positively to the field of data science through knowledge, creativity, and dedication.
            </p>
          </motion.div>

          {/* Right Side: Professional Focus & Key Skills Chart */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 gap-8 p-10 glass rounded-[2.5rem] border-white/5 relative overflow-hidden"
            >
              {/* Professional Focus Column */}
              <div className="space-y-6">
                <h4 className="text-emerald-400 font-display text-xl font-black uppercase tracking-tight">
                  Professional Focus
                </h4>
                <ul className="space-y-5">
                  {['Data Analytics', 'Data & Strategy'].map((item, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + (i * 0.1) }}
                      key={item} 
                      className="flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
                      <span className="text-zinc-200 text-sm md:text-base font-bold">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Key Skills Column */}
              <div className="space-y-6">
                <h4 className="text-blue-400 font-display text-xl font-black uppercase tracking-tight">
                  Key Skills
                </h4>
                <ul className="space-y-5">
                  {['SQL', 'Python', 'Power BI', 'Metabase'].map((item, i) => (
                    <motion.li 
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + (i * 0.1) }}
                      key={item} 
                      className="flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                      <span className="text-zinc-200 text-sm md:text-base font-bold">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
