import React from 'react';
import { ChevronDown, Type, Layout, Palette } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CustomizationOption } from '../../types';

interface CustomizationPanelProps {
  options: CustomizationOption[];
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
}

interface CustomizationGroupProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const CustomizationGroup: React.FC<CustomizationGroupProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4 last:mb-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-4 text-left bg-gradient-to-r from-gray-50/50 to-slate-50/50 hover:bg-gradient-to-r hover:from-gray-50 hover:to-slate-50 transition-all"
      >
        <span className="text-sm font-medium text-gray-900">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-4 space-y-4 bg-gradient-to-b from-white to-gray-50/30">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CustomizationPanel: React.FC<CustomizationPanelProps> = ({ options, values, onChange }) => {
  const [openGroups, setOpenGroups] = React.useState<Record<string, boolean>>({
    content: true,
    colors: true,
    layout: true
  });

  const toggleGroup = (group: string) => {
    setOpenGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  const contentOptions = options.filter(opt => 
    opt.type === 'text' && !opt.id.includes('color')
  );
  
  const colorOptions = options.filter(opt => 
    opt.type === 'color' || 
    opt.id.includes('color') || 
    opt.id.includes('bg') || 
    opt.id.includes('gradient')
  );
  
  const layoutOptions = options.filter(opt => 
    opt.id.includes('padding') || 
    opt.id.includes('margin') || 
    opt.id.includes('radius') || 
    opt.id.includes('spacing') ||
    opt.id.includes('alignment')
  );

  const renderControl = (option: CustomizationOption) => {
    switch (option.type) {
      case 'color':
        return (
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="color"
                id={option.id}
                value={values[option.id] || option.defaultValue}
                onChange={(e) => onChange(option.id, e.target.value)}
                className="sr-only"
              />
              <div 
                className="w-10 h-10 rounded-xl cursor-pointer shadow-sm transition-shadow hover:shadow-md border-2 border-white ring-1 ring-gray-200"
                style={{ backgroundColor: values[option.id] || option.defaultValue }}
                onClick={() => document.getElementById(option.id)?.click()}
              />
            </div>
            <input
              type="text"
              value={values[option.id] || ''}
              onChange={(e) => onChange(option.id, e.target.value)}
              className="flex-1 px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder={option.defaultValue}
            />
          </div>
        );

      case 'text':
        return (
          <div className="relative">
            <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={values[option.id] || ''}
              onChange={(e) => onChange(option.id, e.target.value)}
              className="w-full pl-10 pr-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              placeholder={option.defaultValue}
            />
          </div>
        );

      case 'select':
        return (
          <div className="relative">
            <select
              value={values[option.id] || ''}
              onChange={(e) => onChange(option.id, e.target.value)}
              className="w-full pl-10 pr-8 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none transition-shadow"
            >
              <option value="">{option.defaultValue}</option>
              {option.options?.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <Layout className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
        );
    }
  };

  const renderOptionGroup = (options: CustomizationOption[], icon: React.ReactNode) => {
    return options.map(option => (
      <div key={option.id} className="group space-y-2">
        <label className="flex items-center text-sm font-medium text-gray-700">
          {icon}
          <span className="ml-2">{option.label}</span>
        </label>
        {renderControl(option)}
      </div>
    ));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Customize Component</h2>
      
      {contentOptions.length > 0 && (
        <CustomizationGroup
          title="Content"
          isOpen={openGroups.content}
          onToggle={() => toggleGroup('content')}
        >
          {renderOptionGroup(contentOptions, <Type className="w-4 h-4 text-gray-400" />)}
        </CustomizationGroup>
      )}

      {colorOptions.length > 0 && (
        <CustomizationGroup
          title="Colors"
          isOpen={openGroups.colors}
          onToggle={() => toggleGroup('colors')}
        >
          {renderOptionGroup(colorOptions, <Palette className="w-4 h-4 text-gray-400" />)}
        </CustomizationGroup>
      )}

      {layoutOptions.length > 0 && (
        <CustomizationGroup
          title="Layout"
          isOpen={openGroups.layout}
          onToggle={() => toggleGroup('layout')}
        >
          {renderOptionGroup(layoutOptions, <Layout className="w-4 h-4 text-gray-400" />)}
        </CustomizationGroup>
      )}
    </div>
  );
};

export default CustomizationPanel;