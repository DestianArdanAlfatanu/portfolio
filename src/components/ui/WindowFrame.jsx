import React from 'react';
import { cn } from '@/lib/utils';

const bodyTones = {
  cream: 'bg-cream text-ink on-light',
  navy: 'bg-navy-deep text-cream',
};

const titleTones = {
  purple: 'bg-purple text-cream',
  teal: 'bg-navy-deep text-teal',
};

/**
 * Retro OS window: title bar (file name + decorative controls) over a content body.
 * `controls="full"` shows minimize/maximize/close; `"single"` shows one square.
 */
export default function WindowFrame({
  title,
  children,
  tone = 'cream',
  titleTone = 'purple',
  controls = 'single',
  className,
  bodyClassName,
  as: Component = 'div',
  ...rest
}) {
  return (
    <Component
      className={cn('border-2 border-shade shadow-px', bodyTones[tone], className)}
      {...rest}
    >
      <div
        className={cn(
          'flex items-center justify-between gap-3 px-2.5 h-8 border-b-2 border-shade',
          titleTones[titleTone]
        )}
      >
        <span className="min-w-0 font-pixel text-xs sm:text-sm uppercase truncate">{title}</span>
        <span className="flex gap-1 shrink-0" aria-hidden="true">
          {controls === 'full' ? (
            <>
              <span className="w-4 h-4 flex items-end justify-center pb-0.5 bg-cream border-2 border-shade">
                <span className="w-2 h-0.5 bg-ink" />
              </span>
              <span className="w-4 h-4 flex items-center justify-center bg-cream border-2 border-shade">
                <span className="w-2 h-2 border-2 border-ink" />
              </span>
              <span className="w-4 h-4 flex items-center justify-center bg-cream border-2 border-shade text-ink font-pixel text-[10px] leading-none">
                x
              </span>
            </>
          ) : (
            <span className="w-4 h-4 flex items-center justify-center bg-cream border-2 border-shade">
              <span className="w-1.5 h-1.5 bg-ink" />
            </span>
          )}
        </span>
      </div>
      <div className={bodyClassName}>{children}</div>
    </Component>
  );
}
