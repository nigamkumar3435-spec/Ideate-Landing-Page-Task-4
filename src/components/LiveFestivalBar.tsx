import React from 'react';

const TICKER_ITEMS = [
  'TECHFEST 30',
  'IIT BOMBAY',
  'COMPETITIONS',
  'WORKSHOPS',
  'INTERNATIONAL ROBOWARS',
  'TECHNOHOLIX',
  'OZONE',
  'LECTURES',
  'SUMMITS',
  'ZONALS',
  'IDRL DRONE RACING',
  'EXHIBITIONS'
];

export const LiveFestivalBar: React.FC = () => {
  return (
    <div className="w-full bg-[#CCFF00] text-black py-4 overflow-hidden border-y border-black font-display font-black text-lg md:text-xl tracking-tighter uppercase select-none z-20 relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Double array for seamless loop */}
        {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span>{item}</span>
            <span className="ml-12 text-black/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
