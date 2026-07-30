import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

export default function AboutPreview() {
  const facts = [
    { label: 'Location', value: 'Central Java, Indonesia' },
    { label: 'Focus', value: 'Full-Stack & Front-End Development' },
    { label: 'Education', value: 'B.S. Computer Science' },
    { label: 'Languages', value: 'Indonesian, English' },
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
              Building Scalable Web Applications
            </h2>
            <p className="text-text-secondary text-lg mt-4 leading-relaxed">
              I am a Fresh Graduate in Informatics from Jenderal Soedirman University specializing in Full-Stack and Front-End Web Development. I enjoy transforming business requirements into intuitive, responsive, and maintainable applications.
            </p>
            <p className="text-text-secondary text-lg mt-4 leading-relaxed">
              Throughout my academic projects and professional internships at PT Telkom Indonesia and PT Kereta Api Indonesia, I have developed web applications ranging from internal management systems to digital platforms using React, Next.js, Laravel, TypeScript, and MySQL.
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
