import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fades up every element with a data-reveal attribute when it scrolls into view.
// Optional: data-delay="0.2" (seconds) to stagger items.
function useReveal(scopeRef) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          delay: Number(element.dataset.delay || 0),
          scrollTrigger: { trigger: element, start: 'top 90%', once: true },
        });
      });
    }, scopeRef);
    return () => ctx.revert();
  }, [scopeRef]);
}

export default useReveal;
