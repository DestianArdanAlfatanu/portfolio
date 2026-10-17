import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import WindowFrame from '@/components/ui/WindowFrame';
import ProjectThumbnail from '@/components/cards/ProjectThumbnail';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { getFeaturedProjects } from '@/data/dataService';
import socialData from '@/data/social.json';

const ArrowIcon = (props) => <PixelIcon name="arrowRight" size={16} {...props} />;
const ChatIcon = (props) => <PixelIcon name="chat" size={20} {...props} />;

const socialUrl = (platform) => socialData.find((s) => s.platform === platform)?.url;

// Replaces the old stats row: the places a recruiter usually wants next.
const quickLinks = [
  { label: 'All Projects', href: '/projects', icon: 'folder', color: 'text-yellow' },
  { label: 'Experience', href: '/experience', icon: 'briefcase', color: 'text-orange' },
  { label: 'Certificates', href: '/certificates', icon: 'file', color: 'text-teal' },
  { label: 'Resume', href: '/cv.pdf', icon: 'download', color: 'text-cream' },
  { label: 'GitHub', href: socialUrl('GitHub'), icon: 'github', color: 'text-yellow', external: true },
  { label: 'LinkedIn', href: socialUrl('LinkedIn'), icon: 'link', color: 'text-teal', external: true },
];

function QuickLink({ link }) {
  const className = 'flex items-center gap-3 py-1.5 font-pixel text-xs uppercase text-cream hover:text-yellow transition-colors';
  const content = (
    <>
      <PixelIcon name={link.icon} size={18} className={link.color} />
      {link.label}
      {link.external && <span className="sr-only">(opens in new tab)</span>}
    </>
  );

  if (link.href.startsWith('/') && !/\.\w+$/.test(link.href)) {
    return <Link to={link.href} className={className}>{content}</Link>;
  }
  return (
    <a href={link.href} className={className} {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {content}
    </a>
  );
}

function ProjectTile({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <div className="aspect-[16/10] border-2 border-shade bg-navy overflow-hidden shadow-px-sm">
        <ProjectThumbnail
          project={project}
          alt={`${project.title} preview`}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="font-pixel text-sm text-ink uppercase leading-snug mt-3 group-hover:underline underline-offset-4">
        {project.title}
      </h3>
      <p className="text-xs text-ink/75 mt-1">
        {project.organization} · {project.type}
      </p>
    </Link>
  );
}

export default function FeaturedProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getFeaturedProjects();
      setProjects(data || []);
    };
    fetchProjects();
  }, []);

  return (
    <section className="bg-teal bg-zigzag border-b-2 border-shade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_17rem] gap-8 items-start">
        <AnimatedContainer animation="fadeUp">
          <WindowFrame title="Featured Projects" controls="full" bodyClassName="p-4 sm:p-6">
            <h2 className="sr-only">Featured Projects</h2>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {projects.map((project) => (
                <ProjectTile key={project.id} project={project} />
              ))}
            </div>
            <div className="flex justify-end mt-8 pt-5 border-t-2 border-ink/20">
              <Button variant="dark" href="/projects" icon={ArrowIcon} iconPosition="right">
                View All Projects
              </Button>
            </div>
          </WindowFrame>
        </AnimatedContainer>

        <AnimatedContainer animation="fadeUp" delay={0.1} className="flex flex-col gap-6">
          <WindowFrame title="Quick Links" tone="navy" titleTone="teal" bodyClassName="px-4 py-3">
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <QuickLink link={link} />
                </li>
              ))}
            </ul>
          </WindowFrame>

          <Button variant="orange" size="lg" href="/contact" icon={ChatIcon} className="w-full h-16 text-base">
            Let's Talk
          </Button>
        </AnimatedContainer>
      </div>
    </section>
  );
}
