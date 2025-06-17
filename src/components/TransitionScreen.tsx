import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface TransitionScreenProps {
  isVisible: boolean;
}

const TransitionScreen: React.FC<TransitionScreenProps> = ({ isVisible }) => {
  const [currentMessage, setCurrentMessage] = useState<1 | 2>(1);
  
  useEffect(() => {
    if (isVisible) {
      // Change to the second message after 1 second
      const timer = setTimeout(() => {
        setCurrentMessage(2);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Reset to first message when screen is hidden
      setCurrentMessage(1);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-md px-4">
        {/* Stripe-like loading bar */}
        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-8">
          <motion.div 
            className="h-full bg-blue-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ 
              duration: 3, // 3 seconds total duration
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Loading text with animation */}
        <AnimatePresence mode="wait">
          {currentMessage === 1 ? (
            <motion.p
              key="message1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center text-gray-600 font-medium"
            >
              Loading editor...
            </motion.p>
          ) : (
            <motion.p
              key="message2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-center text-gray-600 font-medium"
            >
              Performing security checks...
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TransitionScreen;