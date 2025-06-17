import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HowToUsePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToUsePopup: React.FC<HowToUsePopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="w-full max-w-xl bg-white rounded-2xl shadow-xl z-50 overflow-hidden mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative p-6">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Use Store Conversion Kit</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">1. Browse & Select</h3>
                    <p className="text-gray-600">Browse through our collection of premium sections. Click "Customize" on any section that catches your eye.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">2. Customize</h3>
                    <p className="text-gray-600">Adjust colors, text, and layout to match your brand. Preview changes in real-time.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">3. Copy & Implement</h3>
                    <p className="text-gray-600">Copy the generated code and paste it into your Shopify theme. The section will automatically inherit your customizations.</p>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-sm text-blue-700">Need help? Contact our support team and we'll help you implement any section into your store.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default HowToUsePopup;