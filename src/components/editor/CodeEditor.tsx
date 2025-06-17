import React, { useEffect, useState } from 'react';
import { ComponentWithCustomization } from '../../types';

interface CodeEditorProps {
  component: ComponentWithCustomization;
  customValues: Record<string, string>;
  onCopyCode: () => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ component, customValues }) => {
  const [processedCode, setProcessedCode] = useState(component.code);
  
  useEffect(() => {
    let updatedCode = component.code;
    Object.entries(customValues).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{ ${key} \\| default: ['"].*?['"] }}`, 'g');
      updatedCode = updatedCode.replace(placeholder, `{{ ${key} | default: '${value}' }}`);
    });
    setProcessedCode(updatedCode);
  }, [component.code, customValues]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">How to Add to Shopify</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                1
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Open Theme Editor</h4>
                <p className="text-sm text-gray-600">Go to Online Store → Themes → Customize</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                2
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Add Custom Liquid</h4>
                <p className="text-sm text-gray-600">Click "Add Section" → "Custom Liquid"</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                3
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Paste the Code</h4>
                <p className="text-sm text-gray-600">Copy the code above and paste it into the Custom Liquid section</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold">
                4
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-1">Save Changes</h4>
                <p className="text-sm text-gray-600">Click "Save" to apply the changes to your theme</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
          <p className="text-sm text-blue-700">
            Need help? Our support team is available 24/7 to assist you with implementation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;