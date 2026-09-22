import React from 'react';
import { Globe, GraduationCap, Trophy } from 'lucide-react';
import { FESTIVAL_STATS } from '../data/techfestData';

export const GlobalReachMap: React.FC = () => {
  return (
    <section className="w-full py-28 px-6 md:px-12 bg-[#090909] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // GLOBAL FOOTPRINT
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl tracking-tighter text-white uppercase leading-none">
              75+ COUNTRIES.<br />
              <span className="text-[#CCFF00]">ONE FESTIVAL.</span>
            </h2>
          </div>

          <p className="font-sans text-base text-neutral-300 font-light max-w-md">
            Techfest welcomes international delegations, research universities, and combat teams from North America, Europe, Asia-Pacific, and the Middle East.
          </p>
        </div>

        {/* Global Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#050505] border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
            <Globe className="text-[#CCFF00] mb-6" size={32} />
            <div>
              <span className="font-display font-black text-5xl text-white block mb-1">
                {FESTIVAL_STATS.globalReach}
              </span>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                International Representation
              </span>
            </div>
          </div>

          <div className="bg-[#050505] border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
            <GraduationCap className="text-[#CCFF00] mb-6" size={32} />
            <div>
              <span className="font-display font-black text-5xl text-white block mb-1">
                {FESTIVAL_STATS.universities}
              </span>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                Global Academic Institutions
              </span>
            </div>
          </div>

          <div className="bg-[#050505] border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
            <Trophy className="text-[#CCFF00] mb-6" size={32} />
            <div>
              <span className="font-display font-black text-5xl text-[#CCFF00] block mb-1">
                {FESTIVAL_STATS.prizes}
              </span>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                International Prize Pool
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
