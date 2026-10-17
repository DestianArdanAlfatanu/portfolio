import React, { memo } from 'react';
import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import WindowFrame from '@/components/ui/WindowFrame';
import ProjectThumbnail from '@/components/cards/ProjectThumbnail';
import { TechBadge } from '@/components/ui/TechBadge';
import { CategoryBadge } from '@/components/ui/CategoryBadge';

const ArrowIcon = (props) => <PixelIcon name="arrowRight" size={16} {...props} />;

const asList = (value) => (Array.isArray(value) ? value : value ? [value] : []);

function IconLink({ href, label, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      title={label}
      className="press flex items-center justify-center w-10 h-10 bg-cream text-ink border-2 border-ink shadow-px-sm hover:bg-yellow"
    >
      <PixelIcon name={icon} size={20} />
    </a>
  );
}

/**
 * Project as an OS window titled `<slug>.html`: preview, meta, summary, tags, actions.
 */
export const ProjectCard = memo(({ project }) => {
  const { slug, title, description, techStack = [], type, year, github, liveDemo } = project;
  const repo = github?.find((r) => r.url && r.url !== 'TODO');
  const categories = asList(project.category);

  return (
    <WindowFrame title={`${slug}.html`} className="h-full flex flex-col" bodyClassName="flex-1 flex flex-col">
      <Link to={`/projects/${slug}`} className="group block aspect-video bg-navy border-b-2 border-shade overflow-hidden shrink-0" tabIndex={-1} aria-hidden="true">
        <ProjectThumbnail project={project} className="transition-transform duration-300 group-hover:scale-105" />
      </Link>

      <div className="p-5 flex-1 flex flex-col">
        <p className="font-pixel text-[11px] text-ink/75 uppercase">
          {year}{type && ` · ${type}`}
        </p>

        <h3 className="font-pixel text-sm text-ink uppercase leading-snug mt-2">
          <Link to={`/projects/${slug}`} className="hover:underline underline-offset-4">
            {title}
          </Link>
        </h3>

        <p className="text-sm text-ink leading-relaxed mt-2 line-clamp-3">{description}</p>

        {categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {categories.map((cat) => (
              <CategoryBadge key={cat} name={cat} />
            ))}
          </div>
        )}

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {techStack.slice(0, 4).map((tech) => (
              <TechBadge key={tech} name={tech} tone="light" />
            ))}
            {techStack.length > 4 && <TechBadge name={`+${techStack.length - 4}`} tone="light" />}
          </div>
        )}

        <div className="flex items-center justify-between gap-3 mt-auto pt-5">
          <Button variant="dark" size="sm" href={`/projects/${slug}`} icon={ArrowIcon} iconPosition="right" aria-label={`View details: ${title}`}>
            Details
          </Button>
          <div className="flex items-center gap-2">
            {repo && <IconLink href={repo.url} label="GitHub repository" icon="github" />}
            {liveDemo && <IconLink href={liveDemo} label="Live website" icon="externalLink" />}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
