import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Home,
  Briefcase,
  FolderOpen,
  User,
  Award,
  Mail,
  Github,
  Linkedin,
  FileText,
  X,
  Command,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { getProjects } from '@/data/dataService';

/**
 * Command Palette — Ctrl+K / Cmd+K
 * Inspired by Linear, Raycast, and Vercel.
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
      { id: 'home', label: 'Home', icon: Home, action: () => navigate('/') },
      { id: 'projects', label: 'Projects', icon: FolderOpen, action: () => navigate('/projects') },
      { id: 'about', label: 'About', icon: User, action: () => navigate('/about') },
      { id: 'experience', label: 'Experience', icon: Briefcase, action: () => navigate('/experience') },
      { id: 'certificates', label: 'Certificates', icon: Award, action: () => navigate('/certificates') },
      { id: 'contact', label: 'Contact', icon: Mail, action: () => navigate('/contact') },
    ],
    [navigate]
  );

  const externalItems = useMemo(
    () => [
      { id: 'github', label: 'Open GitHub', icon: Github, action: () => window.open('https://github.com/username', '_blank') },
      { id: 'linkedin', label: 'Open LinkedIn', icon: Linkedin, action: () => window.open('https://linkedin.com/in/username', '_blank') },
      { id: 'resume', label: 'Download Resume', icon: FileText, action: () => window.open('#', '_blank') },
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
        icon: FolderOpen,
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
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[101] w-full max-w-lg"
          >
            <div className="mx-4 overflow-hidden rounded-xl border border-border-subtle bg-bg-card shadow-elevated">
              {/* Search Input */}
              <div className="flex items-center gap-3 border-b border-border-subtle px-4">
                <Search className="h-4 w-4 shrink-0 text-text-muted" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search pages, projects, links..."
                  className="flex-1 bg-transparent py-3.5 text-sm text-text-primary placeholder:text-text-muted outline-none"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="shrink-0 rounded-md border border-border-subtle px-1.5 py-0.5 text-[10px] font-mono text-text-muted hover:text-text-secondary transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[320px] overflow-y-auto p-2">
                {filteredResults.length === 0 ? (
                  <div className="px-3 py-8 text-center text-sm text-text-muted">
                    No results found for "{query}"
                  </div>
                ) : (
                  filteredResults.map((group) => (
                    <div key={group.group} className="mb-1">
                      <div className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-text-muted">
                        {group.group}
                      </div>
                      {group.items.map((item) => {
                        flatIndex++;
                        const isActive = flatIndex === activeIndex;
                        const Icon = item.icon;
                        const currentIndex = flatIndex;

                        return (
                          <button
                            key={item.id}
                            data-active={isActive}
                            onClick={() => handleSelect(item)}
                            onMouseEnter={() => setActiveIndex(currentIndex)}
                            className={cn(
                              'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                              isActive
                                ? 'bg-accent-indigo/10 text-text-primary'
                                : 'text-text-secondary hover:text-text-primary'
                            )}
                          >
                            <Icon className="h-4 w-4 shrink-0 text-text-muted" />
                            <div className="flex-1 min-w-0">
                              <span className="block truncate">{item.label}</span>
                              {item.description && (
                                <span className="block truncate text-xs text-text-muted mt-0.5">
                                  {item.description}
                                </span>
                              )}
                            </div>
                            {isActive && (
                              <ArrowRight className="h-3 w-3 shrink-0 text-text-muted" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center gap-4 border-t border-border-subtle px-4 py-2.5 text-[11px] text-text-muted">
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border-subtle bg-bg-primary px-1 py-0.5 font-mono text-[10px]">↑↓</kbd>
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border-subtle bg-bg-primary px-1 py-0.5 font-mono text-[10px]">↵</kbd>
                  Select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="rounded border border-border-subtle bg-bg-primary px-1 py-0.5 font-mono text-[10px]">esc</kbd>
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
