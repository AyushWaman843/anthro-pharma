import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Heart, 
  Globe, 
  Users, 
  Sparkles, 
  Droplet, 
  Activity, 
  Layers, 
  Building2, 
  Info,
  X,
  Search,
  ExternalLink
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import img_rd_therapeutics_imagery_1779016860858_png from '../assets/images/rd_therapeutics_imagery_1779016860858.png';
import img_professional_portrait_placeholder_1779016991849_png from '../assets/images/professional_portrait_placeholder_1779016991849.png';
import img_hero_pharma_laboratory_1779016806163_png from '../assets/images/hero_pharma_laboratory_1779016806163.png';

// Dynamic, high-fidelity SVG Logo Component for TherExcell
function TherExcellLogo({ size = "md", className = "" }: { size?: 'sm' | 'md' | 'lg', className?: string }) {
  const iconSize = size === 'sm' ? 'w-10 h-10' : size === 'md' ? 'w-16 h-16' : 'w-24 h-24';
  const textSize = size === 'sm' ? 'text-xl' : size === 'md' ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl';
  const subSize = size === 'sm' ? 'text-[9px]' : size === 'md' ? 'text-xs tracking-[0.25em]' : 'text-sm tracking-[0.3em]';

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Precision Vector Double Helix */}
      <svg className={`shrink-0 ${iconSize}`} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Connection/base struts */}
        <line x1="25" y1="20" x2="75" y2="20" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="28" y1="35" x2="72" y2="35" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="36" y1="50" x2="64" y2="50" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="50" y1="65" x2="50" y2="65" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="36" y1="80" x2="64" y2="80" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="28" y1="95" x2="72" y2="95" stroke="#94A3B8" strokeWidth="1.5" />
        <line x1="25" y1="110" x2="75" y2="110" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />

        {/* Teal Wave (Strand 1) */}
        <path d="M25,20 C35,45 65,45 75,65 C65,85 35,85 25,110" stroke="#106F7A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="25" cy="20" r="5" fill="#106F7A" className="animate-pulse" />
        <circle cx="34" cy="35" r="5" fill="#106F7A" />
        <circle cx="48" cy="50" r="5.5" fill="#106F7A" />
        <circle cx="62" cy="65" r="5" fill="#106F7A" />
        <circle cx="50" cy="80" r="5" fill="#106F7A" />
        <circle cx="34" cy="95" r="5" fill="#106F7A" />
        <circle cx="25" cy="110" r="5" fill="#106F7A" />

        {/* Navy Wave (Strand 2) */}
        <path d="M75,20 C65,45 35,45 25,65 C35,85 65,85 75,110" stroke="#1E3E62" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="75" cy="20" r="5" fill="#1E3E62" />
        <circle cx="66" cy="35" r="5" fill="#1E3E62" />
        <circle cx="52" cy="50" r="5.5" fill="#1E3E62" />
        <circle cx="38" cy="65" r="5" fill="#1E3E62" />
        <circle cx="50" cy="80" r="5" fill="#1E3E62" />
        <circle cx="66" cy="95" r="5" fill="#1E3E62" />
        <circle cx="75" cy="110" r="5" fill="#1E3E62" />
      </svg>
      <div>
        <h2 className={`font-heading font-black tracking-wide text-[#106F7A] leading-none ${textSize}`}>THEREXCELL</h2>
        <p className={`font-sans font-extrabold text-[#1E3E62] mt-1.5 uppercase ${subSize}`}>Excellence in Therapies</p>
      </div>
    </div>
  );
}

