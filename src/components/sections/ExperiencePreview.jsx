import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Timeline from '@/components/shared/Timeline';
import ExperienceCard from '@/components/cards/ExperienceCard';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { getExperience } from '@/data/dataService';
import { animations } from '@/lib/utils';

export default function ExperiencePreview() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExp = async () => {
      const data = await getExperience();
      setExperiences((data || []).slice(0, 3));
    };
    fetchExp();
  }, []);

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          overline="Experience" 
          title="Where I've Worked" 
        />
        
        <AnimatedContainer 
          className="mt-12"
          animation="fadeIn"
        >
          <Timeline>
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id || idx} experience={exp} />
            ))}
          </Timeline>
        </AnimatedContainer>

        <div className="flex justify-center mt-10">
          <Button variant="ghost" href="/experience">
            View Full Experience
          </Button>
        </div>
      </div>
    </section>
  );
}
