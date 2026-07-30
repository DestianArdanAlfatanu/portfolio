import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import QuickStats from '@/components/sections/QuickStats';
import CurrentTech from '@/components/sections/CurrentTech';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Skills from '@/components/sections/Skills';
import ExperiencePreview from '@/components/sections/ExperiencePreview';
import AboutPreview from '@/components/sections/AboutPreview';
import CertificatesPreview from '@/components/sections/CertificatesPreview';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  useEffect(() => {
    document.title = 'Destian Ardan Alfatanu — Full-Stack & Front-End Developer';
  }, []);

  return (
    <>
      <Hero />
      <QuickStats />
      <CurrentTech />
      <FeaturedProjects />
      <Skills />
      <ExperiencePreview />
      <AboutPreview />
      <CertificatesPreview />
      <ContactCTA />
    </>
  );
}
