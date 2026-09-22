import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ArrowUpRight, Check } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/techfestData';
import { soundFx } from '../lib/sound';

interface WorkshopsSectionProps {
  onRegisterClick: (workshopTitle?: string) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="workshops" className="w-full py-32 px-6 md:px-12 bg-[#090909] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // HANDS-ON MASTERCLASSES
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              DON'T JUST<br />
              WATCH.<br />
              <span className="text-[#CCFF00]">BUILD.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col gap-4">
            <p className="font-sans text-base text-neutral-300 font-light">
              Industry-certified technical bootcamps instructed by engineering architects from NVIDIA, Meta AI, and IIT Bombay research laboratories.
            </p>
            <div className="flex items-center gap-4 font-mono text-xs text-[#CCFF00]">
              <span className="flex items-center gap-1"><Check size={14} /> Official Certification</span>
              <span className="flex items-center gap-1"><Check size={14} /> Hands-on Hardware & Code</span>
            </div>
          </div>
        </div>

        {/* Horizontal Card Scroll Container */}
        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory">
          {WORKSHOPS_DATA.map((ws) => (
            <motion.div
              key={ws.id}
              whileHover={{ y: -8 }}
              onMouseEnter={() => soundFx.playHover()}
              className="snap-start shrink-0 w-[340px] sm:w-[420px] bg-[#050505] border border-neutral-800 hover:border-[#CCFF00] rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              {/* Workshop Banner */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={ws.image}
                  alt={ws.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                
                <span className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#CCFF00] bg-black/80 px-3 py-1 rounded-full border border-[#CCFF00]/30 uppercase">
                  {ws.category}
                </span>

                <span className="absolute bottom-4 left-4 font-mono text-xs text-white bg-black/80 px-3 py-1 rounded-full border border-neutral-800 flex items-center gap-1.5">
                  <Clock size={13} className="text-[#CCFF00]" />
                  <span>{ws.duration}</span>
                </span>
              </div>

              {/* Workshop Body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#CCFF00] transition-colors mb-2">
                    {ws.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 mb-4">
                    Instructor: <span className="text-neutral-200">{ws.instructor}</span>
                  </p>

                  <div className="flex flex-col gap-2">
                    {ws.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs font-mono text-neutral-400">
                    <Award size={14} className="text-[#CCFF00]" />
                    <span>{ws.level}</span>
                  </div>
                  <button
                    onClick={() => {
                      soundFx.playSelect();
                      onRegisterClick(ws.title);
                    }}
                    className="flex items-center gap-1 text-xs font-mono text-[#CCFF00] font-bold group-hover:translate-x-1 transition-transform uppercase"
                  >
                    <span>ENROLL NOW</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
