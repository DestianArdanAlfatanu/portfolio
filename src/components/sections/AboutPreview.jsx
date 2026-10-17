import React from 'react';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import RetroHeading from '@/components/ui/RetroHeading';
import WindowFrame from '@/components/ui/WindowFrame';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

const ArrowIcon = (props) => <PixelIcon name="arrowRight" size={16} {...props} />;

export default function AboutPreview() {
  const facts = [
    { label: 'Location', value: 'Central Java, Indonesia' },
    { label: 'Focus', value: 'Full-Stack & Front-End Development' },
    { label: 'Education', value: 'B.S. Computer Science' },
    { label: 'Languages', value: 'Indonesian, English' },
  ];

  return (
    <section className="bg-cream on-light border-b-2 border-shade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <AnimatedContainer animation="fadeUp">
          <RetroHeading overline="About Me" title="Building Scalable Web Applications" tone="light" />
          <p className="text-ink text-base mt-6 leading-relaxed">
            I am a Fresh Graduate in Informatics from Jenderal Soedirman University specializing in Full-Stack and Front-End Web Development. I enjoy transforming business requirements into intuitive, responsive, and maintainable applications.
          </p>
          <p className="text-ink text-base mt-4 leading-relaxed">
            Throughout my academic projects and professional internships at PT Telkom Indonesia and PT Kereta Api Indonesia, I have developed web applications ranging from internal management systems to digital platforms using React, Next.js, Laravel, TypeScript, and MySQL.
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
