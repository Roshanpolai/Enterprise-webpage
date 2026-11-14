// import { useLayoutEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import gsap from 'gsap';
// import './Hero.css';

// function Hero() {
//   const heroRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from('.hero__banner', {
//         opacity: 0,
//         duration: 1,
//         ease: 'power2.out'
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section className="hero" ref={heroRef}>

//       <div className="hero__banner">

//         <img
//           src="/images/banner/banner1.png"
//           alt="Premium cashews - Crunch with Care"
//         />

//         {/* Invisible clickable Shop Now area */}
//         <Link
//           to="/products"
//           className="hero__shop-link"
//           aria-label="Shop Now - Explore our cashew products"
//         />

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

        <picture>
          <source
            media="(max-width: 600px)"
            srcSet="/images/banner/banner1-mob.webp"
          />

          <img
            src="/images/banner/banner1.webp"
            alt="Premium Utkal Agro cashews - Crunch with Care"
          />
        </picture>

        <Link
          to="/products"
          className="hero__shop-link hero__shop-link--desktop"
          aria-label="Shop Now - Explore our cashew products"
        />

        <Link
          to="/products"
          className="hero__shop-link hero__shop-link--mobile"
          aria-label="Shop Now - Explore our cashew products"
        />

      </div>
    </section>
  );
}

export default Hero;