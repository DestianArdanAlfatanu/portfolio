import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import Timeline from '@/components/shared/Timeline';
import ExperienceCard from '@/components/cards/ExperienceCard';
import { getExperience } from '@/data/dataService';

const ArrowIcon = (props) => <PixelIcon name="arrowRight" size={16} {...props} />;

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
    <section className="bg-navy bg-grid border-b-2 border-shade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-[16rem_1fr] gap-10">
        {/* Side label block */}
        <div className="lg:sticky lg:top-24 self-start">
          <div className="bg-orange text-ink border-2 border-shade shadow-px p-6">
            <h2 className="h-display text-3xl sm:text-4xl uppercase">
              Experience <span aria-hidden="true">→</span>
            </h2>
            <p className="text-sm mt-3 leading-relaxed">Where I've worked.</p>
          </div>
        </div>

        <div>
          <Timeline>
            {experiences.map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} compact delay={idx * 0.08} />
            ))}
          </Timeline>

          <div className="mt-10 pl-10">
            <Button variant="outline" href="/experience" icon={ArrowIcon} iconPosition="right">
              View Full Experience
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
