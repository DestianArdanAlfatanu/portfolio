import { useEffect, useState } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import CertificateCard from '@/components/cards/CertificateCard';
import { getCertificates } from '@/data/dataService';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    document.title = 'Certificates — Destian Ardan Alfatanu | Full-Stack & Front-End Developer';
    const fetchCerts = async () => {
      const data = await getCertificates();
      setCertificates(data);
    };
    fetchCerts();
  }, []);

  return (
    <>
      <PageHeader overline="Credentials" title="Certificates & Achievements" />

      <section className="bg-teal bg-zigzag border-b-2 border-shade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <AnimatedContainer key={cert.id} animation="fadeUp" delay={idx * 0.08} className="h-full min-w-0">
                <CertificateCard certificate={cert} />
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
