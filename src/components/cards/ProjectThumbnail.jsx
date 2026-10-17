import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Project preview image. Projects without a thumbnail yet render a retro
 * "screen" with the project's initials instead of a broken image.
 */
export default function ProjectThumbnail({ project, alt = '', className }) {
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={alt}
        loading="lazy"
        className={cn('w-full h-full object-cover object-top', className)}
      />
    );
  }

  const initials = project.title
    .split(/\s+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join('');

  return (
    <span className={cn('relative w-full h-full flex items-center justify-center bg-teal-dark', className)} aria-hidden="true">
      <span className="h-display text-5xl text-cream text-shadow-px">{initials}</span>
      <span className="absolute inset-0 scanlines" />
    </span>
  );
}
