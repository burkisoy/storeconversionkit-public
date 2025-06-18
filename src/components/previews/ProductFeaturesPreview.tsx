const ProductFeaturesPreview = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-1 bg-gradient-to-br from-gray-50 to-slate-50">
      <div 
        className="w-full max-w-xs rounded-xl p-2 scale-[0.95]"
        style={{ 
          background: '#f0f9ff',
          border: '1px solid #bae6fd'
        }}
      >
        {/* Exact two-column layout */}
        <div className="flex gap-2">
                     {/* Left: Product Image */}
           <div className="flex-1 flex items-center justify-center p-1">
             <div 
               className="w-full aspect-square rounded-lg relative"
               style={{
                 background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'center',
                 border: '2px dashed rgba(255,255,255,0.3)'
               }}
             >
               {/* Image icon overlay */}
               <div className="absolute top-1 right-1">
                 <svg width="8" height="8" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                   <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                 </svg>
               </div>
               
                               <div className="w-8 h-6 bg-white rounded-sm opacity-90 flex items-center justify-center shadow-sm">
                  <div className="text-[6px] text-purple-700 font-bold">IMAGE</div>
                </div>
               
               {/* Corner fold effect */}
               <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-20 transform rotate-45 translate-x-1 -translate-y-1"></div>
             </div>
           </div>
          
          {/* Right: Content */}
          <div className="flex-1 flex items-center justify-center p-1">
            <div 
              className="w-full h-full rounded-lg p-2"
              style={{
                background: 'white',
                border: '1px solid #bae6fd'
              }}
            >
              {/* Title */}
              <h2 className="text-[8px] font-bold mb-1" style={{ color: '#0ea5e9' }}>
                Product Features <span className="italic" style={{ color: '#38bdf8' }}>Premium</span>
              </h2>
              
              {/* Description */}
              <p className="text-[6px] mb-2" style={{ color: '#555' }}>
                Discover the outstanding features that make our product stand out from the competition.
              </p>
              
              {/* Features */}
              <div className="space-y-1">
                <div className="flex items-start gap-1">
                  <svg width="4" height="4" viewBox="0 0 24 24" fill="#0ea5e9" className="mt-0.5">
                    <path d="M9 16.2l-3.5-3.6-1.4 1.4L9 19 20 8l-1.4-1.4z"/>
                  </svg>
                  <div>
                    <div className="text-[5px] font-bold" style={{ color: '#333' }}>High Quality Materials</div>
                    <div className="text-[4px]" style={{ color: '#555' }}>Made with premium materials</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-1">
                  <svg width="4" height="4" viewBox="0 0 24 24" fill="#0ea5e9" className="mt-0.5">
                    <circle cx="12" cy="12" r="8"/>
                  </svg>
                  <div>
                    <div className="text-[5px] font-bold" style={{ color: '#333' }}>Easy to Use Design</div>
                    <div className="text-[4px]" style={{ color: '#555' }}>Intuitive design makes this simple</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-1">
                  <svg width="4" height="4" viewBox="0 0 24 24" fill="#0ea5e9" className="mt-0.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                  </svg>
                  <div>
                    <div className="text-[5px] font-bold" style={{ color: '#333' }}>Multiple Configuration Options</div>
                    <div className="text-[4px]" style={{ color: '#555' }}>Customize your experience</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-1">
                  <svg width="4" height="4" viewBox="0 0 24 24" fill="#0ea5e9" className="mt-0.5">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <div>
                    <div className="text-[5px] font-bold" style={{ color: '#333' }}>Long-Term Value</div>
                    <div className="text-[4px]" style={{ color: '#555' }}>A smart investment that pays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeaturesPreview; 