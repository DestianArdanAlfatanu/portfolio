import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import HelloBand from '@/components/sections/HelloBand';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Skills from '@/components/sections/Skills';
import ExperiencePreview from '@/components/sections/ExperiencePreview';
import AboutPreview from '@/components/sections/AboutPreview';
import CertificatesPreview from '@/components/sections/CertificatesPreview';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Home() {
  useEffect(() => {
    document.title = 'Destian Ardan Alfatanu — Full-Stack Engineer';
  }, []);

  return (
    <>
      <Hero />
      <HelloBand />
      <Skills />
      <FeaturedProjects />
      <ExperiencePreview />
      <AboutPreview />
      <CertificatesPreview />
      <ContactCTA />
    </>
  );
}
