import { motion } from 'motion/react';
import { Mail, GraduationCap, Target, Users } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { CONTACT_INFO } from '../constants';
import img_careers_collaboration_1779016952313_png from '../assets/images/careers_collaboration_1779016952313.png';
import img_manufacturing_facility_1779016846794_png from '../assets/images/manufacturing_facility_1779016846794.png';

export default function Careers() {
  return (
    <div className="flex flex-col min-h-screen">
       {/* Intro */}
       <section className="pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-32 bg-neutral/50 overflow-hidden border-b border-gray-150/40">
         <ScrollReveal>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="max-w-2xl space-y-6"
               >
                 <h1 className="text-4xl md:text-6xl font-heading font-black text-brand-dark leading-tight">Careers at Anthro Pharma</h1>
                 <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed font-semibold max-w-xl">
                   We believe in building long-term professional relationships grounded in performance, integrity, and growth.
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
                     src={img_careers_collaboration_1779016952313_png} 
                     alt="Team Collaboration at Anthro Pharma" 
                     className="w-full h-auto object-cover aspect-[4/3]"
                     referrerPolicy="no-referrer"
                   />
                 </div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-brand-green/10 rounded-full -z-0" />
               </motion.div>
             </div>
           </div>
         </ScrollReveal>
       </section>

       {/* Who we are looking for */}
       <section className="py-24 bg-neutral border-b border-gray-150/40">
         <ScrollReveal>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-16">
               <h2 className="text-brand-dark font-heading font-black text-4xl md:text-5xl tracking-tight leading-none">Who We're Looking For</h2>
               <div className="w-20 h-1 bg-brand-orange mt-6 mx-auto rounded-full" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Ethical marketing principles", icon: Target, desc: "Professionals who believe in science-based and transparent product promotion." },
                 { title: "Market expansion strategies", icon: Users, desc: "Agile thinkers with the ability to identify and build structured market presence." },
                 { title: "Scientific product communication", icon: GraduationCap, desc: "Expertise in conveying precise medical and pharmaceutical information." }
               ].map((card, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 text-center relative overflow-hidden"
                 >
                    
                <div className="absolute -bottom-8 -right-8 w-28 h-28 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '55s' }}>
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
                    <div className="w-16 h-16 bg-green-tint rounded-sm flex items-center justify-center mx-auto mb-6 text-brand-green relative z-10">
                     <card.icon size={32} />
                   </div>
                   <h3 className="text-xl font-heading font-bold mb-4">{card.title}</h3>
                   <p className="text-charcoal/60 text-sm leading-relaxed">{card.desc}</p>
                 </motion.div>
               ))}
             </div>
           </div>
         </ScrollReveal>
       </section>

       {/* How to apply */}
       <section className="py-24 bg-transparent relative z-0 overflow-hidden border-b border-gray-150/40">
         {/* Background image behind the container */}
         <div 
           className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none -z-10"
           style={{ backgroundImage: `url(${img_manufacturing_facility_1779016846794_png})` }}
         />
         <ScrollReveal>
           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-brand-dark text-white rounded-sm p-12 lg:p-16 text-center relative z-10 shadow-2xl border border-brand-orange/15 overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-brand-green to-brand-orange" />
                
                {/* Soft inner glow */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-orange/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-green/10 rounded-full blur-[80px] pointer-events-none" />

                <span className="text-xs font-black uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-4 py-1.5 rounded-sm inline-flex items-center gap-2 mb-6">
                  Career Opportunities
                </span>

                <h2 className="text-white text-3xl md:text-4xl font-heading font-black tracking-tight mb-4">HOW TO APPLY</h2>
                <p className="text-orange-tint/70 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                  Interested candidates may send their professional resume / CV to our HR administration desk.
                </p>
                
                <div className="flex flex-col items-center gap-6 relative z-10">
                  <div className="inline-flex items-center gap-3.5 px-6 py-4 bg-white/[0.03] rounded-sm border border-white/10 hover:border-brand-orange/30 text-white font-mono text-base md:text-lg transition-colors group/email shadow-inner">
                    <Mail size={20} className="text-brand-orange group-hover:scale-110 transition-transform" />
                    <span className="select-all">{CONTACT_INFO.email}</span>
                  </div>
                  
                  <div className="mt-2">
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4.5 rounded-sm font-extrabold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-orange/10 hover:shadow-brand-orange/20 hover:-translate-y-0.5"
                    >
                      Send Your CV <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>
           </div>
         </ScrollReveal>
         {/* Background accent - beautiful warm cream */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[#FDF8F3] -z-20 skew-y-[-3deg]" />
       </section>
    </div>
  );
}
