import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import offers from "../../data/offers.js";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  const [closed, setClosed] = useState(false);
  const hidden = closed || offers.length === 0;

  useEffect(() => {
    document.documentElement.style.setProperty("--bar-height", hidden ? "0px" : "");
    return () => document.documentElement.style.removeProperty("--bar-height");
  }, [hidden]);

  if (hidden) return null;

  return (
    <div className="announce" role="region" aria-label="Offers">
      <div className="announce__marquee">
        <div className="announce__track">
          {/* Two copies of the list make the loop seamless. The second copy is hidden from screen readers. */}
          {[0, 1].map((copy) => (
            <ul className="announce__group" key={copy} aria-hidden={copy === 1 ? "true" : undefined}>
              {offers.map((offer) => (
                <li className="announce__item" key={offer.text}>
                  <span>{offer.text}</span>
                  {offer.href?.startsWith("/") ? (
                    <Link to={offer.href} tabIndex={copy === 1 ? -1 : undefined}>{offer.cta} &rarr;</Link>
                  ) : (
                    offer.href && (
                      <a href={offer.href} target="_blank" rel="noopener noreferrer" tabIndex={copy === 1 ? -1 : undefined}>
                        {offer.cta} &rarr;
                      </a>
                    )
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <button type="button" className="announce__close" onClick={() => setClosed(true)} aria-label="Close offers bar">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>
    </div>
  );
}

export default AnnouncementBar;
