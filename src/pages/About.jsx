import { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Code, Zap, Monitor } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'About — Destian Ardan Alfatanu | Full-Stack & Front-End Developer';
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionTitle overline="About" title="Professional Profile" />

          <div className="mt-12 max-w-3xl space-y-6 text-text-secondary text-lg leading-relaxed">
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
          </div>

          <div className="bg-bg-card border border-border-subtle rounded-xl p-6 mt-12 max-w-lg">
            <div className="flex justify-between items-start py-3 border-b border-border-subtle">
              <span className="text-text-muted">Location</span>
              <span className="text-text-primary font-medium text-right">Purwokerto, Central Java, Indonesia<br /> Depok, West Java, Indonesia</span>
            </div>
            <div className="flex justify-between items-start py-3 border-b border-border-subtle">
              <span className="text-text-muted">Focus</span>
              <span className="text-text-primary font-medium text-right">Full-Stack & Front-End Development</span>
            </div>
            <div className="flex justify-between items-start py-3 border-b border-border-subtle">
              <span className="text-text-muted shrink-0">Education</span>
              <span className="text-text-primary font-medium text-right">Bachelor of Computer Science<br />Jenderal Soedirman University</span>
            </div>
            <div className="flex justify-between items-start py-3">
              <span className="text-text-muted shrink-0">Languages</span>
              <span className="text-text-primary font-medium text-right">Indonesian (Native)<br />English (Professional Working Proficiency)</span>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-text-primary">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Code className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">Clean Architecture</h3>
                <p className="text-text-secondary text-sm mt-2">
                  Build modular and maintainable applications using reusable components and scalable project structures.
                </p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Zap className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">Performance</h3>
                <p className="text-text-secondary text-sm mt-2">
                  Develop responsive, optimized, and fast-loading applications with modern development practices.
                </p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Monitor className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">User Experience</h3>
                <p className="text-text-secondary text-sm mt-2">
                  Create intuitive interfaces that prioritize usability, accessibility, and consistency across devices.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
