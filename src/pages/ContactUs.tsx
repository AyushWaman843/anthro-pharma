import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { CONTACT_INFO } from '../constants';
import img_careers_collaboration_1779016952313_png from '../assets/images/careers_collaboration_1779016952313.png';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send to an API
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-sm shadow-xl text-center max-w-xl mx-4 border border-gray-100 relative overflow-hidden"
        >
          
              <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-[0.05] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '60s' }}>
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
          <div className="w-20 h-20 bg-green-tint text-brand-green rounded-full flex items-center justify-center mx-auto mb-8">
            <Send size={40} />
          </div>
          <h2 className="text-3xl font-heading font-bold text-charcoal mb-4">Message Sent Successfully</h2>
          <p className="text-charcoal/70 text-lg mb-10 leading-relaxed">
            Thank you for your enquiry. Our team has received your message and will review it with professional care. We will get back to you shortly at the email provided.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-brand-green hover:bg-brand-green-dark text-white px-10 py-4 rounded-sm font-bold transition-all shadow-md"
          >
            Send Another Message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-20 overflow-hidden flex items-center justify-center min-h-[350px] border-b border-gray-150/40">
        {/* Banner background photo - full strength with white top-tint blend */}
        <div className="absolute inset-0 z-0">
          <img
            src={img_careers_collaboration_1779016952313_png}
            alt="Collaboration and Communication"
            className="w-full h-full object-cover"
          />
          {/* White gradient tint fading from the top */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex justify-center">
          {/* White Boxy Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur-md border border-white/60 p-8 sm:p-10 md:p-12 rounded-sm shadow-xl max-w-3xl w-full text-center relative overflow-hidden"
          >
            {/* Elegant Brand Accent Line at Top */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-green via-brand-orange to-brand-green" />
            
              <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-[0.045] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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

            <span className="text-xs font-black uppercase tracking-widest text-brand-green bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 rounded-sm inline-flex items-center gap-2 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              Dialogue & Engagement
            </span>
            <h1 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">Contact Us</h1>
            <div className="w-16 h-1 bg-brand-orange mt-4 mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-charcoal/80 max-w-2xl mx-auto leading-relaxed font-semibold mt-4 italic">
              "Connecting through ethical dialogue and professional integrity."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-transparent border-b border-gray-150/40">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 bg-green-tint rounded-sm flex items-center justify-center text-brand-green font-bold shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">Registered Address</h3>
                    <p className="text-charcoal/70 leading-relaxed">
                      {CONTACT_INFO.address.line1}<br />
                      {CONTACT_INFO.address.line2}<br />
                      {CONTACT_INFO.address.line3}
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 bg-orange-tint rounded-sm flex items-center justify-center text-brand-orange font-bold shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">Phone Number</h3>
                    <p className="text-charcoal/70 leading-relaxed">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 bg-green-tint rounded-sm flex items-center justify-center text-brand-green font-bold shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-3">E-mail Address</h3>
                    <p className="text-charcoal/70 leading-relaxed">{CONTACT_INFO.email}</p>
                  </div>
                </div>


              </div>
              
              {/* Map Placeholder/Iframe */}
              <div className="rounded-sm overflow-hidden shadow-lg border border-gray-100 bg-gray-100 aspect-video relative">
                <iframe
                  title="Anthro Pharma Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.169123456789!2d73.0336!3d19.0116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c16666666667%3A0x6666666666666666!2sBelapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1652784000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral p-10 lg:p-12 rounded-sm shadow-sm border border-gray-100">
               <h3 className="text-2xl font-heading font-bold mb-8">Send an Enquiry</h3>
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60 px-1">Full Name *</label>
                     <input
                       required
                       type="text"
                       placeholder="John Doe"
                       className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60 px-1">Company Name</label>
                     <input
                       type="text"
                       placeholder="Organisation"
                       className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                     />
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60 px-1">Email Address *</label>
                     <input
                       required
                       type="email"
                       placeholder="john@example.com"
                       className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60 px-1">Phone Number</label>
                     <input
                       type="tel"
                       placeholder="+91 00000 00000"
                       className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all"
                     />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60 px-1">Nature of Enquiry</label>
                   <select className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all appearance-none cursor-pointer">
                     <option>General Enquiry</option>
                     <option>Partnerships</option>
                     <option>Product Enquiry</option>
                     <option>Career</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-bold uppercase tracking-wider text-charcoal/60 px-1">Message *</label>
                   <textarea
                     required
                     rows={5}
                     placeholder="Write your message here..."
                     className="w-full bg-white border border-gray-200 px-6 py-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none"
                   ></textarea>
                 </div>

                 <button
                   type="submit"
                   className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-5 rounded-sm font-extrabold text-lg transition-all shadow-md flex items-center justify-center gap-3 group"
                 >
                   Send Enquiry <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                 </button>
               </form>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
    </div>
  );
}
