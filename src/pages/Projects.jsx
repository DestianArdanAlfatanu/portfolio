import { useState, useEffect, useMemo } from 'react';
import { getProjects } from '@/data/dataService';
import ProjectCard from '@/components/cards/ProjectCard';
import SearchBar from '@/components/shared/SearchBar';
import FilterBar from '@/components/shared/FilterBar';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Projects — Your Name';
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const categories = useMemo(() => {
    const cats = projects.map(p => p.category);
    return ['All', ...new Set(cats.filter(Boolean))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionTitle 
            overline="Portfolio" 
            title="All Projects" 
            description="A collection of my work across web development." 
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mt-8">
            <div className="max-w-sm w-full">
              <SearchBar 
                value={searchQuery} 
                onChange={setSearchQuery} 
                placeholder="Search projects..." 
              />
            </div>
            <FilterBar 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>

          <div className="mt-8">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-text-muted">
                No projects found matching your criteria.
              </div>
            )}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
