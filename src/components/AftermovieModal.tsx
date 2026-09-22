import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

interface AftermovieModalProps {
  isOpen: boolean;
  videoTitle: string;
  onClose: () => void;
}

export const AftermovieModal: React.FC<AftermovieModalProps> = ({ isOpen, videoTitle, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-12 select-none"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#CCFF00] animate-ping" />
            <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase">
              CINEMATIC EXPERIENCE // {videoTitle}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 text-white hover:text-[#CCFF00] hover:border-[#CCFF00] flex items-center justify-center transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Player Display Container */}
        <div className="relative my-auto w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 flex items-center justify-center group">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600"
            alt="Aftermovie Trailer"
            className="w-full h-full object-cover filter brightness-75 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60" />

          {/* Central Play Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="w-20 h-20 rounded-full bg-[#CCFF00] text-black flex items-center justify-center shadow-neon-lime cursor-pointer hover:scale-110 transition-transform">
              <Play size={32} fill="currentColor" className="ml-1" />
            </div>
            <span className="font-mono text-xs text-white tracking-widest uppercase bg-black/80 px-4 py-2 rounded-full border border-neutral-800">
              PLAYING 4K CINEMATIC TEASER
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between font-mono text-xs text-neutral-500 border-t border-neutral-800/80 pt-4">
          <span>TECHFEST 30TH EDITION • IIT BOMBAY</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
