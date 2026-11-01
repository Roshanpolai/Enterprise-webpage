import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Preloader.css";

const BRAND_NAME = "Utkal Agro";

function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const finish = () => {
      document.body.style.overflow = "";
      setIsVisible(false);
    };

    document.body.style.overflow = "hidden";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(finish, 500);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }

    const ctx = gsap.context(() => {
      gsap
        .timeline({ onComplete: finish })
        // Entrance
        .from(".preloader__logo-wrap", {
          scale: 0.6,
          opacity: 0,
          duration: 0.7,
          ease: "back.out(1.6)",
        })
        .from(
          ".preloader__letter",
          {
            opacity: 0,
            y: 24,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.3",
        )
        // The bobbing and dancing keep running (CSS) during this pause
        .to({}, { duration: 2.4 })
        // Exit: slide the whole screen up
        .to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
        });
    }, rootRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={rootRef}
      className="preloader"
      role="status"
      aria-label="Loading Utkal Agro Industries"
    >
      <div className="preloader__logo-wrap">
        <img
          src="/images/preloder/cashew-logo.png"
          alt="Utkal Agro Logo"
          className="preloader__logo"
        />
     </div>

      <p className="preloader__name" aria-hidden="true">
        {BRAND_NAME.split("").map((letter, index) => (
          <span key={index} className="preloader__letter">
            <span
              className="preloader__dance"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          </span>
        ))}
      </p>
    </div>
  );
}

export default Preloader;
