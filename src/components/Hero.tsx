import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface HeroProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick, onExploreClick }) => {
  const { scrollY } = useScroll();

  // Multi-layer parallax values (subtle, non-3D)
  const bgY = useTransform(scrollY, [0, 800], [0, 120]);
  const textY = useTransform(scrollY, [0, 800], [0, -80]);
  const uiY = useTransform(scrollY, [0, 800], [0, -140]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 bg-[#050505] overflow-hidden select-none">
      {/* Background Visual Montage Layer */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10" />
        
        {/* High-res Techfest Montage Image Collage */}
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
          alt="Techfest Backdrop"
          className="w-full h-full object-cover filter contrast-125 brightness-75 scale-105"
        />
        
        {/* Animated Scanline & Grid Mask */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30 z-20" />
        <div className="absolute inset-0 scanlines opacity-20 z-20" />
      </motion.div>

      {/* Top Banner Tag */}
      <motion.div style={{ y: uiY }} className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#CCFF00]/30 bg-[#CCFF00]/10 text-[#CCFF00] font-mono text-xs font-semibold tracking-wider">
          <Sparkles size={14} className="animate-spin-slow" />
          <span>30TH EDITION • ASIA'S LARGEST TECH FESTIVAL</span>
        </div>
        <div className="hidden md:flex font-mono text-xs text-neutral-400 tracking-widest uppercase">
          DECEMBER 2026 • IIT BOMBAY
        </div>
      </motion.div>

      {/* Main Hero Editorial Typography */}
      <motion.div style={{ y: textY }} className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="font-mono text-xs sm:text-sm tracking-[0.3em] text-neutral-400 uppercase mb-4 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#CCFF00]" />
          <span>IIT BOMBAY PRESENTS</span>
        </div>

        <h1 className="font-display font-black text-6xl sm:text-8xl md:text-[130px] lg:text-[170px] leading-[0.85] tracking-tighter text-white uppercase mb-4">
          TECHFEST
        </h1>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#CCFF00] uppercase mb-4">
              THE FUTURE IS AN EVENT.
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Step into the 30th edition of Asia’s largest science and technology festival. 
              An ecosystem spanning high-octane international combat robotics, deep-tech exhibitions, global hackathons, and visionary keynotes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => {
                soundFx.playSelect();
                onExploreClick();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-8 py-4 bg-transparent border-2 border-white hover:border-[#CCFF00] text-white hover:text-[#CCFF00] font-display font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 text-center"
            >
              EXPLORE TECHFEST
            </button>
            <button
              onClick={() => {
                soundFx.playSelect();
                onRegisterClick();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="px-8 py-4 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-display font-bold text-sm tracking-widest uppercase rounded-full transition-all duration-300 shadow-neon-lime flex items-center justify-center gap-2"
            >
              REGISTER NOW
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div style={{ y: uiY }} className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-neutral-800/80 pt-6">
        <button
          onClick={() => {
            soundFx.playSelect();
            onExploreClick();
          }}
          className="group flex items-center gap-3 font-mono text-xs tracking-widest text-neutral-400 hover:text-[#CCFF00] transition-colors"
        >
          <span>SCROLL TO ENTER</span>
          <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-[#CCFF00]" />
        </button>

        <div className="hidden sm:flex items-center gap-6 font-mono text-xs text-neutral-500">
          <span>180K+ FOOTFALL</span>
          <span>•</span>
          <span>300+ EVENTS</span>
          <span>•</span>
          <span>75+ COUNTRIES</span>
        </div>
      </motion.div>
    </section>
  );
};
