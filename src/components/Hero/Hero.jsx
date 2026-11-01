// import { useLayoutEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import gsap from 'gsap';
// import Photo from '../common/Photo.jsx';
// import './Hero.css';

// function Hero() {
//   const heroRef = useRef(null);

//   useLayoutEffect(() => {
//     if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
//     const ctx = gsap.context(() => {
//       const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
//       timeline
//         .from('.hero__script', { y: 30, opacity: 0, duration: 0.7 })
//         .from('.hero__line', { y: 60, opacity: 0, duration: 0.8, stagger: 0.15 }, '-=0.3')
//         .from('.hero__btn', { y: 30, opacity: 0, duration: 0.6 }, '-=0.3')
//         .from('.hero__image', { scale: 0.85, opacity: 0, duration: 1 }, 0.2)
//         .from('.hero__badge', { scale: 0, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'back.out(1.8)' }, '-=0.4');
//       gsap.to('.hero__image', { y: -14, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
//     }, heroRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={heroRef} className="hero">
//       <div className="container hero__inner">
//         <div className="hero__text">
//           <p className="hero__script">Crunch with Care</p>
//           <h1>
//             <span className="hero__line">Tasty &amp; Healthy</span>
//             <span className="hero__line">Premium Cashews!</span>
//           </h1>
//           <Link to="/products" className="btn hero__btn">Explore Products</Link>
//         </div>
//         <div className="hero__visual">
//           <Photo className="hero__image" src="/images/hero.jpg" alt="Premium cashew kernels" />
//         </div>
//       </div>
//       <div className="hero__badges">
//         <Link to="/products" className="hero__badge" aria-label="Healthy cashews"><Photo src="/images/badge-1.jpg" alt="Healthy cashews" /></Link>
//         <Link to="/products" className="hero__badge" aria-label="Cashew fruit"><Photo src="/images/badge-2.jpg" alt="Cashew fruit" /></Link>
//       </div>
//     </section>
//   );
// }

// export default Hero;



import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero__banner', {
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>

      <div className="hero__banner">

        <img
          src="/images/banner/banner1.png"
          alt="Premium cashews - Crunch with Care"
        />

        {/* Invisible clickable Shop Now area */}
        <Link
          to="/products"
          className="hero__shop-link"
          aria-label="Shop Now - Explore our cashew products"
        />

      </div>

    </section>
  );
}

export default Hero;
