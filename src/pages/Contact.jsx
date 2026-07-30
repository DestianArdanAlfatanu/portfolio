import { useEffect, useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import ContactCard from '@/components/cards/ContactCard';
import Button from '@/components/ui/Button';
import { Copy, Check, Mail, Github, Linkedin, MessageCircle, FileText } from 'lucide-react';
import { copyToClipboard, getGmailComposeUrl } from '@/lib/utils';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'destianardanalfatanu@gmail.com';

  useEffect(() => {
    document.title = 'Contact — Destian Ardan Alfatanu | Full-Stack & Front-End Developer';
  }, []);

  const handleCopyEmail = async () => {
    await copyToClipboard(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContainer>
          <SectionTitle 
            overline="Currently Open to Opportunities" 
            title="Let's Work Together" 
            description="I am actively seeking opportunities as a Front-End Developer or Full-Stack Developer. Feel free to reach out through any of the channels below." 
          />

          <div className="mt-12 bg-bg-card border border-border-subtle rounded-2xl p-4 sm:p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-text-primary break-all">{email}</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button 
                onClick={handleCopyEmail} 
                variant="secondary" 
                icon={copied ? Check : Copy}
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </Button>
              <Button 
                as="a" 
                href={getGmailComposeUrl(email)} 
                target="_blank" 
                rel="noopener noreferrer" 
                variant="primary" 
                icon={Mail}
              >
                Open Gmail
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <ContactCard 
              icon={Github} 
              label="GitHub" 
              value="@DestianArdanAlfatanu" 
              href="https://github.com/DestianArdanAlfatanu" 
            />
            <ContactCard 
              icon={Linkedin} 
              label="LinkedIn" 
              value="Destian Ardan Alfatanu" 
              href="https://www.linkedin.com/in/destian-ardan-alfatanu/" 
            />
            <ContactCard 
              icon={MessageCircle} 
              label="WhatsApp" 
              value="+6285156615935" 
              href="https://wa.me/+6285156615935" 
            />
            <ContactCard 
              icon={FileText} 
              label="Resume" 
              value="Download PDF" 
              href="/cv.pdf" 
            />
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
