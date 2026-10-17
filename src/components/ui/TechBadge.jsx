import React, { memo } from 'react';
import { cn } from '@/lib/utils';

// `tone` matches the background the badge sits on: "light" for cream, "dark" for navy.
const tones = {
  light: 'border-ink text-ink',
  dark: 'border-muted text-cream',
};

export const TechBadge = memo(({ name, className, tone = 'dark', size = 'sm' }) => {
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-2.5 py-1.5 text-sm',
  };

  return (
    <span className={cn('inline-flex items-center border-2 font-mono leading-none', tones[tone], sizes[size], className)}>
      {name}
    </span>
  );
});

TechBadge.displayName = 'TechBadge';

export default TechBadge;
