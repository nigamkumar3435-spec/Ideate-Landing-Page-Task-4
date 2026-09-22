import React from 'react';
import { Home, Utensils, Users, Shield } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface AccommodationProps {
  onRegisterClick: (eventName?: string) => void;
}

export const AccommodationSection: React.FC<AccommodationProps> = ({ onRegisterClick }) => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-[#090909] border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-xs tracking-[0.3em] text-[#CCFF00] uppercase">
              // HOSPITALITY & CAMPUS STAY
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-white uppercase leading-none">
              STAY INSIDE<br />
              <span className="text-[#CCFF00]">THE EXPERIENCE.</span>
            </h2>

            <p className="font-sans text-base text-neutral-300 font-light leading-relaxed">
              Experience festival life 24/7 inside IIT Bombay Powai campus. Official student accommodation provides secure hostel stay, mess dining, 24-hour campus shuttle services, and networking access.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 font-mono text-xs text-neutral-300 py-4 border-y border-neutral-800">
              <div className="flex items-center gap-2">
                <Home size={16} className="text-[#CCFF00]" />
                <span>Hostel Room Stay</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils size={16} className="text-[#CCFF00]" />
                <span>Mess Dining Included</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#CCFF00]" />
                <span>24/7 Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-[#CCFF00]" />
                <span>Student Community</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.playSelect();
                onRegisterClick('Accommodation Portal');
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="w-fit px-8 py-4 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-lime flex items-center gap-2"
            >
              EXPLORE ACCOMMODATION →
            </button>
          </div>

          {/* Right Campus Photography */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 group">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200"
              alt="IIT Bombay Campus Stay"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-[#CCFF00] uppercase tracking-widest">
              IIT BOMBAY HOSTEL GROUNDS • POWAI, MUMBAI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
