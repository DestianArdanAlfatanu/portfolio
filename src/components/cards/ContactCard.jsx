import React, { memo } from 'react';
import { cn } from '@/lib/utils';

export const ContactCard = memo(({ icon: Icon, label, value, href, onClick }) => {
  const CardWrapper = href ? 'a' : onClick ? 'button' : 'div';
  const wrapperProps = {};
  
  if (href) {
    wrapperProps.href = href;
    wrapperProps.target = '_blank';
    wrapperProps.rel = 'noopener noreferrer';
  } else if (onClick) {
    wrapperProps.onClick = onClick;
    wrapperProps.type = 'button';
  }

  return (
    <CardWrapper 
      className={cn(
        "bg-bg-card border border-border-subtle rounded-xl p-5 hover:bg-bg-card-hover transition-all duration-200 group flex flex-col items-center text-center gap-3 w-full",
        (href || onClick) && "cursor-pointer"
      )}
      {...wrapperProps}
    >
      <div className="p-3 rounded-xl bg-accent-indigo-muted/20 border border-accent-indigo/10 group-hover:bg-accent-indigo-muted/30 transition-colors">
        <Icon className="w-6 h-6 text-accent-indigo" />
      </div>
      
      <div>
        <div className="text-text-muted text-sm mb-1">{label}</div>
        <div className="text-text-primary font-medium group-hover:text-accent-indigo transition-colors">
          {value}
        </div>
      </div>
    </CardWrapper>
  );
});

ContactCard.displayName = 'ContactCard';

export default ContactCard;
