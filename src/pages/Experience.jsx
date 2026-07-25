import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import Timeline from '@/components/shared/Timeline';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { getExperience } from '@/data/dataService';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    document.title = 'Experience — Destian Ardan Alfatanu';
    const fetchExp = async () => {
      const data = await getExperience();
      setExperiences(data);
    };
    fetchExp();
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionTitle overline="Career" title="Professional Experience" />
          <div className="mt-12">
            <Timeline>
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.id || index} experience={exp} />
              ))}
            </Timeline>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
