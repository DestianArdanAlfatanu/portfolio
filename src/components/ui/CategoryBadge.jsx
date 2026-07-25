import React, { memo } from 'react';
import { cn } from '@/lib/utils';

export const CategoryBadge = memo(({ name, className, variant = 'default', size = 'sm' }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 cursor-default";

  const variants = {
    default: "bg-accent-indigo-muted text-accent-indigo border border-accent-indigo/20 hover:border-accent-indigo/40",
    outline: "bg-transparent text-accent-indigo border border-accent-indigo/25 hover:border-accent-indigo/50 hover:bg-accent-indigo-muted"
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[10px] uppercase tracking-wider",
    md: "px-3 py-1 text-xs uppercase tracking-wider"
  };

  return (
    <span className={cn(baseClasses, variants[variant], sizes[size], className)}>
      {name}
    </span>
  );
});

CategoryBadge.displayName = 'CategoryBadge';

export default CategoryBadge;
