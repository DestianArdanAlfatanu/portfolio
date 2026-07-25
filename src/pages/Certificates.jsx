import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import CertificateCard from '@/components/cards/CertificateCard';
import { getCertificates } from '@/data/dataService';

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    document.title = 'Certificates — Destian Ardan Alfatanu';
    const fetchCerts = async () => {
      const data = await getCertificates();
      setCertificates(data);
    };
    fetchCerts();
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionTitle overline="Credentials" title="Certificates & Achievements" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {certificates.map((cert, index) => (
              <CertificateCard key={cert.id || index} certificate={cert} />
            ))}
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
