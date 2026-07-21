import React from 'react';
import { motion } from 'framer-motion';
import { cn, animations } from '@/lib/utils';

export function SectionTitle({ overline, title, description, className, align = 'left' }) {
  return (
    <motion.div 
      className={cn("mb-12", align === 'center' && "text-center", className)}
      {...animations.fadeUp}
      viewport={{ once: true, margin: '-50px' }}
    >
      {overline && (
        <span className="block text-accent-indigo text-sm font-medium uppercase tracking-wider font-mono mb-2">
          {overline}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-text-secondary text-lg mt-4 max-w-2xl",
          align === 'center' && "mx-auto"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;
