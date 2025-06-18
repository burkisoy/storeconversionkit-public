import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import ComponentsGrid from '../components/ComponentsGrid';
import { components } from '../data/components';
import { ArrowRight, Copy, Code2, Palette, MousePointerClick, Settings2, LayoutGrid, X, Play, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const handleAddToCart = () => {
    if (sessionStorage.getItem('cartEventSent') === 'true') {
      window.location.href = 'https://buy.stripe.com/7sIeYb7ZQaWW17a9AA';
      return;
    }

    window.gtag('event', 'add_to_cart', {
      currency: 'USD',
      value: 39.0,
      items: [
        {
          item_id: 'premium_1y',
          item_name: 'Store Conversion Kit Premium',
          price: 39.0,
        },
      ],
    });

    sessionStorage.setItem('cartEventSent', 'true');
    window.location.href = 'https://buy.stripe.com/7sIeYb7ZQaWW17a9AA';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="flex justify-center gap-2 mb-4 flex-wrap">
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] xs:text-xs font-medium hover:bg-blue-200 transition-colors"
                >
                  <Play className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                  How it works
                </button>
                
                <a 
                  href="https://shopify.pxf.io/c/5838763/1499948/13624" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-[10px] xs:text-xs font-medium hover:bg-blue-200 transition-colors"
                >
                  <Gift className="w-2.5 h-2.5 xs:w-3 xs:h-3" />
                  Start using Shopify for just $1 for 3 months!
                </a>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-1">Which section will you add to</h2>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-500">your Shopify store today?</h2>
            </div>
            
            <ComponentsGrid components={components} />
          </div>
        </section>
        
        <section className="py-12 relative overflow-hidden bg-white">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8">
                How to Add Sections to Your Store
              </h2>

              <div className="grid gap-4">
                {/* Step 1 */}
                <div className="bg-gradient-to-br from-gray-50/80 to-slate-50/80 backdrop-blur-xl rounded-xl p-4 border border-gray-100 shadow-sm hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center text-blue-700 font-semibold shadow-sm border border-blue-500/30">
                      1
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Open Theme Editor</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <MousePointerClick className="w-4 h-4 flex-shrink-0" />
                          <span>Go to your Shopify admin panel</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <LayoutGrid className="w-4 h-4 flex-shrink-0" />
                          <span>Navigate to Online Store → Themes → Customize</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-br from-gray-50/80 to-slate-50/80 backdrop-blur-xl rounded-xl p-4 border border-gray-100 shadow-sm hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500/20 to-violet-600/20 rounded-lg flex items-center justify-center text-violet-700 font-semibold shadow-sm border border-violet-500/30">
                      2
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Choose & Customize Section</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <Code2 className="w-4 h-4 flex-shrink-0" />
                          <span>Browse our collection of conversion-optimized sections</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <Palette className="w-4 h-4 flex-shrink-0" />
                          <span>Customize colors, text, and layout to match your brand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-br from-gray-50/80 to-slate-50/80 backdrop-blur-xl rounded-xl p-4 border border-gray-100 shadow-sm hover:bg-gradient-to-br hover:from-gray-50 hover:to-slate-50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg flex items-center justify-center text-rose-700 font-semibold shadow-sm border border-rose-500/30">
                      3
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Add Custom Liquid Section</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <Settings2 className="w-4 h-4 flex-shrink-0" />
                          <span>Click "Add Section" → "Custom Liquid"</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <Copy className="w-4 h-4 flex-shrink-0" />
                          <span>Copy and paste the generated code</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-3xl bg-white rounded-2xl shadow-xl z-50 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="absolute right-4 top-4 p-2 bg-black/50 text-white rounded-full z-10 hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="aspect-video w-full">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/wIQdNc9ExL8?autoplay=1" 
                    title="How it works" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default HomePage;