import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Navbar from '../components/ui/Navbar';

const PricingPage = () => {
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">Simple, transparent pricing</h1>
            <p className="text-lg text-gray-600">Choose the plan that's right for your store</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Free</h2>
                <p className="text-gray-600 mt-2">Perfect for getting started</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">$0</div>
                <div className="text-sm text-gray-500">Forever free</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Access to free sections</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Basic customization options</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Use on 1 store</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Premium sections</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Advanced customization</span>
                </li>
              </ul>

              <button className="w-full px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-2xl p-8 border border-blue-100 shadow-lg relative">
              <div className="absolute -top-4 left-8">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  ONE-TIME PAYMENT
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Premium</h2>
                <p className="text-gray-600 mt-2">Everything you need to grow</p>
              </div>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900">$39</div>
                <div className="text-sm text-gray-500">One-time purchase</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Unlimited access to all premium sections</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Unlimited store</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Lifetime updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Priority email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Early access to new sections</span>
                </li>
              </ul>

              <button
                onClick={handleAddToCart}
                className="block w-full px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl hover:opacity-90 transition-opacity text-center"
              >
                Get Premium Access
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Questions? Contact us at support@storeconversionkit.com
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;