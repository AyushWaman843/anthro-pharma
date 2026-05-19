import { motion } from 'motion/react';
import { Factory, Truck, Megaphone, ShieldCheck, Globe, Settings, ArrowRight, ShieldAlert, Award, Heart } from 'lucide-react';
import img_manufacturing_facility_1779016846794_png from '../assets/images/manufacturing_facility_1779016846794.png';
import img_pharma_logistics_hub_1779016910269_png from '../assets/images/pharma_logistics_hub_1779016910269.png';
import img_about_corporate_team_1779016826652_png from '../assets/images/about_corporate_team_1779016826652.png';
import img_hero_pharma_laboratory_1779016806163_png from '../assets/images/hero_pharma_laboratory_1779016806163.png';
import img_careers_collaboration_1779016952313_png from '../assets/images/careers_collaboration_1779016952313.png';

export default function Operations() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* Hero Banner */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-32 bg-gray-50/50 overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(#093a20_0.7px,transparent_0.7px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <span className="text-xs font-black uppercase tracking-widest text-brand-green border border-brand-green/20 bg-brand-green/5 px-3.5 py-1.5 rounded-sm">
              Operations Portfolio
            </span>
            <h1 className="text-brand-dark text-4xl md:text-6xl font-heading font-black leading-tight tracking-tight max-w-4xl mx-auto">
              Structured, Scalable & Compliance-Driven Pharmaceutical Operations
            </h1>
            <p className="text-charcoal/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-semibold">
              At Anthro Pharmaceuticals Private Limited, our operations are built on a structured, process-oriented framework that integrates ethical marketing, certified manufacturing partnerships, quality oversight, and market-focused execution.
            </p>
            
            <div className="bg-white border border-gray-150 p-8 rounded-sm shadow-xl shadow-brand-green/5 max-w-3xl mx-auto space-y-3 relative group">
              
              {/* Clipped Rotating SVG Molecule Graphic in background */}
              <div className="absolute inset-0 rounded-sm overflow-hidden pointer-events-none z-0">
                <div className="absolute -bottom-12 -right-12 w-48 h-48 opacity-[0.04] text-brand-orange animate-spin pointer-events-none" style={{ animationDuration: '60s' }}>
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
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white text-xs sm:text-sm font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow z-10">
                We operate with a clear objective
              </div>
              <p className="text-brand-green text-xl md:text-2xl font-black italic leading-relaxed pt-2">
                “Deliver consistent, quality-assured pharmaceutical formulations through a responsible and scalable business model.”
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Operations Grid */}
      <section className="py-20 md:py-28 relative bg-white border-b border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* 1. Manufacturing Operations (Left Text, Right Photo) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col">
                <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  Manufacturing Operations
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-brand-orange mt-4 rounded-full" 
                />
              </div>
              
              <p className="text-charcoal/85 text-base md:text-lg leading-relaxed font-semibold">
                Our products are manufactured at WHO-GMP and ISO 9001:2000 certified facilities with specialized, high-grade production compartments and strict procedural standards:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden"
                >
                  
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '50s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-green block mb-2 relative z-10">
                    Facility Features
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Dedicated production blocks',
                      'Separate Penicillin and Non-Penicillin sections',
                      'Independent Quality Assurance departments',
                      'Sophisticated analytical instrumentation',
                      'Qualified and experienced technical teams'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold relative z-10"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden"
                >
                  
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange block mb-2 relative z-10">
                    System Coordination
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Batch consistency',
                      'Documentation integrity',
                      'Regulatory alignment',
                      'Controlled supply timelines'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.3 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="bg-white border border-gray-150 border-l-4 border-brand-green p-6 rounded-sm shadow-sm relative overflow-hidden">
                
              <div className="absolute -bottom-10 -right-10 w-36 h-36 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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
                <p className="text-base sm:text-lg font-bold text-brand-dark/95 leading-relaxed italic">
                  Every product is monitored from raw material sourcing to finished goods dispatch in accordance with applicable pharmaceutical standards.
                </p>
              </div>
            </div>

            <motion.div 
              whileHover="hover"
              className="lg:col-span-5 relative cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.03, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-[4/3] sm:aspect-square bg-gray-50 rounded-sm overflow-hidden shadow-2xl border-4 border-black relative z-10"
              >
                <img
                  src={img_manufacturing_facility_1779016846794_png}
                  alt="WHO-GMP Manufacturing Facility"
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                variants={{
                  hover: { scale: 1.08, rotate: 6, x: 8, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-white border border-gray-150 shadow-md rounded-sm -z-0 rotate-12" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Supply Chain & Distribution (Left Photo, Right Text) */}
      <section className="py-20 md:py-28 relative bg-[#FDF8F3] border-b border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <motion.div 
              whileHover="hover"
              className="lg:col-span-5 relative order-2 lg:order-1 cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.03, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-[4/3] sm:aspect-square bg-gray-50 rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10"
              >
                <img
                  src={img_pharma_logistics_hub_1779016910269_png}
                  alt="Anthro Pharma Logistics Hub"
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                variants={{
                  hover: { scale: 1.08, rotate: -6, x: -8, y: 4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-white border border-gray-150 shadow-md rounded-sm -z-0 -rotate-12" 
              />
            </motion.div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="flex flex-col">
                <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  Supply Chain & Distribution
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-brand-orange mt-4 rounded-full" 
                />
              </div>

              <p className="text-charcoal/85 text-base md:text-lg leading-relaxed font-semibold">
                We manage a highly integrated, responsive, and robust logistics infrastructure that guarantees product availability across key territories:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                 
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange block mb-2">
                    Operational Milestones
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Timely product availability',
                      'Controlled inventory planning',
                      'Efficient distribution support',
                      'Market-responsive replenishment'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                 
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-green block mb-2">
                    Infrastructure & Backing
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Multi-state group presence operational backing',
                      'Established group physical infrastructure',
                      'Extensive organized logistics coordination',
                      'Structured freight partnership controls'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.3 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="bg-white border border-gray-150 border-l-4 border-brand-orange p-6 rounded-sm shadow-sm relative overflow-hidden">
               
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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
                <p className="text-base sm:text-lg font-bold text-brand-dark leading-relaxed italic">
                  International exposure through our sister concern supports future-ready export capability under regulated frameworks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Ethical Marketing Operations (Left Text, Right Photo) */}
      <section className="py-20 md:py-28 relative bg-white border-b border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col">
                <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  Ethical Marketing Operations
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-brand-orange mt-4 rounded-full" 
                />
              </div>
              
              <p className="text-charcoal/85 text-base md:text-lg leading-relaxed font-semibold">
                Our commercial footprint is strictly guided by clinical transparency, scientific validation, and honest stakeholder engagement:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                 
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-green block mb-2">
                    Marketing Foundation
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Scientific product communication',
                      'Ethical promotional practices',
                      'Relationship-based doctor engagement',
                      'Long-term distributor partnerships'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                 
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange block mb-2">
                    Strategic Execution
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Strategic territory planning',
                      'Product positioning analysis',
                      'Organic market expansion initiatives',
                      'Performance-driven field force management'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.3 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="bg-white border border-gray-150 border-l-4 border-brand-green p-6 rounded-sm shadow-sm">
                <p className="text-base sm:text-lg font-bold text-brand-dark/95 leading-relaxed italic">
                  We prioritize sustainable growth over short-term volume-driven expansion, building credible and lasting medical relationships.
                </p>
              </div>
            </div>

            <motion.div 
              whileHover="hover"
              className="lg:col-span-5 relative cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.03, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-[4/3] sm:aspect-square bg-gray-50 rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10"
              >
                <img
                  src={img_about_corporate_team_1779016826652_png}
                  alt="Anthro Pharma Corporate Team"
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                variants={{
                  hover: { scale: 1.08, rotate: 6, x: 8, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-white border border-gray-150 shadow-md rounded-sm -z-0 rotate-12" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. Quality & Compliance Oversight (Left Photo, Right Text) */}
      <section className="py-20 md:py-28 relative bg-[#FDF8F3] border-b border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <motion.div 
              whileHover="hover"
              className="lg:col-span-5 relative order-2 lg:order-1 cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.03, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-[4/3] sm:aspect-square bg-gray-50 rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10"
              >
                <img
                  src={img_hero_pharma_laboratory_1779016806163_png}
                  alt="Quality Laboratory Testing"
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                variants={{
                  hover: { scale: 1.08, rotate: -6, x: -8, y: 4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-white border border-gray-150 shadow-md rounded-sm -z-0 -rotate-12" 
              />
            </motion.div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="flex flex-col">
                <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  Quality & Compliance Oversight
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-brand-orange mt-4 rounded-full" 
                />
              </div>

              <p className="text-charcoal/85 text-base md:text-lg leading-relaxed font-semibold">
                We build quality control directly into every stage of the formulation life cycle, from compound receipt to retail distribution:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                 
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange block mb-2">
                    Quality Systems
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Documented quality systems management',
                      'Batch traceability processes',
                      'Regulatory documentation alignment'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                 
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-green block mb-2">
                    Compliance Benchmarks
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Pharmacovigilance sensitivity',
                      'Responsible brand communication',
                      'Strict regulatory rules adherence'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.3 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="bg-white border border-gray-150 border-l-4 border-brand-orange p-6 rounded-sm shadow-sm relative overflow-hidden">
               
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-10 -right-10 w-36 h-36 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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
                <p className="text-base sm:text-lg font-bold text-brand-dark leading-relaxed italic">
                  We maintain a compliance-conscious framework to ensure that all product communication remains within accepted pharmaceutical regulatory guidelines.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Market Operations & Expansion Strategy (Left Text, Right Photo) */}
      <section className="py-20 md:py-28 relative bg-white border-b border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col">
                <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  Market Operations & Expansion Strategy
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-brand-orange mt-4 rounded-full" 
                />
              </div>
              
              <p className="text-charcoal/85 text-base md:text-lg leading-relaxed font-semibold">
                Our operations are designed for:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                  
                  {/* Rotating SVG Molecule Graphic in background */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-green block mb-2">
                    Core Objectives
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Gradual therapeutic portfolio expansion',
                      'Responsible market penetration'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                  
                  {/* Rotating SVG Molecule Graphic in background */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange block mb-2">
                    Market Alignment
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Strengthening doctor & distributor trust',
                      'Evaluating export-ready opportunities'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.3 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="bg-white border border-gray-150 border-l-4 border-brand-green p-6 rounded-sm shadow-sm relative overflow-hidden">
                
                {/* Rotating SVG Molecule Graphic in background */}
                <div className="absolute -bottom-10 -right-10 w-36 h-36 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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
                <p className="text-base sm:text-lg font-bold text-brand-dark/95 leading-relaxed italic">
                  With brands registered internationally via associated entities, we are positioned for structured and compliant expansion in select regulated markets.
                </p>
              </div>
            </div>

            <motion.div 
              whileHover="hover"
              className="lg:col-span-5 relative cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.03, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-[4/3] sm:aspect-square bg-gray-50 rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10"
              >
                <img
                  src={img_careers_collaboration_1779016952313_png}
                  alt="Anthro Pharma Expansion Strategy"
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                variants={{
                  hover: { scale: 1.08, rotate: 6, x: 8, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-white border border-gray-150 shadow-md rounded-sm -z-0 rotate-12" 
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 6. Operational Philosophy */}
      <section className="relative py-20 md:py-28 overflow-hidden border-b border-gray-150/40 bg-white">
        {/* Background Image with Crisp 40% White Tint */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 pointer-events-none"
          style={{ backgroundImage: `url(${img_hero_pharma_laboratory_1779016806163_png})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#093a20_0.7px,transparent_0.7px)] [background-size:20px_20px] opacity-[0.03] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none text-center">
              Operational Philosophy
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-brand-orange mt-4 rounded-full" 
            />
          </div>

          <p className="text-charcoal/90 text-lg md:text-xl max-w-3xl mx-auto mt-8 mb-10 leading-relaxed font-semibold">
            At Anthro Pharmaceuticals, operations are not just about movement of products —they are about delivering reliability, credibility, and consistency.
          </p>

          <div className="mb-6">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange block">
              We believe that:
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Systems create stability', color: 'bg-white border border-gray-150 text-charcoal hover:border-brand-green/40 shadow-sm' },
              { title: 'Quality builds trust', color: 'bg-white border-2 border-brand-green/80 text-brand-green shadow-md hover:border-brand-green md:scale-105' },
              { title: 'Ethics sustain growth', color: 'bg-white border border-gray-150 text-charcoal hover:border-brand-green/40 shadow-sm' },
            ].map((pillar, index) => (
              <motion.div 
                key={pillar.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8, scale: pillar.title.includes('Quality') ? 1.08 : 1.04, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                className={`${pillar.color} backdrop-blur-sm py-6 px-8 rounded-sm flex items-center justify-center transition-all duration-300 cursor-pointer`}
              >
                <span className="font-heading font-black text-sm uppercase tracking-widest">{pillar.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Research & Development (Left Photo, Right Text) */}
      <section className="py-20 md:py-28 relative bg-[#FDF8F3] border-b border-gray-150/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            <motion.div 
              whileHover="hover"
              className="lg:col-span-5 relative cursor-pointer"
            >
              <motion.div 
                variants={{
                  hover: { scale: 1.03, y: -4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="aspect-[4/3] sm:aspect-square bg-gray-50 rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10"
              >
                <img
                  src={img_hero_pharma_laboratory_1779016806163_png}
                  alt="Research and Development Laboratory"
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                variants={{
                  hover: { scale: 1.08, rotate: -6, x: -8, y: 4 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-white border border-gray-150 shadow-md rounded-sm -z-0 -rotate-12" 
              />
            </motion.div>

            <div className="lg:col-span-7 space-y-8">
              <div className="flex flex-col">
                <h2 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">
                  🔬 Research & Development
                </h2>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-brand-orange mt-4 rounded-full" 
                />
              </div>

              <p className="text-charcoal/85 text-base md:text-lg leading-relaxed font-semibold">
                Anthro Pharmaceuticals follows a continuous improvement approach in formulation development and portfolio expansion. Our focus remains on:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                  
                  {/* Rotating SVG Molecule Graphic in background */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-green block mb-2">
                    Formulation Focus
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Rational combinations',
                      'Market-relevant therapies'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.2 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-sm border border-gray-150 shadow-sm space-y-4 relative overflow-hidden">
                  
                  {/* Rotating SVG Molecule Graphic in background */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-brand-orange block mb-2">
                    Quality Benchmarks
                  </span>
                  <ul className="space-y-3">
                    {[
                      'Quality consistency',
                      'Compliance alignment'
                    ].map((item, idx) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.05 + 0.3 }}
                        key={item} 
                        className="flex items-start gap-2.5 text-base text-charcoal/90 font-semibold"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
