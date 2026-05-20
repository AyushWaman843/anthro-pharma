import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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

/* ─────────────────────────────────────────────
   Animated SVG recreation of the Anthro icon
   Each element appears in a staggered sequence
───────────────────────────────────────────── */
function AnthroIconSVG() {
  return (
    <svg
      viewBox="0 0 220 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* ── 1. Green main C-circle — scales in from centre ── */}
      <motion.ellipse
        cx="138" cy="112" rx="66" ry="70"
        fill="#4CAF26"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: '138px 112px' }}
      />

      {/* ── Cut-out white hole inside green circle ── */}
      <motion.ellipse
        cx="145" cy="118" rx="32" ry="35"
        fill="white"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: '145px 118px' }}
      />

      {/* ── 2. Orange fill / teardrop inside the C opening ── */}
      <motion.path
        d="M165 148 Q185 140 190 112 Q185 85 168 80 Q185 95 182 118 Q180 142 165 148Z"
        fill="#E85A1B"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.45, ease: 'easeOut' }}
      />

      {/* ── 3. Orange upper-left swoosh arm ── */}
      <motion.path
        d="M82 90 Q60 55 45 30 Q62 52 88 65"
        stroke="#E85A1B"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.55, ease: 'easeOut' }}
      />

      {/* ── 4. Orange lower-left swoosh arm ── */}
      <motion.path
        d="M80 135 Q50 160 35 185 Q55 162 85 152"
        stroke="#E85A1B"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.55, ease: 'easeOut' }}
      />

      {/* ── 5. Green upper-left small leaf / wing (top) ── */}
      <motion.path
        d="M72 75 Q58 55 68 42 Q78 55 72 75Z"
        fill="#4CAF26"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: '70px 58px' }}
      />

      {/* ── 6. Green lower-left small leaf / wing (bottom) ── */}
      <motion.path
        d="M68 150 Q50 168 60 180 Q72 168 68 150Z"
        fill="#4CAF26"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: '60px 165px' }}
      />

      {/* ── 7. Black head dot — pops in last with bounce ── */}
      <motion.circle
        cx="72" cy="48" r="13"
        fill="#1A1A1A"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ transformOrigin: '72px 48px' }}
      />

      {/* ── 8. Orange body torso connector ── */}
      <motion.path
        d="M80 100 Q72 112 78 128"
        stroke="#E85A1B"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: 'easeOut' }}
      />
    </svg>
  );
}

export default function Loader({ onLoaded }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  // Delay text until icon is mostly drawn
  useEffect(() => {
    const t = setTimeout(() => setShowText(true), 900);
    return () => clearTimeout(t);
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

  const allChars = [...NAME_LINE1.split(''), ' ', ...NAME_LINE2.split('')];

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
      <div className="flex flex-row items-center gap-6 md:gap-8">

        {/* Animated SVG icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-28 h-28 md:w-36 md:h-36 shrink-0"
        >
          <AnthroIconSVG />
        </motion.div>

        {/* Text block */}
        <div className="flex flex-col items-start gap-2">

          {/* Line 1: ANTHRO */}
          <div className="flex overflow-hidden">
            {NAME_LINE1.split('').map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, y: 28 }}
                animate={showText ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.055, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading font-black text-brand-dark text-3xl md:text-4xl leading-none tracking-[0.15em]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Line 2: PHARMACEUTICALS */}
          <div className="flex overflow-hidden">
            {NAME_LINE2.split('').map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ opacity: 0, y: 28 }}
                animate={showText ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: NAME_LINE1.length * 0.055 + 0.08 + i * 0.038,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-heading font-black text-brand-dark text-lg md:text-xl leading-none tracking-[0.12em]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Animated underline that draws left-to-right */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={showText ? { scaleX: 1 } : {}}
            transition={{
              delay: (NAME_LINE1.length * 0.055) + (NAME_LINE2.length * 0.038) + 0.15,
              duration: 0.55,
              ease: 'easeOut',
            }}
            style={{ originX: 0 }}
            className="h-[2px] w-full bg-gradient-to-r from-brand-orange via-brand-green/60 to-transparent rounded-full"
          />

          {/* Tagline slides up */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={showText ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: (NAME_LINE1.length * 0.055) + (NAME_LINE2.length * 0.038) + 0.3,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="text-[10px] md:text-xs font-extrabold uppercase tracking-[0.3em] text-brand-orange mt-0.5"
          >
            {TAGLINE}
          </motion.p>
        </div>
      </div>

      {/* ── Progress bar + status ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
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
