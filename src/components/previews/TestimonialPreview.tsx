import React from 'react';
import { CheckCircle } from 'lucide-react';

const TestimonialPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full bg-white rounded-xl border border-gray-200 p-6">
        <div className="text-xl font-medium text-gray-900 mb-4">
          "I love this! It was easy to setup and fast shipping"
        </div>
        <div className="text-base text-gray-900 mb-2">John D.</div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <CheckCircle className="w-4 h-4" />
          <span>Verified Buyer</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialPreview;