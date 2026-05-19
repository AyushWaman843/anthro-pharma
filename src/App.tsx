/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header, Footer } from './components/Navigation';
import Loader from './components/Loader';
import { motion, AnimatePresence } from 'motion/react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Operations from './pages/Operations';
import Therapeutics from './pages/Therapeutics';
import Products from './pages/Products';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Chatbot from './components/Chatbot';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // 'instant' skips smooth-scroll so the page is already at top when it paints
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Fallback for older browsers / custom scroll containers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Premium Loader Overlay */}
      <AnimatePresence mode="wait">
        {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Main Page Layout Wrapper */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col min-h-screen bg-pharma-pattern relative overflow-x-hidden"
      >
        {/* Floating Global Background Molecule Animations */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top Left Floating Molecule */}
          <div className="absolute top-[18%] left-[-6%] w-72 h-72 opacity-[0.035] text-brand-orange animate-spin" style={{ animationDuration: '80s' }}>
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="50" cy="50" r="10" />
              <line x1="50" y1="40" x2="50" y2="20" />
              <line x1="50" y1="60" x2="50" y2="80" />
              <line x1="40" y1="50" x2="20" y2="50" />
              <line x1="60" y1="50" x2="80" y2="50" />
              <circle cx="50" cy="15" r="5" fill="currentColor" />
              <circle cx="50" cy="85" r="5" fill="currentColor" />
              <circle cx="15" cy="50" r="5" fill="currentColor" />
              <circle cx="85" cy="50" r="5" fill="currentColor" />
            </svg>
          </div>

          {/* Middle Right Floating Molecule */}
          <div className="absolute top-[48%] right-[-8%] w-96 h-96 opacity-[0.03] text-brand-orange animate-spin" style={{ animationDuration: '110s' }}>
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="50" cy="50" r="12" />
              <line x1="50" y1="38" x2="50" y2="10" />
              <line x1="50" y1="62" x2="50" y2="90" />
              <line x1="38" y1="50" x2="10" y2="50" />
              <line x1="62" y1="50" x2="90" y2="50" />
              <circle cx="50" cy="10" r="4" fill="currentColor" />
              <circle cx="50" cy="90" r="4" fill="currentColor" />
              <circle cx="10" cy="50" r="4" fill="currentColor" />
              <circle cx="90" cy="50" r="4" fill="currentColor" />
              <circle cx="28" cy="28" r="6" />
              <circle cx="72" cy="72" r="6" />
            </svg>
          </div>

          {/* Bottom Left Floating Molecule */}
          <div className="absolute bottom-[12%] left-[-8%] w-80 h-80 opacity-[0.025] text-brand-orange animate-spin" style={{ animationDuration: '95s' }}>
            <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="50" cy="50" r="10" />
              <line x1="50" y1="40" x2="50" y2="20" />
              <line x1="50" y1="60" x2="50" y2="80" />
              <line x1="40" y1="50" x2="20" y2="50" />
              <line x1="60" y1="50" x2="80" y2="50" />
              <circle cx="50" cy="15" r="5" fill="currentColor" />
              <circle cx="50" cy="85" r="5" fill="currentColor" />
              <circle cx="15" cy="50" r="5" fill="currentColor" />
              <circle cx="85" cy="50" r="5" fill="currentColor" />
            </svg>
          </div>
        </div>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/therapeutics" element={<Therapeutics />} />
            <Route path="/products" element={<Products />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </motion.div>
    </Router>
  );
}

