import { useState, useEffect, useMemo } from 'react';
import { getProjects } from '@/data/dataService';
import ProjectCard from '@/components/cards/ProjectCard';
import SearchBar from '@/components/shared/SearchBar';
import FilterBar from '@/components/shared/FilterBar';
import PageHeader from '@/components/layout/PageHeader';
import WindowFrame from '@/components/ui/WindowFrame';
import PixelIcon from '@/components/ui/PixelIcon';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    document.title = 'Projects — Destian Ardan Alfatanu | Full-Stack Engineer';
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const categories = useMemo(() => {
    const cats = projects.flatMap(p =>
      Array.isArray(p.category) ? p.category : p.category ? [p.category] : []
    );
    return ['All', ...new Set(cats.filter(Boolean))];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const projectCategories = Array.isArray(p.category) ? p.category : p.category ? [p.category] : [];
      const matchesCategory = activeCategory === 'All' || projectCategories.includes(activeCategory);
      const matchesSearch = p.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.description?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
  };

  return (
    <>
      <PageHeader
        overline="Portfolio"
        title="All Projects"
        description="A collection of my work across web development."
      />

      <section className="bg-teal bg-zigzag border-b-2 border-shade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <WindowFrame title="C:\Projects" controls="full" className="on-light" bodyClassName="bg-cream-dark">
            {/* Toolbar: tabs sit on the panel edge, search on the right */}
            <div className="flex flex-col-reverse lg:flex-row lg:items-end justify-between gap-4 px-4 sm:px-6 pt-5 border-b-2 border-ink">
              <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              <div className="w-full lg:max-w-xs lg:mb-3">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search projects..."
                  label="Search projects"
                />
              </div>
            </div>

            <div className="bg-cream p-4 sm:p-6">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map(project => (
                    <div key={project.id} className="min-w-0">
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center text-center py-16">
                  <PixelIcon name="search" size={40} className="text-purple" />
                  <p className="font-pixel text-sm text-ink uppercase mt-4">No projects found</p>
                  <p className="text-sm text-ink/75 mt-2">No projects found matching your criteria.</p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 font-pixel text-xs uppercase text-ink border-b-2 border-ink hover:text-purple hover:border-purple"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* Explorer-style status bar */}
            <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-2 border-t-2 border-ink bg-cream-dark font-pixel text-[11px] text-ink uppercase" aria-live="polite">
              <span>{filteredProjects.length} of {projects.length} project(s)</span>
              <span className="hidden sm:inline">{activeCategory === 'All' ? 'All categories' : activeCategory}</span>
            </div>
          </WindowFrame>
        </div>
      </section>
    </>
  );
}
