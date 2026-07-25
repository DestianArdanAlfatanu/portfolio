import { useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { Code, Zap, Users } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = 'About — Destian Ardan Alfatanu';
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionTitle overline="About" title="Professional Profile" />

          <div className="mt-12 max-w-3xl space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              I am a Computer Science graduate from Universitas Jenderal Soedirman with a strong interest in front-end and full-stack web development. During my internships at PT Kereta Api Indonesia DAOP V Purwokerto and PT Telkom Indonesia, I developed internal business applications that improved administrative workflows and operational efficiency.            </p>
            <p>
              My experience ranges from responsive landing pages to enterprise web applications involving authentication, role-based access control, database design, and REST API integration. I enjoy transforming business requirements into scalable, user-friendly digital products.            </p>
            <p>
              Currently, I am seeking opportunities as a Front-end or Full-stack Developer where I can continue building impactful products while growing alongside experienced engineering teams.            </p>
          </div>

          <div className="bg-bg-card border border-border-subtle rounded-xl p-6 mt-12 max-w-lg">
            <div className="flex justify-between py-3 border-b border-border-subtle">
              <span className="text-text-muted">Location</span>
              <span className="text-text-primary font-medium">Purwokerto, Central Java</span>
            </div>
            <div className="flex justify-between py-3 border-b border-border-subtle">
              <span className="text-text-muted">Current Focus</span>
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
                <h3 className="font-semibold text-text-primary mt-3">Bussines-Oriented Development</h3>
                <p className="text-text-secondary text-sm mt-2">
                  I build applications that solve operational problems, not just beautiful interfaces.
                </p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Zap className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">Modern Web Technologies</h3>
                <p className="text-text-secondary text-sm mt-2">
                  Experienced with React, Next.js, Laravel, Tailwind CSS, TypeScript, and REST API integration.
                </p>
              </div>
              <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
                <Users className="w-6 h-6 text-accent-indigo" />
                <h3 className="font-semibold text-text-primary mt-3">Continuous Learning</h3>
                <p className="text-text-secondary text-sm mt-2">
                  Always exploring modern development practices and improving software engineering skills through real-world projects.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
