import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-x-4">
          <Link 
            to="/privacy-policy" 
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms-of-service" 
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            to="/refund-policy" 
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;