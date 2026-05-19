import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface CertificateData {
  image: string;
  link: string;
  id?: string;
}

interface JourneyStep {
  title: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  certificate?: CertificateData;
}

const Journey: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateData | null>(null);

  const steps: JourneyStep[] = [
    {
      title: "Data Analysis and Power BI",
      period: "Visualization Mastery",
      description: "Mastering tools like Power BI and Excel to transform raw datasets into interactive dashboards and visual stories that drive informed decisions.",
      icon: "📊",
      certificate: {
        image: "https://image2url.com/r2/default/images/1771342102702-b3300b7f-7b70-4033-85e4-75afc2bd435f.jpg",
        link: "https://interactivecares-courses.com/certificate/44c8eaf7-6427-4543-988a-fcdd5cb9c501",
        id: "44c8eaf7-6427-4543-988a-fcdd5cb9c501"
      }
    },
    {
      title: "AI+ Prompt Engineer Level 1",
      period: "AI CERTs™ Certified",
      description: "Successfully completed certification focused on prompt engineering fundamentals, including structured prompting, AI output optimization, and practical use of generative AI tools for problem-solving and productivity.",
      icon: (
        <img 
          src="https://image2url.com/r2/default/images/1773164256790-82aa5144-b1a3-4427-90f5-c30cc3c02667.png" 
          alt="AI Icon" 
          className="w-8 h-8 object-contain"
          referrerPolicy="no-referrer"
        />
      ),
      certificate: {
        image: "https://image2url.com/r2/default/images/1771342383536-a5b9c577-a389-4ff1-bc1b-dcae59da8e21.jpg",
        link: "https://www.aicerts.com/verify", // General verification link for AI CERTs
      }
    },
    {
      title: "SQL with BigQuery & Metabase",
      period: "Data Infrastructure",
      description: "Deep diving into advanced SQL querying and cloud data warehousing using Google BigQuery, coupled with business intelligence reporting through Metabase.",
      icon: "🗄️",
    }
  ];

  return (
    <section id="journey" className="py-24 px-6 scroll-mt-24 relative">
      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedCert(null)}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
          <div 
            className="relative z-10 max-w-5xl w-full glass rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Credential Viewer</span>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href={selectedCert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold text-blue-400 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  Verify Online ↗
                </a>
                <button 
                  onClick={() => setSelectedCert(null)} 
                  className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="relative aspect-video md:aspect-[4/3] max-h-[75vh] overflow-y-auto bg-white/5 p-4">
              <img 
                src={selectedCert.image} 
                alt="Certificate Full View" 
                className="w-full h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
          >
            Experience & Growth
          </motion.div>
          <h2 className="text-4xl font-black text-white mb-4">Learning Journey</h2>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              {/* Dot Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-zinc-800 bg-zinc-950 text-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 transform -translate-x-1/2 group-hover:border-blue-500/50 transition-all duration-500 group-hover:scale-110 shadow-lg">
                {step.icon}
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-6 rounded-3xl transition-all duration-500 hover:scale-[1.03] border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] shadow-2xl relative overflow-hidden group/card">
                {/* Decorative background glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 blur-3xl group-hover/card:bg-blue-500/10 transition-colors"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <div className="font-black text-white text-lg tracking-tight leading-tight">{step.title}</div>
                  <time className="font-mono text-[9px] text-blue-400 font-black uppercase tracking-widest bg-blue-400/5 px-1.5 py-0.5 rounded-md border border-blue-400/10 shrink-0 h-fit">
                    {step.period}
                  </time>
                </div>
                
                <p className="text-zinc-400 text-xs leading-relaxed mb-4 font-medium">
                  {step.description}
                </p>

                {step.certificate && (
                  <div className="space-y-3">
                    <div 
                      className="group/img relative rounded-xl overflow-hidden border border-white/10 cursor-zoom-in transition-all duration-300 hover:border-blue-500/30"
                      onClick={() => setSelectedCert(step.certificate!)}
                    >
                      <img 
                        src={step.certificate.image} 
                        alt={`${step.title} Certificate`} 
                        className="w-full h-auto object-cover grayscale-[0.3] group-hover/img:grayscale-0 transition-all duration-700 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-4 py-2 bg-black/60 rounded-full text-[10px] font-black text-white uppercase tracking-widest border border-white/20">Expand View</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;