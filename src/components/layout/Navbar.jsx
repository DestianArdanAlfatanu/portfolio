import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, navLinks } from '@/lib/utils';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import WindowFrame from '@/components/ui/WindowFrame';

const MOBILE_MENU_ID = 'mobile-menu';

// Contact gets its own button on the right, so it is left out of the link row.
const menuLinks = navLinks.filter((link) => link.path !== '/contact');

// Sub-pages (e.g. /projects/:slug) keep their section highlighted.
const isLinkActive = (linkPath, pathname) =>
  linkPath === '/' ? pathname === '/' : pathname === linkPath || pathname.startsWith(`${linkPath}/`);

export function Logo({ className }) {
  return (
    <Link to="/" className={cn('flex items-center gap-3', className)} aria-label="Destian Ardan Alfatanu, home">
      <span className="flex items-center justify-center w-10 h-10 bg-teal text-ink border-2 border-shade shadow-px-sm font-display font-bold text-lg leading-none">
        DA
      </span>
      <span className="font-pixel text-teal text-sm leading-tight uppercase">
        Destian
        <br />
        Ardan
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-navy border-b-2 border-grid">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 h-16 px-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden lg:flex items-center gap-7">
          {menuLinks.map((link) => {
            const isActive = isLinkActive(link.path, location.pathname);
            return (
              <li key={link.label}>
                <Link
                  to={link.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'block py-1 font-pixel text-sm uppercase border-b-[3px] transition-colors',
                    isActive
                      ? 'text-orange border-orange'
                      : 'text-cream border-transparent hover:text-orange'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button variant="outline" size="md" href="/contact">
            Contact
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 border-2 border-teal text-teal hover:bg-teal hover:text-ink transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls={MOBILE_MENU_ID}
        >
          <PixelIcon name={isOpen ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={MOBILE_MENU_ID}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden px-4 sm:px-6 pt-3 pb-4"
          >
            <WindowFrame title="menu.exe" controls="full">
              <ul>
                {navLinks.map((link) => {
                  const isActive = isLinkActive(link.path, location.pathname);
                  return (
                    <li key={link.label} className="border-b-2 border-ink/20 last:border-b-0">
                      <Link
                        to={link.path}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                          'flex items-center justify-between px-4 py-3 font-pixel text-sm uppercase',
                          isActive ? 'bg-orange text-ink' : 'text-ink hover:bg-cream-dark'
                        )}
                      >
                        {link.label}
                        <PixelIcon name="arrowRight" size={16} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </WindowFrame>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
