import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { animations } from '@/lib/utils';

export default function AboutPreview() {
  const facts = [
    { label: 'Location', value: 'Central Java, Indonesia' },
    { label: 'Focus', value: 'Front-end Development' },
    { label: 'Education', value: 'B.S. Computer Science' },
    { label: 'Languages', value: 'English, Indonesia' },
  ];

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedContainer animation="fadeUp">
            <p className="text-accent-indigo text-sm font-mono font-medium uppercase tracking-wider">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
              Building Interfaces That Users Enjoy
            </h2>
            <p className="text-text-secondary text-lg mt-4 leading-relaxed">
              I'm Destian Ardan Alfatanu, a Front-end Developer and Informatics graduate
              with a strong interest in building modern, responsive, and user-centered web
              applications. I enjoy transforming ideas into clean interfaces that combine
              thoughtful design with solid engineering practices.
            </p>
            <p className="text-text-secondary text-lg mt-4 leading-relaxed">
              Throughout my academic projects and internship experience, I've worked with
              React, Vite, Tailwind CSS, Laravel, MySQL, and Flutter to develop solutions
              ranging from company information systems to digital platforms. I'm constantly
              exploring new technologies while focusing on writing maintainable code and
              delivering intuitive user experiences.
            </p>
            <div className="mt-6">
              <Button variant="ghost" href="/about" icon={ArrowRight}>
                  More About My Journey
              </Button>
            </div>
          </AnimatedContainer>

          <AnimatedContainer animation="fadeUp" delay={0.2}>
            <div className="bg-bg-card border border-border-subtle rounded-xl p-6 shadow-sm">
              <dl>
                {facts.map((fact) => (
                  <div 
                    key={fact.label} 
                    className="flex justify-between py-3 border-b border-border-subtle last:border-0"
                  >
                    <dt className="text-text-muted text-sm">{fact.label}</dt>
                    <dd className="text-text-primary text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
