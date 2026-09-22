import React from 'react';
import { Sparkles, Music, Play } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface TechnoholixProps {
  onPlayVideo: (title: string) => void;
}

export const TechnoholixSection: React.FC<TechnoholixProps> = ({ onPlayVideo }) => {
  return (
    <section id="technoholix" className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative overflow-hidden select-none">
      {/* Cyan & Violet ambient laser lighting glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles size={14} className="animate-pulse" />
              <span>NIGHT CONCERTS & EDM LIGHT SPECTACLES</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-[130px] leading-none tracking-tighter text-white uppercase">
              WHEN TECHNOLOGY<br />
              <span className="text-[#00F0FF]">MEETS NIGHT.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col gap-4">
            <p className="font-sans text-base text-neutral-300 font-light leading-relaxed">
              When dusk falls over IIT Bombay, Technoholix transforms the Open Air Theatre into an electric sanctuary of laser visualizer shows, pyro displays, and world-class EDM acts.
            </p>

            <button
              onClick={() => {
                soundFx.playImpact();
                onPlayVideo('Technoholix EDM & Night Laser Swarm Highlights');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="w-fit px-6 py-3 bg-[#00F0FF] hover:bg-[#00cce0] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-cyan flex items-center gap-2"
            >
              <Play size={14} fill="currentColor" />
              WATCH NIGHT HIGHLIGHTS →
            </button>
          </div>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 group">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1400"
              alt="Technoholix Stage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="font-mono text-xs text-[#00F0FF] uppercase tracking-widest block mb-1">MAIN STAGE • OPEN AIR THEATRE</span>
                <h3 className="font-display font-bold text-3xl text-white">5,000+ Crowd Energy</h3>
              </div>
              <Music size={24} className="text-[#00F0FF]" />
            </div>
          </div>

          <div className="md:col-span-4 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#00F0FF] tracking-widest uppercase block mb-3">NIGHT LINEUP HIGHLIGHTS</span>
              <ul className="flex flex-col gap-4 font-sans text-sm text-neutral-300">
                <li className="flex flex-col border-b border-neutral-800 pb-3">
                  <span className="font-display font-bold text-white text-base">International Laser Symphony</span>
                  <span className="font-mono text-xs text-neutral-500">Synchronized 3D projection mapping</span>
                </li>
                <li className="flex flex-col border-b border-neutral-800 pb-3">
                  <span className="font-display font-bold text-white text-base">Pyrotechnic Swarm Display</span>
                  <span className="font-mono text-xs text-neutral-500">100+ LED Pyrotechnic Quadcopters</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-display font-bold text-white text-base">Headline EDM Artists</span>
                  <span className="font-mono text-xs text-neutral-500">Night 01 & Night 03 Concerts</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 font-mono text-xs text-neutral-500 border-t border-neutral-800">
              FREE ENTRY WITH FESTIVAL PASS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
