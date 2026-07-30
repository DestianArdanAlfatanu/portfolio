import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Scrolls the window to the top on every route change.
 * Place inside <BrowserRouter> as a sibling to your layout.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
