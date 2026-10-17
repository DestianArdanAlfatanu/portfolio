import React from 'react';
import AnimatedContainer from '@/components/ui/AnimatedContainer';
import PixelIcon from '@/components/ui/PixelIcon';

// 16x16 pixel smiley: Y = face, K = features. The outline is derived below.
const SMILEY = [
  '....YYYYYYYY....',
  '..YYYYYYYYYYYY..',
  '.YYYYYYYYYYYYYY.',
  '.YYYYYYYYYYYYYY.',
  'YYYYKKYYYYKKYYYY',
  'YYYYKKYYYYKKYYYY',
  'YYYYKKYYYYKKYYYY',
  'YYYYYYYYYYYYYYYY',
  'YYYYYYYYYYYYYYYY',
  'YYKKYYYYYYYYKKYY',
  'YYYKKYYYYYYKKYYY',
  '.YYYKKKKKKKKYYY.',
  '.YYYYYKKKKYYYYY.',
  '..YYYYYYYYYYYY..',
  '...YYYYYYYYYY...',
  '....YYYYYYYY....',
];

const smileyCells = (() => {
  const filled = (x, y) => SMILEY[y]?.[x] && SMILEY[y][x] !== '.';
  const cells = [];
  for (let y = -1; y <= 16; y++) {
    for (let x = -1; x <= 16; x++) {
      if (filled(x, y)) {
        cells.push({ x, y, fill: SMILEY[y][x] === 'Y' ? 'var(--color-yellow)' : 'var(--color-ink)' });
      } else if (filled(x + 1, y) || filled(x - 1, y) || filled(x, y + 1) || filled(x, y - 1)) {
        cells.push({ x, y, fill: 'var(--color-ink)' });
      }
    }
  }
  return cells;
})();

function PixelSmiley({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="-1 -1 18 18" shapeRendering="crispEdges" aria-hidden="true">
      {smileyCells.map(({ x, y, fill }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={fill} />
      ))}
    </svg>
  );
}

const facts = [
  { icon: 'bookOpen', label: 'Informatics Graduate', color: 'text-yellow' },
  { icon: 'building', label: 'Intern @ PT Telkom', color: 'text-teal' },
  { icon: 'building', label: 'Intern @ PT KAI', color: 'text-orange' },
  { icon: 'briefcase', label: 'Co-Founder @ Techworksnesia', color: 'text-cream' },
];

export default function HelloBand() {
  return (
    <section className="bg-orange border-y-2 border-shade on-light">
      <AnimatedContainer animation="fadeIn" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-[auto_1fr] gap-8 items-center">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-5 lg:pr-8 lg:border-r-2 lg:border-ink/40">
          <PixelSmiley />
          <h2 className="h-display text-4xl sm:text-5xl text-ink uppercase shrink-0">Hello!</h2>
          <p className="text-sm text-ink leading-relaxed max-w-xs">
            Passionate about writing clean code, building maintainable systems, and continuously learning modern software engineering practices.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {facts.map((fact) => (
            <li key={fact.label} className="flex flex-col items-center text-center gap-2">
              <span className={`flex items-center justify-center w-12 h-12 bg-navy border-2 border-shade shadow-px-sm ${fact.color}`}>
                <PixelIcon name={fact.icon} size={28} />
              </span>
              <span className="font-pixel text-[11px] text-ink uppercase leading-tight">{fact.label}</span>
            </li>
          ))}
        </ul>
      </AnimatedContainer>
    </section>
  );
}
