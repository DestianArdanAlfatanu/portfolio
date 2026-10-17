import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProjects } from '@/data/dataService';
import PixelIcon from '@/components/ui/PixelIcon';
import socialData from '@/data/social.json';

const socialUrl = (platform) => socialData.find((s) => s.platform === platform)?.url;

// Icons are pixelarticons names; LinkedIn has no pixel glyph, so it uses lucide.
const LinkedinIcon = ({ className }) => <Linkedin size={16} className={className} aria-hidden="true" />;
const renderIcon = (icon, className) =>
  typeof icon === 'string' ? <PixelIcon name={icon} size={16} className={className} /> : icon({ className });

/**
 * Command Palette — Ctrl+K / Cmd+K, styled as a retro "run" dialog.
 * Provides quick navigation, project search, and external links.
 */
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  // Load projects for search
  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  // Keyboard shortcut to open/close
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setActiveIndex(0);
      // Small delay to ensure DOM is ready
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Navigation items
  const navigationItems = useMemo(
    () => [
      { id: 'home', label: 'Home', icon: 'home', action: () => navigate('/') },
      { id: 'projects', label: 'Projects', icon: 'folder', action: () => navigate('/projects') },
      { id: 'about', label: 'About', icon: 'user', action: () => navigate('/about') },
      { id: 'experience', label: 'Experience', icon: 'briefcase', action: () => navigate('/experience') },
      { id: 'certificates', label: 'Certificates', icon: 'file', action: () => navigate('/certificates') },
      { id: 'contact', label: 'Contact', icon: 'mail', action: () => navigate('/contact') },
    ],
    [navigate]
  );

  const externalItems = useMemo(
    () => [
      { id: 'github', label: 'Open GitHub', icon: 'github', action: () => window.open(socialUrl('GitHub'), '_blank', 'noopener,noreferrer') },
      { id: 'linkedin', label: 'Open LinkedIn', icon: LinkedinIcon, action: () => window.open(socialUrl('LinkedIn'), '_blank', 'noopener,noreferrer') },
      { id: 'resume', label: 'Download Resume', icon: 'download', action: () => window.open('/cv.pdf', '_blank', 'noopener,noreferrer') },
    ],
    []
  );

  // Filter results based on query
  const filteredResults = useMemo(() => {
    const results = [];
    const lowerQuery = query.toLowerCase().trim();

    // Filter navigation
    const filteredNav = navigationItems.filter((item) =>
      item.label.toLowerCase().includes(lowerQuery)
    );
    if (filteredNav.length > 0) {
      results.push({ group: 'Navigation', items: filteredNav });
    }

    // Filter projects
    const filteredProjects = projects
      .filter(
        (p) =>
          p.title.toLowerCase().includes(lowerQuery) ||
          p.description.toLowerCase().includes(lowerQuery) ||
          p.techStack.some((t) => t.toLowerCase().includes(lowerQuery))
      )
      .slice(0, 5)
      .map((p) => ({
        id: `project-${p.id}`,
        label: p.title,
        description: p.description,
        icon: 'folder',
        action: () => navigate(`/projects/${p.slug}`),
      }));
    if (filteredProjects.length > 0) {
      results.push({ group: 'Projects', items: filteredProjects });
    }

    // Filter external links
    const filteredExternal = externalItems.filter((item) =>
      item.label.toLowerCase().includes(lowerQuery)
    );
    if (filteredExternal.length > 0) {
      results.push({ group: 'Links', items: filteredExternal });
    }

    return results;
  }, [query, navigationItems, externalItems, projects, navigate]);

  // Flatten items for keyboard navigation
  const allItems = useMemo(
    () => filteredResults.flatMap((group) => group.items),
    [filteredResults]
  );

  // Reset active index when results change
  useEffect(() => {
    setActiveIndex(0);
  }, [filteredResults]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % allItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + allItems.length) % allItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (allItems[activeIndex]) {
          allItems[activeIndex].action();
          setIsOpen(false);
        }
      }
    },
    [allItems, activeIndex]
  );

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.querySelector('[data-active="true"]');
      activeElement?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  // Execute item action
  function handleSelect(item) {
    item.action();
    setIsOpen(false);
  }

  let flatIndex = -1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] bg-shade/70"
            onClick={() => setIsOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="mx-4 bg-cream on-light border-2 border-shade shadow-px-lg">
              {/* Title bar */}
              <div className="flex items-center justify-between gap-3 px-2.5 h-8 bg-purple text-cream border-b-2 border-shade">
                <span className="font-pixel text-xs uppercase">run.exe</span>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close command palette"
                  className="w-5 h-5 flex items-center justify-center bg-cream text-ink border-2 border-shade hover:bg-yellow"
                >
                  <PixelIcon name="close" size={12} />
                </button>
              </div>

              {/* Search Input */}
              <div className="p-3 border-b-2 border-ink/20">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-ink">
                    <PixelIcon name="search" size={18} />
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search pages, projects, links..."
                    aria-label="Search pages, projects, links"
                    className="block w-full h-10 bg-white border-2 border-ink shadow-[inset_2px_2px_0_0_rgba(20,17,46,0.25)] pl-10 pr-3 text-sm text-ink placeholder:text-ink/60 outline-none"
                  />
                </div>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[320px] overflow-y-auto p-2">
                {filteredResults.length === 0 ? (
                  <div className="px-3 py-8 text-center text-sm text-ink/75">
                    No results found for "{query}"
                  </div>
                ) : (
                  filteredResults.map((group) => (
                    <div key={group.group} className="mb-1">
                      <div className="px-3 py-1.5 font-pixel text-[11px] uppercase text-ink/75">
                        {group.group}
                      </div>
                      {group.items.map((item) => {
                        flatIndex++;
                        const isActive = flatIndex === activeIndex;
                        const currentIndex = flatIndex;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            data-active={isActive}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setActiveIndex(currentIndex)}
                            className={cn(
                              'flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm text-ink border-2',
                              isActive ? 'bg-teal border-shade' : 'border-transparent'
                            )}
                          >
                            {renderIcon(item.icon, 'shrink-0')}
                            <div className="flex-1 min-w-0">
                              <span className="block truncate">{item.label}</span>
                              {item.description && (
                                <span className="block truncate text-xs text-ink/75 mt-0.5">
                                  {item.description}
                                </span>
                              )}
                            </div>
                            {isActive && <PixelIcon name="arrowRight" size={14} className="shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center gap-4 border-t-2 border-ink/20 bg-cream-dark px-4 py-2.5 font-pixel text-[11px] uppercase text-ink">
                <span className="flex items-center gap-1.5">
                  <kbd className="border-2 border-ink bg-cream px-1 font-mono text-[10px] leading-tight">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="border-2 border-ink bg-cream px-1 font-mono text-[10px] leading-tight">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="border-2 border-ink bg-cream px-1 font-mono text-[10px] leading-tight">esc</kbd>
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
