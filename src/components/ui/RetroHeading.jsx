import React from 'react';
import { cn } from '@/lib/utils';

const tones = {
  // On navy backgrounds
  dark: { chip: 'bg-orange text-ink', title: 'text-cream' },
  // On cream/orange/teal backgrounds
  light: { chip: 'bg-purple text-cream', title: 'text-ink' },
};

/**
 * Section heading: pixel label chip with an arrow, then a chunky display title.
 */
export default function RetroHeading({ overline, title, tone = 'dark', as: Tag = 'h2', className }) {
  const t = tones[tone];

  return (
    <div className={className}>
      {overline && (
        <p className={cn('inline-block font-pixel text-xs uppercase px-2.5 py-1 border-2 border-shade shadow-px-sm', t.chip)}>
          {overline} <span aria-hidden="true">→</span>
        </p>
      )}
      <Tag className={cn('h-display uppercase text-3xl sm:text-4xl lg:text-5xl mt-4', t.title)}>{title}</Tag>
    </div>
  );
}
