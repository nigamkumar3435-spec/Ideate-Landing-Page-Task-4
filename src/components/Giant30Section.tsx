import React from 'react';
import { motion } from 'framer-motion';

export const Giant30Section: React.FC = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Top Editorial Subhead */}
        <div className="font-mono text-xs sm:text-sm tracking-[0.4em] text-[#CCFF00] uppercase mb-6">
          THIRTY YEARS OF SCIENCE • ENGINEERING • INNOVATION • PEOPLE • CULTURE
        </div>

        {/* Giant Typographic Number "30" with Image Mask */}
        <div className="relative w-full my-8 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[220px] sm:text-[340px] md:text-[460px] leading-none tracking-tighter text-transparent bg-clip-text select-none drop-shadow-[0_0_80px_rgba(204,255,0,0.2)]"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            30
          </motion.div>
        </div>

        {/* Bottom Headline */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight mt-4">
          WELCOME TO TECHFEST 30.
        </h2>
        <p className="font-sans text-base sm:text-lg text-neutral-400 max-w-xl mt-4 font-light">
          Join us at IIT Bombay Powai campus for three days of high-velocity technological ambition.
        </p>
      </div>
    </section>
  );
};
