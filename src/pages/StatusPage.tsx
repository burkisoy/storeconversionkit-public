import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle, AlertCircle, Info, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactSupportModal from '../components/ui/ContactSupportModal';

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
    title: 'Smart Search Bar with AI-Powered Features',
    description: 'Implemented intelligent search with fuzzy matching, real-time suggestions, recent searches history, and keyboard shortcuts (⌘K). Now you can find sections faster with typo tolerance and smart recommendations.',
    type: 'feature',
    date: '2024-12-16',
    version: 'v2.2.0'
  },
  {
    id: '2',
    title: 'Product Features Premium Section Added',
    description: 'Added Product Features Premium section with enhanced functionality.',
    type: 'feature',
    date: '2024-06-18',
    version: 'v2.1.0'
  },
  {
    id: '3',
    title: 'Premium Shipping Badge Mobile Optimization',
    description: 'Updated Premium Shipping Badge section to be mobile-responsive and location-aware for customers.',
    type: 'improvement',
    date: '2024-06-18',
    version: 'v2.0.5'
  }
];

const getTypeIcon = (type: UpdateItem['type']) => {
  switch (type) {
    case 'feature':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'fix':
      return <AlertCircle className="w-5 h-5 text-orange-500" />;
    case 'improvement':
      return <Info className="w-5 h-5 text-blue-500" />;
    case 'maintenance':
      return <Activity className="w-5 h-5 text-purple-500" />;
    default:
      return <Info className="w-5 h-5 text-gray-500" />;
  }
};

const getTypeColor = (type: UpdateItem['type']) => {
  switch (type) {
    case 'feature':
      return 'bg-green-50 text-green-700 border-green-200';
    case 'fix':
      return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'improvement':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'maintenance':
      return 'bg-purple-50 text-purple-700 border-purple-200';
    default:
      return 'bg-gray-50 text-gray-700 border-gray-200';
  }
};

const StatusPage: React.FC = () => {
  const [updates, setUpdates] = useState<UpdateItem[]>([]);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // Simulate fetching updates
    setUpdates(mockUpdates);
    
    // Mark updates as seen when page loads
    const latestUpdateDate = mockUpdates[0]?.date;
    if (latestUpdateDate) {
      localStorage.setItem('lastSeenUpdateDate', latestUpdateDate);
    }
  }, []);



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">System Status</h1>
                <p className="text-gray-600">Latest updates and system changes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="container mx-auto px-6 py-6">
        <motion.div
          className="bg-white rounded-2xl p-6 border border-gray-200 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">All Systems Operational</h2>
                <p className="text-sm text-gray-600">All services running smoothly</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>
        </motion.div>

        {/* Updates Timeline */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Updates</h2>
            <p className="text-gray-600 mt-1">Latest deployments and system changes</p>
          </div>

          <div className="divide-y divide-gray-200">
            {updates.map((update, index) => (
              <motion.div
                key={update.id}
                className="p-6 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(update.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {update.title}
                          </h3>
                          {update.version && (
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-mono">
                              {update.version}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {update.description}
                        </p>
                      </div>

                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 text-sm rounded-full border ${getTypeColor(update.type)}`}>
                        {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                      </span>

                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            For technical support or questions, please{' '}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="text-blue-600 hover:text-blue-700 font-medium underline bg-transparent border-none cursor-pointer"
            >
              contact our support team
            </button>
          </p>
        </div>
      </div>

      <ContactSupportModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default StatusPage; 