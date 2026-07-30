import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, navLinks } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-bg-primary/80 border-b border-border-subtle">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-bold text-text-primary text-lg">
          DA
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navLinks?.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="flex items-center gap-2 px-2 py-1 text-xs font-mono text-text-secondary border border-border-subtle rounded-md hover:bg-bg-card transition-colors">
            <Command className="w-3 h-3" />
            <span>K</span>
          </button>
          <Button variant="primary" size="sm" href="/contact">
            Contact
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-secondary hover:text-text-primary p-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-bg-primary border-t border-border-subtle overflow-hidden"
          >
            <div className="flex flex-col px-4 py-2">
              {navLinks?.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    className={cn(
                      "text-lg py-3 border-b border-border-subtle transition-colors",
                      isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 pb-2">
                <Button variant="primary" size="sm" href="/contact" className="w-full">
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
