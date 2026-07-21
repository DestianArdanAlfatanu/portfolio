import React from 'react';
import { Link } from 'react-router';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { navLinks } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <Link to="/" className="text-text-primary font-bold text-lg">
              DA
            </Link>
            <p className="text-text-secondary text-sm mt-1">
              Building premium digital experiences.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border-subtle my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Destian Ardan Alfatanu. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/DestianArdanAlfatanu" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <Github size={18} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/destian-ardan-alfatanu" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:destianardanalfatanu@gmail.com" className="text-text-muted hover:text-text-primary transition-colors">
              <Mail size={18} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
