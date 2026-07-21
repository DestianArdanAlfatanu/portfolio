import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found';
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <div className="text-center px-4">
        <h1 className="text-7xl sm:text-8xl font-bold text-text-muted/20 tracking-tighter">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mt-4">Page Not Found</h2>
        <p className="text-text-secondary mt-2 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="primary" icon={ArrowLeft}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
