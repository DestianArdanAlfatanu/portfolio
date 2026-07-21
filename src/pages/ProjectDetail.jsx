import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Calendar, User, Circle, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/data/dataService';
import TechBadge from '@/components/ui/TechBadge';
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
        <Button to="/projects" variant="primary" icon={ArrowLeft}>Back to Projects</Button>
      </div>
    );
  }

  return (
    <article className="pb-24 pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <Link to="/projects" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors text-sm mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="py-12 border-b border-border-subtle">
            {project.category && (
              <div className="text-accent-indigo font-mono text-sm uppercase tracking-wider">
                {project.category}
              </div>
            )}
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mt-2">
              {project.title}
            </h1>
            <p className="text-text-secondary text-lg mt-4 max-w-3xl">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-6 mt-6">
              {project.year && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
              )}
              {project.role && (
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <User className="w-4 h-4" />
                  <span>{project.role}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Circle className="w-3 h-3 text-green-500 fill-green-500" />
                <span>Completed</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              {project.liveDemo && (
                <Button as="a" href={project.liveDemo} target="_blank" rel="noopener noreferrer" variant="primary" icon={ExternalLink}>
                  Live Demo
                </Button>
              )}
              {project.github && (
                <Button as="a" href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary" icon={Github}>
                  View Code
                </Button>
              )}
            </div>

            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {project.techStack.map(tech => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            )}
          </div>

          <div className="max-w-3xl py-8">
            {project.problem && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">The Problem</h2>
                <p className="text-text-secondary leading-relaxed">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className="mt-16">
                <h2 className="text-2xl font-semibold text-text-primary mb-4">The Solution</h2>
                <p className="text-text-secondary leading-relaxed">{project.solution}</p>
              </section>
            )}

            {project.features && project.features.length > 0 && (
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

            {project.challenges && project.challenges.length > 0 && (
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

            {project.lessonsLearned && project.lessonsLearned.length > 0 && (
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

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="mt-16 pt-16 border-t border-border-subtle">
              <h2 className="text-2xl font-semibold text-text-primary mb-8">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((img, i) => (
                  <div key={i} className="aspect-video bg-bg-card rounded-xl border border-border-subtle overflow-hidden">
                    <img src={img} alt={`Screenshot ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </section>
          )}

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
