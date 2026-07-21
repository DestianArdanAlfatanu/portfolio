import React from 'react';
import { cn } from '@/lib/utils';

export default function Timeline({ children, className }) {
  return (
    <div className={cn("relative space-y-0", className)}>
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border-subtle" />
      <div className="relative z-10 flex flex-col space-y-6">
        {children}
      </div>
    </div>
  );
}
