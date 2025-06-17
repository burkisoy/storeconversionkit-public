import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const SuccessPage = () => {
  const navigate = useNavigate();

  // Track conversion when component mounts
  useEffect(() => {
    // Check if gtag is available
    if (typeof window.gtag === 'function') {
      // Send conversion event to Google Ads
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17061716466/LcoLCP_p7MMaEPLD1Mc_',
        'value': 39.0,
        'currency': 'USD',
        'transaction_id': '13493222313453'
      });
      
      // Send purchase event to Google Analytics 4
      window.gtag('event', 'purchase', {
        currency: 'USD',
        transaction_id: '13493222313453',
        value: 39.0,
        items: [{
          item_id: 'premium_1y',
          item_name: 'Store Conversion Kit Premium',
          price: 39.0,
          quantity: 1
        }]
      });
    } else {
      console.warn('Google Tag Manager not loaded, unable to track conversion');
    }

    // Hide announcement bar by adding a class to the body
    document.body.classList.add('hide-announcement-bar');

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove('hide-announcement-bar');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600">
            Thank you for your purchase. Your premium access has been activated.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
        >
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">1</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Access Premium Content</h3>
                <p className="text-sm text-gray-600">
                  You now have full access to all premium sections and features.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">2</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Log In to Your Account</h3>
                <p className="text-sm text-gray-600">
                  Use the email address you provided during checkout to log in.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-semibold">3</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Start Creating</h3>
                <p className="text-sm text-gray-600">
                  Customize and add premium sections to your store.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/login"
              className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Continue to Login
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-gray-500">
            If you have any questions, please contact{' '}
            <a href="mailto:support@storeconversionkit.com" className="text-blue-600 hover:underline">
              support@storeconversionkit.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage;