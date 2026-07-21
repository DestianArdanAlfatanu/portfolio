import { useState, useEffect } from 'react';

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let timeoutId = null;

    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setScrollPosition(window.scrollY);
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    setScrollPosition(window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return scrollPosition;
};
