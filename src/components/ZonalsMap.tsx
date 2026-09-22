import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Sparkles } from 'lucide-react';
import { ZONAL_CITIES, type ZonalCity } from '../data/techfestData';
import { soundFx } from '../lib/sound';

export const ZonalsMap: React.FC = () => {
  const [activeCity, setActiveCity] = useState<ZonalCity | null>(ZONAL_CITIES[0]);
  const [modalCity, setModalCity] = useState<ZonalCity | null>(null);

  return (
    <section id="zonals" className="w-full py-32 px-6 md:px-12 bg-[#050505] border-b border-neutral-900 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase block mb-3">
              // PAN-INDIA QUALIFICATION NETWORK
            </span>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white uppercase leading-none">
              TECHFEST<br />
              <span className="text-[#CCFF00]">ZONALS.</span>
            </h2>
          </div>

          <div className="max-w-md flex flex-col gap-4">
            <p className="font-sans text-base text-neutral-300 font-light">
              Before reaching the grand finals at IIT Bombay, thousands of student teams compete across major Zonal hubs spanning Mumbai, Delhi, Bangalore, Kolkata, Jaipur, and Bhopal.
            </p>
          </div>
        </div>

        {/* 2D SVG Map & Info Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Stylized 2D SVG Map Container */}
          <div className="lg:col-span-7 bg-[#090909] border border-neutral-800 rounded-2xl p-6 sm:p-10 relative min-h-[450px] sm:min-h-[550px] flex items-center justify-center shadow-2xl">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

            {/* Stylized SVG Map Outline of India */}
            <svg
              viewBox="0 0 500 550"
              className="w-full h-full max-w-[420px] max-h-[480px] text-neutral-800 drop-shadow-md"
              fill="currentColor"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1.5"
            >
              {/* Stylized Polygon Vector Path of India map */}
              <path d="M 180 50 L 220 60 L 260 90 L 300 120 L 320 160 L 370 190 L 420 200 L 440 230 L 410 260 L 360 270 L 330 300 L 280 340 L 250 420 L 200 500 L 160 450 L 140 370 L 110 320 L 80 280 L 70 230 L 110 180 L 140 120 Z" />
            </svg>

            {/* Connecting Lines between Cities */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {ZONAL_CITIES.slice(1).map((c, i) => {
                const hub = ZONAL_CITIES[0]; // Mumbai hub
                return (
                  <motion.line
                    key={i}
                    x1={`${hub.lng}%`}
                    y1={`${hub.lat}%`}
                    x2={`${c.lng}%`}
                    y2={`${c.lat}%`}
                    stroke="#CCFF00"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />
                );
              })}
            </svg>

            {/* Glowing City Nodes */}
            {ZONAL_CITIES.map((city) => {
              const isSelected = activeCity?.id === city.id;
              return (
                <div
                  key={city.id}
                  style={{ left: `${city.lng}%`, top: `${city.lat}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                  onClick={() => {
                    soundFx.playSelect();
                    setActiveCity(city);
                    setModalCity(city);
                  }}
                  onMouseEnter={() => {
                    soundFx.playHover();
                    setActiveCity(city);
                  }}
                >
                  {/* Pulse Ring */}
                  <div className={`w-8 h-8 rounded-full absolute -inset-2 animate-ping opacity-40 ${isSelected ? 'bg-[#CCFF00]' : 'bg-neutral-600'}`} />

                  {/* Dot */}
                  <motion.div
                    animate={{ scale: isSelected ? 1.4 : 1 }}
                    className={`w-4 h-4 rounded-full border-2 transition-colors ${
                      isSelected
                        ? 'bg-[#CCFF00] border-black shadow-neon-lime'
                        : 'bg-black border-[#CCFF00] group-hover:bg-[#CCFF00]'
                    }`}
                  />

                  {/* Label */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-6 font-mono text-[10px] tracking-widest font-bold whitespace-nowrap px-2 py-0.5 rounded bg-black/90 border transition-all ${
                      isSelected
                        ? 'text-[#CCFF00] border-[#CCFF00]'
                        : 'text-neutral-400 border-neutral-800 opacity-80 group-hover:opacity-100'
                    }`}
                  >
                    {city.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active City Details Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-[#090909] border border-neutral-800 p-8 rounded-2xl">
              {activeCity ? (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase flex items-center gap-2">
                      <Sparkles size={14} />
                      <span>ZONAL CENTER • {activeCity.state}</span>
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border uppercase ${
                        activeCity.status === 'Live'
                          ? 'bg-[#CCFF00]/10 text-[#CCFF00] border-[#CCFF00]'
                          : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                      }`}
                    >
                      ● {activeCity.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-4xl sm:text-5xl text-white">
                      {activeCity.name}
                    </h3>
                    <p className="font-mono text-xs text-neutral-400 mt-1">
                      Venue: <span className="text-white">{activeCity.venue}</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 font-mono text-xs p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                    <div>
                      <span className="text-neutral-500 block">EVENT DATE</span>
                      <span className="font-bold text-[#CCFF00]">{activeCity.date}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block">QUALIFIERS</span>
                      <span className="font-bold text-white">{activeCity.eventsCount} Events</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      soundFx.playSelect();
                      setModalCity(activeCity);
                    }}
                    className="w-full py-3.5 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-lime flex items-center justify-center gap-2"
                  >
                    OPEN ZONAL DETAILS
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ) : (
                <div className="font-mono text-xs text-neutral-500">
                  Select a city node on the map to view Zonal qualifier details
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Zonal Detail Modal */}
      <AnimatePresence>
        {modalCity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setModalCity(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#090909] border border-neutral-800 max-w-lg w-full rounded-2xl p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setModalCity(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase block mb-2">
                // OFFICIAL QUALIFIER HUB
              </span>
              <h3 className="font-display font-black text-4xl text-white mb-2">
                {modalCity.name} ZONAL
              </h3>
              <p className="font-mono text-xs text-neutral-400 mb-6">
                {modalCity.venue} • {modalCity.date}
              </p>

              <div className="space-y-3 font-sans text-sm text-neutral-300 mb-8">
                <p>
                  Top winning teams from the {modalCity.name} Zonal automatically advance to the Techfest 30 Grand Finals at IIT Bombay with travel assistance and priority accommodation.
                </p>
              </div>

              <button
                onClick={() => {
                  setModalCity(null);
                  alert(`Registering for ${modalCity.name} Zonal Qualifiers! Redirecting to official portal.`);
                }}
                className="w-full py-4 bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-lime text-center"
              >
                REGISTER FOR {modalCity.name.toUpperCase()} ZONAL
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
