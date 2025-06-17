import React from 'react';
import { sanitizeText, withSecureErrorBoundary } from './utils/securityUtils';

const SecureFloatingComments: React.FC = () => {
  // Secure data matching editor preview
  const secureData = {
    comments: [
      {
        name: sanitizeText('John Doe', 20),
        time: sanitizeText('5h ago', 10),
        text: sanitizeText('This product is fantastic! It has really made a positive difference...', 80)
      },
      {
        name: sanitizeText('Jane Smith', 20),
        time: sanitizeText('5h ago', 10),
        text: sanitizeText('This product has changed my life! I can\'t believe how effective it is. 🌟', 80)
      }
    ]
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-2 overflow-hidden">
      <style>
        {`
          @keyframes float-animation {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .floating-comment {
            animation: float-animation 4s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="flex gap-2 overflow-x-auto">
        {secureData.comments.map((comment, index) => (
          <div
            key={index}
            className={`flex-shrink-0 bg-white rounded-lg p-2 shadow-sm min-w-[120px] max-w-[140px] floating-comment`}
            style={{ animationDelay: `${index * 1}s` }}
          >
            {/* Header */}
            <div className="flex items-center mb-1">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mr-2">
                <span className="text-[8px] text-white font-bold">
                  {comment.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[7px] font-bold truncate">{comment.name}</div>
                <div className="text-[6px] text-gray-500">{comment.time}</div>
              </div>
            </div>

            {/* Comment Text */}
            <div className="text-[6px] leading-tight mb-1 line-clamp-3">
              {comment.text}
            </div>

            {/* Reactions */}
            <div className="flex items-center justify-between text-[6px] text-gray-500">
              <div className="flex items-center gap-1">
                <span>👍</span>
                <span>❤️</span>
                <span>😮</span>
              </div>
              <div>5 Comments</div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-100 mt-1 pt-1 flex justify-between text-[6px] text-gray-500">
              <span>Like</span>
              <span>Comment</span>
              <span>Share</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FloatingCommentsPreview = withSecureErrorBoundary(SecureFloatingComments);

export default FloatingCommentsPreview;