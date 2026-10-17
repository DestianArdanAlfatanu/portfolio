import React, { memo } from 'react';
import { cn } from '@/lib/utils';

const variants = {
  purple: 'bg-purple text-cream',
  orange: 'bg-orange text-ink',
};

export const CategoryBadge = memo(({ name, className, variant = 'purple', size = 'sm' }) => {
  const sizes = {
    sm: 'px-2 py-1 text-[10px]',
    md: 'px-2.5 py-1.5 text-xs',
  };

  return (
    <span className={cn('inline-flex items-center border-2 border-shade font-pixel uppercase leading-none', variants[variant], sizes[size], className)}>
      {name}
    </span>
  );
});

CategoryBadge.displayName = 'CategoryBadge';

export default CategoryBadge;
