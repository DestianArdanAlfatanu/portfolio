import React, { useState, useEffect } from 'react';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import PixelIcon from '@/components/ui/PixelIcon';
import RetroHeading from '@/components/ui/RetroHeading';
import WindowFrame from '@/components/ui/WindowFrame';
import { getSkills } from '@/data/dataService';

// Per-category window styling, matched by category name from skills.json.
const categoryStyle = {
  Frontend: { icon: 'deviceLaptop', color: 'text-teal' },
  Backend: { icon: 'server', color: 'text-orange' },
  'Tools & Others': { icon: 'sliders', color: 'text-yellow' },
};

// What I'm reaching for day to day (previously the "Currently working with" row).
const currentTech = ['React', 'TypeScript', 'Laravel', 'Tailwind CSS', 'Vite'];

function SkillWindow({ title, icon, color, items }) {
  return (
    <WindowFrame title={title} className="h-full flex flex-col" bodyClassName="p-5 flex-1 flex flex-col">
      <span className={`flex items-center justify-center w-16 h-16 bg-navy border-2 border-shade shadow-px-sm ${color}`}>
        <PixelIcon name={icon} size={36} />
      </span>
      <ul className="flex flex-wrap gap-2 mt-5">
        {items.map((item) => (
          <li key={item} className="text-xs text-ink border-2 border-ink px-2 py-1 leading-none">
            {item}
          </li>
        ))}
      </ul>
    </WindowFrame>
  );
}

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
    <section className="bg-cream on-light border-b-2 border-shade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <RetroHeading overline="Skills" title="Technologies & Tools" tone="light" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {skills.map((category, idx) => {
            const style = categoryStyle[category.category] || { icon: 'code', color: 'text-teal' };
            return (
              <AnimatedContainer key={category.category} className="h-full" animation="fadeUp" delay={idx * 0.08}>
                <SkillWindow
                  title={category.category}
                  icon={style.icon}
                  color={style.color}
                  items={(category.items || []).map((item) => item.name)}
                />
              </AnimatedContainer>
            );
          })}
          <AnimatedContainer className="h-full" animation="fadeUp" delay={skills.length * 0.08}>
            <SkillWindow title="Now using" icon="zap" color="text-cream" items={currentTech} />
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
