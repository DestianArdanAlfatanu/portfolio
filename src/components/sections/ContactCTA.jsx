import React from 'react';
import { Mail, FileText } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { animations } from '@/lib/utils';

export default function ContactCTA() {
  return (
    <section className="py-24 border-t border-border-subtle">
      <AnimatedContainer animation="fadeUp">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-indigo text-sm font-mono uppercase tracking-wider">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-2">
            Let's work together
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-xl mx-auto">
            I'm currently available for freelance work and open to new opportunities. 
            If you have a project that needs some creative attention, let's talk.
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
