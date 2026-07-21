import React, { memo } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CertificateCard = memo(({ certificate }) => {
  const { title, issuer, date, credentialUrl, image } = certificate;

  return (
    <div className="bg-bg-card border border-border-subtle rounded-xl p-5 hover:bg-bg-card-hover transition-all duration-200 flex items-start gap-4 h-full">
      <div className="shrink-0 w-12 h-12 rounded-lg bg-bg-primary border border-border-subtle flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={issuer} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <Award className="w-6 h-6 text-accent-indigo" />
        )}
      </div>
      
      <div className="flex flex-col flex-grow h-full justify-between gap-2">
        <div>
          <h3 className="font-semibold text-text-primary leading-tight mb-1">{title}</h3>
          <p className="text-sm text-text-secondary">{issuer}</p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-text-muted font-mono">{date}</span>
          
          {credentialUrl && (
            <a 
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-accent-indigo hover:text-accent-indigo-hover transition-colors"
            >
              View Credential
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
});

CertificateCard.displayName = 'CertificateCard';

export default CertificateCard;
