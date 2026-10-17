import React from 'react';
import RetroHeading from '@/components/ui/RetroHeading';
import AnimatedContainer from '@/components/ui/AnimatedContainer';

/**
 * Top band for inner pages: navy grid with the page's h1 and an optional intro.
 */
export default function PageHeader({ overline, title, description, children }) {
  return (
    <section className="bg-navy bg-grid border-b-2 border-shade">
      <AnimatedContainer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <RetroHeading as="h1" overline={overline} title={title} />
        {description && <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">{description}</p>}
        {children}
      </AnimatedContainer>
    </section>
  );
}
