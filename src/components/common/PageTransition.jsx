import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

// Soft fade-and-rise whenever the route changes.
function PageTransition({ children }) {
  const wrapperRef = useRef(null);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.fromTo(wrapperRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', clearProps: 'transform' });
  }, [pathname]);

  return <div ref={wrapperRef}>{children}</div>;
}

export default PageTransition;
