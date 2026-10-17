import React, { memo } from 'react';
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { cn, getGmailComposeUrl } from '@/lib/utils';
import PixelIcon from '@/components/ui/PixelIcon';
import socialData from '@/data/social.json';

const iconMap = {
  Github,
  Linkedin,
  MessageCircle,
  Mail
};

// pixelarticons has no LinkedIn glyph, so that one falls back to lucide.
const pixelIconMap = {
  Github: 'github',
  MessageCircle: 'chat',
  Mail: 'mail'
};

const sizeMap = {
  sm: 16,
  md: 18,
  lg: 20
};

const SocialLinks = memo(({ className, size = 'md', direction = 'row', showLabels = false, variant = 'plain' }) => {
  const iconSize = sizeMap[size] || sizeMap.md;
  const isBoxed = variant === 'boxed';

  return (
    <div className={cn("flex", isBoxed ? "gap-3" : "gap-4", direction === 'column' ? "flex-col" : "flex-row flex-wrap", className)}>
      {socialData.map((social) => {
        const Icon = iconMap[social.icon] || MessageCircle;
        const pixelName = pixelIconMap[social.icon];
        // Convert mailto: links to Gmail compose URLs
        const href = social.url.startsWith('mailto:')
          ? getGmailComposeUrl(social.url.replace('mailto:', ''))
          : social.url;

        return (
          <a
            key={social.platform}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2",
              isBoxed
                ? "press justify-center w-10 h-10 border-2 border-shade bg-navy-surface text-cream shadow-px hover:text-teal"
                : "text-muted hover:text-cream transition-colors"
            )}
            aria-label={social.platform}
          >
            {isBoxed && pixelName
              ? <PixelIcon name={pixelName} size={20} />
              : <Icon size={isBoxed ? 20 : iconSize} aria-hidden="true" />}
            {showLabels && <span>{social.platform}</span>}
          </a>
        );
      })}
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
