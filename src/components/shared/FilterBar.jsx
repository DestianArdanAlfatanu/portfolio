import React, { memo } from 'react';
import { cn } from '@/lib/utils';

const FilterBar = memo(({ categories = [], activeCategory = 'All', onCategoryChange, className }) => {
  const allCategories = ['All', ...categories.filter(c => c !== 'All')];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {allCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange?.(category)}
            className={cn(
              "px-4 py-2 text-sm rounded-full font-medium transition-all duration-200",
              isActive
                ? "bg-accent-indigo text-white"
                : "bg-bg-card text-text-secondary border border-border-subtle hover:bg-bg-card-hover hover:text-text-primary"
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
