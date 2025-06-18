import React from 'react';

const TabsPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl shadow-lg overflow-hidden">
        <div className="flex">
          {['Tab 1', 'Tab 2', 'Tab 3'].map((tab, index) => (
            <div
              key={index}
              className={`flex-1 text-center py-2.5 text-xs font-bold cursor-pointer transition-colors ${
                index === 0
                  ? 'bg-white text-gray-900'
                  : 'bg-gradient-to-r from-[#1cbcc3] to-[#4abf8f] text-white'
              }`}
              style={{
                borderTopLeftRadius: index === 0 ? '0.75rem' : '0',
                borderTopRightRadius: index === 2 ? '0.75rem' : '0'
              }}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="bg-white p-4 text-xs text-gray-700">
          Content for Tab 1 goes here.
        </div>
      </div>
    </div>
  );
};

export default TabsPreview;