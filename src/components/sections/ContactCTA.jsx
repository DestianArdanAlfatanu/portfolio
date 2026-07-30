import React from 'react';
import { Mail, FileText } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

export default function ContactCTA() {
  return (
    <section className="py-24 border-t border-border-subtle">
      <AnimatedContainer animation="fadeUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-indigo text-sm font-mono uppercase tracking-wider">
            Currently Open to Opportunities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Let's Work Together
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            I am actively seeking opportunities as a Front-End Developer or Full-Stack Developer, including full-time positions, internships, and freelance collaborations. If you are looking for someone passionate about building modern web applications and eager to contribute to your team, I would be happy to connect and discuss how I can add value to your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button variant="primary" href="/contact" icon={Mail}>
              Contact Me
            </Button>
            <Button variant="secondary" href="/cv.pdf" icon={FileText}>
              View Resume
            </Button>
          </div>
        </div>
      </AnimatedContainer>
    </section>
  );
}
