import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CAMPUS_LOCATIONS, type CampusLocation } from '../data/techfestData';
import { soundFx } from '../lib/sound';

export const CampusMapSection: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<CampusLocation>(CAMPUS_LOCATIONS[0]);
  const [activeModal, setActiveModal] = useState<CampusLocation | null>(null);

  return (
    <section id="campus-map" className="w-full py-32 px-6 md:px-12 bg-[#090909] border-b border-neutral-900 relative select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // INTERACTIVE IIT BOMBAY CAMPUS NAVIGATOR
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              FESTIVAL<br />
              <span className="text-[#CCFF00]">CAMPUS MAP.</span>
            </h2>
          </div>

          <p className="font-sans text-base text-neutral-300 font-light max-w-md">
            Locate venues across IIT Bombay campus. Click any hotspot building pin for real-time scheduled events, venue capacity, and walking directions.
          </p>
        </div>

        {/* Map & Venue Info Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Interactive 2D Vector Map Canvas */}
          <div className="lg:col-span-8 bg-[#050505] border border-neutral-800 rounded-2xl p-6 sm:p-10 relative min-h-[450px] sm:min-h-[550px] flex items-center justify-center shadow-2xl overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            {/* IIT Bombay Campus Vector Drawing Backdrop */}
            <svg
              viewBox="0 0 800 500"
              className="w-full h-full text-neutral-800"
              fill="currentColor"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="2"
            >
              {/* Lake Powai Vector Boundary */}
              <path d="M 0 0 C 200 100, 300 200, 0 400 Z" fill="rgba(0, 240, 255, 0.05)" stroke="#00F0FF" strokeWidth="1" />
              {/* Main Road Loop */}
              <path d="M 150 100 L 650 100 L 650 400 L 150 400 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="4" strokeDasharray="8 8" />
              {/* Buildings */}
              <rect x="220" y="220" width="80" height="60" rx="8" fill="rgba(255,255,255,0.05)" />
              <rect x="320" y="160" width="100" height="80" rx="8" fill="rgba(255,255,255,0.05)" />
              <rect x="450" y="240" width="120" height="90" rx="8" fill="rgba(255,255,255,0.05)" />
              <rect x="580" y="180" width="100" height="120" rx="8" fill="rgba(255,255,255,0.05)" />
            </svg>

            {/* Hotspot Pins */}
            {CAMPUS_LOCATIONS.map((loc) => {
              const isSelected = selectedLoc.id === loc.id;
              return (
                <div
                  key={loc.id}
                  style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => {
                    soundFx.playSelect();
                    setSelectedLoc(loc);
                    setActiveModal(loc);
                  }}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setSelectedLoc(loc);
                  }}
                >
                  <div className={`w-8 h-8 rounded-full absolute -inset-2 animate-ping opacity-30 ${isSelected ? 'bg-[#CCFF00]' : 'bg-neutral-600'}`} />

                  <motion.div
                    animate={{ scale: isSelected ? 1.3 : 1 }}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-mono text-[9px] font-black transition-colors ${
                      isSelected
                        ? 'bg-[#CCFF00] text-black border-black shadow-neon-lime'
                        : 'bg-black text-[#CCFF00] border-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black'
                    }`}
                  >
                    {loc.code}
                  </motion.div>

                  {/* Hotspot Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-7 font-mono text-[10px] tracking-widest font-bold whitespace-nowrap px-2 py-0.5 rounded bg-black/90 text-[#CCFF00] border border-[#CCFF00]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    {loc.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location Info Card */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="bg-[#050505] border border-neutral-800 p-8 rounded-2xl">
              <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase block mb-2">
                SELECTED VENUE // {selectedLoc.zoneType}
              </span>
              <h3 className="font-display font-black text-3xl text-white mb-2">
                {selectedLoc.name}
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed mb-6 font-light">
                {selectedLoc.description}
              </p>

              <div className="flex flex-col gap-2 pt-4 border-t border-neutral-800">
                <span className="font-mono text-[10px] text-neutral-500 uppercase">EVENTS HOSTED AT THIS VENUE:</span>
                {selectedLoc.eventsHosted.map((ev, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#CCFF00]">
                    <span>•</span>
                    <span>{ev}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  soundFx.playSelect();
                  setActiveModal(selectedLoc);
                }}
                className="w-full mt-6 py-3 bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-lime text-center"
              >
                GET VENUE DIRECTIONS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Directions Modal */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#090909] border border-neutral-800 max-w-md w-full rounded-2xl p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase block mb-2">
                IIT BOMBAY CAMPUS NAVIGATOR
              </span>
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Directions to {activeModal.name}
              </h3>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed mb-6">
                From Main Gate 1: Proceed straight down Central Avenue for 400m, turn left at SAC Circle. Campus electric shuttles run every 5 minutes.
              </p>

              <button
                onClick={() => setActiveModal(null)}
                className="w-full py-3 bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-lime text-center"
              >
                CLOSE NAVIGATOR
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
