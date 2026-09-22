import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export type CursorState = 'DEFAULT' | 'VIEW' | 'EXPLORE' | 'PLAY' | 'DRAG' | 'REGISTER';

interface CustomCursorProps {
  cursorState: CursorState;
  cursorText?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState, cursorText }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  const getLabel = () => {
    if (cursorText) return cursorText;
    switch (cursorState) {
      case 'VIEW': return 'VIEW';
      case 'EXPLORE': return 'EXPLORE';
      case 'PLAY': return 'PLAY';
      case 'DRAG': return 'DRAG';
      case 'REGISTER': return 'JOIN';
      default: return '';
    }
  };

  const isExpanded = cursorState !== 'DEFAULT' || Boolean(cursorText);

  return (
    <>
      {/* Small dot follower */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#CCFF00] rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePos.x - 6,
          y: mousePos.y - 6,
          scale: isExpanded ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Larger circular cursor container */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center font-mono text-[10px] tracking-widest font-bold border ${
          cursorState === 'REGISTER' || cursorState === 'PLAY'
            ? 'bg-[#CCFF00] text-black border-[#CCFF00]'
            : 'bg-black/80 text-[#CCFF00] border-[#CCFF00]/50 backdrop-blur-md'
        }`}
        animate={{
          x: mousePos.x - (isExpanded ? 36 : 16),
          y: mousePos.y - (isExpanded ? 36 : 16),
          width: isExpanded ? 72 : 32,
          height: isExpanded ? 72 : 32,
          opacity: mousePos.x < 0 ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="uppercase"
          >
            {getLabel()}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
