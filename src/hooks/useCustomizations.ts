import { useState, useEffect, useCallback } from 'react';

interface HistoryState {
  past: Record<string, string>[];
  present: Record<string, string>;
  future: Record<string, string>[];
}

export const useCustomizations = (componentId: string) => {
  const [history, setHistory] = useState<HistoryState>({
    past: [],
    present: {},
    future: []
  });
  const [isSaving, setIsSaving] = useState(false);

  const { past, present, future } = history;

  // Load saved customizations on mount
  useEffect(() => {
    const savedCustomizations = localStorage.getItem(`customizations_${componentId}`);
    if (savedCustomizations) {
      const parsedCustomizations = JSON.parse(savedCustomizations);
      setHistory({
        past: [],
        present: parsedCustomizations,
        future: []
      });
    }
  }, [componentId]);

  // Save customizations
  const saveCustomizations = async () => {
    setIsSaving(true);
    try {
      localStorage.setItem(`customizations_${componentId}`, JSON.stringify(present));
      await new Promise(resolve => setTimeout(resolve, 500));
    } finally {
      setIsSaving(false);
    }
  };

  // Auto-save when customizations change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (Object.keys(present).length > 0) {
        saveCustomizations();
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [present]);

  const setCustomValues = useCallback((newValues: Record<string, string> | ((prev: Record<string, string>) => Record<string, string>)) => {
    setHistory(currentHistory => {
      const newPresent = typeof newValues === 'function' 
        ? newValues(currentHistory.present)
        : newValues;

      return {
        past: [...currentHistory.past, currentHistory.present],
        present: newPresent,
        future: []
      };
    });
  }, []);

  const undo = useCallback(() => {
    setHistory(currentHistory => {
      const { past, present, future } = currentHistory;
      
      if (past.length === 0) return currentHistory;

      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);

      return {
        past: newPast,
        present: previous,
        future: [present, ...future]
      };
    });
  }, []);

  const redo = useCallback(() => {
    setHistory(currentHistory => {
      const { past, present, future } = currentHistory;
      
      if (future.length === 0) return currentHistory;

      const next = future[0];
      const newFuture = future.slice(1);

      return {
        past: [...past, present],
        present: next,
        future: newFuture
      };
    });
  }, []);

  const canUndo = past.length > 0;
  const canRedo = future.length > 0;

  return {
    customValues: present,
    setCustomValues,
    isSaving,
    saveCustomizations,
    undo,
    redo,
    canUndo,
    canRedo
  };
};