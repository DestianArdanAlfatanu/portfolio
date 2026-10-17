import React, { memo } from 'react';
import { cn } from '@/lib/utils';

/**
 * OS-style tab strip. Sits on top of a cream panel: the active tab is cream
 * and visually joins the panel below; inactive tabs are recessed.
 */
const FilterBar = memo(({ categories = [], activeCategory = 'All', onCategoryChange, className, label = 'Filter by category' }) => {
  const allCategories = ['All', ...categories.filter(c => c !== 'All')];

  return (
    <div role="group" aria-label={label} className={cn('flex flex-wrap items-end gap-1', className)}>
      {allCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onCategoryChange?.(category)}
            className={cn(
              'px-3 font-pixel text-xs uppercase border-2 border-b-0 border-ink transition-colors',
              isActive
                ? 'bg-cream text-ink h-10 relative top-[2px] z-10'
                : 'bg-cream-dark text-ink/80 h-9 hover:bg-yellow hover:text-ink'
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
});

FilterBar.displayName = 'FilterBar';

export default FilterBar;
