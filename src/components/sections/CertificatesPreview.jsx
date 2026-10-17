import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import RetroHeading from '@/components/ui/RetroHeading';
import CertificateCard from '@/components/cards/CertificateCard';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import { getCertificates } from '@/data/dataService';

const ArrowIcon = (props) => <PixelIcon name="arrowRight" size={16} {...props} />;

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
    <section className="bg-navy-deep border-b-2 border-shade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <RetroHeading overline="Certifications" title="Credentials & Certificates" />
          <Button variant="outline" href="/certificates" icon={ArrowIcon} iconPosition="right">
            View All Certificates
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {certificates.map((cert, idx) => (
            <AnimatedContainer key={cert.id} animation="fadeUp" delay={idx * 0.08} className="h-full min-w-0">
              <CertificateCard certificate={cert} />
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
