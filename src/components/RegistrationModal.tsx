import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundFx } from '../lib/sound';

interface RegistrationModalProps {
  isOpen: boolean;
  preselectedEvent?: string;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, preselectedEvent, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    selectedEvent: preselectedEvent || 'General Festival Delegate Pass'
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playSelect();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#090909] border border-neutral-800 max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {!submitted ? (
            <div>
              <span className="font-mono text-xs text-[#CCFF00] tracking-widest uppercase block mb-2">
                OFFICIAL IIT BOMBAY PORTAL
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-white mb-2">
                REGISTER FOR FESTIVAL
              </h3>
              <p className="font-sans text-xs text-neutral-400 mb-6 font-light">
                Gain access to 300+ events, Robowars arenas, workshops, keynote lectures, and Technoholix concerts.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
                <div>
                  <label className="text-neutral-400 block mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">INSTITUTION / COLLEGE *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IIT Bombay / University"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-white focus:outline-none focus:border-[#CCFF00]"
                  />
                </div>

                <div>
                  <label className="text-neutral-400 block mb-1">EVENT / PASS TYPE</label>
                  <input
                    type="text"
                    readOnly
                    value={formData.selectedEvent}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-[#CCFF00] font-bold"
                  />
                </div>

                <div className="pt-2 flex items-center gap-2 text-[10px] text-neutral-500">
                  <ShieldCheck size={14} className="text-[#CCFF00]" />
                  <span>Free registration. Official credentials issued upon verification.</span>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-4 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-neon-lime flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  CONFIRM REGISTRATION
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00] text-[#CCFF00] flex items-center justify-center">
                <CheckCircle size={36} />
              </div>

              <h3 className="font-display font-black text-3xl text-white">
                REGISTRATION SUCCESSFUL!
              </h3>

              <p className="font-sans text-xs text-neutral-300 max-w-sm leading-relaxed">
                Welcome to Techfest 30th Edition! A confirmation email and QR delegate pass have been dispatched to <strong className="text-[#CCFF00]">{formData.email}</strong>.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-8 py-3 bg-[#CCFF00] text-black font-display font-bold text-xs uppercase tracking-wider rounded-full"
              >
                RETURN TO FESTIVAL
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
