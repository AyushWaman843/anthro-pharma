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

const NAME_LINE1 = 'ANTHRO';
const NAME_LINE2 = 'PHARMACEUTICALS';
const TAGLINE = 'Advancing Ethical Healthcare';

export default function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [logoRevealed, setLogoRevealed] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // Start logo reveal immediately
  useEffect(() => {
    const t1 = setTimeout(() => setLogoRevealed(true), 80);
    // Text starts slightly after logo reveal completes (~600ms)
    const t2 = setTimeout(() => setShowText(true), 680);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // Progress bar
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoaded(), 600);
          return 100;
        }
        return Math.min(prev + Math.random() * 14 + 6, 100);
      });
    }, 200);
    return () => clearInterval(timer);
  }, [onLoaded]);

  // Status cycling
  useEffect(() => {
    const t = setInterval(() => {
      setStatusIndex((prev) => (prev < LOADING_STATUSES.length - 1 ? prev + 1 : prev));
    }, 550);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -80,
        transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden select-none"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-orange/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-green/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Logo + Text row ── */}
      <div className="flex flex-row items-center gap-7 md:gap-9">

        {/* ── Logo image with clip-path circle reveal + spring bounce ── */}
        <motion.div
          className="relative shrink-0 w-28 h-28 md:w-32 md:h-32"
          initial={{ scale: 0.5 }}
          animate={logoRevealed ? { scale: 1 } : { scale: 0.5 }}
          transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Pulsing halo ring */}
          <motion.div
            className="absolute inset-[-10px] rounded-full border-2 border-brand-orange/25"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          />
          <motion.div
            className="absolute inset-[-20px] rounded-full border border-brand-green/15"
            animate={{ scale: [1, 1.14, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          />

          {/* The actual logo image with circular clip-path expanding outward */}
          <motion.img
            src={shortLogo}
            alt="Anthro Logo Icon"
            className="w-full h-full object-contain rounded-full"
            initial={{ clipPath: 'circle(0% at 50% 50%)', opacity: 1 }}
            animate={
              logoRevealed
                ? { clipPath: 'circle(75% at 50% 50%)', opacity: 1 }
                : { clipPath: 'circle(0% at 50% 50%)', opacity: 1 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Shimmer sweep over the image */}
          <motion.div
            className="absolute inset-0 rounded-full overflow-hidden pointer-events-none z-10"
            initial={{ x: '-100%' }}
            animate={logoRevealed ? { x: '200%' } : { x: '-100%' }}
            transition={{ delay: 0.65, duration: 0.9, ease: 'easeInOut' }}
          >
            <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-15deg]" />
          </motion.div>
        </motion.div>

        {/* ── Company name + tagline ── */}
        <div className="flex flex-col items-start gap-1.5">

          {/* ANTHRO — large bold */}
          <div className="flex overflow-hidden">
            {NAME_LINE1.split('').map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={showText ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-heading font-black text-brand-dark text-4xl md:text-5xl leading-none tracking-[0.15em]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* PHARMACEUTICALS — smaller */}
          <div className="flex overflow-hidden">
            {NAME_LINE2.split('').map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ opacity: 0, y: 24 }}
                animate={showText ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: NAME_LINE1.length * 0.06 + 0.07 + i * 0.038,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-heading font-black text-brand-dark text-base md:text-lg leading-none tracking-[0.14em]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Self-drawing underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={showText ? { scaleX: 1 } : {}}
            transition={{
              delay: NAME_LINE1.length * 0.06 + NAME_LINE2.length * 0.038 + 0.15,
              duration: 0.55,
              ease: 'easeOut',
            }}
            style={{ originX: 0 }}
            className="h-[2px] w-full bg-gradient-to-r from-brand-orange via-brand-green/50 to-transparent rounded-full mt-1"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={showText ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: NAME_LINE1.length * 0.06 + NAME_LINE2.length * 0.038 + 0.32,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.32em] text-brand-orange mt-0.5"
          >
            {TAGLINE}
          </motion.p>
        </div>
      </div>

      {/* ── Progress bar + status text ── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="mt-16 w-full max-w-sm px-10 space-y-2.5"
      >
        <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-green to-brand-orange rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.12 }}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="h-4 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={statusIndex}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-[9px] font-bold uppercase tracking-widest text-brand-orange"
              >
                {LOADING_STATUSES[statusIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-[10px] tabular-nums font-extrabold text-slate-400">
            {Math.round(progress)}%
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
