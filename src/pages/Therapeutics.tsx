import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Pill, Microscope, CheckCircle2, FlaskConical } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { THERAPEUTIC_SEGMENTS } from '../constants';
import img_rd_therapeutics_imagery_1779016860858_png from '../assets/images/rd_therapeutics_imagery_1779016860858.png';
import img_hero_pharma_laboratory_1779016806163_png from '../assets/images/hero_pharma_laboratory_1779016806163.png';

export default function Therapeutics() {
  const [activeSegment, setActiveSegment] = useState<string>(THERAPEUTIC_SEGMENTS[0]?.id || 'antibiotics');

  const activeIndex = THERAPEUTIC_SEGMENTS.findIndex(s => s.id === activeSegment);
  const displayNum = activeIndex !== -1 ? String(activeIndex + 1).padStart(2, '0') : '01';
  const activeSegmentObj = THERAPEUTIC_SEGMENTS[activeIndex] || THERAPEUTIC_SEGMENTS[0];

  return (
    <div className="flex flex-col min-h-screen">
      {/* R&D Intro */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-32 bg-neutral/50 overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >

              <h1 className="text-4xl md:text-6xl font-heading font-black text-brand-dark leading-tight">Research & Development</h1>
              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-semibold max-w-xl">
                Anthro Pharmaceuticals follows a continuous improvement approach in formulation development and portfolio expansion. Our focus remains on:
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10">
                <img 
                  src={img_rd_therapeutics_imagery_1779016860858_png} 
                  alt="Pharmaceutical Research and Development" 
                  className="w-full h-auto object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-orange-tint rounded-full -z-0" />
            </motion.div>
          </div>
        </div>
      </ScrollReveal>
    </section>

      <section className="py-24 relative overflow-hidden bg-transparent border-y border-gray-150/40">
        {/* Full-bleed background image with soft warm glass overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src={img_hero_pharma_laboratory_1779016806163_png} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {/* Glassmorphic backdrop blurring layer */}
          <div className="absolute inset-0 bg-[#FDF8F3]/95 backdrop-blur-[4px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FDF8F3]/10 to-[#FDF8F3]" />
        </div>

        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Rational combinations", icon: Microscope },
              { title: "Market-relevant therapies", icon: FlaskConical },
              { title: "Quality consistency", icon: CheckCircle2 },
              { title: "Compliance alignment", icon: Pill }
            ].map((feature, i) => (
              <div 
                key={feature.title} 
                className="bg-white/80 backdrop-blur-md p-8 rounded-sm text-center shadow-md hover:shadow-xl transition-all duration-350 group border border-gray-150/50 hover:-translate-y-1.5 relative overflow-hidden">
               
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '60s' }}>
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
                <div className="w-16 h-16 bg-[#FDF8F3] rounded-sm flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-brand-orange/10 text-brand-orange">
                  <feature.icon className="text-brand-orange" size={32} />
                </div>
                <h3 className="font-heading font-black text-sm uppercase tracking-wider text-brand-dark leading-relaxed">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>

      {/* Therapeutic Segments */}
      <section className="py-24 bg-[#FDF8F3] relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Block Aligned Center-Left */}
          <div className="text-left mb-16 max-w-3xl">
            <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl tracking-tight leading-none">
              Therapeutics Segments
            </h2>
            <div className="w-20 h-1 bg-brand-orange mt-6 rounded-full" />
            <p className="text-charcoal/80 mt-6 text-lg md:text-xl font-semibold leading-relaxed">
              Anthro Pharmaceuticals offers a diversified portfolio and has products in the following Therapeutics areas
            </p>
          </div>

          {/* Three-Column Vertical Tabbed Showcase */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            
            {/* Left Column (35%): Stacked Vertical Tabs */}
            <div className="w-full lg:w-[35%] flex flex-col gap-2.5">
              {THERAPEUTIC_SEGMENTS.map((segment) => {
                const isActive = activeSegment === segment.id;
                return (
                  <button
                    key={segment.id}
                    onClick={() => setActiveSegment(segment.id)}
                    className={`w-full text-left py-4.5 px-6 rounded-r-sm border-l-4 transition-all duration-300 cursor-pointer flex items-center justify-between font-heading font-bold text-base md:text-lg ${
                      isActive
                        ? 'border-brand-orange bg-[#F7EFE8]/70 text-brand-dark shadow-sm'
                        : 'border-transparent hover:bg-white/50 text-charcoal/70'
                    }`}
                  >
                    <span>{segment.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Center Column (40%): Premium Clinical Indication Dossier Card */}
            <div className="w-full lg:w-[40%] bg-gradient-to-br from-white to-[#FDF8F3]/50 p-6 sm:p-8 rounded-sm border border-gray-150 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-start min-h-[420px] relative overflow-hidden group/panel">
              
              
              <div className="absolute -bottom-16 -right-16 w-72 h-72 opacity-[0.05] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '60s' }}>
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
              {/* Sleek Clinical Header & Status Badge */}
              <div className="flex items-center justify-between w-full border-b border-gray-150/70 pb-4.5 relative z-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-orange">
                    Indications & Composition
                  </span>
                  <h4 className="font-heading font-black text-xl text-brand-dark mt-1.5 tracking-tight">
                    {activeSegmentObj.name}
                  </h4>
                </div>
                <span className="text-[11px] font-bold tracking-wider text-brand-orange border border-brand-orange/20 rounded-full px-3 py-1 bg-brand-orange/5 font-mono shadow-sm">
                  IND-{displayNum}
                </span>
              </div>

              {/* Grid Canvas: Spacious Pills Vertically Centered */}
              <div className="flex-grow flex items-center justify-center py-8 relative z-10 w-full">
                <div className="flex flex-wrap gap-4 justify-center items-center w-full max-w-md">
                  {activeSegmentObj.indications.map((ind, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-150 text-charcoal font-semibold text-[14px] sm:text-[15px] rounded-full px-5.5 py-3 shadow-[0_3px_12px_rgba(0,0,0,0.02)] hover:border-brand-orange hover:shadow-[0_4px_20px_rgba(232,90,27,0.1)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3.5 group/pill cursor-default"
                    >
                      {/* Premium Orange Pulse Node */}
                      <span className="w-2 h-2 rounded-full bg-brand-orange/80 group-hover/pill:scale-125 transition-transform duration-200 shadow-sm" />
                      <span className="tracking-wide text-charcoal/95 leading-none">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Background Micro Grid Decorative Accent (Pure CSS) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[radial-gradient(#E85A1B_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* Right Column (25%): Full-Height Faded Image Panel */}
            <div className="w-full lg:w-[25%] relative min-h-[420px] rounded-sm overflow-hidden shadow-lg border border-gray-150 bg-[#FDF8F3] self-stretch">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSegment}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={
                      activeSegment === 'antibiotics'
                        ? 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&h=800&q=80'
                        : activeSegment === 'gastro'
                        ? 'https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&w=600&h=800&q=80'
                        : activeSegment === 'pain'
                        ? 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&h=800&q=80'
                        : activeSegment === 'anti-helminthics'
                        ? 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=800&q=80'
                        : activeSegment === 'cardio-diabetics'
                        ? 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&h=800&q=80'
                        : activeSegment === 'hormone'
                        ? 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&h=800&q=80'
                        : 'https://images.unsplash.com/photo-1631549916768-4119cb2110ace?auto=format&fit=crop&w=600&h=800&q=80'
                    }
                    alt={activeSegmentObj.name || 'Therapeutics'}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Mask: Soft fade on left edge into the content area */}
              <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#FDF8F3] to-transparent pointer-events-none z-10 hidden lg:block" />
              
              {/* Subtle warm orange gradient overlay at bottom edge fading into background */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDF8F3] via-[#E85A1B]/10 to-transparent pointer-events-none z-10" />
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
    </div>
  );
}
