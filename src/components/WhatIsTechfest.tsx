import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const WhatIsTechfest: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="w-full py-32 px-6 md:px-12 bg-[#090909] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* LEFT: Vertical Sticky Headline & Progress Line */}
        <div className="lg:col-span-5 relative flex items-start gap-6">
          {/* Animated Vertical Line */}
          <div className="relative w-[3px] bg-neutral-800 h-96 rounded-full overflow-hidden shrink-0">
            <motion.div
              style={{ height: progressHeight }}
              className="w-full bg-[#CCFF00]"
            />
          </div>

          <div className="sticky top-32">
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-4">
              // THE TECHFEST PARADIGM
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl leading-[0.9] tracking-tighter text-white uppercase">
              TECHFEST<br />
              IS NOT<br />
              JUST A<br />
              FEST.
            </h2>
          </div>
        </div>

        {/* RIGHT: Editorial Content & Photography */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <p className="font-sans text-xl sm:text-2xl text-neutral-200 leading-relaxed font-light">
            Techfest is <strong className="text-white font-semibold">IIT Bombay’s annual science and technology festival</strong> — an ecosystem engineered to unite visionary thinkers, student innovators, global researchers, and technology pioneers under one roof.
          </p>

          <p className="font-sans text-base sm:text-lg text-neutral-400 leading-relaxed">
            Spanning high-stakes international combat robotics, deep-tech exhibitions, industry-certified workshops, and keynote dialogues by Nobel Laureates, ISRO scientists, and AI pioneers, Techfest operates as Asia’s paramount platform for technical ambitious creation.
          </p>

          {/* Grid of Real Photography */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                alt="Robotics Arena"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase">ROBOTICS ARENA</span>
                <span className="font-display font-bold text-lg text-white">Asia's Highest Combat Stakes</span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden group border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800"
                alt="Lecture Stadium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase">GLOBAL DIALOGUE</span>
                <span className="font-display font-bold text-lg text-white">5,000+ Auditorium Capacity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
