import React, { memo } from 'react';
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import socialData from '@/data/social.json';

const iconMap = {
  Github,
  Linkedin,
  MessageCircle,
  Mail
};

const sizeMap = {
  sm: 16,
  md: 18,
  lg: 20
};

const SocialLinks = memo(({ className, size = 'md', direction = 'row', showLabels = false }) => {
  const iconSize = sizeMap[size] || sizeMap.md;
  
  return (
    <div className={cn("flex gap-4", direction === 'column' ? "flex-col" : "flex-row flex-wrap", className)}>
      {socialData.map((social) => {
        const Icon = iconMap[social.icon] || MessageCircle;
        
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors"
          >
            <Icon size={iconSize} />
            {showLabels && <span>{social.platform}</span>}
          </a>
        );
      })}
    </div>
  );
});

SocialLinks.displayName = 'SocialLinks';

export default SocialLinks;
