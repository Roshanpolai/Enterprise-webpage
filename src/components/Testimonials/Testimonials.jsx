import { useEffect, useState } from "react";
import Photo from "../common/Photo.jsx";
import testimonials from "../../data/testimonials.js";
import "./Testimonials.css";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[activeIndex];

  // Show the next review every 6 seconds (not for visitors who prefer reduced motion)
  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setActiveIndex((index) => (index + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="section testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container testimonials__inner">
        <div className="testimonials__visual" data-reveal>
          <Photo
            className="testimonials__img"
            src="/images/feedback/family.png"
            alt="Happy customers sharing cashews"
          />
        </div>

        <div className="testimonials__content" data-reveal data-delay="0.15">
          <h2 className="testimonials__title">
            <span className="testimonials__mark">What Our Customers Say</span>!
          </h2>

          <svg className="testimonials__quote-icon" viewBox="0 0 64 56" aria-hidden="true">
            <path d="M0 56V30C0 12 10 2 28 0v12C20 14 16 18 16 26h12v30H0zm36 0V30C36 12 46 2 64 0v12c-8 2-12 6-12 14h12v30H36z" fill="currentColor" />
          </svg>

          <div className="testimonials__slide" key={active.name} aria-live="polite">
            <p className="testimonials__text">&ldquo;{active.quote}&rdquo;</p>

            <div className="testimonials__author">
              <Photo className="testimonials__avatar" src={active.avatar} alt={active.name} />
              <div>
                <h3>{active.name}</h3>
                <div className="testimonials__stars" aria-label={`${active.rating} out of 5 stars`}>
                  {"★".repeat(active.rating)}
                  <span>{"★".repeat(5 - active.rating)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials__dots">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show review ${index + 1}`}
                aria-pressed={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;