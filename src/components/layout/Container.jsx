import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Container = forwardRef(({ children, className, as: Component = 'div', ...props }, ref) => {
  return (
    <Component
      ref={ref}
      className={cn('max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </Component>
  );
});

Container.displayName = 'Container';

export default Container;