export default function TherExcell() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeValueTab, setActiveValueTab] = useState(0);

  const values = [
    { 
      title: "Innovation with Purpose", 
      icon: Lightbulb, 
      desc: "We pursue scientific breakthroughs that directly improve patient lives and healthcare outcomes." 
    },
    { 
      title: "Integrity & Ethics", 
      icon: ShieldCheck, 
      desc: "We uphold transparency, regulatory compliance, and ethical responsibility in every decision." 
    },
    { 
      title: "Patient-Centricity", 
      icon: Heart, 
      desc: "Every product and initiative begin with empathy for the patient and ends with measurable impact." 
    },
    { 
      title: "Cultural Intelligence", 
      icon: Globe, 
      desc: "We honor diverse traditions and integrate global perspectives to create inclusive healthcare solutions." 
    },
    { 
      title: "Collaboration & Trust", 
      icon: Users, 
      desc: "We foster partnerships built on mutual respect, shared goals, and open communication." 
    }
  ];

  const partners = [
    { name: "Filgap", desc: "USFDA Approved Plant Partnership", location: "Global / India", flag: "🇮🇳" },
    { name: "Icare Formulations", desc: "Strategic Tie-up / Formulations Specialist", location: "Australia", flag: "🇦🇺" },
    { name: "Ultra Drugs", desc: "Certified Formulation Manufacturing Facility", location: "India", flag: "🇮🇳" },
    { name: "Yash Medicare", desc: "State-of-the-Art Production Facility", location: "India", flag: "🇮🇳" }
  ];

  const portfolio = [
    {
      id: "theraglow",
      name: "Theraglow",
      segment: "Excellence in Depigmentation Management",
      desc: "A premium clinical formula designed to regulate melanin synthesis, brighten skin tone, and reduce stubborn hyperpigmentation safely.",
      highlights: ["Dermatologically Tested", "Regulates Melanin Synthesis", "Targeted Pigment Correction"],
      composition: "Advanced Depigmenting Complex with Kojic Acid, Alpha Arbutin, and Niacinamide",
      usage: "Apply thin layer to affected areas twice daily or as directed by a dermatologist."
    },
    {
      id: "acneblok",
      name: "Acneblok",
      segment: "Excellence in Acne Management",
      desc: "An advanced targeted formulation designed to penetrate deep into pores, eliminate acne-causing bacteria, and calm inflammation.",
      highlights: ["Comedolytic Action", "Soothes Skin Irritation", "Reduces Sebum Secretion"],
      composition: "Clinical Strength Salicylic Acid + Zinc PCA + Tea Tree Oil Gel Base",
      usage: "Cleanse skin thoroughly before applying a thin layer of gel to active lesions."
    },
    {
      id: "keracort",
      name: "Keracort",
      segment: "Excellence in Psoriasis Management",
      desc: "A highly specialized dermatological treatment formulated to soothe plaques, reduce scaling, and restore skin barrier function.",
      highlights: ["Anti-Scaling Formula", "Restores Lipids", "Clinically Proven Efficacy"],
      composition: "Clobetasol Propionate + Salicylic Acid Plaque Smoothing Cream",
      usage: "Apply strictly as prescribed by a medical professional to affected plaques."
    },
    {
      id: "hairxcell",
      name: "Hairxcell",
      segment: "Excellence in Hair Loss Management",
      desc: "A scientific hair revitalizing solution that stimulates hair follicles, improves microcirculation, and strengthens roots.",
      highlights: ["Follicular Stimulator", "Strengthens Hair Shaft", "Microcirculation Booster"],
      composition: "Minoxidil + Finasteride + Peptide Nourishing Serum with Dropper",
      usage: "Apply 1ml directly to dry scalp in areas of thinning. Massage gently."
    },
    {
      id: "grx",
      name: "GRX",
      segment: "Excellence in Rejuvenation Management",
      desc: "An elite anti-aging formulation designed to boost collagen production, improve elasticity, and restore youthful skin bounce.",
      highlights: ["Collagen Synthesis Boost", "Improves Elasticity", "Deep Cellular Hydration"],
      composition: "Retinol + Coenzyme Q10 + Multi-Peptide Restructuring Cream",
      usage: "Apply nightly to face and neck after cleansing for advanced cellular repair."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Overview Section */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-32 bg-[#FAF8F5] relative overflow-hidden border-b border-gray-150/40 z-0">
        
        {/* Subtle decorative background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-white -z-20 skew-y-[-3deg]" />
        
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side Logo Graphic */}
              <div className="lg:col-span-6 flex justify-start items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <TherExcellLogo size="lg" />
                </motion.div>
              </div>

              {/* Right Side Text Block */}
              <div className="lg:col-span-6 text-left space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[#106F7A] bg-[#106F7A]/10 border border-[#106F7A]/20 px-4 py-1.5 rounded-sm inline-flex items-center gap-2">
                    <Building2 size={12} /> Sister Concern
                  </span>
                  
                  <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark leading-tight">
                    Our Foundation is built upon Offering <span className="text-[#106F7A]">Excellence</span> in Therapies, Products & Customer Care
                  </h2>

                  <p className="text-base md:text-lg text-charcoal/80 leading-relaxed font-semibold">
                    TherExcell is an innovation & science-driven organisation founded on 27th August 2025. Our Global Headquarter is located in Mumbai, India, backed by a dedicated field force ensuring deep market reach and strong engagement with healthcare professionals.
                  </p>

                  <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
                    We are tightly focused on offering innovative products & solutions in our core targeted therapies through excellence, mainly in the specialized fields of <strong>Dermatology & Cosmetology</strong>.
                  </p>

                  <p className="text-charcoal/70 text-sm md:text-base leading-relaxed">
                    Our team is meticulously trained to deliver scientific knowledge, dedicated product support, and value-driven partnerships that empower dermatologists and healthcare providers globally.
                  </p>

                  <p className="text-[#1E3E62] font-heading font-bold italic text-base">
                    "Join us in our journey of offering Excellence in Therapies & Products through innovation."
                  </p>
                </motion.div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-24 bg-[#FAF6F3] relative overflow-hidden border-b border-gray-150/40">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              
              {/* Our Vision Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="bg-white rounded-sm border border-[#106F7A]/10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col group relative"
              >
                {/* Banner Image */}
                <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                  <img 
                    src={img_rd_therapeutics_imagery_1779016860858_png} 
                    alt="Our Vision Banner" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col items-start text-left relative">
                  <div className="w-14 h-14 bg-[#106F7A] rounded-sm flex items-center justify-center shadow-lg shadow-[#106F7A]/25 mb-6 border-2 border-white relative z-10 -mt-16">
                    <Target className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-dark mb-4 tracking-tight">Our Vision</h3>
                  <p className="font-sans text-charcoal/85 font-semibold leading-relaxed text-base">
                    To become a trusted leader in life sciences by pioneering transformative therapies, fostering sustainable healthcare ecosystems, and honouring cultural diversity in every market we serve.
                  </p>
                </div>
              </motion.div>

              {/* Our Mission Card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="bg-white rounded-sm border border-[#106F7A]/10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col group relative"
              >
                {/* Banner Image */}
                <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                  <img 
                    src={img_hero_pharma_laboratory_1779016806163_png} 
                    alt="Our Mission Banner" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col items-start text-left relative">
                  <div className="w-14 h-14 bg-[#1E3E62] rounded-sm flex items-center justify-center shadow-lg shadow-[#1E3E62]/25 mb-6 border-2 border-white relative z-10 -mt-16">
                    <Lightbulb className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-heading font-black text-brand-dark mb-4 tracking-tight">Our Mission</h3>
                  <p className="font-sans text-charcoal/85 font-semibold leading-relaxed text-base">
                    To advance global health by delivering innovative, accessible, and patient-centric pharmaceutical solutions, driven by science, compassion, and a commitment to excellence.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Core Values Tabbed Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-gray-150/40">
        
        {/* Subtle Hexagonal Vector Grid in Background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] text-[#106F7A] z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexGrid" width="40" height="69.282" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 20 11.547 L 0 0 L 0 23.094 L 20 34.641 L 40 23.094 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexGrid)" />
          </svg>
        </div>

        <ScrollReveal>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl tracking-tight">Our Core Values</h2>
              <div className="w-20 h-1 bg-[#106F7A] mt-6 mx-auto rounded-full" />
              <p className="text-charcoal/70 text-sm md:text-base max-w-2xl mx-auto mt-6 leading-relaxed">
                Embedding values is not a one-off project but a living ecosystem. As TherExcell Lifesciences grows, these cultural touchpoints ensure every innovation, policy, and milestone resonates with your foundational beliefs.
              </p>
            </div>

            {/* Desktop Values Interaction */}
            <div className="hidden md:grid grid-cols-12 gap-8 items-stretch">
              
              {/* Tab Selector Links */}
              <div className="col-span-5 flex flex-col gap-3">
                {values.map((v, idx) => {
                  const Icon = v.icon;
                  const isActive = activeValueTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveValueTab(idx)}
                      className={`flex items-center gap-4 p-5 rounded-sm border text-left transition-all duration-300 ${
                        isActive 
                          ? 'bg-[#106F7A]/5 border-[#106F7A] shadow-sm text-[#106F7A]' 
                          : 'bg-[#FAF8F5]/60 border-gray-100 hover:border-gray-300 text-charcoal/80'
                      }`}
                    >
                      <div className={`p-2.5 rounded-sm transition-colors ${
                        isActive ? 'bg-[#106F7A] text-white' : 'bg-gray-100 text-charcoal/60'
                      }`}>
                        <Icon size={20} />
                      </div>
                      <span className="font-sans font-extrabold text-sm uppercase tracking-wider">{v.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Display Panel */}
              <div className="col-span-7 bg-[#FAF8F5] border border-gray-150/40 rounded-sm p-10 flex flex-col justify-center text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#106F7A]/5 rounded-bl-full -z-0" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeValueTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 relative z-10"
                  >
                    <span className="text-xs font-black uppercase tracking-widest text-[#106F7A] bg-[#106F7A]/10 px-3.5 py-1 rounded-sm">
                      Touchpoint {activeValueTab + 1}
                    </span>
                    <h3 className="text-2xl font-heading font-black text-[#1E3E62] pt-2">
                      {values[activeValueTab].title}
                    </h3>
                    <p className="text-base text-charcoal/80 leading-relaxed font-medium">
                      {values[activeValueTab].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Values Stack */}
            <div className="md:hidden space-y-4">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div key={idx} className="bg-[#FAF8F5] border border-gray-150/40 rounded-sm p-6 text-left">
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="p-2.5 bg-[#106F7A] text-white rounded-sm">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-sans font-black text-sm uppercase tracking-wider text-[#1E3E62]">
                        {v.title}
                      </h4>
                    </div>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Leadership Profile */}
      <section className="py-24 bg-[#FAF6F3] relative overflow-hidden border-b border-gray-150/40">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl tracking-tight">Leadership Team</h2>
              <div className="w-20 h-1 bg-[#106F7A] mt-6 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Profile Image Card */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#106F7A]/20 blur-xl rounded-full scale-90 opacity-80 group-hover:scale-95 transition-transform" />
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 shrink-0">
                    <img 
                      src={img_professional_portrait_placeholder_1779016991849_png} 
                      alt="Mr. Rajen Kothari Portrait" 
                      className="w-full h-full object-cover scale-105"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-black text-brand-dark mt-6">Mr. Rajen Kothari</h3>
                <p className="text-[#106F7A] text-xs font-black uppercase tracking-wider mt-1.5">Director & Founder</p>
                <p className="text-charcoal/50 text-[11px] font-bold uppercase tracking-widest mt-1">TherExcell Lifesciences Private Limited</p>
              </div>

              {/* Right Profile Bio */}
              <div className="lg:col-span-8 text-left space-y-6 font-medium text-charcoal/85 leading-relaxed">
                <p className="text-base md:text-lg font-semibold text-brand-dark">
                  Mr. Rajen Kothari is a seasoned Marketing, Sales, Portfolio, Business Development, and Strategy Professional with nearly 20+ years of diverse experience in multinational pharmaceutical enterprises like Alkem, Abbott, Pfizer, Dr. Reddy's, Zydus, Sun, MSN, and Strides Pharma.
                </p>
                
                <p className="text-sm md:text-base">
                  Holding a Bachelor of Pharmacy degree and an MBA in Pharmaceutical Management, he brings two decades of deep-rooted executive expertise in managing both international and domestic formulations markets.
                </p>

                <p className="text-sm md:text-base">
                  Mr. Kothari has a profound, granular understanding of business across 25+ countries. He is highly polylingual with proficiency in 7 languages across Asia, Africa, and the Latin America (LATAM) region. This exceptional international skillset underpins his proficiency in P&L management, portfolio packaging, pricing, clinical positioning, and communication strategy.
                </p>

                <p className="text-sm md:text-base">
                  His entrepreneurial skills and strategic vision have driven numerous successful new market entries by planning and executing robust 5-year plans across emerging global markets. Over the last two decades, he has also coached and mentored diverse, high-performing sales teams across the globe.
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Global Partners */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-gray-150/40">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl tracking-tight">Our Partners Across the World</h2>
              <div className="w-20 h-1 bg-[#106F7A] mt-6 mx-auto rounded-full" />
              <p className="text-charcoal/70 text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed">
                We align with state-of-the-art global manufacturing facilities and strategic tie-ups to deliver certified, consistent results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((p, idx) => {
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="p-8 rounded-sm bg-[#FAF8F5] border border-gray-150/40 text-left relative overflow-hidden flex flex-col justify-between h-48 group shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[#106F7A]/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
                    <div className="relative z-10 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-4xl" role="img" aria-label={p.location}>{p.flag}</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#106F7A] bg-[#106F7A]/10 px-2 py-0.5 rounded-sm">
                          {p.location}
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-black text-[#1E3E62] pt-2">{p.name}</h3>
                      <p className="text-xs text-charcoal/60 leading-relaxed font-semibold">{p.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Product Portfolio */}
      <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <span className="text-xs font-black uppercase tracking-widest text-[#106F7A] bg-[#106F7A]/10 border border-[#106F7A]/20 px-4 py-1.5 rounded-sm">
                Targeted Therapy Portfolio
              </span>
              <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl mt-6 tracking-tight">Dermatology & Cosmetology Segment</h2>
              <div className="w-20 h-1 bg-[#106F7A] mt-6 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((prod, idx) => {
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => setSelectedProduct(prod)}
                    className="bg-white rounded-sm border border-gray-150/40 shadow-sm overflow-hidden flex flex-col text-left group cursor-pointer relative"
                  >
                    {/* Clinical Cover Image Header */}
                    <div className="w-full h-40 relative overflow-hidden bg-brand-dark">
                      <img 
                        src={img_rd_therapeutics_imagery_1779016860858_png} 
                        alt={prod.name} 
                        className="w-full h-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                      
                      {/* Floating Category Badge */}
                      <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest text-[#1E3E62] bg-white border border-[#1E3E62]/10 px-2.5 py-1 rounded-sm shadow-sm">
                        {prod.name === "Hairxcell" ? "Trichology" : "Dermatology"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#106F7A]">
                          {prod.segment}
                        </span>
                        <h3 className="text-2xl font-heading font-black text-[#1E3E62] group-hover:text-[#106F7A] transition-colors">
                          {prod.name}
                        </h3>
                        <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3">
                          {prod.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-black uppercase tracking-widest text-[#106F7A]">
                        <span>View Details</span>
                        <Info size={14} className="group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brand-dark/70 backdrop-blur-md"
            />
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-sm max-w-2xl w-full p-8 md:p-10 shadow-2xl relative z-10 border border-gray-150/40 text-left overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 p-2 bg-gray-100 hover:bg-gray-200 text-charcoal hover:text-black rounded-full transition-colors"
              >
                <X size={18} />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#106F7A] bg-[#106F7A]/10 px-3 py-1 rounded-sm inline-block">
                    {selectedProduct.segment}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-heading font-black text-[#1E3E62] mt-4">
                    {selectedProduct.name}
                  </h3>
                </div>

                <div className="p-5 bg-[#FAF8F5] border border-gray-100 rounded-sm space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-charcoal/50">Composition</h4>
                  <p className="text-sm font-semibold text-[#1E3E62]">{selectedProduct.composition}</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-charcoal/50">Overview</h4>
                  <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
                    {selectedProduct.desc}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-charcoal/50">Key Highlights</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-charcoal/80 font-bold">
                    {selectedProduct.highlights.map((h: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#106F7A] rounded-full shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-black uppercase tracking-widest text-charcoal/50">Directions for Use</h4>
                  <p className="text-xs text-charcoal/60 leading-relaxed italic">
                    {selectedProduct.usage}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
