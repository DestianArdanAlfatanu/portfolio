import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import PixelIcon from '@/components/ui/PixelIcon';

/**
 * OS-style text input with an inset bevel. Meant for cream panels.
 */
const SearchBar = memo(({ value, onChange, placeholder = 'Search projects...', label = 'Search', className }) => {
  return (
    <div className={cn('relative w-full', className)}>
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink">
        <PixelIcon name="search" size={18} />
      </span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        aria-label={label}
        className="block w-full h-10 bg-white border-2 border-ink shadow-[inset_2px_2px_0_0_rgba(20,17,46,0.25)] pl-10 pr-3 text-sm text-ink placeholder:text-ink/60 outline-none focus-visible:outline-3 focus-visible:outline-ink focus-visible:outline-offset-2"
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
