import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import shortLogo from '../assets/images/load.jpg';

interface LoaderProps {
  onLoaded: () => void;
}

const LOADING_STATUSES = [
  'Synthesizing formulations catalog...',
  'Aligning molecular formulations...',
  'Establishing secure clinical gateways...',
  'Confirming WHO-GMP ethical standards...',
  'Finalizing digital experience...',
];

export default function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  // Lock body scroll during load
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Animate progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoaded();
          }, 600); // Elegant delay for loading completion
          return 100;
        }
        // Random progressive increments
        const increment = Math.random() * 14 + 6;
        return Math.min(prev + increment, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoaded]);

  // Transition status texts
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setStatusIndex((prev) => {
        if (prev < LOADING_STATUSES.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 550);

    return () => clearInterval(statusInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -100,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* High-Tech Background Glows on White */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-orange/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-green/8 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Absolute 3D Orbiting Chemical Rings */}
        <div className="absolute w-48 h-48 md:w-56 md:h-56 flex items-center justify-center pointer-events-none">
          {/* Outer Orbit (Orange) */}
          <motion.div 
            className="absolute inset-0 border-2 border-brand-orange/30 rounded-full"
            style={{ rotateX: 65, rotateY: 20 }}
            animate={{ rotateZ: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            {/* Orbiting Molecule Dot */}
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(255,111,0,0.6)] z-20" />
          </motion.div>

          {/* Inner Orbit (Green) */}
          <motion.div 
            className="absolute inset-0 border-2 border-brand-green/25 rounded-full"
            style={{ rotateX: 65, rotateY: -35 }}
            animate={{ rotateZ: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          >
            {/* Orbiting Molecule Dot */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-brand-green rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] z-20" />
          </motion.div>
        </div>

        {/* Central Logo Disk with shadow */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white p-5 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden z-10"
        >
          <motion.img 
            src={shortLogo} 
            alt="Anthro Logo" 
            className="w-full h-full object-contain rounded-sm"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          />
        </motion.div>
      </div>

      {/* Progress & clinical statuses */}
      <div className="mt-14 text-center space-y-4 max-w-sm w-full px-8 relative z-10">
        
        {/* Loading Progress Bar */}
        <div className="h-[2.5px] w-full bg-slate-100 rounded-full overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-green to-brand-orange"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        {/* Dynamic Status Text */}
        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <div className="h-5 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-brand-orange text-left"
              >
                {LOADING_STATUSES[statusIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="tabular-nums text-slate-500 font-extrabold">{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
