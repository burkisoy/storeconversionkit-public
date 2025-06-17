import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PreviewWrapperProps } from './types';

export const PreviewWrapper: React.FC<PreviewWrapperProps> = ({ previewHTML }) => {
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="relative h-full bg-[#f5f5f7] rounded-2xl overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/50 to-transparent backdrop-blur-sm z-20">
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
        </div>
        
        <div className="absolute top-2 right-4 flex items-center bg-white/80 rounded-full px-2 py-1 shadow-sm">
          <button 
            onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            -
          </button>
          <span className="mx-2 text-sm text-gray-600 min-w-[3rem] text-center">
            {Math.round(scale * 100)}%
          </span>
          <button 
            onClick={() => setScale(s => Math.min(2, s + 0.1))}
            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
          >
            +
          </button>
        </div>
      </div>
      
      <motion.div 
        className="relative w-full h-full pt-16 pb-8 px-8"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23999999\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        <motion.div
          drag
          dragMomentum={false}
          dragElastic={0}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          animate={{ scale }}
          style={{ x: position.x, y: position.y }}
          className="inline-block bg-white rounded-xl shadow-lg p-8"
        >
          <div 
            className="preview-content"
            dangerouslySetInnerHTML={{ __html: previewHTML }}
          />
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm z-20">
        <p className="text-xs text-gray-500 whitespace-nowrap">
          Click and drag to move • Scroll to zoom
        </p>
      </div>
    </div>
  );
};