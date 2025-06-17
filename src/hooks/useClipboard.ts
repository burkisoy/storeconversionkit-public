import { useState, useCallback } from 'react';

const useClipboard = (timeout = 2000) => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), timeout);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
      
    return true;
  }, [timeout]);

  return { copied, copy };
};

export default useClipboard;