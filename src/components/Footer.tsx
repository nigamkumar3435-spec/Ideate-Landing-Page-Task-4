import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/techfestData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#050505] text-neutral-300 border-t border-neutral-900 pt-24 pb-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          {/* Logo & Main Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-[#CCFF00] flex items-center justify-center font-display font-black text-black text-xl">
                  30
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-3xl tracking-tight text-white">
                    TECHFEST
                  </span>
                  <span className="font-mono text-xs tracking-widest text-[#CCFF00] uppercase">
                    IIT BOMBAY • 30TH EDITION
                  </span>
                </div>
              </div>

              <p className="font-sans text-sm text-neutral-400 font-light max-w-sm leading-relaxed mb-6">
                Asia’s largest science and technology festival. Organized autonomously by student coordinators at Indian Institute of Technology Bombay.
              </p>
            </div>

            {/* Official Contact Card */}
            <div className="p-5 rounded-2xl bg-[#090909] border border-neutral-800 flex flex-col gap-3 font-mono text-xs text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#CCFF00] shrink-0 mt-0.5" />
                <span>{OFFICIAL_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#CCFF00] shrink-0" />
                <a href={`mailto:${OFFICIAL_CONTACT.email}`} className="hover:text-white transition-colors">
                  {OFFICIAL_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#CCFF00] shrink-0" />
                <span>{OFFICIAL_CONTACT.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-xs">
            <div>
              <span className="text-[#CCFF00] tracking-widest uppercase block mb-4 font-bold">FESTIVAL SECTIONS</span>
              <ul className="flex flex-col gap-3 text-neutral-400">
                <li><a href="#explore" className="hover:text-white transition-colors">Events Overview</a></li>
                <li><a href="#competitions" className="hover:text-white transition-colors">Competitions</a></li>
                <li><a href="#robowars" className="hover:text-white transition-colors">International Robowars</a></li>
                <li><a href="#workshops" className="hover:text-white transition-colors">Workshops & Bootcamps</a></li>
                <li><a href="#exhibitions" className="hover:text-white transition-colors">Exhibitions Museum</a></li>
                <li><a href="#lectures" className="hover:text-white transition-colors">Keynote Lectures</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#CCFF00] tracking-widest uppercase block mb-4 font-bold">EXPERIENCE & MAP</span>
              <ul className="flex flex-col gap-3 text-neutral-400">
                <li><a href="#zonals" className="hover:text-white transition-colors">Zonals Qualifiers</a></li>
                <li><a href="#technoholix" className="hover:text-white transition-colors">Technoholix EDM</a></li>
                <li><a href="#ozone" className="hover:text-white transition-colors">Ozone Fun Zone</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Event Schedule</a></li>
                <li><a href="#campus-map" className="hover:text-white transition-colors">IIT Bombay Campus Map</a></li>
                <li><a href="#timeline" className="hover:text-white transition-colors">30 Years History</a></li>
              </ul>
            </div>

            <div>
              <span className="text-[#CCFF00] tracking-widest uppercase block mb-4 font-bold">LEGAL & ORGANIZERS</span>
              <ul className="flex flex-col gap-3 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About IIT Bombay</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sponsorships</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Campus Ambassadors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Media & Press Kit</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
          <div>
            © 1998–2026 Techfest IIT Bombay. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href={OFFICIAL_CONTACT.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors">Instagram</a>
            <a href={OFFICIAL_CONTACT.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors">YouTube</a>
            <a href={OFFICIAL_CONTACT.socials.x} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors">X (Twitter)</a>
            <a href={OFFICIAL_CONTACT.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
