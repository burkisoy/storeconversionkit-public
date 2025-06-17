import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { Mail, ArrowRight, Loader2, ArrowLeft, AlertCircle, Code2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { setCachedAuthStatus, checkPremiumStatus } from '../lib/supabase';
import { createSession, clearSession } from '../lib/sessionManager';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Clear any existing sessions on page load
  useEffect(() => {
    const clearExistingSessions = async () => {
      // Clear local session data
      clearSession();
      
      // Sign out from Supabase
      await supabase.auth.signOut();
    };
    
    clearExistingSessions();
  }, []);

  useEffect(() => {
    if (error) {
      setError('');
    }
  }, [email]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          shouldCreateUser: false
        }
      });

      if (error) {
        if (error.message.includes('Signups not allowed') || error.message.includes('User not found')) {
          setError('This email is not associated with any premium account. If you think this is a mistake, contact support@storeconversionkit.com');
        } else {
          setError(error.message);
        }
      } else {
        setSuccess('Check your email for the login code');
        setStep(2);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Sign out any existing sessions first to ensure we're starting fresh
      await supabase.auth.signOut();
      
      // Clear any existing session data
      clearSession();
      
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email'
      });

      if (error) {
        setError(error.message);
      } else if (data.session) {
        try {
          // Create a new session in our custom session management system
          const success = await createSession(
            data.session.user.id,
            data.session.access_token
          );
          
          if (!success) {
            setError('Failed to create session. Please try again.');
            return;
          }
          
          // Check if user has premium access
          const hasPremium = await checkPremiumStatus(data.session.user.id);
          
          // Set cached auth status based on premium status
          setCachedAuthStatus(hasPremium);
          
          // Redirect to home page
          window.location.href = '/';
        } catch (sessionError) {
          console.error('Session creation error:', sessionError);
          setError('Failed to create session. Please try again.');
        }
      }
    } catch (err) {
      console.error('OTP verification error:', err);
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Subtle liquid glass background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gray-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
      </div>

      {/* Back button */}
      <div className="relative z-10 p-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200 shadow-lg mb-6">
                <Code2 className="w-8 h-8 text-blue-600" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-gray-900 mb-2"
            >
              Sign in to your account
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 text-lg"
            >
              Welcome back to Store Conversion Kit
            </motion.p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="backdrop-blur-xl bg-white/95 border border-gray-200 p-8 rounded-3xl shadow-xl"
          >
            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.form
                  key="email-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleEmailSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-sm font-semibold mb-2 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full px-4 py-3 bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500 rounded-xl focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50 text-base"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading || !email}
                    className="w-full relative py-3 px-4 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all bg-blue-600 hover:bg-blue-700 text-white text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      'Sign in'
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.form
                  key="otp-form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleOtpSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label 
                      htmlFor="otp" 
                      className="block text-sm font-semibold mb-2 text-gray-900"
                    >
                      Verification code
                    </label>
                    <input
                      type="text"
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      disabled={loading}
                      className="w-full px-4 py-3 text-center text-xl tracking-widest bg-white border border-gray-200 text-gray-900 placeholder-gray-500 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all disabled:opacity-50"
                      placeholder="000000"
                      maxLength={6}
                      pattern="\d{6}"
                      required
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      We sent a code to <span className="font-medium">{email}</span>
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading || !otp}
                    className="w-full py-3 px-4 rounded-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 transition-all bg-blue-600 hover:bg-blue-700 text-white text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin mx-auto" />
                    ) : (
                      'Verify'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Error/Success Messages */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>{success}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          {/* Info Cards */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6"
            >
              <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm">
                    Please use the email address associated with your Stripe payment.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 space-y-4"
            >
              <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-sm">
                    Check your email and spam folder for the verification code.
                  </p>
                </div>
              </div>
              
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setOtp('');
                  setError('');
                  setSuccess('');
                }}
                className="w-full text-sm text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                ← Back to email
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;