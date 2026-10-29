import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import SocialLinks from '@/components/shared/SocialLinks';
import { animations, cn } from '@/lib/utils';

const PlusIcon = (props) => <PixelIcon name="plus" size={16} {...props} />;
const DownloadIcon = (props) => <PixelIcon name="download" size={16} {...props} />;

const sideLinks = [
  { label: 'Home', path: '/', icon: 'home' },
  { label: 'About', path: '/about', icon: 'user' },
  { label: 'Projects', path: '/projects', icon: 'folder' },
  { label: 'Contact', path: '/contact', icon: 'mail' },
];

function Sparkle({ className }) {
  return <span className={cn('absolute bg-yellow clip-star', className)} aria-hidden="true" />;
}

/**
 * Pixel-style CRT computer drawn with CSS. The screen shows a 160x120 dithered
 * portrait (public/destian-pixel.png, generated from photos/destian.jpg) scaled
 * up without smoothing, falling back to a monogram if it fails to load.
 */
function RetroComputer() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full max-w-[26rem] mx-auto">
      <span className="absolute -top-8 -right-6 w-44 h-44 sm:w-56 sm:h-56 bg-purple clip-burst" aria-hidden="true" />

      {/* Monitor */}
      <div className="relative bg-[#E6DCC3] border-[3px] border-shade shadow-px-lg p-3 sm:p-4">
        <div className="bg-[#CFC3A5] border-2 border-shade p-2 sm:p-3">
          <div className="relative aspect-[4/3] bg-teal-dark border-2 border-shade overflow-hidden">
            {hasError ? (
              <div className="w-full h-full flex flex-col items-center justify-center gap-2" aria-hidden="true">
                <span className="h-display text-6xl sm:text-7xl text-cream text-shadow-px">DA</span>
                <span className="font-pixel text-xs text-cream">
                  destian.exe<span className="inline-block w-2 h-3 ml-1 bg-cream align-middle motion-safe:animate-pulse" />
                </span>
              </div>
            ) : (
              <img
                src="/destian-pixel.png"
                alt="Pixel-art portrait of Destian Ardan Alfatanu"
                width={160}
                height={120}
                className="w-full h-full object-cover [image-rendering:pixelated]"
                onError={() => setHasError(true)}
              />
            )}
            <span className="absolute inset-0 scanlines pointer-events-none" aria-hidden="true" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-2.5 px-1" aria-hidden="true">
          <span className="font-pixel text-[10px] text-ink/70">DA-2026</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#3BD16F] border border-shade" />
            <span className="w-4 h-2.5 bg-[#CFC3A5] border-2 border-shade" />
          </span>
        </div>
      </div>

      {/* Neck + desktop case */}
      <div className="relative mx-auto w-24 h-4 bg-[#CFC3A5] border-x-[3px] border-shade" aria-hidden="true" />
      <div className="relative bg-[#E6DCC3] border-[3px] border-shade shadow-px-lg h-14 px-4 flex items-center justify-between" aria-hidden="true">
        <span className="flex flex-col gap-1.5">
          <span className="w-20 sm:w-28 h-2 bg-[#CFC3A5] border-2 border-shade" />
          <span className="w-20 sm:w-28 h-2 bg-[#CFC3A5] border-2 border-shade" />
        </span>
        <span className="w-2.5 h-2.5 bg-teal border border-shade" />
      </div>

      {/* Internship badge */}
      <div className="absolute -bottom-6 -right-2 sm:-right-6 z-10 bg-purple border-2 border-teal shadow-px px-3 py-2">
        <p className="font-pixel text-[10px] text-yellow uppercase leading-tight">Interned at</p>
        <p className="font-pixel text-xs sm:text-sm text-cream uppercase leading-tight mt-0.5">
          Telkom Indonesia
          <br />
          &amp; PT KAI
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative bg-navy bg-grid overflow-hidden">
      <Sparkle className="w-4 h-4 top-[18%] left-[47%] hidden lg:block" />
      <Sparkle className="w-3 h-3 top-[30%] left-[52%] hidden lg:block" />
      <Sparkle className="w-5 h-5 top-[40%] left-[45%] hidden lg:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-10 items-center">
        <motion.div initial="hidden" animate="visible" variants={animations.staggerContainer}>
          <motion.p variants={animations.fadeUp} className="font-pixel text-sm text-yellow uppercase">
            Hi, I'm
          </motion.p>

          <motion.h1 variants={animations.fadeUp} className="h-display text-shadow-px uppercase mt-3 text-[2.6rem] sm:text-6xl lg:text-[4rem]">
            <span className="block text-orange">Destian Ardan</span>
            <span className="block text-teal mt-1">Alfatanu</span>
          </motion.h1>

          <motion.p variants={animations.fadeUp} className="font-pixel text-lg sm:text-xl text-cream uppercase leading-snug mt-6">
            Full-Stack Engineer.
          </motion.p>

          <motion.p variants={animations.fadeUp} className="text-sm sm:text-base text-muted leading-relaxed mt-4 max-w-xl">
            Computer Science graduate building web applications across React/Next.js frontends and FastAPI, Laravel, and NestJS backends. Currently co-founder and full-stack engineer at Techworksnesia, shipping a 161-endpoint FastAPI and PostgreSQL system with RBAC, JWT authentication, and audit trails.
          </motion.p>

          <motion.div variants={animations.fadeUp} className="flex flex-wrap gap-4 mt-8">
            <Button variant="primary" size="lg" href="/projects" icon={PlusIcon}>
              View Projects
            </Button>
            <Button variant="secondary" size="lg" href="/cv.pdf" icon={DownloadIcon}>
              Download Resume
            </Button>
          </motion.div>

          <motion.div variants={animations.fadeUp} className="flex flex-wrap items-center gap-x-8 gap-y-5 mt-9">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-11 h-11 border-2 border-teal text-teal">
                <PixelIcon name="map" size={24} />
              </span>
              <p className="font-pixel text-xs text-teal uppercase leading-relaxed">
                Banyumas &amp; Depok, Indonesia.
                <br />
                Open to Jabodetabek &amp; remote.
              </p>
            </div>
            <SocialLinks variant="boxed" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-8 pb-6"
        >
          <div className="flex-1 min-w-0">
            <RetroComputer />
          </div>

          <nav aria-label="Quick navigation" className="hidden xl:block">
            <ul className="flex flex-col gap-6">
              {sideLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="group flex flex-col items-center gap-1.5 text-cream hover:text-orange transition-colors">
                    <span className="flex items-center justify-center w-11 h-11 bg-navy-surface border-2 border-shade shadow-px-sm text-yellow group-hover:text-orange">
                      <PixelIcon name={link.icon} size={24} />
                    </span>
                    <span className="font-pixel text-[11px] uppercase">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
