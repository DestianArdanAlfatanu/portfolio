import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import { TechBadge } from '@/components/ui/TechBadge';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

/**
 * One timeline entry: yellow node on the rail plus a navy card.
 * `compact` clamps the description and hides the tech stack (Home preview).
 */
export const ExperienceCard = memo(({ experience, compact = false, delay = 0 }) => {
  const { company, role, period, description, techStack, type } = experience;

  return (
    <AnimatedContainer as="li" animation="fadeUp" delay={delay} className="relative pl-8">
      <span className="absolute -left-[11px] top-5 w-5 h-5 bg-yellow border-2 border-shade" aria-hidden="true" />
      <article className="bg-navy-surface border-2 border-shade shadow-px p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-pixel text-sm sm:text-base text-cream uppercase leading-snug">{role}</h3>
            <p className="text-sm text-teal mt-1">
              {company}
              {type && <span className="text-muted"> · {type}</span>}
            </p>
          </div>
          <span className="font-pixel text-[11px] uppercase bg-orange text-ink border-2 border-shade px-2 py-1 leading-none shrink-0">
            {period}
          </span>
        </div>

        <p className={cn('text-sm text-muted leading-relaxed mt-3 whitespace-pre-line', compact && 'line-clamp-3')}>
          {description}
        </p>

        {!compact && techStack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {techStack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        )}
      </article>
    </AnimatedContainer>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;
