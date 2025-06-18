import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ComponentCard from './ComponentCard';
import { ComponentWithCustomization } from '../types';
import { supabase } from '../lib/supabase';
import Fuse from 'fuse.js';

interface ComponentsGridProps {
  components: ComponentWithCustomization[];
}

const ITEMS_PER_ROW = 3;
const INITIAL_ROWS = 2; // Show fewer rows initially
const BATCH_SIZE = 6; // Load this many components at a time

const searchPlaceholders = [
  "TikTok Videos Section...",
  "GiftBox Section...",
  "Scrolling Reviews Section...",
  "Offer Section..."
];

const ComponentsGrid: React.FC<ComponentsGridProps> = ({ components: initialComponents }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_ROW * INITIAL_ROWS);
  const [isLoading, setIsLoading] = useState(false);
  const [components, setComponents] = useState(initialComponents);
  const [displayedComponents, setDisplayedComponents] = useState<ComponentWithCustomization[]>([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<ComponentWithCustomization[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  
  const observer = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', 'Recently Added', ...Array.from(new Set(components.map(comp => comp.category)))];
  
  // Fuse.js setup for fuzzy search
  const fuseOptions = {
    keys: [
      { name: 'title', weight: 3 },
      { name: 'description', weight: 2 },
      { name: 'tags', weight: 1 },
      { name: 'category', weight: 1 }
    ],
    threshold: 0.3,
    includeScore: true,
    minMatchCharLength: 2
  };
  
  const fuse = useRef<Fuse<ComponentWithCustomization>>(new Fuse([], fuseOptions));
  
  // Update Fuse index when components change
  useEffect(() => {
    fuse.current = new Fuse(components, fuseOptions);
  }, [components]);
  
  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);
  
  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  // Handle clicks outside suggestions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node) &&
          searchInputRef.current && !searchInputRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setPlaceholderIndex((current) => (current + 1) % searchPlaceholders.length);
        setIsTransitioning(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Subscribe to customize count changes
  useEffect(() => {
    const channel = supabase
      .channel('sections_changes')
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'sections'
        },
        () => {
          // Fetch updated components with counts
          fetchComponentsWithCounts();
        }
      )
      .subscribe();

    // Initial fetch
    fetchComponentsWithCounts();

    return () => {
      channel.unsubscribe();
    };
  }, [initialComponents, categoryFilter]);

  // Progressive loading of components
  useEffect(() => {
    const filteredComponents = getFilteredComponents();

    if (isInitialLoad) {
      // On initial load, show only the first batch
      setDisplayedComponents(filteredComponents.slice(0, visibleItems));
      setIsInitialLoad(false);
    } else {
      // When filter changes, update the displayed components
      setDisplayedComponents(filteredComponents.slice(0, visibleItems));
    }
  }, [components, searchQuery, categoryFilter, visibleItems, isInitialLoad]);

  // Setup intersection observer for infinite scroll
  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (entry.isIntersecting && !isLoading) {
        loadMoreComponents();
      }
    }, { rootMargin: '100px' });

    if (loadMoreRef.current) {
      observer.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [isLoading, displayedComponents]);

  const fetchComponentsWithCounts = async () => {
    try {
      const { data: sections } = await supabase
        .from('sections')
        .select('id, customize_count, created_at')
        .order('created_at', { ascending: false });

      if (sections) {
        const countMap = new Map(sections.map(s => [s.id, s.customize_count || 0]));
        const createdAtMap = new Map(sections.map(s => [s.id, s.created_at]));
        
        let sortedComponents = [...initialComponents];

        if (categoryFilter === 'Recently Added') {
          // Sort by created_at for Recently Added category
          sortedComponents.sort((a, b) => {
            const dateA = createdAtMap.get(a.id) || '';
            const dateB = createdAtMap.get(b.id) || '';
            return dateB.localeCompare(dateA);
          });
        } else {
          // Sort by customize_count for other categories
          sortedComponents.sort((a, b) => {
            const countA = countMap.get(a.id) || 0;
            const countB = countMap.get(b.id) || 0;
            return countB - countA;
          });
        }
        
        setComponents(sortedComponents);
      }
    } catch (error) {
      console.error('Error fetching components with counts:', error);
      setComponents(initialComponents);
    }
  };

  const loadMoreComponents = async () => {
    setIsLoading(true);
    // Simulate network delay for smoother loading experience
    await new Promise(resolve => setTimeout(resolve, 300));
    setVisibleItems(prev => prev + BATCH_SIZE);
    setIsLoading(false);
  };

  const getFilteredComponents = () => {
    let filtered = components;
    
    // Apply category filter first
    if (categoryFilter && categoryFilter !== 'All') {
      if (categoryFilter === 'Recently Added') {
        filtered = [...filtered];
      } else {
        filtered = filtered.filter(component => component.category === categoryFilter);
      }
    }
    
    // Apply search filter with fuzzy search
    if (searchQuery.trim()) {
      const results = fuse.current.search(searchQuery);
      filtered = results.map(result => result.item);
    }
    
    return filtered;
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSelectedSuggestionIndex(-1);
    
    if (value.trim().length > 1) {
      const results = fuse.current.search(value).slice(0, 5);
      setSuggestions(results.map(r => r.item));
      setShowSuggestions(true);
    } else if (value.trim().length === 0 && recentSearches.length > 0) {
      // Show recent searches when input is empty
      const recentComponents = recentSearches
        .map(search => {
          const results = fuse.current.search(search);
          return results.length > 0 ? results[0].item : null;
        })
        .filter(Boolean) as ComponentWithCustomization[];
      setSuggestions(recentComponents.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  const handleSearchSubmit = (query: string) => {
    setSearchQuery(query);
    setShowSuggestions(false);
    
    // Save to recent searches
    if (query.trim()) {
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(updated);
      localStorage.setItem('recentSearches', JSON.stringify(updated));
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedSuggestionIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedSuggestionIndex(prev => prev > -1 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedSuggestionIndex > -1) {
      e.preventDefault();
      const selected = suggestions[selectedSuggestionIndex];
      handleSearchSubmit(selected.title);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };
  
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
    setShowSuggestions(false);
  };

  const filteredComponents = getFilteredComponents();
  const hasMore = visibleItems < filteredComponents.length;

  return (
    <div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={searchInputRef}
            type="text"
            className="w-full pl-11 pr-16 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-all duration-200 text-[15px] shadow-sm"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (searchQuery.trim().length === 0 && recentSearches.length > 0) {
                const recentComponents = recentSearches
                  .map(search => {
                    const results = fuse.current.search(search);
                    return results.length > 0 ? results[0].item : null;
                  })
                  .filter(Boolean) as ComponentWithCustomization[];
                setSuggestions(recentComponents.slice(0, 5));
                setShowSuggestions(true);
              }
            }}
          />
          {/* Keyboard shortcut hint */}
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-400 bg-gray-100 rounded border border-gray-200">
              <span className="text-[10px]">⌘</span>K
            </kbd>
          </div>
          <AnimatePresence mode="wait">
            {!searchQuery && (
              <motion.div
                key={placeholderIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center pointer-events-none"
                style={{ paddingLeft: "2.75rem" }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isTransitioning ? 0 : 1 }}
                  transition={{ duration: 0.15 }}
                  className="text-gray-400"
                >
                  {searchPlaceholders[placeholderIndex]}
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Search Suggestions */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                ref={suggestionsRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden z-50"
              >
                {searchQuery.trim().length === 0 && (
                  <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">Recent Searches</span>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      Clear
                    </button>
                  </div>
                )}
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSearchSubmit(suggestion.title)}
                    onMouseEnter={() => setSelectedSuggestionIndex(index)}
                    className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                      index === selectedSuggestionIndex ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold text-gray-500">
                        {suggestion.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm truncate">
                        {suggestion.title}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {suggestion.category}
                      </div>
                    </div>
                    {searchQuery.trim().length === 0 && (
                      <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Categories */}
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:pb-0">
          {categories.map((category, index) => {
            const isSelected = (category === 'All' && categoryFilter === '') || category === categoryFilter;
            
            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setCategoryFilter(category === 'All' ? '' : category)}
                className={`relative px-4 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                  isSelected
                    ? 'text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {isSelected && (
                  <div 
                    className="absolute inset-0 rounded-lg" 
                    style={{
                      background: 'linear-gradient(135deg, #007AFF 0%, #0055FF 100%)',
                      boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)'
                    }}
                  />
                )}
                <span className="relative">{category}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
      
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedComponents.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(0.1 + index * 0.05, 1.5) }}
            >
              <ComponentCard component={component} />
            </motion.div>
          ))}
        </motion.div>

        {/* Load more trigger element */}
        {hasMore && (
          <div 
            ref={loadMoreRef}
            className="mt-8 flex flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group flex flex-col items-center gap-3"
            >
              <motion.div
                animate={isLoading ? {
                  rotate: 360,
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear"
                  }
                } : {
                  y: [0, 4, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="relative w-10 h-10 rounded-full bg-[#007AFF] flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #007AFF 0%, #0055FF 100%)',
                  boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)'
                }}
              >
                <ChevronDown className={`w-5 h-5 text-white transition-opacity duration-200 ${isLoading ? 'opacity-0' : 'opacity-100'}`} />
                {isLoading && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  </motion.div>
                )}
                <div className="absolute inset-0 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors" />
              </motion.div>
              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {isLoading ? 'Loading...' : 'Load More Sections'}
              </span>
            </motion.div>
          </div>
        )}
      </div>
      
      {filteredComponents.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 text-gray-400 mb-6">
            <Search className="h-10 w-10" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">No sections found</h3>
          <p className="text-gray-500 text-sm mb-4">Try adjusting your search or filter criteria</p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear search
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default ComponentsGrid;