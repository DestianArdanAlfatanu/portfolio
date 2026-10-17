import React from 'react';
import { Link } from 'react-router';
import { Linkedin } from 'lucide-react';
import PixelIcon from '@/components/ui/PixelIcon';
import { navLinks, getGmailComposeUrl } from '@/lib/utils';
import socialData from '@/data/social.json';

const EMAIL = socialData.find((s) => s.platform === 'Email')?.url.replace('mailto:', '');

// pixelarticons has no LinkedIn glyph, so that one falls back to lucide.
const socialIcons = {
  Github: <PixelIcon name="github" size={18} />,
  Linkedin: <Linkedin size={18} aria-hidden="true" />,
  MessageCircle: <PixelIcon name="chat" size={18} />,
  Mail: <PixelIcon name="mail" size={18} />,
};

const socialHref = (social) =>
  social.url.startsWith('mailto:') ? getGmailComposeUrl(social.url.replace('mailto:', '')) : social.url;

function ColumnTitle({ children }) {
  return <h2 className="font-pixel text-sm text-yellow uppercase">{children}</h2>;
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-purple-deep border-t-2 border-shade">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] md:gap-0">
        <div className="md:pr-10">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center w-12 h-12 bg-teal text-ink border-2 border-shade shadow-px-sm font-display font-bold text-xl leading-none">
              DA
            </span>
            <p className="font-pixel text-sm text-yellow uppercase leading-snug">
              Let's build
              <br />
              something together
            </p>
          </div>
          <p className="text-sm text-cream mt-4 leading-relaxed">
            Destian Ardan Alfatanu — Full-Stack &amp; Front-End Web Developer.
          </p>
          {EMAIL && (
            <a
              href={getGmailComposeUrl(EMAIL)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-cream text-ink text-xs border-2 border-shade shadow-px-sm px-3 py-1.5 break-all hover:bg-yellow"
            >
              {EMAIL}
            </a>
          )}
        </div>

        <div className="md:px-10 md:border-l-2 md:border-shade/60">
          <ColumnTitle>Find me on</ColumnTitle>
          <ul className="mt-4 space-y-2.5">
            {socialData.map((social) => (
              <li key={social.platform}>
                <a
                  href={socialHref(social)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-cream hover:text-yellow transition-colors"
                >
                  {socialIcons[social.icon]}
                  {social.platform}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pl-10 md:border-l-2 md:border-shade/60">
          <ColumnTitle>Navigate</ColumnTitle>
          <ul className="mt-4 grid grid-cols-2 md:grid-cols-1 gap-2.5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="inline-flex items-center gap-2 text-sm text-cream hover:text-yellow transition-colors">
                  <span aria-hidden="true" className="text-yellow">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-navy-deep border-t-2 border-shade">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 font-pixel text-[11px] text-muted uppercase text-center leading-relaxed">
          © {currentYear} Destian Ardan Alfatanu <span aria-hidden="true">•</span> Made with{' '}
          <PixelIcon name="heart" size={12} className="text-orange align-[-1px]" />
          <span className="sr-only">love</span> and pixels
        </p>
      </div>
    </footer>
  );
}
