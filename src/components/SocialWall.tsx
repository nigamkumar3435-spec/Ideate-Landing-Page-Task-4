import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2 } from 'lucide-react';
import { SOCIAL_WALL_ITEMS, OFFICIAL_CONTACT } from '../data/techfestData';
import { soundFx } from '../lib/sound';

export const SocialWall: React.FC = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // OFFICIAL SOCIAL MOSAIC
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              LIVE SOCIAL<br />
              <span className="text-[#CCFF00]">FEED.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={OFFICIAL_CONTACT.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:text-[#CCFF00] hover:border-[#CCFF00] transition-colors flex items-center gap-2 font-mono text-xs"
            >
              <Share2 size={16} />
              <span>@TECHFEST_IITB</span>
            </a>
          </div>
        </div>

        {/* Dynamic Masonry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_WALL_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-[#090909] border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] text-[#CCFF00] bg-black/80 px-3 py-1 rounded-full border border-[#CCFF00]/30 uppercase">
                  {item.platform}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1 gap-4">
                <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                  {item.caption}
                </p>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                  <span className="text-[#CCFF00] font-bold">{item.tag}</span>
                  <div className="flex items-center gap-1">
                    <Heart size={12} className="text-red-500 fill-red-500" />
                    <span>{item.likes}</span>
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
