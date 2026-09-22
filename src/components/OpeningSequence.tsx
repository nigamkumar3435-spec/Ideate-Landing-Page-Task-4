import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../lib/sound';

interface OpeningSequenceProps {
  onComplete: () => void;
}

const WORDS = ['SCIENCE.', 'TECHNOLOGY.', 'INNOVATION.', 'ENERGY.'];

export const OpeningSequence: React.FC<OpeningSequenceProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(0);
  // 0: IIT BOMBAY PRESENTS
  // 1-4: Rapid words (SCIENCE, TECHNOLOGY, INNOVATION, ENERGY)
  // 5: TECHFEST
  // 6: 30TH EDITION + Expanding line
  // 7: Complete

  useEffect(() => {
    // Step 0: 1000ms
    const t0 = setTimeout(() => {
      soundFx.playHover();
      setStep(1);
    }, 1200);

    // Rapid sequence: 350ms per word
    const t1 = setTimeout(() => { soundFx.playHover(); setStep(2); }, 1600);
    const t2 = setTimeout(() => { soundFx.playHover(); setStep(3); }, 1950);
    const t3 = setTimeout(() => { soundFx.playHover(); setStep(4); }, 2300);

    // Step 5: TECHFEST
    const t4 = setTimeout(() => {
      soundFx.playImpact();
      setStep(5);
    }, 2700);

    // Step 6: 30TH EDITION + Expanding line
    const t5 = setTimeout(() => {
      soundFx.playSelect();
      setStep(6);
    }, 3800);

    // Step 7: Finish intro
    const t6 = setTimeout(() => {
      onComplete();
    }, 5200);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center select-none overflow-hidden"
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
    >
      {/* Background grain texture */}
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      {/* Skip button */}
      <button
        onClick={() => {
          soundFx.playSelect();
          onComplete();
        }}
        className="absolute top-8 right-8 font-mono text-xs tracking-widest text-neutral-500 hover:text-[#CCFF00] border border-neutral-800 hover:border-[#CCFF00]/40 px-4 py-2 rounded-full transition-all duration-300 z-10"
      >
        SKIP INTRO [ESC]
      </button>

      {/* Stage 0: IIT BOMBAY PRESENTS */}
      {step === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="font-mono text-xs md:text-sm tracking-[0.4em] text-neutral-400 uppercase"
        >
          IIT BOMBAY PRESENTS
        </motion.div>
      )}

      {/* Stage 1 - 4: Rapid Typographic Sequence */}
      {step >= 1 && step <= 4 && (
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.85, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.15, filter: 'blur(10px)' }}
            transition={{ duration: 0.2 }}
            className="font-display font-black text-4xl md:text-7xl lg:text-9xl tracking-tighter text-white uppercase text-center"
          >
            {WORDS[step - 1]}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Stage 5 & 6: Huge TECHFEST Typography & 30TH EDITION */}
      {step >= 5 && (
        <div className="flex flex-col items-center justify-center w-full max-w-6xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-6xl sm:text-8xl md:text-[140px] lg:text-[180px] leading-none tracking-tighter text-white drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]"
          >
            TECHFEST
          </motion.div>

          {step >= 6 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 font-mono text-lg sm:text-2xl md:text-3xl tracking-[0.5em] text-[#CCFF00] font-bold"
            >
              30TH EDITION
            </motion.div>
          )}

          {/* Expanding Line */}
          {step >= 6 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 w-full max-w-2xl h-[2px] bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent origin-center"
            />
          )}
        </div>
      )}
    </motion.div>
  );
};
