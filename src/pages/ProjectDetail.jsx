import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, User, Users, Clock, Building2, Circle, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/data/dataService';
import TechBadge from '@/components/ui/TechBadge';
import CategoryBadge from '@/components/ui/CategoryBadge';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import ProjectCard from '@/components/cards/ProjectCard';

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
        const allProjects = await getProjects();
        setRelatedProjects(allProjects.filter(p => p.id !== data.id).slice(0, 3));
      } else {
        document.title = 'Project Not Found — Destian Ardan Alfatanu';
      }
      setLoading(false);
    };
    loadProject();
  }, [slug]);

  if (loading) {
    return <div className="py-24 text-center text-text-muted">Loading project...</div>;
  }

  if (!project) {
    return (
      <div className="py-24 flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-2xl font-bold text-text-primary mb-4">Project Not Found</h2>
        <p className="text-text-secondary mb-8">The project you are looking for does not exist.</p>
        <Button href="/projects" variant="primary" icon={ArrowLeft}>Back to Projects</Button>
      </div>
    );
  }

  const isTodo = (val) => val === 'TODO' || (Array.isArray(val) && val.length === 1 && val[0] === 'TODO');
  const statusColor = {
    'Completed': 'text-green-500 fill-green-500',
    'In Progress': 'text-yellow-500 fill-yellow-500',
    'Archived': 'text-zinc-500 fill-zinc-500',
  };

  return (
    <article className="pb-24 pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <Link to="/projects" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Header */}
          <div className="py-12 border-b border-border-subtle">
            {project.category && (Array.isArray(project.category) ? project.category : [project.category]).length > 0 && (
              <div className="flex flex-wrap gap-2">
                {(Array.isArray(project.category) ? project.category : [project.category]).map(cat => (
                  <CategoryBadge key={cat} name={cat} size="md" />
                ))}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mt-2">
              {project.title}
            </h1>
            {!isTodo(project.description) && (
              <p className="text-text-secondary text-lg mt-4 max-w-3xl">
                {project.description}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6">
              {project.year && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.duration && !isTodo(project.duration) && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <User className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
              )}
              {project.teamSize && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize === 1 ? 'Solo' : `${project.teamSize} Members`}</span>
                </div>
              )}
              {project.organization && !isTodo(project.organization) && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Building2 className="w-4 h-4" />
                  <span>{project.organization}</span>
                </div>
              )}
              {project.status && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Circle className={`w-3 h-3 ${statusColor[project.status] || 'text-zinc-500 fill-zinc-500'}`} />
                  <span>{project.status}</span>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              {project.liveDemo && (
                <Button as="a" href={project.liveDemo} target="_blank" rel="noopener noreferrer" variant="primary" icon={ExternalLink}>
                  Live Demo
                </Button>
              )}
              {project.github && project.github.length > 0 && project.github.map((repo, i) => (
                repo.url && repo.url !== 'TODO' && (
                  <Button key={i} as="a" href={repo.url} target="_blank" rel="noopener noreferrer" variant="secondary" icon={Github}>
                    {repo.label || 'View Code'}
                  </Button>
                )
              ))}
            </div>

            {/* Tech stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {project.techStack.map(tech => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            )}
          </div>

          {/* Content sections */}
          <div className="max-w-3xl py-8">
            {project.longDescription && !isTodo(project.longDescription) && (
              <section className="mt-8">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Overview</h2>
                <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </div>
              </section>
            )}

            {project.problem && !isTodo(project.problem) && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">The Problem</h2>
                <p className="text-text-secondary leading-relaxed">{project.problem}</p>
              </section>
            )}

            {project.solution && !isTodo(project.solution) && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">The Solution</h2>
                <p className="text-text-secondary leading-relaxed">{project.solution}</p>
              </section>
            )}

            {project.responsibilities && !isTodo(project.responsibilities) && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Responsibilities</h2>
                <ul className="space-y-2">
                  {project.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.features && !isTodo(project.features) && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && !isTodo(project.challenges) && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Challenges</h2>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.lessonsLearned && !isTodo(project.lessonsLearned) && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">Lessons Learned</h2>
                <ul className="space-y-2">
                  {project.lessonsLearned.map((lesson, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo mt-2 shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mt-16 pt-16 border-t border-border-subtle">
              <h2 className="text-2xl font-semibold text-text-primary mb-8">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-video bg-bg-card rounded-xl border border-border-subtle overflow-hidden">
                      <img
                        src={typeof screenshot === 'string' ? screenshot : screenshot.image}
                        alt={typeof screenshot === 'string' ? `Screenshot ${i + 1}` : screenshot.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {typeof screenshot === 'object' && screenshot.title && !isTodo(screenshot.title) && (
                      <p className="text-text-muted text-sm text-center">{screenshot.title}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <section className="mt-24 pt-16 border-t border-border-subtle">
              <SectionTitle title="More Projects" className="mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.map(relProject => (
                  <ProjectCard key={relProject.id} project={relProject} />
                ))}
              </div>
            </section>
          )}

        </AnimatedContainer>
      </div>
    </article>
  );
}
