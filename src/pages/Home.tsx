import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import {
  ArrowRight, Shield, CheckCircle, Users, Handshake, Factory, FileSearch, Pill,
  Heart, Wind, Sparkles, HeartPulse, ShieldCheck, Scale
} from 'lucide-react';
import { STRENGTHS, THERAPEUTIC_SEGMENTS } from '../constants';
import img_hero_pharma_laboratory_1779016806163_png from '../assets/images/hero_pharma_laboratory_1779016806163.png';
import img_rd_therapeutics_imagery_1779016860858_png from '../assets/images/rd_therapeutics_imagery_1779016860858.png';
import img_pharma_logistics_hub_1779016910269_png from '../assets/images/pharma_logistics_hub_1779016910269.png';
import img_manufacturing_facility_1779016846794_png from '../assets/images/manufacturing_facility_1779016846794.png';
import img_professional_portrait_placeholder_1779016991849_png from '../assets/images/professional_portrait_placeholder_1779016991849.png';
import img_about_corporate_team_1779016826652_png from '../assets/images/about_corporate_team_1779016826652.png';
import img_careers_collaboration_1779016952313_png from '../assets/images/careers_collaboration_1779016952313.png';
import img_bg_png from '../assets/images/bg.png';

const ICON_MAP: Record<string, any> = { Shield, CheckCircle, Users, Handshake, Factory, FileSearch };

const SEGMENT_METADATA = {
  "antibiotics": {
    icon: Shield,
    color: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600",
    badge: "Antibiotics"
  },
  "gastro": {
    icon: Sparkles,
    color: "from-amber-500/10 to-orange-500/5",
    iconColor: "text-amber-600",
    badge: "Gastro & Acid Management"
  },
  "pain": {
    icon: HeartPulse,
    color: "from-rose-500/10 to-red-500/5",
    iconColor: "text-rose-600",
    badge: "Pain Management"
  },
  "anti-helminthics": {
    icon: ShieldCheck,
    color: "from-teal-500/10 to-emerald-500/5",
    iconColor: "text-teal-600",
    badge: "Anti-Helminthics"
  },
  "cardio-diabetics": {
    icon: Heart,
    color: "from-pink-500/10 to-rose-500/5",
    iconColor: "text-pink-600",
    badge: "Cardio & Diabetics Segment"
  },
  "hormone": {
    icon: Scale,
    color: "from-purple-500/10 to-indigo-500/5",
    iconColor: "text-purple-600",
    badge: "Hormone Therapy"
  },
  "cough-cold": {
    icon: Wind,
    color: "from-sky-500/10 to-blue-500/5",
    iconColor: "text-sky-600",
    badge: "Cough & Cold Preparations"
  }
};

const SEGMENT_BANNERS: Record<string, string> = {
  "antibiotics": img_hero_pharma_laboratory_1779016806163_png,
  "gastro": img_rd_therapeutics_imagery_1779016860858_png,
  "pain": img_pharma_logistics_hub_1779016910269_png,
  "anti-helminthics": img_manufacturing_facility_1779016846794_png,
  "cardio-diabetics": img_professional_portrait_placeholder_1779016991849_png,
  "hormone": img_about_corporate_team_1779016826652_png,
  "cough-cold": img_careers_collaboration_1779016952313_png
};


const CAROUSEL_IMAGES = [
  { src: img_hero_pharma_laboratory_1779016806163_png, title: 'Modern Lab Formulation', badge: 'Quality R&D' },
  { src: img_manufacturing_facility_1779016846794_png, title: 'WHO-GMP Manufacturing', badge: 'Standards' },
  { src: img_rd_therapeutics_imagery_1779016860858_png, title: 'Therapeutic Solutions', badge: 'Efficacy' },
  { src: img_about_corporate_team_1779016826652_png, title: 'Professional Leadership', badge: 'Expertise' },
  { src: img_careers_collaboration_1779016952313_png, title: 'Synergy & Collaboration', badge: 'Culture' },
  { src: img_pharma_logistics_hub_1779016910269_png, title: 'Structured Logistics', badge: 'Supply Chain' },
  { src: img_professional_portrait_placeholder_1779016991849_png, title: 'Medical Professionals', badge: 'Team' },
];

