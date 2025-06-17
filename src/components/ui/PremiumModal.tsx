import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PremiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PremiumModal: React.FC<PremiumModalProps> = ({ isOpen, onClose }) => {
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
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />
          
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="w-full max-w-lg mx-4"
            >
              <div className="relative bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="px-8 pt-8 pb-8 relative">
                  <button
                    onClick={onClose}
                    className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>

                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Premium access required
                  </h2>
                  
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    This section is available only to premium users. Unlock lifetime access to all premium components with a one-time payment.
                  </p>

                  <div className="mt-8">
                    <div className="text-center mb-2">
                      <span className="text-sm font-medium text-gray-500">One-time payment · No subscription</span>
                    </div>
                    <button
                      onClick={() => {
                        handleAddToCart();
                        onClose();
                      }}
                      className="block w-full relative"
                    >
                      <div className="absolute inset-0 bg-blue-600 rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-blue-500/20" />
                      <span className="relative flex items-center justify-center gap-2 py-3.5 text-white font-medium">
                        <span>Get Premium</span>
                        <span className="px-2 py-0.5 bg-white/20 rounded-md text-[11px] font-semibold">
                          $39
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PremiumModal;