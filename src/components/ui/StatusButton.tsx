import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UpdateItem {
  id: string;
  title: string;
  description: string;
  type: 'feature' | 'fix' | 'improvement' | 'maintenance';
  date: string;
  version?: string;
}

// Mock data - in a real app, this would come from an API
const mockUpdates: UpdateItem[] = [
  {
    id: '1',
    title: 'Product Features Premium Section Added',
    description: 'Added Product Features Premium section with enhanced functionality.',
    type: 'feature',
    date: '2025-06-18',
    version: 'v2.1.0'
  },
  {
    id: '2',
    title: 'Premium Shipping Badge Mobile Optimization',
    description: 'Updated Premium Shipping Badge section to be mobile-responsive and location-aware for customers.',
    type: 'improvement',
    date: '2025-06-18',
    version: 'v2.0.5'
  }
];

const StatusButton: React.FC = () => {
  const navigate = useNavigate();
  const [hasNewUpdates, setHasNewUpdates] = useState(false);

  useEffect(() => {
    // Check if there are new updates (simulate checking against last seen date)
    const lastSeenDate = localStorage.getItem('lastSeenUpdateDate');
    const latestUpdateDate = mockUpdates[0]?.date;
    
    if (!lastSeenDate || (latestUpdateDate && latestUpdateDate > lastSeenDate)) {
      setHasNewUpdates(true);
    }
  }, []);

  const handleClick = () => {
    navigate('/status');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="relative px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative">
        <Activity className="w-4 h-4" />
        {hasNewUpdates && (
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </div>
      Status
      {hasNewUpdates && (
        <motion.span
          className="px-1.5 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          New
        </motion.span>
      )}
    </motion.button>
  );
};

export default StatusButton; 