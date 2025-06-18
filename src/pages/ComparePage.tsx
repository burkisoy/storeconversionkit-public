import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Paintbrush, Layout } from 'lucide-react';
import Navbar from '../components/ui/Navbar';

const ComparePage = () => {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      <Navbar />
      
      <main className="flex-1 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6"
            >
              The Future of Shopify Themes
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Why spend $500+ when you can get better results for less?
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Premium Themes Card */}
              <div className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-lg">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Themes</h3>
                  <div className="text-4xl font-bold text-gray-900">$500+</div>
                  <p className="text-gray-500 mt-2">Per theme</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-50">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Complex Setup</h4>
                      <p className="text-sm text-gray-500">Hours of theme configuration required</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-50">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Limited Customization</h4>
                      <p className="text-sm text-gray-500">Stuck with theme settings</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-50">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Slow Loading</h4>
                      <p className="text-sm text-gray-500">Entire theme loads at once</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-red-50">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Breaking Changes</h4>
                      <p className="text-sm text-gray-500">Updates may break customizations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Store Conversion Kit Card */}
              <div className="relative p-8 rounded-2xl bg-gradient-to-b from-blue-600 to-violet-600 overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                
                <div className="absolute top-0 right-0 p-4">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-white/20 backdrop-blur-sm">
                    RECOMMENDED
                  </div>
                </div>

                <div className="mb-8 relative">
                  <h3 className="text-2xl font-bold text-white mb-2">Store Conversion Kit</h3>
                  <div className="text-4xl font-bold text-white">$39</div>
                  <p className="text-blue-200 mt-2">One-time payment</p>
                </div>

                <div className="space-y-6 relative">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Simple Copy & Paste</h4>
                      <p className="text-sm text-blue-200">Add sections in seconds</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Full Control</h4>
                      <p className="text-sm text-blue-200">Customize every detail</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Lightning Fast</h4>
                      <p className="text-sm text-blue-200">Only load what you use</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Future-Proof</h4>
                      <p className="text-sm text-blue-200">Independent sections never break</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={handleAddToCart}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-4 px-6 bg-white rounded-xl text-blue-600 font-semibold hover:bg-white/90 transition-colors relative"
                >
                  Get Started Now
                </motion.button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Setup</h3>
                <p className="text-gray-600">No complex theme setup required. Copy, paste, and you're done.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                  <Paintbrush className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Customization</h3>
                <p className="text-gray-600">Customize every aspect to match your brand perfectly.</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-xl bg-white border border-gray-200 shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-pink-50 flex items-center justify-center mb-4">
                  <Layout className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Theme Compatible</h3>
                <p className="text-gray-600">Works with any Shopify theme, now and in the future.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ComparePage;