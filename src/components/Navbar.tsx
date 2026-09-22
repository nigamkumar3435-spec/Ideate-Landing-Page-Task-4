import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface NavbarProps {
  onRegisterClick: () => void;
}

const NAV_LINKS = [
  { name: 'EVENTS', href: '#explore' },
  { name: 'COMPETITIONS', href: '#competitions' },
  { name: 'ROBOWARS', href: '#robowars' },
  { name: 'WORKSHOPS', href: '#workshops' },
  { name: 'EXHIBITIONS', href: '#exhibitions' },
  { name: 'LECTURES', href: '#lectures' },
  { name: 'ZONALS', href: '#zonals' },
  { name: 'SCHEDULE', href: '#schedule' },
  { name: 'CAMPUS MAP', href: '#campus-map' },
  { name: '30 YEARS', href: '#timeline' },
];

export const Navbar: React.FC<NavbarProps> = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const newState = soundFx.toggleSound();
    setIsMuted(!newState);
  };

  const handleLinkClick = (href: string) => {
    soundFx.playSelect();
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#050505]/90 backdrop-blur-md border-b border-neutral-800/80 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded bg-[#CCFF00] flex items-center justify-center font-display font-black text-black text-lg group-hover:scale-105 transition-transform">
              30
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-[#CCFF00] transition-colors">
                TECHFEST
              </span>
              <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase">
                IIT BOMBAY
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs tracking-wider">
            {NAV_LINKS.slice(0, 7).map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-[#CCFF00] font-semibold' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#CCFF00]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-4">
            {/* Sound Toggle */}
            <button
              onClick={toggleAudio}
              onMouseEnter={() => soundFx.playHover()}
              className="p-2 rounded-full border border-neutral-800 bg-neutral-900/60 hover:border-[#CCFF00]/50 text-neutral-300 hover:text-[#CCFF00] transition-all flex items-center gap-2 font-mono text-[10px]"
              title={isMuted ? 'Enable Festival Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} className="text-[#CCFF00] animate-pulse" />}
              <span className="hidden sm:inline uppercase">{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
            </button>

            {/* Register CTA Button */}
            <button
              onClick={() => {
                soundFx.playSelect();
                onRegisterClick();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="hidden sm:flex items-center gap-2 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-display font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-neon-lime"
            >
              REGISTER 30TH
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => {
                soundFx.playSelect();
                setIsMobileOpen(!isMobileOpen);
              }}
              className="lg:hidden p-2 text-white hover:text-[#CCFF00] transition-colors"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#050505] flex flex-col justify-between px-8 py-24 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="font-mono text-xs tracking-widest text-[#CCFF00] uppercase">
                // NAVIGATION MENU — TECHFEST 30
              </div>
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="font-display font-black text-3xl sm:text-4xl text-white hover:text-[#CCFF00] transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#CCFF00]" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-neutral-800 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onRegisterClick();
                }}
                className="w-full py-4 bg-[#CCFF00] text-black font-display font-bold text-sm tracking-wider uppercase rounded-lg text-center"
              >
                REGISTER FOR FESTIVAL
              </button>
              <div className="font-mono text-[10px] text-neutral-500 text-center tracking-widest uppercase">
                IIT BOMBAY • POWAI, MUMBAI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
