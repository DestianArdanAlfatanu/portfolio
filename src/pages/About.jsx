import { useEffect } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import RetroHeading from '@/components/ui/RetroHeading';
import WindowFrame from '@/components/ui/WindowFrame';
import PixelIcon from '@/components/ui/PixelIcon';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

const facts = [
  { label: 'Location', lines: ['Banyumas, Central Java', 'Depok, West Java', 'Open to Jabodetabek and remote'] },
  { label: 'Focus', lines: ['Full-Stack Engineering', 'React, FastAPI, PostgreSQL'] },
  { label: 'Education', lines: ['Bachelor of Computer Science', 'Jenderal Soedirman University', 'GPA 3.79 / 4.00'] },
  { label: 'Languages', lines: ['Indonesian (Native)', 'English (Professional Working Proficiency)'] },
];

const approach = [
  {
    icon: 'code',
    color: 'text-teal',
    title: 'Clean Architecture',
    text: 'Build modular and maintainable applications using reusable components and scalable project structures.',
  },
  {
    icon: 'zap',
    color: 'text-yellow',
    title: 'Performance',
    text: 'Develop responsive, optimized, and fast-loading applications with modern development practices.',
  },
  {
    icon: 'deviceLaptop',
    color: 'text-orange',
    title: 'User Experience',
    text: 'Create intuitive interfaces that prioritize usability, accessibility, and consistency across devices.',
  },
];

export default function About() {
  useEffect(() => {
    document.title = 'About — Destian Ardan Alfatanu | Full-Stack Engineer';
  }, []);

  return (
    <>
      <PageHeader overline="About" title="Professional Profile" />

      <section className="bg-cream on-light border-b-2 border-shade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <AnimatedContainer animation="fadeUp" className="space-y-5 text-ink text-base sm:text-lg leading-relaxed">
            <p>
              I am a Full-Stack Engineer and Computer Science graduate from Jenderal Soedirman University, currently co-founder and full-stack engineer at Techworksnesia.
            </p>
            <p>
              At Techworksnesia I built an operational management system for a vocational training center with React, FastAPI, and PostgreSQL: a 161-endpoint REST API with role-based access control, JWT authentication, audit trails, and idempotent payment processing.
            </p>
            <p>
              Before that, I interned as a software engineer at PT Telkom Indonesia and as an information system intern at PT Kereta Api Indonesia, and freelanced on frontend work for Smartani and DiikatJanji. Along the way I have built internal management systems, booking platforms, an expert system, and digital invitation platforms.
            </p>
            <p>
              I enjoy transforming business requirements into intuitive, responsive, and maintainable applications while continuously improving my technical skills through real-world projects.
            </p>
            <p>
              My main stack is React and Next.js on the frontend with FastAPI, Laravel, or NestJS on the backend, backed by PostgreSQL or MySQL.
            </p>
            <p>
              I believe good software is not only functional but also easy to maintain, accessible, and enjoyable to use.
            </p>
          </AnimatedContainer>

          <AnimatedContainer animation="fadeUp" delay={0.1} className="lg:sticky lg:top-24">
            <WindowFrame title="profile.txt" tone="navy" bodyClassName="px-5 py-2">
              <div className="flex items-center gap-4 py-4 border-b-2 border-dashed border-navy-surface">
                <div className="relative shrink-0 w-28 aspect-[4/3] bg-teal-dark border-2 border-shade shadow-px-sm overflow-hidden">
                  <img
                    src="/destian-pixel.png"
                    alt="Pixel-art portrait of Destian Ardan Alfatanu"
                    width={160}
                    height={120}
                    className="w-full h-full object-cover [image-rendering:pixelated]"
                  />
                  <span className="absolute inset-0 scanlines pointer-events-none" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="font-pixel text-sm text-cream uppercase leading-snug">Destian Ardan Alfatanu</p>
                  <p className="font-pixel text-xs text-teal uppercase mt-1">Full-Stack Engineer</p>
                </div>
              </div>
              <dl>
                {facts.map((fact) => (
                  <div key={fact.label} className="py-3.5 border-b-2 border-dashed border-navy-surface last:border-0">
                    <dt className="font-pixel text-xs text-yellow uppercase">{fact.label}</dt>
                    {fact.lines.map((line) => (
                      <dd key={line} className="text-sm text-cream mt-1">{line}</dd>
                    ))}
                  </div>
                ))}
              </dl>
            </WindowFrame>
          </AnimatedContainer>
        </div>
      </section>

      <section className="bg-teal bg-zigzag border-b-2 border-shade on-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <RetroHeading overline="How I work" title="My Approach" tone="light" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {approach.map((item, idx) => (
              <AnimatedContainer key={item.title} animation="fadeUp" delay={idx * 0.08} className="h-full">
                <WindowFrame title={item.title} className="h-full" bodyClassName="p-5">
                  <span className={`flex items-center justify-center w-14 h-14 bg-navy border-2 border-shade shadow-px-sm ${item.color}`}>
                    <PixelIcon name={item.icon} size={30} />
                  </span>
                  <h3 className="font-pixel text-sm text-ink uppercase mt-5">{item.title}</h3>
                  <p className="text-sm text-ink leading-relaxed mt-2">{item.text}</p>
                </WindowFrame>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
