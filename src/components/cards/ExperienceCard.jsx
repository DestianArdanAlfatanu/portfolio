import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import { TechBadge } from '@/components/ui/TechBadge';

export const ExperienceCard = memo(({ experience, isLast }) => {
  const { company, role, period, description, techStack, type } = experience;

  return (
    <div className="relative pl-8 md:pl-0">
      {/* Timeline connector (Mobile) */}
      <div className={cn(
        "absolute left-0 top-2 bottom-0 w-px bg-border-subtle md:hidden",
        isLast && "bottom-auto h-full"
      )} />
      
      {/* Timeline dot (Mobile) */}
      <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent-indigo md:hidden" />

      <div className="md:grid md:grid-cols-[200px_1fr] md:gap-8 lg:gap-12 relative">
        {/* Timeline connector (Desktop) */}
        <div className={cn(
          "hidden md:block absolute left-[200px] top-2 bottom-0 w-px bg-border-subtle -ml-px",
          isLast && "bottom-auto h-full"
        )} />
        
        {/* Timeline dot (Desktop) */}
        <div className="hidden md:block absolute left-[200px] top-2 w-2 h-2 rounded-full bg-accent-indigo -ml-[4px]" />

        {/* Left side: Period */}
        <div className="md:text-right md:pr-8 md:pt-1 mb-2 md:mb-0">
          <span className="text-text-muted text-sm font-mono block">{period}</span>
        </div>
        
        {/* Right side: Content */}
        <div className="md:pl-8 pb-10">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h3 className="text-lg font-semibold text-text-primary">{role}</h3>
            {type && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-bg-card text-text-secondary border border-border-subtle">
                {type}
              </span>
            )}
          </div>
          <div className="text-accent-indigo text-sm font-medium mb-3">
            {company}
          </div>
          
          <p className="text-text-secondary text-sm mt-2 whitespace-pre-line leading-relaxed">
            {description}
          </p>
          
          {techStack && techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {techStack.map(tech => (
                <TechBadge key={tech} name={tech} size="sm" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;
