import React, { memo } from 'react';
import { Link } from 'react-router';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TechBadge } from '@/components/ui/TechBadge';
import { CategoryBadge } from '@/components/ui/CategoryBadge';

export const ProjectCard = memo(({ project }) => {
  const { id, slug, title, description, thumbnail, techStack, status, role, github, liveDemo, year } = project;

  return (
    <div className="group overflow-hidden rounded-xl bg-bg-card border border-border-subtle hover:shadow-card-hover transition-all duration-300 hover:-translate-y-[2px] flex flex-col h-full">
      <Link to={`/projects/${slug}`} className="block relative aspect-video bg-bg-card-hover overflow-hidden shrink-0">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-text-muted transition-transform duration-500 group-hover:scale-[1.03]">
            {title?.charAt(0)}
          </div>
        )}
      </Link>
      
      <div className="p-5 space-y-3 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
          <span className="text-text-muted text-sm font-mono">{year}</span>
          {status && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider bg-bg-primary text-text-secondary border border-border-subtle">
              {status}
            </span>
          )}
        </div>

        {project.category && (Array.isArray(project.category) ? project.category : [project.category]).length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {(Array.isArray(project.category) ? project.category : [project.category]).map(cat => (
              <CategoryBadge key={cat} name={cat} variant="outline" size="sm" />
            ))}
          </div>
        )}
        
        <Link to={`/projects/${slug}`} className="block">
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-indigo transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>
        
        <p className="text-text-secondary text-sm line-clamp-2 flex-grow">
          {description}
        </p>
        
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {techStack.slice(0, 4).map(tech => (
              <TechBadge key={tech} name={tech} variant="outline" size="sm" />
            ))}
            {techStack.length > 4 && (
              <TechBadge name={`+${techStack.length - 4}`} variant="outline" size="sm" />
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-border-subtle/50">
          <span className="text-text-muted text-sm">{role}</span>
          <div className="flex items-center gap-2">
            {github && github.length > 0 && github[0]?.url && github[0].url !== 'TODO' && (
              <a 
                href={github[0].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-text-muted hover:text-text-primary hover:bg-bg-primary transition-colors"
                aria-label="GitHub Repository"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {liveDemo && (
              <a 
                href={liveDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 rounded-md text-text-muted hover:text-accent-cyan hover:bg-bg-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
