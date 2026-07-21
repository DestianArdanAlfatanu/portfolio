import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import ProjectCard from '@/components/cards/ProjectCard';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { getFeaturedProjects } from '@/data/dataService';
import { animations } from '@/lib/utils';

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
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          overline="Selected Work" 
          title="Featured Projects" 
          description="A selection of projects I'm most proud of." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, idx) => (
            <AnimatedContainer key={project.id || idx} animation="fadeUp" delay={idx * 0.1}>
              <ProjectCard project={project} />
            </AnimatedContainer>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="ghost" href="/projects" icon={ArrowRight}>
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
