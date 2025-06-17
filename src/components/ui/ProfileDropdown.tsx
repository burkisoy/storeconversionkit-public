import React, { useState, useEffect, useRef } from 'react';
import { User } from '@supabase/supabase-js';
import { LogOut, ChevronDown, Crown, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { checkPremiumStatus } from '../../lib/supabase';

interface ProfileDropdownProps {
  user: User;
  onLogout: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const checkUserPremiumStatus = async () => {
      if (user?.id) {
        setIsLoading(true);
        setError(null);
        try {
          const hasPremium = await checkPremiumStatus(user.id);
          setIsPremium(hasPremium);
        } catch (err) {
          console.error("Error checking premium status:", err);
          setError("Failed to verify premium status");
          setIsPremium(false);
        } finally {
          setIsLoading(false);
        }
      }
    };

    checkUserPremiumStatus();
  }, [user?.id]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white">
            {user.email?.[0].toUpperCase()}
          </div>
          {isLoading ? (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
              <AlertCircle className="w-3 h-3 text-white" />
            </div>
          ) : isPremium ? (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center shadow-lg">
              <Crown className="w-3 h-3 text-white" />
            </div>
          ) : null}
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-50"
          >
            <div className="px-3 py-2 border-b border-gray-100">
              <div className="text-sm font-medium text-gray-900 truncate">
                {user.email}
              </div>
              {isLoading ? (
                <div className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-0.5">
                  <div className="w-3 h-3 border-2 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
                  Checking status...
                </div>
              ) : error ? (
                <div className="text-xs text-red-500 font-medium flex items-center gap-1 mt-0.5">
                  <AlertCircle className="w-3 h-3" />
                  Status check failed
                </div>
              ) : isPremium ? (
                <div className="text-xs text-amber-600 font-medium flex items-center gap-1 mt-0.5">
                  <Crown className="w-3 h-3" />
                  Premium Member
                </div>
              ) : (
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  Free Account
                </div>
              )}
            </div>

            <button
              onClick={onLogout}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log out
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileDropdown;