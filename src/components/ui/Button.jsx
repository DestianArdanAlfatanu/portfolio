import React, { forwardRef } from 'react';
import { Link } from 'react-router';
import { cn } from '@/lib/utils';

// Helper to determine if a URL is an internal route (starts with /)
// but not an external protocol or file download
const isInternalRoute = (href) => {
  if (!href) return false;
  // External links or file downloads
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
  // File downloads (e.g., /cv.pdf)
  if (/\.\w+$/.test(href)) return false;
  // Internal routes
  return href.startsWith('/');
};

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
  // Retro style: sharp corners, 2px border, pixel label. Filled variants are raised
  // with a hard shadow and "press" on hover; outline variants fill on hover.
  // Focus ring comes from the global :focus-visible rule.
  const baseClasses = "inline-flex items-center justify-center rounded-none border-2 font-pixel uppercase tracking-normal leading-none select-none disabled:cursor-not-allowed aria-disabled:cursor-not-allowed";
  const raised = "shadow-px press border-shade";

  const variants = {
    primary: cn(raised, "bg-teal text-ink"),
    orange: cn(raised, "bg-orange text-ink"),
    dark: cn(raised, "bg-ink text-cream"),
    secondary: "transition-colors bg-transparent border-orange text-orange hover:bg-orange hover:text-ink",
    outline: "transition-colors bg-transparent border-teal text-teal hover:bg-teal hover:text-ink",
    ghost: "transition-colors bg-transparent border-transparent text-teal hover:border-teal",
  };

  const disabledClasses = "bg-muted text-ink border-muted shadow-none pointer-events-none";

  const sizes = {
    sm: "h-9 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-xs gap-2",
    lg: "h-12 px-5 text-sm gap-2.5",
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && disabledClasses,
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
    // Use React Router Link for internal routes (client-side navigation)
    if (isInternalRoute(href)) {
      return (
        <Link ref={ref} to={disabled ? undefined : href} className={classes} aria-disabled={disabled} {...rest}>
          {content}
        </Link>
      );
    }
    // Use regular <a> tag for external links and file downloads
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
