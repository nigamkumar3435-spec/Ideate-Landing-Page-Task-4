import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Mic } from 'lucide-react';
import { SPEAKERS_DATA } from '../data/techfestData';
import { soundFx } from '../lib/sound';

export const LecturesSection: React.FC = () => {
  return (
    <section id="lectures" className="w-full py-32 px-6 md:px-12 bg-[#090909] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // KEYNOTE DIALOGUES & SUMMITS
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              VISIONARY<br />
              <span className="text-[#CCFF00]">SPEAKERS.</span>
            </h2>
          </div>

          <p className="font-sans text-base text-neutral-300 font-light max-w-md">
            Direct keynotes and interactive Q&A sessions with Turing Award winners, ISRO Space Leadership, Nobel Laureates, and international robotics innovators.
          </p>
        </div>

        {/* Magazine-Style Speaker Gallery Horizontal Scroll */}
        <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory">
          {SPEAKERS_DATA.map((speaker, idx) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onMouseEnter={() => soundFx.playHover()}
              className="snap-start shrink-0 w-[320px] sm:w-[380px] bg-[#050505] border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#CCFF00]/50 group"
            >
              {/* Large Portrait Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 rounded-full font-mono text-[10px] text-[#CCFF00] border border-[#CCFF00]/30 uppercase flex items-center gap-1.5">
                  <Mic size={12} />
                  <span>KEYNOTE SPEAKER</span>
                </div>
              </div>

              {/* Speaker Editorial Info */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl text-white group-hover:text-[#CCFF00] transition-colors mb-1">
                    {speaker.name}
                  </h3>
                  <p className="font-mono text-xs text-[#CCFF00] font-semibold mb-1">
                    {speaker.title}
                  </p>
                  <p className="font-sans text-xs text-neutral-400 mb-4">
                    {speaker.organization}
                  </p>
                  
                  <div className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800/80">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase block mb-1">KEYNOTE TOPIC</span>
                    <p className="font-sans text-xs text-white font-medium italic">
                      "{speaker.topic}"
                    </p>
                  </div>
                </div>

                {/* Date & Venue */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between font-mono text-xs text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={13} className="text-[#CCFF00]" />
                    <span>{speaker.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#CCFF00]" />
                    <span>{speaker.venue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
