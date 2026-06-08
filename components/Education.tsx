
import React from 'react';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const steps = [
    {
      title: "Bachelor of Science in CSE",
      institution: "International Islamic University Chittagong",
      department: "Department of CSE",
      period: "2023 - 2027",
      icon: (
        <img 
          src="https://image2url.com/r2/default/images/1772987879550-0519a89c-f79a-4266-a10e-b18ddc561a44.png" 
          alt="IIUC Logo" 
          className="w-8 h-8 object-contain"
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      title: "Higher Secondary Certificate",
      institution: "Government City College, Chittagong",
      period: "2019 - 2021",
      icon: (
        <img 
          src="https://image2url.com/r2/default/images/1772987999765-0637476a-0dd9-45a6-9898-a5690114d780.png" 
          alt="College Logo" 
          className="w-8 h-8 object-contain"
          referrerPolicy="no-referrer"
        />
      )
    }
  ];

  return (
    <section id="education" className="py-24 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
          >
            Academic Path
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">Academic Background</h2>
          <div className="h-1.5 w-20 bg-emerald-500 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 text-white z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2 shadow-xl group-hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                {step.icon}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-2xl transition-all hover:scale-[1.02] border-white/5 hover:border-emerald-500/30">
                <div className="flex flex-col mb-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-lg">{step.title}</h3>
                    <time className="font-mono text-xs text-emerald-400 font-semibold">{step.period}</time>
                  </div>
                  <span className="text-emerald-500 font-semibold text-sm mt-1">{step.institution}</span>
                </div>
                {step.department && (
                  <p className="text-zinc-400 text-sm italic">{step.department}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
