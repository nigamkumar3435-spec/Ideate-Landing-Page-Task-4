import React from 'react';
import { ArrowUpRight, Share2 } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/techfestData';
import { soundFx } from '../lib/sound';

interface CTASectionProps {
  onRegisterClick: () => void;
  onExploreClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onRegisterClick, onExploreClick }) => {
  return (
    <section className="w-full py-36 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 text-center select-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <span className="font-mono text-xs tracking-[0.4em] text-[#CCFF00] uppercase block mb-6">
          // 30TH EDITION • IIT BOMBAY
        </span>

        <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-[130px] leading-none tracking-tighter text-white uppercase mb-8">
          YOUR TECHFEST<br />
          <span className="text-[#CCFF00]">STARTS HERE.</span>
        </h2>

        <p className="font-sans text-lg sm:text-xl text-neutral-400 max-w-2xl font-light mb-12">
          Join 180,000+ innovators, engineers, and technology leaders. Register now for Asia’s largest science and technology festival.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => {
              soundFx.playSelect();
              onRegisterClick();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="w-full sm:w-auto px-10 py-5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-display font-bold text-sm tracking-widest uppercase rounded-full shadow-neon-lime flex items-center justify-center gap-2"
          >
            REGISTER FOR TECHFEST 30
            <ArrowUpRight size={18} />
          </button>

          <button
            onClick={() => {
              soundFx.playSelect();
              onExploreClick();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-neutral-700 hover:border-white text-white font-display font-bold text-sm tracking-widest uppercase rounded-full transition-colors"
          >
            EXPLORE EVENTS
          </button>

          <a
            href={OFFICIAL_CONTACT.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            className="w-full sm:w-auto px-8 py-5 bg-neutral-900/80 border border-neutral-800 hover:border-[#CCFF00] text-neutral-300 hover:text-[#CCFF00] font-mono text-xs tracking-widest uppercase rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <Share2 size={16} />
            FOLLOW TECHFEST
          </a>
        </div>
      </div>
    </section>
  );
};
