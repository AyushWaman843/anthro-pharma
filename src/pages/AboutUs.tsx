import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Lightbulb, TrendingUp, ShieldCheck, Heart, Users, Award, Pill, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { LEADERS } from '../constants';
import img_about_corporate_team_1779016826652_png from '../assets/images/about_corporate_team_1779016826652.png';
import img_rd_therapeutics_imagery_1779016860858_png from '../assets/images/rd_therapeutics_imagery_1779016860858.png';
import img_manufacturing_facility_1779016846794_png from '../assets/images/manufacturing_facility_1779016846794.png';
import img_professional_portrait_placeholder_1779016991849_png from '../assets/images/professional_portrait_placeholder_1779016991849.png';
import img_hero_pharma_laboratory_1779016806163_png from '../assets/images/hero_pharma_laboratory_1779016806163.png';

export default function AboutUs() {
  const [activeLeaderIndex, setActiveLeaderIndex] = useState(0);
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const activeLeader = LEADERS[activeLeaderIndex];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Overview Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-32 bg-neutral/50 relative overflow-hidden border-b border-gray-150/40">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >

                <h1 className="text-4xl md:text-6xl font-heading font-black text-brand-dark leading-tight">About Anthro Pharma</h1>
                <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-semibold">
                  Anthro Pharmaceuticals Private Limited is promoted by seasoned pharmaceutical professionals with deep expertise in marketing, sales strategy, and operational management. Our roots are supported by a diversified business group with nationwide industrial presence.
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  With international exposure through sister concern <strong>Pryme Pharma</strong>, including brand registrations in Myanmar, we are positioned to expand responsibly in regulated markets.
                </p>
              </motion.div>
            </div>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-sm overflow-hidden shadow-2xl border-4 border-white relative z-10"
              >
                <img 
                  src={img_about_corporate_team_1779016826652_png} 
                  alt="Anthro Pharma Corporate Team" 
                  className="w-full h-auto object-cover aspect-video"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange-tint rounded-full -z-0" />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-neutral/30 relative overflow-hidden border-b border-gray-150/40">
        <div className="absolute inset-0 bg-[radial-gradient(#4CAF26_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
        
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Our Vision Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-sm border border-orange-tint/15 shadow-[0_15px_40px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col group relative"
            >
              {/* Banner Image Header - extends the whole width of the card! */}
              <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                <img 
                  src={img_rd_therapeutics_imagery_1779016860858_png} 
                  alt="Our Vision Banner" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent" />
              </div>
              
              {/* Perfectly Padded Content Wrapper */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col items-start text-left relative">
                {/* Floating Icon Badge */}
                <div className="w-14 h-14 bg-brand-green rounded-sm flex items-center justify-center shadow-lg shadow-brand-green/20 mb-6 border-2 border-white relative z-10 -mt-16">
                  <Target className="text-white" size={24} />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-dark mb-4 tracking-tight">Our Vision</h3>
                <p className="font-sans text-charcoal/85 font-semibold leading-relaxed text-base sm:text-lg">
                  To build a sustainable pharmaceutical enterprise driven by ethical practices, quality standards, and long-term healthcare partnerships.
                </p>
              </div>
            </motion.div>

            {/* Our Mission Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-sm border border-orange-tint/15 shadow-[0_15px_40px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col group relative"
            >
              {/* Banner Image Header - extends the whole width of the card! */}
              <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                <img 
                  src={img_manufacturing_facility_1779016846794_png} 
                  alt="Our Mission Banner" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent" />
              </div>
              
              {/* Perfectly Padded Content Wrapper */}
              <div className="p-8 sm:p-10 flex-1 flex flex-col items-start text-left relative">
                {/* Floating Icon Badge */}
                <div className="w-14 h-14 bg-brand-orange rounded-sm flex items-center justify-center shadow-lg shadow-brand-orange/20 mb-6 border-2 border-white relative z-10 -mt-16">
                  <Lightbulb className="text-white" size={24} />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-dark mb-4 tracking-tight">Our Mission</h3>
                <p className="font-sans text-charcoal/85 font-semibold leading-relaxed text-base sm:text-lg">
                  To deliver reliable pharmaceutical formulations manufactured under certified facilities while maintaining regulatory compliance and scientific integrity.
                </p>
              </div>
            </motion.div>

          </div>
          </div>
      </ScrollReveal>
    </section>

      {/* Core Values */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#FAF8F5] border-b border-gray-150/40">
        
        {/* Subtle dynamic SVG Hexagonal Medical Pattern Background at extremely low opacity */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] text-brand-orange z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexGrid" width="40" height="69.282" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 20 11.547 L 0 0 L 0 23.094 L 20 34.641 L 40 23.094 Z M 0 34.641 L 20 46.188 L 0 57.735 L 0 80.829 L 20 92.376 L 40 80.829 L 40 57.735 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexGrid)" />
          </svg>
        </div>

        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header section in serif on warm cream */}
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none text-center">
              Core Values
            </h2>
            <div className="w-20 h-1 bg-brand-orange mt-6 mx-auto rounded-full" />
            <p className="text-charcoal/60 text-lg max-w-xl mx-auto mt-6 leading-relaxed text-center font-medium">
              The pillars that define our professional conduct and operational integrity.
            </p>
          </div>

          {/* DESKTOP VIEW: Interactive Clinical Node Console */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
            
            {/* Left Console Navigator (col-span-5) */}
            <div className="col-span-5 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-charcoal/40 block mb-2 px-2">
                Operational Pillars
              </span>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Ethical Marketing', icon: ShieldCheck },
                  { label: 'Regulatory Responsibility', icon: Award },
                  { label: 'Quality Commitment', icon: Heart },
                  { label: 'Transparency', icon: Users },
                  { label: 'Long-Term Relationships', icon: TrendingUp },
                ].map((value, i) => {
                  const isActive = activeValueIndex === i;
                  return (
                    <button
                      key={value.label}
                      onClick={() => setActiveValueIndex(i)}
                      onMouseEnter={() => setActiveValueIndex(i)}
                      className={`w-full text-left flex items-center gap-5 p-5 rounded-sm border transition-all duration-300 relative ${
                        isActive
                          ? 'bg-white border-brand-orange/30 shadow-[0_10px_35px_rgba(232,89,12,0.06)] translate-x-3'
                          : 'bg-white/40 border-transparent hover:border-brand-orange/20 hover:bg-white/70 hover:translate-x-1'
                      }`}
                    >
                      {/* Left accent indicator */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 ${
                        isActive ? 'bg-brand-orange' : 'bg-transparent'
                      }`} />

                      {/* Numbering */}
                      <span className={`text-sm font-sans font-black tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-brand-orange' : 'text-charcoal/40'
                      }`}>
                        0{i + 1}
                      </span>

                      {/* Rounded Badge with Icon */}
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-orange-tint text-brand-orange' : 'bg-neutral/60 text-charcoal/50'
                      }`}>
                        <value.icon size={20} />
                      </div>

                      {/* Label */}
                      <span className={`font-heading font-bold text-sm tracking-tight transition-colors duration-300 ${
                        isActive ? 'text-brand-dark font-black' : 'text-charcoal/70'
                      }`}>
                        {value.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Display Console (col-span-7) */}
            <div className="col-span-7">
              <div className="bg-white p-10 md:p-12 border border-gray-100 shadow-2xl relative overflow-hidden flex flex-col justify-between rounded-sm min-h-[380px]">
                {/* Brand top outline accent */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-orange" />

                {/* Rotating SVG Molecule Graphic in background */}
                <div className="absolute -bottom-12 -right-12 w-64 h-64 opacity-[0.035] text-brand-orange animate-[spin_60s_linear_infinite] pointer-events-none">
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

                {/* Huge Watermark display number */}
                <span className="text-[10rem] font-serif font-black text-brand-orange/5 absolute right-8 top-6 select-none leading-none">
                  0{activeValueIndex + 1}
                </span>

                {/* AnimatePresence for smooth clinical crossfade updates */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeValueIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 relative z-10"
                  >
                    {/* Active category header and badge */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-orange-tint text-brand-orange rounded-sm flex items-center justify-center shadow-sm">
                        {(() => {
                          const IconComponent = [ShieldCheck, Award, Heart, Users, TrendingUp][activeValueIndex];
                          return <IconComponent size={28} />;
                        })()}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-dark tracking-tight">
                        {[
                          'Ethical Marketing',
                          'Regulatory Responsibility',
                          'Quality Commitment',
                          'Transparency',
                          'Long-Term Relationships'
                        ][activeValueIndex]}
                      </h3>
                    </div>

                    {/* Highly polished, readable corporate description */}
                    <p className="text-lg md:text-xl text-charcoal/80 font-medium leading-relaxed mt-8 border-l-4 border-brand-orange/30 pl-6 italic">
                      "{
                        [
                          'Promoting formulations with scientific honesty, high compliance, and complete respect for medical practices.',
                          'Maintaining precise compliance with WHO-GMP standards, state policies, and rigorous corporate audits.',
                          'Setting the gold standard in pharmaceutical safety through advanced testing and premium raw materials.',
                          'Ensuring honest distribution channels, open clinician dialogue, and high moral operational benchmarks.',
                          'Fostering deep mutual trust, consistent supply chains, and ongoing professional collaboration.'
                        ][activeValueIndex]
                      }"
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Corporate standard footer marker inside details card */}
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[10px] text-charcoal/40 uppercase tracking-widest font-black relative z-10">
                  <span>Anthro Corporate Values</span>
                  <span>Operational Integrity Protocol</span>
                </div>

              </div>
            </div>

          </div>

          {/* MOBILE VIEW: Ultra-Clean Responsive Accordion Suite */}
          <div className="lg:hidden flex flex-col gap-4">
            {[
              { 
                label: 'Ethical Marketing', 
                icon: ShieldCheck,
                desc: 'Promoting formulations with scientific honesty, high compliance, and complete respect for medical practices.'
              },
              { 
                label: 'Regulatory Responsibility', 
                icon: Award,
                desc: 'Maintaining precise compliance with WHO-GMP standards, state policies, and rigorous corporate audits.'
              },
              { 
                label: 'Quality Commitment', 
                icon: Heart,
                desc: 'Setting the gold standard in pharmaceutical safety through advanced testing and premium raw materials.'
              },
              { 
                label: 'Transparency', 
                icon: Users,
                desc: 'Ensuring honest distribution channels, open clinician dialogue, and high moral operational benchmarks.'
              },
              { 
                label: 'Long-Term Relationships', 
                icon: TrendingUp,
                desc: 'Fostering deep mutual trust, consistent supply chains, and ongoing professional collaboration.'
              },
            ].map((value, i) => {
              const isActive = activeValueIndex === i;
              return (
                <div 
                  key={value.label}
                  className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveValueIndex(isActive ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                        isActive ? 'bg-orange-tint text-brand-orange' : 'bg-neutral/60 text-charcoal/50'
                      }`}>
                        <value.icon size={20} />
                      </div>
                      <span className={`font-heading font-bold text-base transition-colors duration-300 ${
                        isActive ? 'text-brand-orange font-black' : 'text-charcoal/80'
                      }`}>
                        {value.label}
                      </span>
                    </div>
                    <span className={`text-xl font-bold transition-transform duration-300 ${
                      isActive ? 'rotate-90 text-brand-orange' : 'text-charcoal/40'
                    }`}>
                      ➔
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-6 pt-2 border-t border-gray-50 bg-[#FAF8F5]/50">
                          <p className="text-sm text-charcoal/70 leading-relaxed font-semibold italic pl-4 border-l-2 border-brand-orange/40">
                            "{value.desc}"
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </ScrollReveal>
    </section>

      {/* Leadership Section */}
      <section className="py-24 bg-neutral/40 relative overflow-hidden border-b border-gray-150/40">
        {/* Ambient radial blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />

        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl tracking-tight leading-none">
              Leadership Philosophy
            </h2>
            <div className="w-20 h-1 bg-brand-orange mt-6 mb-6 rounded-full" />
            <p className="text-lg text-charcoal/70">
              Our leadership integrates multi-decade pharmaceutical expertise with modern operational thinking, ensuring responsible growth and market credibility.
            </p>
          </div>

          {/* Responsive Split Console Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* Left Sidebar Navigator (lg:col-span-4) */}
            <div className="col-span-1 lg:col-span-4 space-y-3">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-charcoal/50 block mb-2 px-2">
                Executive Roster
              </span>
              <div className="flex flex-col gap-3">
                {LEADERS.map((leader, index) => {
                  const isActive = activeLeaderIndex === index;
                  return (
                    <button
                      key={leader.name}
                      onClick={() => setActiveLeaderIndex(index)}
                      className={`w-full text-left flex items-center gap-4 p-4 rounded-sm border transition-all duration-300 group relative cursor-pointer ${
                        isActive
                          ? "bg-white border-brand-orange/30 shadow-[0_10px_30px_rgba(232,89,12,0.04)] lg:translate-x-4"
                          : "bg-white/40 border-transparent hover:border-brand-green/20 hover:bg-white lg:hover:translate-x-2"
                      }`}
                    >
                      {/* Active border indicator on the left edge */}
                      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 rounded-r-full transition-all duration-300 ${
                        isActive ? "bg-brand-orange scale-100" : "bg-transparent scale-0 group-hover:scale-100 group-hover:bg-brand-orange/40"
                      }`} />

                      {/* Small Preview Oval Portrait */}
                      <div className={`w-12 h-14 rounded-full overflow-hidden shrink-0 shadow-sm border-2 transition-all duration-300 relative ${
                        isActive ? "border-brand-orange scale-105" : "border-[#222222]"
                      }`}>
                        <img
                          src={leader.image || img_professional_portrait_placeholder_1779016991849_png}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Name & Subtitle */}
                      <div className="flex-1 min-w-0 pr-4">
                        <span className={`text-[9px] font-black uppercase tracking-widest block mb-0.5 ${
                          isActive ? "text-brand-orange" : "text-charcoal/40"
                        }`}>
                          {leader.title.split('@')[0].trim()}
                        </span>
                        <h3 className="font-heading font-black text-sm text-brand-dark truncate">
                          {leader.name}
                        </h3>
                      </div>

                      {/* Action Chevron visual signifier */}
                      <div className={`shrink-0 transition-all duration-300 ${
                        isActive 
                          ? "text-brand-orange translate-x-0 opacity-100" 
                          : "text-charcoal/20 group-hover:text-brand-orange/60 translate-x-[-4px] opacity-0 group-hover:opacity-100"
                      }`}>
                        <ChevronRight size={18} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Main Showcase Canvas (lg:col-span-8) */}
            <div className="col-span-1 lg:col-span-8 bg-white border border-orange-tint/20 shadow-[0_20px_50px_rgba(0,0,0,0.03)] rounded-sm p-8 md:p-12 relative overflow-hidden min-h-[380px]">
              {/* Panel Ambient Aura */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-orange/5 to-brand-green/5 rounded-full blur-[60px] pointer-events-none" />

               <AnimatePresence mode="wait">
                <motion.div
                  key={activeLeaderIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative z-10 flex flex-col gap-8 md:gap-10"
                >
                  {/* Header Row: Portrait & Name/Designation */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8 pb-6 border-b border-gray-100">
                    {/* Compact Oval Portrait with Premium Dark Border */}
                    <div className="shrink-0">
                      <div className="w-28 h-36 bg-gray-100 rounded-full overflow-hidden shadow-xl border-[6px] border-[#222222] relative">
                        <img 
                          src={activeLeader.image || img_professional_portrait_placeholder_1779016991849_png} 
                          alt={activeLeader.name} 
                          className="w-full h-full object-cover scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* Name and Designation */}
                    <div className="text-center sm:text-left flex-1">
                      <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2 block">
                        {activeLeader.title}
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
                        {activeLeader.name}
                      </h3>
                    </div>
                  </div>

                  {/* Biography text flowing full-width below */}
                  <div className="text-charcoal/80 leading-relaxed font-semibold space-y-5 text-sm md:text-base border-l-2 border-brand-green/20 pl-6 md:pl-8 py-1">
                    {activeLeader.bio.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} style={{ whiteSpace: 'pre-line' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
    </div>
  );
}
