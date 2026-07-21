import React, { useState, useEffect } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import CertificateCard from '@/components/cards/CertificateCard';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { getCertificates } from '@/data/dataService';

export default function CertificatesPreview() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchCerts = async () => {
      const data = await getCertificates();
      setCertificates((data || []).slice(0, 3));
    };
    fetchCerts();
  }, []);

  return (
    <section className="py-24 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          overline="Certifications" 
          title="Credentials & Certificates" 
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert, idx) => (
            <AnimatedContainer key={cert.id || idx} animation="fadeUp" delay={idx * 0.1}>
              <CertificateCard certificate={cert} />
            </AnimatedContainer>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="ghost" href="/certificates">
            View All Certificates
          </Button>
        </div>
      </div>
    </section>
  );
}
