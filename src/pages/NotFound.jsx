import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import PixelIcon from '@/components/ui/PixelIcon';
import WindowFrame from '@/components/ui/WindowFrame';

const ArrowLeftIcon = (props) => <PixelIcon name="arrowLeft" size={16} {...props} />;

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found';
  }, []);

  return (
    <section className="bg-navy bg-grid min-h-[70vh] flex items-center">
      <div className="max-w-lg w-full mx-auto px-4 py-20">
        <WindowFrame title="error-404.exe" controls="full" bodyClassName="p-8 text-center">
          <p className="h-display text-7xl sm:text-8xl text-purple" aria-hidden="true">404</p>
          <h1 className="h-display text-3xl text-ink uppercase mt-4">Page Not Found</h1>
          <p className="text-sm text-ink mt-3">The page you're looking for doesn't exist or has been moved.</p>
          <div className="mt-7 flex justify-center">
            <Button href="/" variant="dark" icon={ArrowLeftIcon}>
              Back to Home
            </Button>
          </div>
        </WindowFrame>
      </div>
    </section>
  );
}