// 3× so -33.333% loop is seamless
const TRACK = [...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES, ...CAROUSEL_IMAGES];

// Card base dimensions
const CARD_W = 280; // px (narrower for portrait)
const CARD_H = 400; // px (taller height)
const GAP = 28;  // px

export default function Home() {
  const [activeStrengthIndex, setActiveStrengthIndex] = useState(0);
  const [activeSegmentId, setActiveSegmentId] = useState("antibiotics");
  const trackRef = useRef<HTMLDivElement>(null);

  // Typewriter Animation Logic for Hero Headings
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    const phrases = [
      "Advancing Ethical Healthcare Through Quality-Driven Pharmaceutical Solutions",
      "Delivering trusted formulations across key therapeutic segments with a commitment to compliance, quality, and long-term partnerships."
    ];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50; // ms per character
    let deletingSpeed = 15; // ms per character when backspacing
    let delayBeforeDelete = 3000; // ms pause at end of phrase
    let delayBeforeType = 400; // ms pause before starting next phrase
    let timer: any;

    const tick = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, currentCharIndex + 1));
        currentCharIndex++;

        if (currentCharIndex === currentPhrase.length) {
          isDeleting = true;
          timer = setTimeout(tick, delayBeforeDelete);
        } else {
          timer = setTimeout(tick, typingSpeed);
        }
      } else {
        setTypedText(currentPhrase.substring(0, currentCharIndex - 1));
        currentCharIndex--;

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          timer = setTimeout(tick, delayBeforeType);
        } else {
          timer = setTimeout(tick, deletingSpeed);
        }
      }
    };

    timer = setTimeout(tick, delayBeforeType);
    return () => clearTimeout(timer);
  }, []);

  // Read each card's real viewport-X, apply scale: large at edges, small at center
  useEffect(() => {
    let raf: number;
    const tick = () => {
      if (trackRef.current) {
        const cards = trackRef.current.querySelectorAll<HTMLDivElement>('.ci');
        const vcx = window.innerWidth / 2;
        const halfVW = window.innerWidth * 0.48;
        cards.forEach((el) => {
          const r = el.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const dist = Math.abs(cx - vcx);
          const t = Math.min(dist / halfVW, 1);        // 0 = dead-center, 1 = screen edge
          const scale = 0.72 + 0.46 * Math.pow(t, 0.6); // 0.72 center → 1.18 edge
          el.style.transform = `scale(${scale})`;
          el.style.opacity = String(0.55 + 0.45 * t);
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent">

      {/* ════════════════════════════════════════════════════════
          HERO — full viewport height
          position:relative + z-index:1 so it stacks ABOVE next
          section, letting carousel bleed over its background
         ════════════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col bg-gradient-to-b from-orange-tint/50 via-white/60 to-white"
        style={{ minHeight: '100vh', zIndex: 1, position: 'relative' }}
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={img_bg_png}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20 animate-hero-bg"
          />
        </div>

        {/* ambient dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#ff6f00_0.6px,transparent_0.6px)] [background-size:22px_22px] opacity-[0.04] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-orange/5 rounded-full blur-[130px] pointer-events-none" />

        {/* ── Text block — pt-20 clears navbar, flex-1 centres content ── */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl mx-auto w-full pt-36 pb-[260px] sm:pb-[280px]">
          {/* pb-[260px] leaves enough room for the taller 400px carousel strip */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.07 }}
            className="font-heading font-black text-brand-dark leading-tight tracking-tight mb-2.5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Welcome to <br />
            <span className="bg-gradient-to-r from-brand-green via-brand-orange to-brand-green-dark bg-clip-text text-transparent">
              Anthro Pharma
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.14 }}
            className="w-full max-w-3xl min-h-[110px] sm:min-h-[90px] md:min-h-[75px] flex items-center justify-center mb-6 pb-2 border-b border-brand-orange/20"
          >
            <p className="text-charcoal font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed italic max-w-2xl">
              “{typedText}
              <span className="inline-block w-1 h-5 bg-brand-orange ml-1 animate-pulse" style={{ verticalAlign: 'middle' }} />”
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.21 }}
            className="flex flex-wrap gap-3 sm:gap-4 justify-center"
          >
            <Link to="/contact"
              className="group bg-brand-green hover:bg-brand-green-dark text-white px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-sm font-bold shadow-md flex items-center gap-2 transition-all hover:-translate-y-0.5 text-sm sm:text-base">
              Partner With Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/products"
              className="bg-white hover:bg-orange-tint/40 text-brand-green border border-brand-green/20 hover:border-brand-green px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-sm font-bold transition-all hover:-translate-y-0.5 text-sm sm:text-base">
              Explore Our Products
            </Link>
          </motion.div>
        </div>

        {/* ── Carousel strip ──
            - absolute bottom-0, translateY(50%) → half inside hero, half below
            - z-index: 20 → above everything in hero AND next section
            - NO overflow:hidden on wrapper → scaled cards are NOT clipped  ── */}
        <div
          className="absolute bottom-0 left-0 right-0 border-b-2 border-black"
          style={{ transform: 'translateY(50%)', zIndex: 20 }}
        >
          {/* Edge fade mask only — NO overflow:hidden so scaled cards show */}
          <div
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, black 9%, black 91%, transparent 100%)',
            }}
          >
            {/* py-10 gives vertical breathing room for scaled-up edge cards */}
            <div style={{ paddingTop: 40, paddingBottom: 64, overflow: 'visible' }}>
              <div
                ref={trackRef}
                className="marquee-track flex items-center w-max"
                style={{ gap: GAP }}
              >
                {TRACK.map((item, idx) => (
                  // Outer slot: fixed base dimensions, NO transform (CSS anim is on this element's ancestor)
                  <div key={idx} className="flex-shrink-0" style={{ width: CARD_W, height: CARD_H }}>
                    {/* Inner card: rAF applies scale here */}
                    <div
                      className="ci w-full h-full rounded-sm overflow-hidden shadow-xl relative"
                      style={{ transformOrigin: 'center center', willChange: 'transform, opacity' }}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                        <span className="inline-block text-[7px] font-black uppercase tracking-widest bg-white text-brand-orange px-1.5 py-0.5 rounded mb-0.5">
                          {item.badge}
                        </span>
                        <p className="text-white text-[9px] font-extrabold truncate drop-shadow">{item.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CORE STRENGTHS — Bespoke Interactive Editorial Showcase
          paddingTop accounts for carousel bleed (50% of card height + py-10)
         ════════════════════════════════════════════════════════ */}
      <section className="pb-36 bg-white relative overflow-hidden border-b border-gray-150/40" style={{ zIndex: 0, paddingTop: Math.round(CARD_H * 0.58) + 64 }}>
        {/* Ambient background patterns & glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#ff6f00_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />

        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Block - Editorial Alignment */}
          <div className="mb-20 text-left relative max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
              Anthro Excellence
            </span>
            <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl tracking-tight leading-none">
              Core Strengths
            </h2>
            <div className="w-20 h-1 bg-brand-orange mt-6 rounded-full" />
          </div>

          {/* Interactive Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: Clean Numbered Editorial Index Triggers (lg:col-span-5) */}
            <div className="flex flex-col space-y-2 lg:col-span-5">
              {STRENGTHS.map((strength, i) => {
                const isActive = activeStrengthIndex === i;
                return (
                  <button
                    key={strength.title}
                    onClick={() => setActiveStrengthIndex(i)}
                    className="group text-left py-6 border-b border-orange-tint/25 flex items-start gap-6 transition-all duration-300 relative outline-none focus:outline-none"
                  >
                    {/* Spring-animated capsule background for active state */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-orange-tint/15 via-orange-tint/5 to-transparent rounded-sm -mx-4 z-0 pointer-events-none"
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      />
                    )}

                    {/* Large Editorial Index Number */}
                    <span className={`text-xl font-heading font-black tracking-tight leading-none transition-all duration-300 z-10 ${isActive ? 'text-brand-orange text-2xl scale-105' : 'text-charcoal/30 group-hover:text-brand-orange/70'
                      }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Title & Responsive Accordion Description */}
                    <div className="flex-1 z-10">
                      <h3 className={`text-lg md:text-xl font-heading font-black transition-all duration-300 leading-tight ${isActive ? 'text-brand-dark pl-2 border-l-2 border-brand-orange' : 'text-charcoal/70 group-hover:text-brand-dark group-hover:pl-2'
                        }`}>
                        {strength.title}
                      </h3>

                      {/* Accordion description - collapses on desktop, expands on mobile/tablet */}
                      <p className={`mt-3 text-sm text-charcoal/75 leading-relaxed font-semibold transition-all duration-300 ${isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                        } lg:hidden`}>
                        {strength.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT COLUMN: Tactile Overlapping Stacked Card Deck (lg:col-span-7) */}
            <div className="hidden lg:block lg:col-span-7 sticky top-32 h-[440px] lg:h-[480px]">
              <div className="relative w-full h-full max-w-md mx-auto flex items-center justify-center">
                {STRENGTHS.map((strength, i) => {
                  const IconComp = ICON_MAP[strength.icon];

                  // Calculate symmetric circular distance for flawless infinite carousel transitions
                  let diff = i - activeStrengthIndex;
                  if (diff > STRENGTHS.length / 2) {
                    diff -= STRENGTHS.length;
                  } else if (diff < -STRENGTHS.length / 2) {
                    diff += STRENGTHS.length;
                  }

                  const isVisible = Math.abs(diff) < 3;
                  const isActive = diff === 0;

                  return (
                    <motion.div
                      key={strength.title}
                      style={{
                        zIndex: 30 - Math.abs(diff) * 10,
                        pointerEvents: isVisible ? 'auto' : 'none'
                      }}
                      animate={{
                        scale: 1 - Math.abs(diff) * 0.06,
                        y: -Math.abs(diff) * 16, // stack upwards slightly for maximum peek visibility
                        x: diff * 72,           // wider symmetrical peek spacing on left/right
                        rotate: diff * 5,       // wider radial fanning angle
                        opacity: isVisible ? (isActive ? 1 : 0.95) : 0, // crystal-clear visibility
                      }}
                      whileHover={{
                        y: isActive ? -6 : -Math.abs(diff) * 16 - 4, // smooth spring-controlled hover lift
                        scale: isActive ? 1.015 : 1 - Math.abs(diff) * 0.06 + 0.03, // smooth spring-controlled hover zoom
                        rotate: diff * 5 + (diff > 0 ? 1 : diff < 0 ? -1 : 0),
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 26
                      }}
                      onClick={() => {
                        if (isActive) {
                          // Click active: cycle deck forwards
                          setActiveStrengthIndex((prev) => (prev + 1) % STRENGTHS.length);
                        } else {
                          // Click peeking card: bring straight to focal center
                          setActiveStrengthIndex(i);
                        }
                      }}
                      className={`absolute inset-0 p-10 md:p-12 rounded-sm border-2 backdrop-blur-md flex flex-col justify-between cursor-pointer select-none group transition-[background-color,border-color,box-shadow] duration-300 ${isActive
                        ? "bg-gradient-to-br from-white via-orange-tint/15 to-white border-black shadow-[0_20px_50px_rgba(232,89,12,0.1)] hover:shadow-[0_25px_60px_rgba(232,89,12,0.15)]"
                        : "bg-white/95 border-black/80 shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:border-black"
                        }`}
                    >
                      {/* Ambient glowing backing on active card hover */}
                      {isActive && (
                        <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-brand-orange/5 rounded-full blur-2xl group-hover:bg-brand-orange/12 group-hover:scale-150 transition-all duration-700 pointer-events-none" />
                      )}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 opacity-[0.045] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '70s' }}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="50" cy="50" r="10" />
                  <line x1="50" y1="40" x2="50" y2="20" />
                  <line x1="50" y1="60" x2="50" y2="80" />
                  <line x1="40" y1="50" x2="20" y2="50" />
                  <line x1="60" y1="50" x2="80" y2="50" />
                  <circle cx="50" cy="15" r="5" fill="currentColor" />
                  <circle cx="50" cy="85" r="5" fill="currentColor" />
                  <circle cx="15" cy="50" r="5" fill="currentColor" />
                  <circle cx="85" cy="50" r="5" fill="currentColor" />
                  <circle cx="28" cy="28" r="6" />
                  <circle cx="72" cy="72" r="6" />
                  <line x1="33" y1="33" x2="43" y2="43" />
                  <line x1="67" y1="67" x2="57" y2="57" />
                </svg>
              </div>

                      {/* Header block of the Card */}
                      <div className="flex justify-between items-start">
                        <span className={`text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm transition-colors duration-300 ${isActive
                          ? "text-brand-orange bg-brand-orange/10 border border-brand-orange/20"
                          : "text-charcoal/40 bg-charcoal/5 border border-charcoal/10"
                          }`}>
                          Strength {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* Custom Premium Icon Wrapper */}
                        <div className={`w-16 h-16 rounded-sm flex items-center justify-center relative overflow-hidden transition-all duration-500 shadow-inner ${isActive
                          ? "bg-gradient-to-tr from-brand-orange/15 to-brand-orange/5 group-hover:scale-110 group-hover:from-brand-orange group-hover:to-orange-600"
                          : "bg-charcoal/5"
                          }`}>
                          <IconComp className={`transition-colors duration-500 relative z-10 ${isActive ? "text-brand-orange group-hover:text-white" : "text-charcoal/40"
                            }`} size={28} />
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          )}
                        </div>
                      </div>

                      {/* Body block of the Card */}
                      <div>
                        <h3 className={`text-xl md:text-2xl lg:text-3xl font-heading font-black mb-4 transition-colors duration-300 leading-tight relative ${isActive ? "text-brand-dark pl-4" : "text-charcoal/60"
                          }`}>
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange rounded-full transform scale-y-[0.7] group-hover:scale-y-100 transition-transform duration-300" />
                          )}
                          {strength.title}
                        </h3>

                        <p className={`text-sm md:text-base leading-relaxed font-semibold transition-all duration-500 ${isActive ? "text-charcoal/70 opacity-100" : "text-charcoal/30 opacity-60 line-clamp-2"
                          }`}>
                          {strength.description}
                        </p>

                        {/* Interactive prompt trigger */}
                        {isActive && (
                          <div className="flex items-center gap-1.5 pt-6 text-brand-orange text-xs font-black tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-4px] group-hover:translate-x-0">
                            <span>Click card to cycle deck</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Pioneering Healthcare Showcase Banner ── */}
      <section className="relative w-full py-20 lg:py-32 xl:py-40 flex items-center justify-center overflow-hidden border-y border-gray-150/40">
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0">
          <img
            src={img_hero_pharma_laboratory_1779016806163_png}
            alt="Advanced Laboratory Operations"
            className="w-full h-full object-cover"
          />
          {/* Subtle brand-tinted gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-dark/5 to-brand-dark/15" />
        </div>

        {/* Content Container aligned to right on desktop */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex justify-end">

          {/* Floating White Content Box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[55%] xl:w-[50%] bg-white/95 backdrop-blur-xl border border-white/60 p-10 sm:p-14 lg:p-16 rounded-sm shadow-[0_30px_80px_rgba(0,0,0,0.15)] relative overflow-hidden"
          >
            {/* Elegant Brand Accent Line at Top */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-orange to-brand-green" />

            {/* Soft internal glow to enhance the premium feel */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-72 h-72 opacity-[0.05] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '80s' }}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="50" cy="50" r="10" />
                  <line x1="50" y1="40" x2="50" y2="20" />
                  <line x1="50" y1="60" x2="50" y2="80" />
                  <line x1="40" y1="50" x2="20" y2="50" />
                  <line x1="60" y1="50" x2="80" y2="50" />
                  <circle cx="50" cy="15" r="5" fill="currentColor" />
                  <circle cx="50" cy="85" r="5" fill="currentColor" />
                  <circle cx="15" cy="50" r="5" fill="currentColor" />
                  <circle cx="85" cy="50" r="5" fill="currentColor" />
                  <circle cx="28" cy="28" r="6" />
                  <circle cx="72" cy="72" r="6" />
                  <line x1="33" y1="33" x2="43" y2="43" />
                  <line x1="67" y1="67" x2="57" y2="57" />
                </svg>
              </div>

            <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] mb-6 sm:mb-8 tracking-tight leading-[1.15]">
              Pioneering <br className="hidden sm:block" /> Responsible Healthcare
            </h2>

            <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-semibold relative z-10">
              Anthro Pharmaceuticals Private Limited is an innovation-driven pharmaceutical marketing company operating in India with a strong foundation built on decades of industry experience. Backed by an established parent group with diversified industrial presence, we are committed to delivering reliable, quality-assured pharmaceutical formulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Therapeutic Segments ── */}
      <section className="py-28 bg-[#fafdf9] relative overflow-hidden border-b border-gray-150/40">
        {/* Ambient grids & blurs */}
        <div className="absolute inset-0 bg-[radial-gradient(#4CAF26_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header section with editorial pill */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-brand-green bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm mb-4">
                <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                Therapeutics Segments
              </span>
              <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl mt-2 mb-3 tracking-tight leading-none">
                Therapeutics Segments
              </h2>
              <div className="w-20 h-1 bg-brand-orange mt-6 mb-6 rounded-full" />
              <p className="text-charcoal/70 text-lg font-semibold leading-relaxed">
                Anthro Pharmaceuticals offers a diversified portfolio and has products in the following Therapeutics areas
              </p>
            </div>
            {/* Right side: Spinning Certification Badge + Link */}
            <div className="flex flex-col items-center gap-6">
              {/* ── Spinning Circular Badge ── */}
              <div className="relative w-36 h-36 flex-shrink-0 select-none">
                {/* Outer spinning ring with dashed brand border */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-green/30 animate-[spin_18s_linear_infinite]" />

                {/* SVG spinning text path */}
                <svg
                  className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite]"
                  viewBox="0 0 144 144"
                >
                  <defs>
                    <path
                      id="certCircle"
                      d="M 72,72 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
                    />
                  </defs>
                  <text className="fill-brand-green" fontSize="10.5" fontWeight="800" letterSpacing="2.2" fontFamily="Inter, sans-serif">
                    <textPath href="#certCircle">
                      WHO-GMP &amp; ISO 9001:2000 CERTIFIED &nbsp;✦&nbsp;
                    </textPath>
                  </text>
                </svg>

                {/* Center Icon — static (counter-spins visually via CSS) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-green to-brand-green-dark flex items-center justify-center shadow-[0_6px_24px_rgba(76,175,38,0.35)]">
                    <ShieldCheck size={26} className="text-white" strokeWidth={2.2} />
                  </div>
                </div>
              </div>

              {/* View All Link */}
              <Link to="/therapeutics"
                className="text-brand-green font-extrabold flex items-center gap-2 bg-white px-6 py-3 rounded-sm shadow-sm border border-brand-green/10 hover:border-brand-green hover:shadow-md transition-all hover:-translate-y-0.5 group whitespace-nowrap text-sm sm:text-base">
                View All Segments <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Interactive Dual-Console Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mt-12">
            {/* Left Console: Interactive Tabs (Horizontal scroll on mobile, vertical list on desktop) */}
            <div className="lg:col-span-5 flex flex-row overflow-x-auto lg:overflow-visible lg:px-3 lg:-mx-3 lg:py-2 lg:-my-2 pb-4 lg:pb-0 lg:flex-col gap-3 scrollbar-none snap-x snap-mandatory">
              {THERAPEUTIC_SEGMENTS.map((segment) => {
                const meta = SEGMENT_METADATA[segment.id as keyof typeof SEGMENT_METADATA];
                const SegmentIcon = meta ? meta.icon : Pill;
                const isActive = activeSegmentId === segment.id;

                return (
                  <button
                    key={segment.id}
                    onClick={() => setActiveSegmentId(segment.id)}
                    className={`group text-left p-5 rounded-sm border transition-all duration-300 flex items-center gap-4 flex-shrink-0 snap-center min-w-[260px] lg:min-w-0 w-auto lg:w-full select-none ${isActive
                      ? "bg-white border-brand-orange/30 shadow-[0_12px_30px_rgba(232,89,12,0.06)] lg:translate-x-2"
                      : "bg-white/60 border-orange-tint/10 hover:border-brand-green/20 hover:bg-white hover:lg:translate-x-1"
                      }`}
                  >
                    <div className={`w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-300 ${isActive
                      ? "bg-brand-orange text-white scale-110 shadow-md shadow-brand-orange/20"
                      : "bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white"
                      }`}>
                      <SegmentIcon size={22} className={isActive ? "" : "transition-transform group-hover:rotate-12"} />
                    </div>
                    <div className="flex-1">
                      <span className={`text-xs font-black uppercase tracking-widest block mb-1 ${isActive ? "text-brand-orange" : "text-charcoal/45"
                        }`}>
                        Therapeutic Area
                      </span>
                      <h3 className={`font-black text-sm md:text-base tracking-wide transition-colors ${isActive ? "text-brand-dark" : "text-brand-dark/75 group-hover:text-brand-green"
                        }`}>
                        {segment.name}
                      </h3>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${isActive
                      ? "border-brand-orange/30 bg-brand-orange/10 text-brand-orange"
                      : "border-charcoal/10 text-charcoal/20 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                      }`}>
                      <ArrowRight size={12} className={isActive ? "translate-x-0" : "-translate-x-1 group-hover:translate-x-0 transition-transform"} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Console: Showcase Display Panel */}
            <div className="lg:col-span-7 flex">
              <div className="bg-white border border-orange-tint/20 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-sm w-full relative overflow-hidden flex flex-col justify-between min-h-[640px]">
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-[0.045] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '85s' }}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="50" cy="50" r="10" />
                  <line x1="50" y1="40" x2="50" y2="20" />
                  <line x1="50" y1="60" x2="50" y2="80" />
                  <line x1="40" y1="50" x2="20" y2="50" />
                  <line x1="60" y1="50" x2="80" y2="50" />
                  <circle cx="50" cy="15" r="5" fill="currentColor" />
                  <circle cx="50" cy="85" r="5" fill="currentColor" />
                  <circle cx="15" cy="50" r="5" fill="currentColor" />
                  <circle cx="85" cy="50" r="5" fill="currentColor" />
                  <circle cx="28" cy="28" r="6" />
                  <circle cx="72" cy="72" r="6" />
                  <line x1="33" y1="33" x2="43" y2="43" />
                  <line x1="67" y1="67" x2="57" y2="57" />
                </svg>
              </div>
                {/* Glowing Aura Ring */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-orange/10 to-brand-green/10 rounded-full blur-[60px] pointer-events-none" />

                {/* Interactive display context card */}
                <div key={activeSegmentId} className="relative z-10 flex-1 flex flex-col justify-between">
                  {/* Banner Image Header - extends the whole width of the card! */}
                  <div className="w-full h-48 relative overflow-hidden group">
                    <img
                      src={SEGMENT_BANNERS[activeSegmentId] || img_hero_pharma_laboratory_1779016806163_png}
                      alt="Therapeutic area banner"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent" />
                  </div>

                  {/* Perfectly Padded Content Wrapper */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Header inside the panel */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-sm flex items-center justify-center bg-gradient-to-br ${SEGMENT_METADATA[activeSegmentId as keyof typeof SEGMENT_METADATA]?.color || "from-brand-green/10 to-brand-green/5"
                          } border border-orange-tint/20`}>
                          {(() => {
                            const IconComp = SEGMENT_METADATA[activeSegmentId as keyof typeof SEGMENT_METADATA]?.icon || Pill;
                            return <IconComp size={28} className={SEGMENT_METADATA[activeSegmentId as keyof typeof SEGMENT_METADATA]?.iconColor || "text-brand-green"} />;
                          })()}
                        </div>
                        <div>
                          <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-sm border border-brand-orange/15">
                            Therapeutics area
                          </span>
                          <h3 className="font-heading font-black text-2xl md:text-3xl text-brand-dark mt-2 tracking-tight">
                            {THERAPEUTIC_SEGMENTS.find(s => s.id === activeSegmentId)?.name}
                          </h3>
                        </div>
                      </div>

                      {/* Scientific description */}
                      <p className="text-charcoal/70 text-sm md:text-base font-semibold leading-relaxed mb-8 border-l-2 border-brand-green/20 pl-4 py-1">
                        All products are manufactured at WHO-GMP & ISO 9001:2000 certified facilities.
                      </p>

                      {/* Clinical indications listing */}
                      <div className="mb-8">
                        <span className="text-xs font-black uppercase tracking-widest text-charcoal/40 block mb-4">
                          Indications
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {THERAPEUTIC_SEGMENTS.find(s => s.id === activeSegmentId)?.indications.map((ind, indIdx) => (
                            <motion.li
                              key={ind}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: indIdx * 0.05 }}
                              className="flex items-start gap-3 bg-[#fafdf9]/90 border border-brand-green/10 px-4 py-3 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.005)]"
                            >
                              <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle size={11} className="text-brand-green" />
                              </div>
                              <span className="text-xs md:text-sm font-bold text-brand-dark/90 leading-snug">{ind}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Panel footer */}
                    <div className="pt-6 border-t border-orange-tint/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                      <span className="text-[11px] font-bold text-charcoal/45 italic">
                        WHO-GMP & ISO 9001:2000 Certified Facilities
                      </span>
                      <Link
                        to="/therapeutics"
                        className="w-full sm:w-auto text-center bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-sm font-bold shadow-sm flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 group text-sm"
                      >
                        Explore Full Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-[radial-gradient(#ff6f00_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-green/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-brand-orange/20 rounded-full blur-[100px]" />
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-white font-heading font-black text-3xl md:text-4xl mb-3 leading-tight">
              Partner with us in delivering responsible healthcare solutions.
            </h2>
            <p className="text-brand-orange/80 text-lg font-bold">Join our network of healthcare excellence.</p>
          </div>
          <Link to="/contact"
            className="bg-gradient-to-r from-brand-orange to-brand-green hover:from-brand-green hover:to-brand-orange text-white px-10 py-5 rounded-sm font-black shadow-xl transition-all hover:-translate-y-1 whitespace-nowrap">
            Get in Touch
          </Link>
        </div>
      </ScrollReveal>
    </section>

    </div>
  );
}
