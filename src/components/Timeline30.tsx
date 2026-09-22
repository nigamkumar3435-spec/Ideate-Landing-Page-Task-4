import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_ARCHIVE } from '../data/techfestData';
import { soundFx } from '../lib/sound';

export const Timeline30: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(4); // 2026 default

  return (
    <section id="timeline" className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // HISTORICAL ARCHIVE • 1998–2026
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tighter text-white uppercase leading-none">
              30 YEARS.<br />
              <span className="text-[#CCFF00]">ONE FUTURE.</span>
            </h2>
          </div>

          <p className="font-sans text-base text-neutral-300 font-light max-w-md">
            Three decades of building Asia’s largest tech festival — from a modest student assembly into a global tech ecosystem.
          </p>
        </div>

        {/* Timeline Slider / Selector */}
        <div className="flex items-center gap-4 overflow-x-auto pb-6 mb-12 border-b border-neutral-800">
          {TIMELINE_ARCHIVE.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.year}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveIdx(idx);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`py-3 px-8 rounded-full font-mono text-sm tracking-wider transition-all whitespace-nowrap border ${
                  isActive
                    ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-neon-lime scale-105'
                    : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:border-neutral-700 hover:text-white'
                }`}
              >
                {item.year}
              </button>
            );
          })}
        </div>

        {/* Active Archive Reveal Card */}
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#090909] border border-neutral-800 rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase">
              MILESTONE ARCHIVE // YEAR {TIMELINE_ARCHIVE[activeIdx].year}
            </span>
            <h3 className="font-display font-black text-4xl sm:text-5xl text-white">
              {TIMELINE_ARCHIVE[activeIdx].title}
            </h3>
            <p className="font-sans text-lg text-neutral-300 leading-relaxed font-light">
              {TIMELINE_ARCHIVE[activeIdx].desc}
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
              alt="Archive Visual"
              className="w-full h-full object-cover filter contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex items-end">
              <span className="font-mono text-xs text-white">HISTORICAL PHOTOGRAPHY & POSTER ARCHIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
