import React from 'react';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import WindowFrame from '@/components/ui/WindowFrame';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

const MailIcon = (props) => <PixelIcon name="mail" size={16} {...props} />;
const FileIcon = (props) => <PixelIcon name="file" size={16} {...props} />;

export default function ContactCTA() {
  return (
    <section className="bg-orange border-b-2 border-shade">
      <div className="bg-dither">
        <AnimatedContainer animation="fadeUp" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <WindowFrame title="message.txt" controls="full" bodyClassName="p-6 sm:p-10 text-center">
            <p className="inline-block font-pixel text-xs uppercase bg-purple text-cream border-2 border-shade px-2.5 py-1">
              Currently Open to Opportunities
            </p>
            <h2 className="h-display text-ink uppercase text-3xl sm:text-4xl lg:text-5xl mt-5">
              Let's build something together
            </h2>
            <p className="text-ink text-base mt-5 leading-relaxed">
              I am actively seeking opportunities as a Front-End Developer or Full-Stack Developer, including full-time positions, internships, and freelance collaborations. If you are looking for someone passionate about building modern web applications and eager to contribute to your team, I would be happy to connect and discuss how I can add value to your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button variant="primary" size="lg" href="/contact" icon={MailIcon}>
                Contact Me
              </Button>
              <Button variant="dark" size="lg" href="/cv.pdf" icon={FileIcon}>
                View Resume
              </Button>
            </div>
          </WindowFrame>
        </AnimatedContainer>
      </div>
    </section>
  );
}
