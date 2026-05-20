import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { CONTACT_INFO } from '../constants';
import anthroLogo from '../assets/images/Anthro-Logo.png';

const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Operations', path: '/operations' },
  { name: 'R&D & Therapeutics', path: '/therapeutics' },
  { name: 'Products', path: '/products' },
  { name: 'TherExcell', path: '/therexcell' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative py-5 sm:py-6 transition-all duration-500 ease-in-out">
        
        {/* Dynamic Hardware-Accelerated Frosted Glass Backdrop Plate */}
        <div
          className={cn(
            'absolute inset-y-2 inset-x-4 -z-10 transition-all duration-500 ease-in-out origin-center',
            isScrolled
              ? 'bg-white/80 backdrop-blur-lg border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-full opacity-100 scale-100'
              : 'bg-transparent border border-transparent shadow-none rounded-[0px] opacity-0 scale-y-95 pointer-events-none'
          )}
        />

        <div className="flex justify-between items-center relative z-10 px-4 transition-all duration-500">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src={anthroLogo}
              alt="Anthro Pharmaceuticals Logo"
              className={cn(
                'w-auto transition-all duration-500 ease-in-out',
                isScrolled ? 'h-11 sm:h-12' : 'h-14 sm:h-18 md:h-19'
              )}
            />
          </Link>

          {/* Desktop Navigation with Noticeable Gap & Tightened Navlinks Spacing */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 ml-12 xl:ml-20">
            {NAVIGATION_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative text-[12px] xl:text-[13px] font-extrabold tracking-widest uppercase transition-all duration-300 py-3 px-3 xl:px-4 rounded-full flex items-center justify-center whitespace-nowrap group',
                    isActive ? 'text-brand-orange' : 'text-charcoal/80 hover:text-brand-orange'
                  )}
                >
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Subtle Hover Bubble */}
                  <span className="absolute inset-0 bg-brand-orange/[0.04] border border-brand-orange/[0.08] rounded-full scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Gliding Underline Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-1.5 left-5 right-5 h-[2px] bg-brand-orange rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-sm transition-all duration-300 flex items-center justify-center relative z-10',
              isScrolled 
                ? 'bg-neutral/40 hover:bg-neutral text-charcoal' 
                : 'bg-white/50 backdrop-blur-sm border border-white/40 text-charcoal shadow-sm hover:bg-white'
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl rounded-sm mt-3 py-6 px-4 overflow-hidden z-40"
          >
            <nav className="flex flex-col gap-2">
              {NAVIGATION_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm transition-all duration-300 flex justify-between items-center group',
                      isActive
                        ? 'bg-brand-orange/10 text-brand-orange'
                        : 'text-charcoal/80 hover:bg-neutral/60 hover:text-brand-orange'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.name}</span>
                    <ArrowRight 
                      size={14} 
                      className={cn(
                        'transition-all duration-300',
                        isActive 
                          ? 'opacity-100 translate-x-0 text-brand-orange' 
                          : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-brand-orange'
                      )} 
                    />
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <img src={anthroLogo} alt="Anthro Pharmaceuticals Logo" className="h-14 w-auto rounded bg-white p-1" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-medium">
              Advancing Ethical Healthcare Through Quality-Driven Pharmaceutical Solutions.
            </p>
            <p className="text-xs font-bold text-brand-orange uppercase tracking-wider">
              For Healthcare Professionals Only.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              {['Home', 'About Us', 'Operations', 'Products', 'TherExcell', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : item === 'TherExcell' ? '/therexcell' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-lg mb-6 border-b border-white/10 pb-2">Get in Touch</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Office Address</p>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  {CONTACT_INFO.address.line1}<br />
                  {CONTACT_INFO.address.line2}<br />
                  {CONTACT_INFO.address.line3}
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Direct Contact</p>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  Phone: {CONTACT_INFO.phone}<br />
                  Email: {CONTACT_INFO.email}<br />
                  Web: {CONTACT_INFO.website}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Anthro Pharmaceuticals Private Limited. All Rights Reserved.</p>
          <p>Products available on prescription.</p>
        </div>
      </div>
    </footer>
  );
}
