import React, { useState } from 'react';
import { Flame, ShieldAlert, Play, ArrowUpRight, Crosshair } from 'lucide-react';
import { ROBOWARS_WEIGHT_CLASSES } from '../data/techfestData';
import { soundFx } from '../lib/sound';

interface RobowarsSectionProps {
  onRegisterClick: (eventName?: string) => void;
  onPlayVideo: (videoTitle: string) => void;
}

export const RobowarsSection: React.FC<RobowarsSectionProps> = ({ onRegisterClick, onPlayVideo }) => {
  const [activeWeight, setActiveWeight] = useState<number>(3); // 60kg default

  return (
    <section id="robowars" className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative overflow-hidden select-none">
      {/* Subtle red ambient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF3366]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3366]/10 border border-[#FF3366]/40 text-[#FF3366] font-mono text-xs font-bold tracking-widest uppercase mb-4">
              <Flame size={14} className="animate-pulse" />
              <span>CAGE MATCH • TITANIUM & STEEL COMBAT</span>
            </div>
            <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-[140px] leading-none tracking-tighter text-white uppercase drop-shadow-[0_0_40px_rgba(255,51,102,0.3)]">
              ROBOWARS
            </h2>
          </div>

          <div className="max-w-md flex flex-col gap-4">
            <p className="font-sans text-base text-neutral-300 font-light leading-relaxed">
              Asia’s premier combat robotics arena. Watch 60KG titanium beasts featuring vertical spinner drums, pneumatic flippers, and hydraulic crushers clash inside a bulletproof steel cage.
            </p>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  soundFx.playImpact();
                  onPlayVideo('International Robowars Championship 60KG Highlights');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3 bg-[#FF3366] hover:bg-[#e62e5c] text-white font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-red flex items-center gap-2"
              >
                <Play size={14} fill="currentColor" />
                WATCH BATTLES →
              </button>
              <button
                onClick={() => {
                  soundFx.playSelect();
                  onRegisterClick('International Robowars');
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-6 py-3 bg-transparent border border-neutral-700 hover:border-[#FF3366] text-neutral-300 hover:text-[#FF3366] font-display font-bold text-xs uppercase tracking-wider rounded-full transition-colors flex items-center gap-2"
              >
                REGISTER TEAM
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Weight Classes Interactive Horizontal Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Weight Selectors Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-xs text-[#FF3366] tracking-widest uppercase">
              // WEIGHT CATEGORIES
            </span>
            <div className="flex flex-col gap-3">
              {ROBOWARS_WEIGHT_CLASSES.map((w, idx) => {
                const isActive = activeWeight === idx;
                return (
                  <button
                    key={w.class}
                    onClick={() => {
                      soundFx.playImpact();
                      setActiveWeight(idx);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`p-6 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'bg-[#FF3366]/10 border-[#FF3366] shadow-neon-red'
                        : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div>
                      <span className={`font-display font-black text-3xl sm:text-4xl block ${isActive ? 'text-[#FF3366]' : 'text-white'}`}>
                        {w.class}
                      </span>
                      <span className="font-mono text-xs text-neutral-400 tracking-wider uppercase">
                        {w.label}
                      </span>
                    </div>

                    <Crosshair size={24} className={`transition-transform ${isActive ? 'text-[#FF3366] rotate-90 scale-110' : 'text-neutral-700'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Specs Display */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#FF3366] tracking-widest uppercase flex items-center gap-2">
                  <ShieldAlert size={16} />
                  <span>ARENA SPECIFICATIONS & RULES</span>
                </span>
                <span className="font-mono text-xs text-neutral-500">LIVE ARENA GROUND</span>
              </div>

              <h3 className="font-display font-black text-4xl sm:text-5xl text-white mb-4">
                {ROBOWARS_WEIGHT_CLASSES[activeWeight].class} — {ROBOWARS_WEIGHT_CLASSES[activeWeight].label}
              </h3>

              <p className="font-sans text-lg text-neutral-300 leading-relaxed font-light mb-8">
                {ROBOWARS_WEIGHT_CLASSES[activeWeight].desc}
              </p>

              {/* Arena Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs text-neutral-300 border-t border-neutral-800/80 pt-6">
                <div>
                  <span className="text-neutral-500 block">ARENA SIZE</span>
                  <span className="font-bold text-white">40ft x 40ft Bulletproof</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">WEAPON LIMIT</span>
                  <span className="font-bold text-[#FF3366]">10,000 RPM Max</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">SPECTATOR CAP</span>
                  <span className="font-bold text-white">12,000 Seats</span>
                </div>
              </div>
            </div>

            {/* Background Robot Combat Image */}
            <div className="absolute inset-0 pointer-events-none opacity-25 group-hover:opacity-35 transition-opacity duration-700">
              <img
                src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1200"
                alt="Robowars Arena"
                className="w-full h-full object-cover filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
