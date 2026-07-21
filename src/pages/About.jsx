import { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Code, Zap, Users } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'About — Your Name';
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionTitle overline="About" title="Get to know me" />

          <div className="mt-12 max-w-3xl space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              Hello! I'm a passionate front-end developer dedicated to building exceptional digital experiences. I focus on crafting clean, accessible, and high-performance user interfaces that solve real-world problems.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work on the internet. Over the years, I've honed my skills in modern JavaScript frameworks, primarily React, and developed a keen eye for design and user experience.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good book. I'm always eager to learn and take on new challenges.
            </p>
          </div>

          <div className="bg-bg-card border border-border-subtle rounded-xl p-6 mt-12 max-w-lg">
            <div className="flex justify-between py-3 border-b border-border-subtle">
              <span className="text-text-muted">Location</span>
              <span className="text-text-primary font-medium">Central Java, Indonesia</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border-subtle">
              <span className="text-text-muted">Focus</span>
              <span className="text-text-primary font-medium">Front-end Development</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border-subtle">
              <span className="text-text-muted">Education</span>
              <span className="text-text-primary font-medium">B.S. Computer Science</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-text-muted">Languages</span>
              <span className="text-text-primary font-medium">Indonesian, English</span>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-text-primary">My Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Code className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">Clean Code</h3>
                <p className="text-text-secondary text-sm mt-2">
                  I write maintainable, modular, and well-documented code that follows industry best practices.
                </p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Zap className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">Performance First</h3>
                <p className="text-text-secondary text-sm mt-2">
                  Fast-loading and responsive applications are a priority. I optimize for speed and efficiency.
                </p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Users className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">User Focused</h3>
                <p className="text-text-secondary text-sm mt-2">
                  Everything I build is centered around providing an intuitive and accessible experience for the end-user.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
