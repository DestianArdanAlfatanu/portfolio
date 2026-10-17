import React, { memo } from 'react';
import PixelIcon from '@/components/ui/PixelIcon';
import WindowFrame from '@/components/ui/WindowFrame';
import { formatDate } from '@/lib/utils';

// Window title: the certificate title as a kebab-case .pdf file name.
const toFileName = (title) =>
  `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.pdf`;

/**
 * Certificate as a small OS window: issuer logo, title, issuer, note, date, credential link.
 */
export const CertificateCard = memo(({ certificate }) => {
  const { title, issuer, date, credentialUrl, image, description } = certificate;

  return (
    <WindowFrame title={toFileName(title)} className="h-full flex flex-col" bodyClassName="flex-1 flex flex-col">
      <div className="h-32 flex items-center justify-center bg-white border-b-2 border-shade p-4">
        {image ? (
          <img src={image} alt={issuer} loading="lazy" className="max-h-full max-w-full w-auto object-contain" />
        ) : (
          <PixelIcon name="file" size={48} className="text-purple" />
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-ink leading-snug">{title}</h3>
        <p className="text-sm text-ink/75 mt-1">{issuer}</p>
        {description && <p className="text-sm text-ink mt-2">{description}</p>}
        <div className="flex items-center justify-between gap-3 mt-auto pt-5">
          <span className="font-pixel text-[11px] text-ink uppercase">{formatDate(date)}</span>
          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-pixel text-[11px] uppercase text-ink border-b-2 border-ink hover:text-purple hover:border-purple"
            >
              View credential
              <PixelIcon name="externalLink" size={14} />
              <span className="sr-only">(opens in new tab)</span>
            </a>
          )}
        </div>
      </div>
    </WindowFrame>
  );
});

CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;
