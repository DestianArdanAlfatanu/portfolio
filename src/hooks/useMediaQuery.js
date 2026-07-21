import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      const updateMatches = (e) => setMatches(e.matches);
      
      setMatches(media.matches);

      if (media.addEventListener) {
        media.addEventListener('change', updateMatches);
        return () => media.removeEventListener('change', updateMatches);
      } else {
        media.addListener(updateMatches);
        return () => media.removeListener(updateMatches);
      }
    }
  }, [query]);

  return matches;
};
