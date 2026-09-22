import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Utensils, Zap, Smile, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../lib/sound';

const OZONE_ACTIVITIES = [
  { icon: Gamepad2, title: 'Gaming Lounge', desc: 'VR simulators, LAN CS2 tournaments, console arenas, and retro arcade setups.' },
  { icon: Zap, title: 'Art Installations', desc: 'Interactive kinetic sculptures, light tunnels, and student design marvels.' },
  { icon: Utensils, title: 'Food Village', desc: '40+ gourmet stalls, food trucks, and regional street delicacies across IIT Bombay campus.' },
  { icon: Smile, title: 'Chill Out Zones', desc: 'Open-air acoustic music circles, instant photo booths, and networking lounges.' },
];

export const OzoneSection: React.FC = () => {
  return (
    <section id="ozone" className="w-full py-28 px-6 md:px-12 bg-neutral-900 border-b border-neutral-800 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF6B00] uppercase block mb-3">
              // OZONE • FUN & ENTERTAINMENT HUB
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              RELAX.<br />
              PLAY.<br />
              <span className="text-[#FF6B00]">EXPERIENCE.</span>
            </h2>
          </div>

          <p className="font-sans text-base text-neutral-300 font-light max-w-md">
            Ozone is the vibrant heart of informal campus life at Techfest — where high-energy gaming tournaments meet interactive art, food, and student community vibes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OZONE_ACTIVITIES.map((act) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
                whileHover={{ y: -6 }}
                onMouseEnter={() => soundFx.playHover()}
                className="bg-[#050505] border border-neutral-800 hover:border-[#FF6B00] p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-[#FF6B00] transition-colors">
                    {act.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                    {act.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between font-mono text-[10px] text-neutral-500 uppercase">
                  <span>SAC GROUND</span>
                  <ArrowUpRight size={14} className="text-[#FF6B00] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
