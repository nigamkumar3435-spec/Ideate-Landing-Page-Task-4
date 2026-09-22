import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface CategoryItem {
  number: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const CATEGORIES: CategoryItem[] = [
  { number: '01', title: 'COMPETITIONS', description: 'National & international STEM challenges spanning aeromodelling, AI hackathons, and robotics.', href: '#competitions', image: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?auto=format&fit=crop&q=80&w=1200' },
  { number: '02', title: 'WORKSHOPS', description: 'Hands-on technical masterclasses led by industry pioneers in AI, ROS 2, and Web Architecture.', href: '#workshops', image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1200' },
  { number: '03', title: 'EXHIBITIONS', description: 'Editorial technology museum displaying futuristic defence robotics, space modules, and humanoid AI.', href: '#exhibitions', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200' },
  { number: '04', title: 'LECTURES', description: 'Keynotes and panel dialogues with Nobel Laureates, ISRO scientists, and Turing Award winners.', href: '#lectures', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200' },
  { number: '05', title: 'SUMMITS', description: 'Venture capital pitching, financial summits, and sustainable technology roundtables.', href: '#competitions', image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200' },
  { number: '06', title: 'INTERNATIONAL ROBOWARS', description: 'Steel bulletproof arena featuring 8kg to 60kg combat bots clashing in high-velocity destruction.', href: '#robowars', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200' },
  { number: '07', title: 'TECHNOHOLIX', description: 'When technology meets the night — visual laser spectacles, EDM concerts, and light shows.', href: '#technoholix', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200' },
  { number: '08', title: 'OZONE', description: 'Vibrant entertainment hub featuring gaming arenas, interactive art installations, and food courts.', href: '#ozone', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200' },
  { number: '09', title: 'ZONALS', description: 'Pan-India qualification network spanning Mumbai, Delhi, Bangalore, Kolkata, Jaipur, and Bhopal.', href: '#zonals', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200' },
  { number: '10', title: 'CAMPUS EXPERIENCE', description: 'Immerse yourself inside IIT Bombay powai campus with hospitality, accommodation, and networking.', href: '#campus-map', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200' },
];

export const ExploreGrid: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleClick = (href: string) => {
    soundFx.playSelect();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="explore" className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-2">
              // TECHFEST ECOSYSTEM
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl tracking-tighter text-white uppercase">
              EXPLORE TECHFEST
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-md tracking-wider uppercase">
            Select a dimension to enter the 30th Edition festival experience
          </p>
        </div>

        {/* 10 Full-Width Interactive Horizontal Category Cards */}
        <div className="flex flex-col border-t border-neutral-800">
          {CATEGORIES.map((cat, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={cat.number}
                onMouseEnter={() => {
                  soundFx.playHover();
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => handleClick(cat.href)}
                className="relative cursor-pointer border-b border-neutral-800 py-8 px-4 transition-all duration-500 overflow-hidden group"
              >
                {/* Background Hover Image Reveal */}
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${
                    isHovered ? 'opacity-30' : 'opacity-0'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover filter brightness-75 scale-105 transition-transform duration-1000 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
                </div>

                {/* Card Content Layout */}
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6">
                    <span
                      className={`font-mono text-xl sm:text-2xl font-bold transition-colors ${
                        isHovered ? 'text-[#CCFF00]' : 'text-neutral-600'
                      }`}
                    >
                      {cat.number}
                    </span>
                    <h3
                      className={`font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter transition-all duration-300 ${
                        isHovered ? 'text-[#CCFF00] translate-x-3' : 'text-white'
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  {/* Sliding Description & Action Arrow */}
                  <div className="flex items-center gap-8 lg:max-w-md">
                    <p
                      className={`font-sans text-sm text-neutral-300 font-light transition-all duration-500 ${
                        isHovered ? 'opacity-100 translate-x-0' : 'opacity-70 lg:opacity-0 lg:translate-x-4'
                      }`}
                    >
                      {cat.description}
                    </p>

                    <div
                      className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isHovered
                          ? 'bg-[#CCFF00] border-[#CCFF00] text-black rotate-45'
                          : 'border-neutral-700 text-neutral-400 group-hover:border-white group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Accent Line Indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#CCFF00]"
                  initial={{ width: '0%' }}
                  animate={{ width: isHovered ? '100%' : '0%' }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
