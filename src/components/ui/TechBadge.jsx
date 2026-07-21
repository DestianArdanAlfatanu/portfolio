import React, { memo } from 'react';
import { cn } from '@/lib/utils';

export const TechBadge = memo(({ name, className, variant = 'default', size = 'sm' }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-mono transition-colors duration-200 cursor-default";
  
  const variants = {
    default: "bg-bg-card text-text-secondary border border-border-subtle hover:border-border-hover hover:text-text-primary",
    outline: "bg-transparent border border-border-subtle text-text-muted hover:border-border-hover hover:text-text-primary"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };

  return (
    <span className={cn(baseClasses, variants[variant], sizes[size], className)}>
      {name}
    </span>
  );
});

TechBadge.displayName = 'TechBadge';

export default TechBadge;
