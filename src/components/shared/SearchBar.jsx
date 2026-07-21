import React, { memo } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const SearchBar = memo(({ value, onChange, placeholder = 'Search projects...', className }) => {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-text-muted" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="block w-full bg-bg-card border border-border-subtle rounded-lg py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:ring-1 focus:ring-accent-indigo outline-none transition-colors"
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
