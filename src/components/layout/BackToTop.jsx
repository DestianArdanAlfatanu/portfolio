import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/useScrollPosition';

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
            'fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full',
            'bg-bg-card border border-border-subtle text-text-primary shadow-lg',
            'hover:bg-bg-card-hover transition-colors'
          )}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
