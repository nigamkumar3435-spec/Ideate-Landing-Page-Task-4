import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface ExhibitionCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

const EXHIBITION_ITEMS: ExhibitionCategory[] = [
  {
    id: 'robotics',
    title: 'ADVANCED ROBOTICS',
    subtitle: 'Humanoid Bipeds & Quadruped K9 Units',
    description: 'Direct interactions with state-of-the-art bipedal humanoid robots, high-agility robotic quadrupeds, and industrial robotic arms.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600',
    highlights: ['Hanson Robotics Humanoid', 'Boston Dynamics Spot Demo', 'Autonomous Swarm Units']
  },
  {
    id: 'ai',
    title: 'ARTIFICIAL INTELLIGENCE',
    subtitle: 'Neural Interfaces & Edge Vision',
    description: 'Interactive neural network demonstrations, real-time spatial vision computing, and brain-computer interface (BCI) prototypes.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=1600',
    highlights: ['Real-time EEG BCI headset demo', 'Zero-latency multimodal LLM chipsets', 'Generative Holographic Displays']
  },
  {
    id: 'space',
    title: 'DEEP SPACE & AEROSPACE',
    subtitle: 'ISRO Lander Models & CubeSats',
    description: 'Scale models of Chandrayaan landers, Gaganyaan crew capsules, student-built CubeSats, and rocket propulsion nozzles.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
    highlights: ['ISRO Lunar Rover prototype', 'Orbital Debris Tracking Radar', 'Hybrid Rocket Engine Core']
  },
  {
    id: 'defence',
    title: 'DEFENCE & SURVEILLANCE',
    subtitle: 'Tactical UAVs & Combat Vehicles',
    description: 'Cutting-edge defence technology showcasing autonomous surveillance UAVs, tactical counter-drone systems, and armored unmanned ground vehicles.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1600',
    highlights: ['Counter-Drone Frequency Jammer', 'Unmanned Reconnaissance Rover', 'Night Vision Thermal HUD']
  },
  {
    id: 'automotive',
    title: 'FUTURE AUTOMOTIVE',
    subtitle: 'EV Hypercars & Hydrogen Pods',
    description: 'Formula Student electric hypercars, hydrogen fuel-cell urban vehicles, and autonomous self-driving sensor rigs.',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=1600',
    highlights: ['IITB Racing Electric Hypercar', '0-100 km/h in 2.1s EV Drivetrain', 'Hydrogen Fuel Cell Stack']
  }
];

export const ExhibitionsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="exhibitions" className="w-full min-h-screen py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative flex flex-col justify-between select-none">
      {/* Dynamic Full-Bleed Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 pointer-events-none z-0"
        >
          <img
            src={EXHIBITION_ITEMS[activeIdx].image}
            alt={EXHIBITION_ITEMS[activeIdx].title}
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </motion.div>
      </AnimatePresence>

      {/* Header */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
          // EDITORIAL TECHNOLOGY MUSEUM
        </span>
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-9xl tracking-tighter text-white uppercase leading-none mb-12">
          TECHFEST<br />
          <span className="text-stroke-thick">EXHIBITIONS.</span>
        </h2>
      </div>

      {/* Interactive Museum Gallery Index */}
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end my-8">
        {/* Category List */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          {EXHIBITION_ITEMS.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  soundFx.playSelect();
                  setActiveIdx(idx);
                }}
                onMouseEnter={() => {
                  soundFx.playHover();
                  setActiveIdx(idx);
                }}
                className={`py-4 px-6 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between group ${
                  isActive
                    ? 'bg-[#111111]/90 border-[#CCFF00] shadow-neon-lime'
                    : 'bg-black/40 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-sm font-bold ${isActive ? 'text-[#CCFF00]' : 'text-neutral-500'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`font-display font-black text-xl sm:text-2xl tracking-tight uppercase ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                    {item.title}
                  </span>
                </div>
                <ArrowUpRight size={20} className={`transition-transform ${isActive ? 'text-[#CCFF00] rotate-45 scale-110' : 'text-neutral-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Active Exhibit Details Card */}
        <div className="lg:col-span-6 bg-[#090909]/90 border border-neutral-800 backdrop-blur-md p-8 rounded-2xl flex flex-col justify-between gap-6 shadow-2xl">
          <div>
            <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase block mb-2">
              0{activeIdx + 1} // {EXHIBITION_ITEMS[activeIdx].subtitle}
            </span>
            <h3 className="font-display font-bold text-3xl text-white mb-4">
              {EXHIBITION_ITEMS[activeIdx].title}
            </h3>
            <p className="font-sans text-neutral-300 text-sm leading-relaxed font-light mb-6">
              {EXHIBITION_ITEMS[activeIdx].description}
            </p>

            <div className="flex flex-col gap-2 border-t border-neutral-800/80 pt-4">
              <span className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase">FEATURED EXHIBITS:</span>
              {EXHIBITION_ITEMS[activeIdx].highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#CCFF00]">
                  <span>•</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
