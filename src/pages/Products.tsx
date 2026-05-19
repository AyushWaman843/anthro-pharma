import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ScrollReveal from '../components/ScrollReveal';
import { PRODUCT_CATALOG } from '../constants';
import { cn } from '../lib/utils';
import { 
  Package, 
  Tablet, 
  Syringe, 
  ClipboardList, 
  Search, 
  X, 
  Filter, 
  Download, 
  Grid, 
  List, 
  ArrowUpDown
} from 'lucide-react';
import img_manufacturing_facility_1779016846794_png from '../assets/images/manufacturing_facility_1779016846794.png';

interface Product {
  brandName: string;
  composition: string;
  type: string;
}

export default function Products() {
  const [activeTab, setActiveTab] = useState<'all' | 'injectables' | 'tablets' | 'suspensions'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc'>('name-asc');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (isMobileFiltersOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileFiltersOpen]);

  const tabs = [
    { id: 'all' as const, label: 'All Formulations', icon: ClipboardList },
    { id: 'injectables' as const, label: 'Injectables', icon: Syringe },
    { id: 'tablets' as const, label: 'Tablets & Capsules', icon: Tablet },
    { id: 'suspensions' as const, label: 'Suspensions & Dry Syrups', icon: Package },
  ];

  const filteredProducts = useMemo(() => {
    let products: Product[] = [];
    
    if (activeTab === 'all') {
      products = [
        ...PRODUCT_CATALOG.injectables.map(p => ({ ...p, type: 'Injectable' })),
        ...PRODUCT_CATALOG.tablets.map(p => ({ ...p, type: 'Tablet/Capsule' })),
        ...PRODUCT_CATALOG.suspensions.map(p => ({ ...p, type: 'Suspension' })),
      ];
    } else {
      const typeLabel = activeTab === 'injectables' ? 'Injectable' : activeTab === 'tablets' ? 'Tablet/Capsule' : 'Suspension';
      products = PRODUCT_CATALOG[activeTab].map(p => ({ ...p, type: typeLabel }));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        p => p.brandName.toLowerCase().includes(query) || p.composition.toLowerCase().includes(query)
      );
    }

    // Sorting
    return [...products].sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.brandName.localeCompare(b.brandName);
      } else {
        return b.brandName.localeCompare(a.brandName);
      }
    });
  }, [activeTab, searchQuery, sortBy]);

  const renderSidebarFilters = () => (
    <div className="space-y-6">
      {/* Search Panel */}
      <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4 relative overflow-hidden">
        {/* Rotating SVG Molecule Graphic in background */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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
        <span className="text-xs font-black uppercase tracking-widest text-charcoal/50 block">Search Catalog</span>
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="text-gray-400 group-focus-within:text-brand-green transition-colors" size={18} />
          </div>
          <input
            type="text"
            placeholder="Search formulations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-10 py-3 bg-neutral/50 border border-gray-100 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all text-charcoal font-medium placeholder:text-gray-400 text-sm"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-brand-orange"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Categories Filter Panel */}
      <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4 relative overflow-hidden">
        {/* Rotating SVG Molecule Graphic in background */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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
        <span className="text-xs font-black uppercase tracking-widest text-charcoal/50 block">Filter By Category</span>
        <div className="flex flex-col gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            let count = 0;
            if (tab.id === 'all') {
              count = PRODUCT_CATALOG.injectables.length + PRODUCT_CATALOG.tablets.length + PRODUCT_CATALOG.suspensions.length;
            } else {
              count = PRODUCT_CATALOG[tab.id].length;
            }

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  if (isMobileFiltersOpen) setIsMobileFiltersOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3.5 rounded-sm text-left font-bold text-sm transition-all border",
                  isActive
                    ? "bg-brand-green text-white border-brand-green shadow-md translate-y-[-1px]"
                    : "bg-white text-charcoal border-gray-100 hover:border-brand-green/30 hover:bg-green-tint/50"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <tab.icon size={16} className={isActive ? "text-white" : "text-gray-400"} />
                  <span>{tab.label}</span>
                </div>
                <span className={cn(
                  "text-[9px] px-2 py-0.5 rounded-full font-bold",
                  isActive ? "bg-white/20 text-white" : "bg-neutral text-charcoal/40"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sorting & Quick Actions Panel */}
      <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100 space-y-4 relative overflow-hidden">
        {/* Rotating SVG Molecule Graphic in background */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '65s' }}>
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
        <span className="text-xs font-black uppercase tracking-widest text-charcoal/50 block">Sort & Tools</span>
        
        {/* Sorting */}
        <button
          onClick={() => setSortBy(sortBy === 'name-asc' ? 'name-desc' : 'name-asc')}
          className="w-full flex items-center justify-between px-4 py-3 bg-neutral/50 border border-gray-100 hover:border-gray-200 rounded-sm font-bold text-sm text-charcoal transition-all"
        >
          <div className="flex items-center gap-2.5">
            <ArrowUpDown size={16} className="text-brand-green" />
            <span>Sort: {sortBy === 'name-asc' ? 'A - Z' : 'Z - A'}</span>
          </div>
        </button>

        {/* PDF Catalog */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-orange/10 hover:bg-brand-orange/20 text-brand-orange hover:text-brand-orange-dark border border-brand-orange/20 rounded-sm font-extrabold text-xs uppercase tracking-widest transition-all">
          <Download size={14} /> PDF Catalog
        </button>

        {/* Filter Summary */}
        <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-charcoal/50 font-medium">
          <div className="flex items-center gap-1.5">
            <Filter size={14} />
            <span>Result Count</span>
          </div>
          <span className="text-brand-green font-extrabold text-sm">{filteredProducts.length}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FDF8F3] relative">
      <AnimatePresence>
        {isMobileFiltersOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#FDF8F3] z-50 p-6 overflow-y-auto shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
                <div className="flex items-center gap-2">
                  <Filter size={18} className="text-brand-green" />
                  <span className="font-heading font-black text-charcoal text-lg uppercase tracking-wider">Filters</span>
                </div>
                <button 
                  onClick={() => setIsMobileFiltersOpen(false)} 
                  className="p-1.5 hover:bg-neutral text-gray-500 rounded-sm transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              {renderSidebarFilters()}
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* Header Banner */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-20 overflow-hidden flex items-center justify-center min-h-[350px] border-b border-gray-150/40">
        {/* Banner background photo - full strength with white top-tint blend */}
        <div className="absolute inset-0 z-0">
          <img
            src={img_manufacturing_facility_1779016846794_png}
            alt="Manufacturing Facility"
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

            <span className="text-xs font-black uppercase tracking-widest text-brand-green bg-brand-green/10 border border-brand-green/20 px-4 py-1.5 rounded-sm inline-flex items-center gap-2 shadow-sm mb-4">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
              Certified Formulations
            </span>
            <h1 className="text-brand-dark font-heading font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none">Our Products</h1>
            <div className="w-16 h-1 bg-brand-orange mt-4 mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-charcoal/80 max-w-2xl mx-auto leading-relaxed font-semibold mt-4">
              All products are manufactured at WHO-GMP & ISO 9001:2000 certified facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Catalog View */}
      <section className="py-16 md:py-24 border-b border-gray-150/40">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* LEFT COLUMN: Sidebar Filters & Tools */}
            <div className="hidden lg:block lg:col-span-1">
              {renderSidebarFilters()}
            </div>

            {/* RIGHT COLUMN: Products Display Grid/List */}
            <div className="lg:col-span-3 space-y-6">
              
              {/* Active Category Header & View Toggles */}
              <div className="flex items-center justify-between bg-white p-4 rounded-sm border border-gray-100 shadow-sm relative overflow-hidden">
               
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-[0.035] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '70s' }}>
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
                <div className="text-xs font-bold text-charcoal/50 flex items-center gap-2 pl-2">
                  <span>Showing {activeTab === 'all' ? 'All Formulations' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* Mobile Filters Toggle Button */}
                  <button
                    onClick={() => setIsMobileFiltersOpen(true)}
                    className="flex lg:hidden items-center gap-2 px-3 py-2 bg-neutral hover:bg-neutral/85 border border-gray-200 rounded-sm text-charcoal text-xs font-bold transition-all shadow-sm"
                  >
                    <Filter size={14} className="text-brand-green animate-pulse" />
                    <span>Filters</span>
                  </button>

                  {/* View Toggles */}
                  <div className="flex bg-neutral/50 border border-gray-100 rounded-sm p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        "p-2 rounded-sm transition-all",
                        viewMode === 'grid' ? "bg-white text-brand-green shadow-sm" : "text-gray-400 hover:text-charcoal"
                      )}
                      title="Grid View"
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={cn(
                        "p-2 rounded-sm transition-all",
                        viewMode === 'list' ? "bg-white text-brand-green shadow-sm" : "text-gray-400 hover:text-charcoal"
                      )}
                      title="List View"
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Catalog Layouts */}
              <div>
                {filteredProducts.length > 0 ? (
                  viewMode === 'grid' ? (
                    // E-COMMERCE GRID VIEW
                    <motion.div
                      key="grid-layout"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6"
                    >
                      {filteredProducts.map((product) => {
                        return (
                          <motion.div
                            key={product.brandName}
                            layoutId={`product-${product.brandName}`}
                            className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:border-brand-green/20"
                          >
                            {/* 3D gradient simulated packshot box */}
                            <div className="p-2.5 sm:p-4 bg-neutral/40">
                              <ProductPackshot type={product.type} brandName={product.brandName} />
                            </div>

                            {/* Product info details */}
                            <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                              <div className="space-y-1.5 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className={cn(
                                    "text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full",
                                    product.type === 'Injectable' ? "bg-blue-50 text-blue-700" :
                                    product.type === 'Tablet/Capsule' ? "bg-purple-50 text-purple-700" :
                                    "bg-orange-50 text-orange-700"
                                  )}>
                                    {product.type}
                                  </span>
                                </div>
                                
                                <h3 className="font-heading font-extrabold text-charcoal text-sm sm:text-lg group-hover:text-brand-green transition-colors leading-tight line-clamp-1">
                                  {product.brandName}
                                </h3>
                                <p className="text-[10px] sm:text-xs text-charcoal/60 line-clamp-2 min-h-[2.2rem] sm:min-h-[2.5rem] leading-relaxed">
                                  {product.composition}
                                </p>
                              </div>


                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  ) : (
                    // E-COMMERCE LIST / LEDGER VIEW
                    <motion.div
                      key="list-layout"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden relative">
                       
              {/* Rotating SVG Molecule Graphic in background */}
              <div className="absolute -bottom-16 -right-16 w-64 h-64 opacity-[0.04] text-brand-orange animate-spin pointer-events-none z-0" style={{ animationDuration: '75s' }}>
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
                      <div className="overflow-x-auto">
                        <table className="w-full text-left min-w-[750px]">
                          <thead>
                            <tr className="bg-neutral/80 border-b border-gray-100">
                              <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-brand-dark opacity-50">Dosage</th>
                              <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-brand-dark opacity-50">Brand Name</th>
                              <th className="px-8 py-5 text-xs font-black uppercase tracking-widest text-brand-dark opacity-50">Composition</th>

                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-50">
                            {filteredProducts.map((product) => {
                              return (
                                <tr 
                                  key={product.brandName} 
                                  className="hover:bg-green-tint/30 transition-colors group"
                                >
                                  <td className="px-8 py-5">
                                    <span className={cn(
                                      "inline-block px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider",
                                      product.type === 'Injectable' ? "bg-blue-50 text-blue-700" :
                                      product.type === 'Tablet/Capsule' ? "bg-purple-50 text-purple-700" :
                                      "bg-orange-50 text-orange-700"
                                    )}>
                                      {product.type}
                                    </span>
                                  </td>
                                  <td className="px-8 py-5">
                                    <span className="font-heading font-extrabold text-charcoal group-hover:text-brand-green transition-colors text-base block">
                                      {product.brandName}
                                    </span>
                                  </td>
                                  <td className="px-8 py-5">
                                    <span className="text-charcoal/70 font-medium text-sm block max-w-sm line-clamp-1">
                                      {product.composition}
                                    </span>
                                  </td>

                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )
                ) : (
                  <motion.div
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-sm p-20 text-center border border-gray-100 relative overflow-hidden">
                     
              {/* Rotating SVG Molecule Graphic in background */}
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
                    <div className="flex flex-col items-center gap-4 text-charcoal/30">
                      <Search size={54} strokeWidth={1} />
                      <h3 className="font-heading text-xl font-bold text-charcoal">No formulations found matching search filters</h3>
                      <button 
                        onClick={() => {
                          setSearchQuery('');
                          setActiveTab('all');
                        }}
                        className="text-brand-green font-extrabold hover:underline text-sm"
                      >
                        Reset all filters
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>

            </div>

          </div>
          </div>
        </ScrollReveal>
      </section>



      {/* Footer copyright detail */}
      <section className="pb-16 bg-white border-t border-gray-50 pt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] text-charcoal/40 uppercase tracking-widest flex items-center justify-center gap-2 font-bold">
            <ClipboardList size={14} /> Direct B2B Distribution Catalog. Subject to License validation. WHO-GMP Certifications intact.
          </p>
        </div>
      </section>

    </div>
  );
}

// SIMULATED PACKSHOT CONTAINER FOR GORGEOUS visual rendering
function ProductPackshot({ type, brandName }: { type: string; brandName: string }) {
  const getStyles = () => {
    switch (type) {
      case 'Injectable':
        return {
          bg: 'bg-gradient-to-br from-teal-500/90 to-brand-green',
          glow: 'shadow-emerald-500/10',
          desc: 'Sterile Injection / Liquid Vial',
          icon: Syringe
        };
      case 'Tablet/Capsule':
        return {
          bg: 'bg-gradient-to-br from-brand-orange to-amber-600',
          glow: 'shadow-orange-500/10',
          desc: 'Oral Solid Blister Pack',
          icon: Tablet
        };
      default: // Suspension
        return {
          bg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
          glow: 'shadow-blue-500/10',
          desc: 'Liquid Suspension Syrup',
          icon: Package
        };
    }
  };

  const config = getStyles();
  const Icon = config.icon;

  return (
    <div className={cn(
      "relative w-full aspect-[4/3] rounded-sm overflow-hidden flex flex-col items-center justify-center p-3 sm:p-5 shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-white/20", 
      config.bg, 
      config.glow
    )}>
      {/* Glossy sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/25 pointer-events-none" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      {/* Rx stamp stamp overlay */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/10 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-sm border border-white/20">
        <span className="text-[8px] sm:text-[10px] text-white font-extrabold uppercase tracking-widest">Rx</span>
      </div>

      <div className="relative text-center text-white space-y-1.5 sm:space-y-3 z-10 flex flex-col items-center w-full">
        <div className="w-9 h-9 sm:w-14 sm:h-14 rounded-sm bg-white/15 flex items-center justify-center backdrop-blur-md mb-0.5 sm:mb-1 shadow-inner group-hover:rotate-6 transition-transform duration-300">
          <Icon className="text-white drop-shadow w-5 h-5 sm:w-7 sm:h-7" />
        </div>
        <h4 className="font-heading font-extrabold text-xs sm:text-base tracking-tight text-white line-clamp-1 drop-shadow-md px-1 sm:px-3 max-w-full">
          {brandName}
        </h4>
        <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-white/80 block bg-black/10 px-1.5 sm:px-2 py-0.5 rounded-full">
          {config.desc}
        </span>
      </div>
      
      {/* Bottom medical block stripes */}
      <div className="absolute bottom-0 inset-x-0 h-1.5 flex opacity-60">
        <div className="flex-1 bg-white/20" />
        <div className="flex-1 bg-white/40" />
        <div className="flex-1 bg-white/10" />
      </div>
    </div>
  );
}
