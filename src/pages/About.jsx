import { useEffect } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import RetroHeading from '@/components/ui/RetroHeading';
import WindowFrame from '@/components/ui/WindowFrame';
import PixelIcon from '@/components/ui/PixelIcon';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

const facts = [
  { label: 'Location', lines: ['Purwokerto, Central Java, Indonesia', 'Depok, West Java, Indonesia'] },
  { label: 'Focus', lines: ['Full-Stack & Front-End Development'] },
  { label: 'Education', lines: ['Bachelor of Computer Science', 'Jenderal Soedirman University'] },
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
    document.title = 'About — Destian Ardan Alfatanu | Full-Stack & Front-End Developer';
  }, []);

  return (
    <>
      <PageHeader overline="About" title="Professional Profile" />

      <section className="bg-cream on-light border-b-2 border-shade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <AnimatedContainer animation="fadeUp" className="space-y-5 text-ink text-base sm:text-lg leading-relaxed">
            <p>
              I am a Fresh Graduate in Informatics from Jenderal Soedirman University with a strong interest in Full-Stack and Front-End Web Development.
            </p>
            <p>
              Throughout my academic journey and internships, I have developed web applications ranging from company profile websites, internal management systems, booking platforms, expert systems, and digital invitation platforms.
            </p>
            <p>
              I enjoy transforming business requirements into intuitive, responsive, and maintainable applications while continuously improving my technical skills through real-world projects.
            </p>
            <p>
              My primary focus is building scalable web applications using React, Next.js, Laravel, TypeScript, PHP, Tailwind CSS, and MySQL.
            </p>
            <p>
              I believe good software is not only functional but also easy to maintain, accessible, and enjoyable to use.
            </p>
          </AnimatedContainer>

          <AnimatedContainer animation="fadeUp" delay={0.1} className="lg:sticky lg:top-24">
            <WindowFrame title="profile.txt" tone="navy" bodyClassName="px-5 py-2">
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
