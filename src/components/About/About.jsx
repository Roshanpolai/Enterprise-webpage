import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Photo from "../common/Photo.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

function About({ showButton = true }) {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".about__text", start: "top 80%", once: true },
      });

      tl.from(".about__paragraph", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      });

      if (showButton) {
        tl.from(".about__button", { y: 15, opacity: 0, duration: 0.5 }, "-=0.1");
      }
    }, aboutRef);

    return () => ctx.revert();
  }, [showButton]);

  return (
    <section className="section about" ref={aboutRef}>
      <div className="container about__inner">
        <div className="about__images" data-reveal>
          <Photo
            className="about__img-main"
            src="/images/About/processing-Collage.png"
            alt="Cashews in a bowl"
          />
        </div>

        <div className="about__text">
          <SectionTitle align="left" title="Who We Are Truly!" />

          <p className="about__paragraph">
            At Utkal Agro Industries, we deliver fine cashews that are carefully
            sourced, expertly processed and full of natural goodness. Bold in
            taste and giant in quality, our nuts bring freshness and health from
            farm to table.
          </p>

          <p className="about__paragraph">
            Fresh, healthy and full of goodness - that is the Utkal Agro promise.
          </p>

          {showButton && (
            <Link to="/about" className="btn about__button">
              Know More &rarr;
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;