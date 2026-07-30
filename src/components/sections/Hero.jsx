import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import SocialLinks from '@/components/shared/SocialLinks';
import { animations } from '@/lib/utils';

export default function Hero() {
  const currentTech = ['React', 'Next.js', 'TypeScript', 'Laravel', 'Tailwind CSS', 'MySQL'];

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animations.staggerContainer}
          >
            <motion.div variants={animations.fadeUp}>
              <div className="h-[2px] w-20 bg-gradient-to-r from-accent-indigo to-transparent mb-6" />
              <p className="text-accent-indigo font-mono text-sm font-medium mb-4">
                Hi, I'm
              </p>
            </motion.div>
            
            <motion.div variants={animations.fadeUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight font-sans">
                Destian Ardan Alfatanu
              </h1>
            </motion.div>
            
            <motion.div variants={animations.fadeUp}>
              <p className="text-lg sm:text-xl text-text-secondary mt-4 leading-relaxed font-medium">
                Fresh Graduate in Informatics specializing in Full-Stack and Front-End Web Development with hands-on experience building scalable web applications using React, Next.js, Laravel, TypeScript, and MySQL.
              </p>
            </motion.div>

            <motion.div variants={animations.fadeUp}>
              <p className="text-base text-text-muted mt-4 leading-relaxed max-w-2xl">
                Experienced in developing responsive user interfaces, internal business applications, and modern web platforms through academic projects, organizational projects, and professional internships at PT Telkom Indonesia and PT Kereta Api Indonesia (Persero). Passionate about writing clean code, building maintainable systems, and continuously learning modern software engineering practices.
              </p>
            </motion.div>

            <motion.div variants={animations.fadeUp} className="flex flex-wrap gap-2 mt-8">
              {currentTech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-text-muted border border-border-subtle rounded-md px-2.5 py-1 hover:border-border-hover hover:text-text-secondary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div variants={animations.fadeUp} className="flex flex-wrap gap-3 mt-8">
              <Button variant="primary" size="lg" href="/projects" icon={ArrowRight}>
                View Projects
              </Button>
              <Button variant="secondary" size="lg" href="/cv.pdf" icon={Download}>
                Download Resume
              </Button>
            </motion.div>

            <motion.div variants={animations.fadeUp} className="mt-8">
              <SocialLinks size="md" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
