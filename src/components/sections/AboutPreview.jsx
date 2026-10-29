import React from 'react';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import RetroHeading from '@/components/ui/RetroHeading';
import WindowFrame from '@/components/ui/WindowFrame';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

const ArrowIcon = (props) => <PixelIcon name="arrowRight" size={16} {...props} />;

export default function AboutPreview() {
  const facts = [
    { label: 'Location', value: 'Banyumas & Depok · Open to Jabodetabek and remote' },
    { label: 'Focus', value: 'Full-Stack Engineering' },
    { label: 'Education', value: 'B.S. Computer Science' },
    { label: 'Languages', value: 'Indonesian, English' },
  ];

  return (
    <section className="bg-cream on-light border-b-2 border-shade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <AnimatedContainer animation="fadeUp">
          <RetroHeading overline="About Me" title="Building Scalable Web Applications" tone="light" />
          <p className="text-ink text-base mt-6 leading-relaxed">
            I am a Full-Stack Engineer and Computer Science graduate from Jenderal Soedirman University (GPA 3.79/4.00). I enjoy transforming business requirements into reliable, maintainable applications, from the database schema to the interface.
          </p>
          <p className="text-ink text-base mt-4 leading-relaxed">
            Today I co-run Techworksnesia, where I build business systems with React, FastAPI, and PostgreSQL. Before that, my internships at PT Telkom Indonesia and PT Kereta Api Indonesia delivered internal tools that replaced manual workflows, built with Next.js, Laravel, and MySQL.
          </p>
          <div className="mt-8">
            <Button variant="dark" href="/about" icon={ArrowIcon} iconPosition="right">
              More About My Journey
            </Button>
          </div>
        </AnimatedContainer>

        <AnimatedContainer animation="fadeUp" delay={0.15}>
          <WindowFrame title="about.txt" tone="navy" bodyClassName="px-5 py-2">
            <dl>
              {facts.map((fact) => (
                <div key={fact.label} className="py-3.5 border-b-2 border-dashed border-navy-surface last:border-0">
                  <dt className="font-pixel text-xs text-yellow uppercase">{fact.label}</dt>
                  <dd className="text-sm text-cream mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </WindowFrame>
        </AnimatedContainer>
      </div>
    </section>
  );
}
