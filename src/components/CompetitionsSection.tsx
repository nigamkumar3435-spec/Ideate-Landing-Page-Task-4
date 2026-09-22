import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Trophy, Calendar, Search, X, CheckCircle2 } from 'lucide-react';
import { COMPETITIONS_DATA, type Competition } from '../data/techfestData';
import { soundFx } from '../lib/sound';

interface CompetitionsSectionProps {
  onRegisterClick: (eventName?: string) => void;
}

const CATEGORIES = ['All', 'Robotics', 'AI & Software', 'Aeromodelling', 'Innovation & Social', 'School & Olympiad'] as const;

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({ onRegisterClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalComp, setActiveModalComp] = useState<Competition | null>(null);

  const filteredCompetitions = COMPETITIONS_DATA.filter(comp => {
    const matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
    const matchesSearch = comp.name.toLowerCase().includes(searchQuery.toLowerCase()) || comp.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openCompDetail = (comp: Competition) => {
    soundFx.playSelect();
    setActiveModalComp(comp);
  };

  return (
    <section id="competitions" className="w-full py-32 px-6 md:px-12 bg-[#090909] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // FLAGSHIP COMPETITIONS
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              BUILD.<br />
              BREAK.<br />
              <span className="text-[#CCFF00]">COMPETE.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:max-w-md">
            <p className="font-sans text-base text-neutral-300 font-light">
              Compete against top international engineering talent across robotics arenas, aviation skyways, AI hackathons, and high-frequency innovation summits.
            </p>

            {/* Search input */}
            <div className="relative w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search competitions (e.g. Roboracers, Ideathon)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900/90 border border-neutral-800 rounded-full pl-12 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#CCFF00] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playSelect();
                setSelectedCategory(cat);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-6 py-2.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-[#CCFF00] text-black border-[#CCFF00] font-bold shadow-neon-lime'
                  : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Competitions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompetitions.map(comp => (
            <motion.div
              key={comp.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => openCompDetail(comp)}
              onMouseEnter={() => soundFx.playHover()}
              className="group cursor-pointer bg-[#050505] border border-neutral-800 hover:border-[#CCFF00]/60 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:shadow-[#CCFF00]/10"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={comp.image}
                  alt={comp.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-widest text-[#CCFF00] bg-black/80 px-3 py-1 rounded-full border border-[#CCFF00]/30 uppercase">
                  {comp.category}
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[#CCFF00] bg-black/80 px-3 py-1 rounded-full font-mono text-xs font-bold border border-neutral-800">
                  <Trophy size={14} />
                  <span>{comp.prize}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#CCFF00] transition-colors mb-2">
                    {comp.name}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                    {comp.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-[#CCFF00]" />
                    <span>{comp.date}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#CCFF00] font-bold uppercase">
                    <span>DETAILS</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Competition Detail Modal Drawer */}
      <AnimatePresence>
        {activeModalComp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setActiveModalComp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#090909] border border-neutral-800 max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative my-auto max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalComp(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/80 border border-neutral-700 text-white hover:text-[#CCFF00] hover:border-[#CCFF00] flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Banner */}
              <div className="relative aspect-[21/9] w-full overflow-hidden shrink-0">
                <img
                  src={activeModalComp.image}
                  alt={activeModalComp.name}
                  className="w-full h-full object-cover filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2">
                  <span className="font-mono text-xs tracking-widest text-[#CCFF00] uppercase">
                    {activeModalComp.category}
                  </span>
                  <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
                    {activeModalComp.name}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 flex-1 overflow-y-auto flex flex-col gap-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 font-mono text-xs">
                  <div>
                    <span className="text-neutral-500 block">TOTAL PRIZE</span>
                    <span className="text-[#CCFF00] font-bold text-sm">{activeModalComp.prize}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">SCHEDULE</span>
                    <span className="text-white font-bold">{activeModalComp.date}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">LOCATION</span>
                    <span className="text-white font-bold">{activeModalComp.location}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">TEAM SIZE</span>
                    <span className="text-white font-bold">{activeModalComp.teamSize}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase mb-2">OVERVIEW</h4>
                  <p className="font-sans text-neutral-300 text-sm leading-relaxed">
                    {activeModalComp.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase mb-3">KEY RULES & CRITERIA</h4>
                  <div className="flex flex-col gap-2">
                    {activeModalComp.rulesSummary.map((rule, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckCircle2 size={16} className="text-[#CCFF00] shrink-0" />
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Registration Action */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-4">
                  <div className="font-mono text-xs text-neutral-500">
                    Official IIT Bombay Event Registration
                  </div>
                  <button
                    onClick={() => {
                      setActiveModalComp(null);
                      onRegisterClick(activeModalComp.name);
                    }}
                    className="px-8 py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-display font-bold text-sm tracking-wider uppercase rounded-full shadow-neon-lime flex items-center gap-2"
                  >
                    REGISTER FOR {activeModalComp.name.toUpperCase()}
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
