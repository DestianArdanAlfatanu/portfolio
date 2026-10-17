import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Vertical timeline rail. Children are <TimelineItem>s (e.g. ExperienceCard).
 */
export default function Timeline({ children, className }) {
  return (
    <ol className={cn('relative border-l-[3px] border-teal ml-2 space-y-8', className)}>
      {children}
    </ol>
  );
}
