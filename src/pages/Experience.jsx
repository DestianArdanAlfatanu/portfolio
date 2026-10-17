import { useEffect, useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Timeline from '@/components/shared/Timeline';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { getExperience } from '@/data/dataService';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    document.title = 'Experience — Destian Ardan Alfatanu | Full-Stack & Front-End Developer';
    const fetchExp = async () => {
      const data = await getExperience();
      setExperiences(data);
    };
    fetchExp();
  }, []);

  return (
    <>
      <PageHeader overline="Career" title="Professional Experience" />

      <section className="bg-navy-deep border-b-2 border-shade">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <Timeline>
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} delay={Math.min(idx, 4) * 0.06} />
            ))}
          </Timeline>
        </div>
      </section>
    </>
  );
}
