import React from 'react';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { animations } from '@/lib/utils';

export default function CurrentTech() {
  const techs = ['React', 'TypeScript', 'Laravel', 'Tailwind CSS', 'Vite'];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer animation="fadeIn">
          <h2 className="text-text-muted text-sm font-mono uppercase tracking-wider">
            Currently working with
          </h2>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-6">
            {techs.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-text-secondary text-lg font-medium hover:text-text-primary transition-colors cursor-default flex items-center gap-2">
                  {tech}
                </span>
                {idx < techs.length - 1 && (
                  <span className="hidden md:inline-block text-border-subtle text-lg">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
