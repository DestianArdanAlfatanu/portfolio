import React, { memo } from 'react';
import PixelIcon from '@/components/ui/PixelIcon';

/**
 * Contact channel row for navy panels: icon tile, label, value, external arrow.
 * `icon` is any node (a PixelIcon, or a lucide icon for brands pixelarticons lacks).
 */
export const ContactCard = memo(({ icon, label, value, href, iconColor = 'text-yellow' }) => {
  const isFile = /\.\w+$/.test(href) && href.startsWith('/');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="press group flex items-center gap-4 bg-navy-surface border-2 border-shade shadow-px p-4 hover:bg-navy-deep"
    >
      <span className={`flex items-center justify-center w-11 h-11 shrink-0 bg-navy border-2 border-shade ${iconColor}`}>
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-pixel text-[11px] text-yellow uppercase">{label}</span>
        <span className="block text-sm text-cream truncate mt-0.5 group-hover:underline underline-offset-4">{value}</span>
      </span>
      <PixelIcon name={isFile ? 'download' : 'externalLink'} size={18} className="text-muted shrink-0" />
      <span className="sr-only">(opens in new tab)</span>
    </a>
  );
});

ContactCard.displayName = 'ContactCard';

export default ContactCard;
