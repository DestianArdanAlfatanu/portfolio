import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const Button = forwardRef(({
  variant = 'primary',
  size = 'md',
  children,
  className,
  icon: Icon,
  iconPosition = 'left',
  href,
  disabled,
  ...rest
}, ref) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-indigo focus:ring-offset-2 focus:ring-offset-bg-primary disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-accent-indigo text-white hover:bg-accent-indigo-hover",
    secondary: "bg-bg-card text-text-primary border border-border-subtle hover:bg-bg-card-hover",
    ghost: "bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-card",
    outline: "bg-transparent border border-border-subtle text-text-primary hover:bg-bg-card",
  };

  const sizes = {
    sm: "h-8 px-3 text-sm gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2.5",
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={cn("shrink-0", size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4')} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className={cn("shrink-0", size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4')} />}
    </>
  );

  if (href) {
    return (
      <a ref={ref} href={disabled ? undefined : href} className={classes} aria-disabled={disabled} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
