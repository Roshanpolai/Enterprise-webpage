import { useEffect, useState } from "react";
import Photo from "../common/Photo.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { benefits } from "../../data/benefits.js";
import "./Benefits.css";

function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = benefits[activeIndex];

  useEffect(() => {
    if (
      isPaused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = setInterval(
      () => setActiveIndex((index) => (index + 1) % benefits.length),
      3500,
    );
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  const pause = (event) => event.pointerType === "mouse" && setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section className="section section--peach benefits">
      <div className="container">
        <div
          className="benefits__layout"
          data-reveal
          onPointerEnter={pause}
          onPointerLeave={resume}
        >
          <div className="benefits__panel" aria-live="polite">
            <p className="benefits__label">Why cashews?</p>
            <div className="benefits__copy" key={active.title}>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
            </div>
            <div className="benefits__progress" aria-hidden="true">
              {benefits.map((item, index) => (
                <span
                  key={item.title}
                  className={index === activeIndex ? "is-active" : ""}
                />
              ))}
            </div>
          </div>

          {/* Right: the rotating ring */}
          <div className="benefits__stage">
            <div className="benefits__bowl">
              <Photo src="images/benefits/image1.png" />
            </div>

            <ul className="orbit">
              {benefits.map((item, index) => (
                <li
                  key={item.title}
                  className="benefit"
                  style={{ "--angle": `${index * (360 / benefits.length)}deg` }}
                >
                  <button
                    type="button"
                    className={`benefit__icon ${index === activeIndex ? "is-active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={item.title}
                    aria-pressed={index === activeIndex}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d={item.icon} />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
