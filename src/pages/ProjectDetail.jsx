import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { getProjectBySlug, getProjects, getRelatedProjects } from '@/data/dataService';
import TechBadge from '@/components/ui/TechBadge';
import CategoryBadge from '@/components/ui/CategoryBadge';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import RetroHeading from '@/components/ui/RetroHeading';
import WindowFrame from '@/components/ui/WindowFrame';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import ProjectCard from '@/components/cards/ProjectCard';

const ArrowLeftIcon = (props) => <PixelIcon name="arrowLeft" size={16} {...props} />;
const ExternalIcon = (props) => <PixelIcon name="externalLink" size={16} {...props} />;
const GithubIcon = (props) => <PixelIcon name="github" size={16} {...props} />;

const isTodo = (val) => val === 'TODO' || (Array.isArray(val) && val.length === 1 && val[0] === 'TODO');
const hasContent = (val) => Boolean(val) && !isTodo(val) && (!Array.isArray(val) || val.length > 0);
const asList = (value) => (Array.isArray(value) ? value : value ? [value] : []);

function ContentSection({ icon, title, children }) {
  return (
    <section>
      <h2 className="flex items-center gap-3 h-display text-2xl sm:text-3xl text-ink uppercase">
        <span className="flex items-center justify-center w-10 h-10 shrink-0 bg-navy text-yellow border-2 border-shade shadow-px-sm">
          <PixelIcon name={icon} size={22} />
        </span>
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function PixelList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-ink leading-relaxed">
          <span className="mt-2 w-2.5 h-2.5 shrink-0 bg-orange border-2 border-ink" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PageMessage({ title, children }) {
  return (
    <section className="bg-navy bg-grid min-h-[60vh] flex items-center">
      <div className="max-w-lg w-full mx-auto px-4 py-20">
        <WindowFrame title="error.exe" controls="full" bodyClassName="p-8 text-center">
          <PixelIcon name="alert" size={40} className="text-purple mx-auto" />
          <h1 className="h-display text-3xl text-ink uppercase mt-4">{title}</h1>
          {children}
        </WindowFrame>
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    const loadProject = async () => {
      setLoading(true);
      const data = await getProjectBySlug(slug);
      setProject(data);
      if (data) {
        document.title = `${data.title} — Destian Ardan Alfatanu`;
        // Prefer the curated relatedProjects ids; fall back to other projects.
        const related = await getRelatedProjects(data.id);
        if (related.length > 0) {
          setRelatedProjects(related.slice(0, 3));
        } else {
          const allProjects = await getProjects();
          setRelatedProjects(allProjects.filter(p => p.id !== data.id).slice(0, 3));
        }
      } else {
        document.title = 'Project Not Found — Destian Ardan Alfatanu';
      }
      setLoading(false);
    };
    loadProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-navy min-h-[60vh] flex items-center justify-center">
        <p className="font-pixel text-xs text-muted uppercase">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <PageMessage title="Project Not Found">
        <p className="text-sm text-ink mt-3">The project you are looking for does not exist.</p>
        <div className="mt-6 flex justify-center">
          <Button href="/projects" variant="dark" icon={ArrowLeftIcon}>Back to Projects</Button>
        </div>
      </PageMessage>
    );
  }

  const repos = (project.github || []).filter(repo => repo.url && repo.url !== 'TODO');
  const categories = asList(project.category);
  const screenshots = project.screenshots || [];

  const meta = [
    { icon: 'building', label: 'Organization', value: hasContent(project.organization) && project.organization },
    { icon: 'briefcase', label: 'Project Type', value: project.type },
    { icon: 'clock', label: 'Duration', value: hasContent(project.duration) && project.duration },
    { icon: 'users', label: 'Team Size', value: project.teamSize && (project.teamSize === 1 ? 'Solo Project' : `${project.teamSize} Members`) },
    { icon: 'user', label: 'Role', value: project.role },
    { icon: 'check', label: 'Status', value: project.status },
    { icon: 'calendar', label: 'Year', value: project.year },
  ].filter(item => item.value);

  const listSections = [
    { key: 'responsibilities', icon: 'checklist', title: 'Responsibilities' },
    { key: 'features', icon: 'zap', title: 'Key Features' },
    { key: 'challenges', icon: 'flag', title: 'Technical Challenges' },
    { key: 'lessonsLearned', icon: 'bookOpen', title: 'Lessons Learned' },
  ].filter(section => hasContent(project[section.key]));

  return (
    <article>
      {/* Header */}
      <section className="bg-navy bg-grid border-b-2 border-shade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pb-16">
          <Link to="/projects" className="inline-flex items-center gap-2 font-pixel text-xs uppercase text-teal hover:text-yellow transition-colors">
            <PixelIcon name="arrowLeft" size={16} />
            Back to Projects
          </Link>

          <AnimatedContainer className="grid lg:grid-cols-[1.15fr_1fr] gap-10 items-start mt-8">
            <div className="min-w-0">
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <CategoryBadge key={cat} name={cat} variant="orange" size="md" />
                  ))}
                </div>
              )}
              <h1 className="h-display text-shadow-px text-cream uppercase text-3xl sm:text-5xl mt-5">
                {project.title}
              </h1>
              {hasContent(project.description) && (
                <p className="text-muted text-base sm:text-lg leading-relaxed mt-5">{project.description}</p>
              )}

              {(project.liveDemo || repos.length > 0) && (
                <div className="flex flex-wrap gap-4 mt-8">
                  {project.liveDemo && (
                    <Button href={project.liveDemo} target="_blank" rel="noopener noreferrer" variant="primary" icon={ExternalIcon}>
                      Visit Website
                    </Button>
                  )}
                  {repos.map((repo, i) => (
                    <Button key={i} href={repo.url} target="_blank" rel="noopener noreferrer" variant="secondary" icon={GithubIcon}>
                      {repo.label || 'View Repository'}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {project.thumbnail && (
              <WindowFrame title={`${project.slug}.html`} controls="full" className="min-w-0" bodyClassName="aspect-video bg-navy overflow-hidden">
                <img src={project.thumbnail} alt={`${project.title} preview`} className="w-full h-full object-cover object-top" />
              </WindowFrame>
            )}
          </AnimatedContainer>

          {/* Properties strip */}
          {meta.length > 0 && (
            <dl className="grid grid-cols-[repeat(auto-fit,minmax(9.5rem,1fr))] max-sm:[&>*:last-child:nth-child(odd)]:col-span-2 gap-[2px] mt-12 bg-shade border-2 border-shade shadow-px">
              {meta.map(item => (
                <div key={item.label} className="p-4 bg-navy-surface">
                  <dt className="flex items-center gap-1.5 font-pixel text-[10px] text-yellow uppercase">
                    <PixelIcon name={item.icon} size={14} />
                    {item.label}
                  </dt>
                  <dd className="text-sm text-cream mt-1.5">{item.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream on-light border-b-2 border-shade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-[1fr_18rem] gap-12 items-start">
          <div className="min-w-0 space-y-14">
            {hasContent(project.longDescription) && (
              <ContentSection icon="infoBox" title="Overview">
                <p className="text-ink leading-relaxed whitespace-pre-line">{project.longDescription}</p>
              </ContentSection>
            )}

            {(hasContent(project.problem) || hasContent(project.solution)) && (
              <div className="grid md:grid-cols-2 gap-6">
                {hasContent(project.problem) && (
                  <WindowFrame title="problem.txt" tone="navy" bodyClassName="p-5">
                    <h2 className="flex items-center gap-2 font-pixel text-sm text-orange uppercase">
                      <PixelIcon name="alert" size={18} />
                      Business Problem
                    </h2>
                    <p className="text-sm text-cream leading-relaxed mt-3">{project.problem}</p>
                  </WindowFrame>
                )}
                {hasContent(project.solution) && (
                  <WindowFrame title="solution.txt" tone="navy" bodyClassName="p-5">
                    <h2 className="flex items-center gap-2 font-pixel text-sm text-teal uppercase">
                      <PixelIcon name="lightbulb" size={18} />
                      Solution
                    </h2>
                    <p className="text-sm text-cream leading-relaxed mt-3">{project.solution}</p>
                  </WindowFrame>
                )}
              </div>
            )}

            {listSections.map(section => (
              <ContentSection key={section.key} icon={section.icon} title={section.title}>
                <PixelList items={project[section.key]} />
              </ContentSection>
            ))}
          </div>

          {/* Sidebar */}
          {project.techStack?.length > 0 && (
            <aside className="lg:sticky lg:top-24">
              <WindowFrame title="tech-stack.txt" bodyClassName="p-5">
                <h2 className="font-pixel text-xs text-ink uppercase">Technology Stack</h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map(tech => (
                    <TechBadge key={tech} name={tech} tone="light" size="md" />
                  ))}
                </div>
              </WindowFrame>
            </aside>
          )}
        </div>
      </section>

      {/* Gallery */}
      {screenshots.length > 0 && (
        <section className="bg-navy-deep border-b-2 border-shade">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <RetroHeading overline="Gallery" title="Project Gallery" />
            <div className={`grid gap-8 mt-10 ${screenshots.length === 1 ? 'grid-cols-1 max-w-3xl' : 'grid-cols-1 md:grid-cols-2'}`}>
              {screenshots.map((screenshot, i) => {
                const src = typeof screenshot === 'string' ? screenshot : screenshot.image;
                const caption = typeof screenshot === 'object' && hasContent(screenshot.title) ? screenshot.title : null;
                return (
                  <AnimatedContainer key={src} animation="fadeUp" delay={i * 0.06} className="min-w-0">
                    <WindowFrame title={caption || `screenshot-${i + 1}.png`} bodyClassName="aspect-video bg-navy overflow-hidden">
                      <a href={src} target="_blank" rel="noopener noreferrer" className="group block w-full h-full" aria-label={`Open ${caption || `screenshot ${i + 1}`} full size (new tab)`}>
                        <img
                          src={src}
                          alt={caption || `${project.title} screenshot ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </a>
                    </WindowFrame>
                  </AnimatedContainer>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related */}
      {relatedProjects.length > 0 && (
        <section className="bg-teal bg-zigzag border-b-2 border-shade on-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            <RetroHeading overline="More work" title="Related Projects" tone="light" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {relatedProjects.map(relProject => (
                <div key={relProject.id} className="min-w-0">
                  <ProjectCard project={relProject} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
