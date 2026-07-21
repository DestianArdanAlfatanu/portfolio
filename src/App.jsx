import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import CommandPalette from '@/components/shared/CommandPalette';

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('@/pages/Home'));
const Projects = lazy(() => import('@/pages/Projects'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const About = lazy(() => import('@/pages/About'));
const Experience = lazy(() => import('@/pages/Experience'));
const Certificates = lazy(() => import('@/pages/Certificates'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

/**
 * Page loading fallback — minimal spinner that matches the design system.
 */
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-border-subtle border-t-accent-indigo rounded-full animate-spin" />
        <p className="text-text-muted text-sm">Loading...</p>
      </div>
    </div>
  );
}

/**
 * Root application component.
 * Provides routing, global layout (Navbar + Footer), and lazy-loaded pages.
 */
export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-bg-primary">
        <Navbar />
        <main className="flex-1 pt-16">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
        <CommandPalette />
      </div>
    </BrowserRouter>
  );
}
