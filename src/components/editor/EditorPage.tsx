import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Copy, CheckCircle2, Save, Eye, Settings, AlertCircle, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeEditor from '../components/editor/CodeEditor';
import CustomizationPanel from '../components/editor/CustomizationPanel';
import PreviewPanel from '../components/editor/PreviewPanel';
import TransitionScreen from '../components/TransitionScreen';
import PremiumModal from '../components/ui/PremiumModal';
import useClipboard from '../hooks/useClipboard';
import { useCustomizations } from '../hooks/useCustomizations';
import { components } from '../data/components';
import { ComponentWithCustomization } from '../types';
import { supabase, getCachedAuthStatus } from '../lib/supabase';
import { validateSession } from '../lib/sessionManager';

const EditorPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { copy, copied } = useClipboard();
  const [component, setComponent] = useState<ComponentWithCustomization | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'preview' | 'customize'>('preview');
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  
  const {
    customValues,
    setCustomValues,
    isSaving
  } = useCustomizations(id || '');
  
  useEffect(() => {
    const foundComponent = components.find(c => c.id === id);
    
    if (foundComponent) {
      setComponent(foundComponent);
      
      // Only check premium access if the component is premium
      if (!foundComponent.free) {
        const checkAccess = async () => {
          const cachedAuthStatus = getCachedAuthStatus();
          
          // If we have a cached status saying the user is not authenticated
          if (cachedAuthStatus === false) {
            navigate('/');
            return;
          }
          
          // Validate the session
          const isValid = await validateSession();
          if (!isValid) {
            navigate('/');
            return;
          }
        };
        
        checkAccess();
      }
      
      const initialValues: Record<string, string> = {};
      foundComponent.customizationOptions.forEach(option => {
        initialValues[option.id] = option.defaultValue;
      });
      
      setCustomValues(initialValues);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } else {
      navigate('/');
    }
  }, [id, navigate, setCustomValues]);

  // If component is premium and user is not authenticated, redirect to home
  if (component && !component.free && !getCachedAuthStatus()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Premium Section</h2>
            <p className="text-gray-600">Please sign in to access this premium section.</p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => navigate('/login')}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  const getProcessedCode = () => {
    if (!component) return '';
    
    let processedCode = component.code;
    Object.entries(customValues).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{ ${key} \\| default: ['"].*?['"] }}`, 'g');
      processedCode = processedCode.replace(placeholder, `{{ ${key} | default: '${value}' }}`);
    });
    return processedCode;
  };
  
  const handleCopyCode = () => {
    const processedCode = getProcessedCode();
    if (processedCode) {
      copy(processedCode);
    }
  };

  const handleCustomizationChange = (id: string, value: string) => {
    setCustomValues(prev => ({ ...prev, [id]: value }));
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <TransitionScreen isVisible={isLoading} />}
      </AnimatePresence>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        className="min-h-screen flex flex-col bg-[#f5f5f7]"
      >
        {/* Top Navigation - Hidden on desktop, visible on mobile */}
        <div className="lg:hidden sticky top-0 left-0 right-0 z-30 bg-[#f5f5f7]/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Back</span>
              </button>
            </div>

            {/* Mobile Tabs */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => setActiveTab('preview')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'preview'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'bg-white/50 text-gray-600'
                }`}
              >
                <Eye className="w-4 h-4" />
                Preview
              </button>
              <button
                onClick={() => setActiveTab('customize')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeTab === 'customize'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'bg-white/50 text-gray-600'
                }`}
              >
                <Settings className="w-4 h-4" />
                Customize
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Back Button */}
        <div className="hidden lg:block fixed top-4 left-4 z-30">
          <button
            onClick={() => navigate('/')}
            className="p-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Preview Area */}
          <div 
            className={`flex-1 relative ${
              activeTab === 'customize' ? 'hidden lg:block' : ''
            }`}
          >
            {component && (
              <div className="p-4 lg:fixed lg:top-8 lg:left-8 lg:right-[400px] lg:bottom-8">
                <PreviewPanel component={component} customValues={customValues} />
              </div>
            )}
          </div>

          {/* Customization Panel */}
          <div 
            className={`lg:w-[400px] bg-white shadow-lg overflow-y-auto ${
              activeTab === 'preview' ? 'hidden lg:block' : ''
            }`}
          >
            {component && (
              <div className="p-6">
                <div className="mb-8">
                  <h1 className="text-2xl font-semibold text-gray-900">{component.title}</h1>
                  <p className="text-gray-600 mt-2">{component.description}</p>
                  
                  {(component.id === 'accordion' || component.id === 'announcement-bar') && (
                    <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <AlertCircle className="w-5 h-5 text-amber-500" />
                        </div>
                        <p className="text-sm text-amber-700">
                          Some contents in this section can only be edited through your Shopify theme editor
                        </p>
                      </div>
                    </div>
                  )}
                  
                  <motion.button
                    onClick={handleCopyCode}
                    className={`mt-6 w-full flex items-center justify-center px-6 py-3.5 rounded-xl font-medium transition-all duration-300 ${
                      copied 
                        ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="copied"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center"
                        >
                          <CheckCircle2 className="h-5 w-5 mr-2" />
                          <span>Copied!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center"
                        >
                          <Copy className="h-5 w-5 mr-2" />
                          <span>Copy Code</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <AnimatePresence>
                    {isSaving && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-3 flex items-center justify-center text-sm text-gray-500"
                      >
                        <Save className="w-4 h-4 mr-2 animate-spin" />
                        Saving changes...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <CustomizationPanel 
                  options={component.customizationOptions}
                  values={customValues}
                  onChange={handleCustomizationChange}
                />
                
                <div className="mt-8 pt-8 border-t">
                  <CodeEditor 
                    component={component}
                    customValues={customValues}
                    onCopyCode={handleCopyCode}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <PremiumModal 
        isOpen={showPremiumModal}
        onClose={() => setShowPremiumModal(false)}
      />
    </>
  );
};

export default EditorPage;