import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Users, Play, Gift, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { components } from '../data/components';
import ComponentCard from '../components/ComponentCard';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

const SectionPage = () => {
  const { id } = useParams();
  const component = components.find(c => c.id === id);
  const [showVideoModal, setShowVideoModal] = useState(false);
  
  // Get specific components to display
  const giftBoxComponent = components.find(c => c.id === 'gift-box');
  const customerReviewsComponent = components.find(c => c.id === 'customer-reviews');
  const offerBoxComponent = components.find(c => c.id === 'offer-box');
  
  // Create an array of the specific components (filtering out any undefined ones)
  const specificComponents = [giftBoxComponent, customerReviewsComponent, offerBoxComponent].filter(Boolean);

  if (!component) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">Section not found</h1>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 flex flex-col">
      <Navbar />
      <main className="flex-1 py-6 sm:py-12 overflow-hidden">
        <div className="container mx-auto px-4 max-w-[100vw]">
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
          
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md">
              <ComponentCard component={component} />
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Other Sections You Might Like</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specificComponents.map((otherComponent) => (
                <ComponentCard key={otherComponent.id} component={otherComponent} />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Link 
                to="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm"
              >
                View All Sections
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />

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
    </div>
  );
};

export default SectionPage;