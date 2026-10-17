import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import PixelIcon from '@/components/ui/PixelIcon';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    if (scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className={cn(
            'press fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center',
            'bg-teal text-ink border-2 border-shade shadow-px'
          )}
          aria-label="Back to top"
        >
          <PixelIcon name="arrowUp" size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
