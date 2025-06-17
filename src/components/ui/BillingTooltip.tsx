import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface BillingTooltipProps {
  error: string | null;
  hasStripeCustomerId: boolean;
  isVisible: boolean;
}

const BillingTooltip: React.FC<BillingTooltipProps> = ({ error, hasStripeCustomerId, isVisible }) => {
  const [showTooltip, setShowTooltip] = React.useState(isVisible);

  useEffect(() => {
    setShowTooltip(isVisible);

    if (error) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, error]);

  const isError = error || !hasStripeCustomerId;

  return (
    <AnimatePresence>
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          <div className="p-3 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700">
              {error || (!hasStripeCustomerId ? 'Billing information is unavailable. Please contact support.' : 'Manage your subscription')}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BillingTooltip;