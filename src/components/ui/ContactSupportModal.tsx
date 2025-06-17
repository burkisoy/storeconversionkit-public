import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Mail, MessageSquareMore } from 'lucide-react';

interface ContactSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactSupportModal: React.FC<ContactSupportModalProps> = ({ isOpen, onClose }) => {
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
              className="w-full max-w-lg bg-white rounded-2xl shadow-xl z-50 overflow-hidden mx-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative p-6">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Support</h2>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <AlertCircle className="w-5 h-5 text-amber-500" />
                      </div>
                      <p className="text-sm text-amber-700">
                        For faster resolution, please include all relevant details in your support request:
                        <ul className="list-disc ml-4 mt-2 space-y-1">
                          <li>Your Shopify store URL</li>
                          <li>Section name or ID</li>
                          <li>Detailed description of your issue</li>
                          <li>Screenshots (if applicable)</li>
                        </ul>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <Mail className="w-5 h-5 text-gray-600" />
                      <div>
                        <div className="font-medium text-gray-900">Email Support</div>
                        <a href="mailto:support@storeconversionkit.com" className="text-gray-700 hover:text-gray-800">
                          support@storeconversionkit.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                      <MessageSquareMore className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="font-medium text-green-900">Live Chat</div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-700">Coming soon</span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                            Currently unavailable
                          </span>
                        </div>
                      </div>
                    </div>
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

export default ContactSupportModal;