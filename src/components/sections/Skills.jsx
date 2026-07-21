import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import TechBadge from '@/components/ui/TechBadge';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { getSkills } from '@/data/dataService';

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills();
      setSkills(data || []);
    };
    fetchSkills();
  }, []);

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          overline="Skills" 
          title="Technologies & Tools" 
        />
        
        <div className="mt-12 space-y-8">
          {skills.map((skillCategory, idx) => (
            <AnimatedContainer key={skillCategory.category || idx} animation="fadeUp" delay={idx * 0.1}>
              <h3 className="text-text-muted text-sm font-mono uppercase tracking-wider mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items?.map((item) => (
                  <TechBadge key={item.name} name={item.name} />
                ))}
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
