import React from 'react';
import { motion } from 'framer-motion';
import { FESTIVAL_STATS } from '../data/techfestData';

const STATS_ITEMS = [
  { value: FESTIVAL_STATS.footfall, label: 'FOOTFALL', desc: 'Over three days across IIT Bombay campus' },
  { value: FESTIVAL_STATS.events, label: 'EVENTS', desc: 'Competitions, workshops & exhibitions' },
  { value: FESTIVAL_STATS.editions, label: 'EDITION', desc: 'Thirty years of technical excellence' },
  { value: FESTIVAL_STATS.globalReach, label: 'GLOBAL REACH', desc: 'International participants & delegations' },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full py-28 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase mb-12">
          // TECHFEST BY NUMBERS — SCALE & IMPACT
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS_ITEMS.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border-l-2 border-neutral-800 pl-6 hover:border-[#CCFF00] transition-colors group"
            >
              <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tighter text-white group-hover:text-[#CCFF00] transition-colors">
                {item.value}
              </span>
              <span className="font-mono text-sm tracking-widest text-neutral-300 font-bold uppercase mt-2">
                {item.label}
              </span>
              <span className="font-sans text-xs text-neutral-500 mt-1 font-light">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
