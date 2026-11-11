import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import Logo from "../common/Logo.jsx";
import WhatsAppIcon from "../common/WhatsAppIcon.jsx";
import AnnouncementBar from "../AnnouncementBar/AnnouncementBar.jsx";
import navLinks from "../../data/navLinks.js";
import company from "../../data/company.js";
import { whatsappLink } from "../../utils/whatsapp.js";
import "./Navbar.css";

// Set to false to hide the green "Get a Quote" button in the navbar
const SHOW_QUOTE_BUTTON = true;

const quoteLink = whatsappLink("Hello Utkal Agro Industries, I would like a quote for cashews.");

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // submenus inside the side panel
  const wrapperRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const location = useLocation();

  // Shrink the header (and tuck the offers bar away) after scrolling a little
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the panel when the page changes
  useEffect(() => {
    setIsPanelOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const closePanel = () => {
    setIsPanelOpen(false);
    menuButtonRef.current?.focus();
  };

  // Escape closes the panel, page scroll is locked while it is open
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") {
        setIsPanelOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = isPanelOpen ? "hidden" : "";
    if (isPanelOpen) closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isPanelOpen]);

  // One entrance animation when the site loads
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from(".navbar__logo, .navbar__item, .navbar__menu-btn", {
        y: -24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
      });
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  const toggleDropdown = (label) =>
    setOpenDropdown((current) => (current === label ? null : label));

  return (
    <div ref={wrapperRef} className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>

      <AnnouncementBar />

      <header className={`navbar ${isScrolled ? "navbar--small" : ""}`}>
        <div className="navbar__logo"><Logo /></div>

        <nav className="navbar__links" aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label} className="navbar__item">
                <NavLink to={link.path} end={link.path === "/"} className="navbar__link">
                  <span className="navbar__label">{link.label}</span>
                  {link.children && <span className="navbar__caret" aria-hidden="true" />}
                </NavLink>
                {link.children && (
                  <ul className="navbar__dropdown">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <NavLink to={child.path}>{child.label}</NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {SHOW_QUOTE_BUTTON && (
          <a className="navbar__cta" href={quoteLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={16} /> Get a Quote
          </a>
        )}

        <button
          ref={menuButtonRef}
          type="button"
          className="navbar__menu-btn"
          aria-label="Open menu"
          aria-expanded={isPanelOpen}
          aria-controls="side-panel"
          onClick={() => setIsPanelOpen(true)}
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" />
          </svg>
        </button>
      </header>

      {/* Side panel sits outside the header so the header's blur effect cannot shift it */}
      <div className={`panel-overlay ${isPanelOpen ? "is-open" : ""}`} onClick={closePanel} />
      <aside id="side-panel" className={`panel ${isPanelOpen ? "is-open" : ""}`} aria-hidden={!isPanelOpen} aria-label="Menu">
        <button ref={closeButtonRef} type="button" className="panel__close" onClick={closePanel} aria-label="Close menu">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
        </button>

        <ul className="panel__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <div className="panel__row">
                <NavLink to={link.path} end={link.path === "/"}>{link.label}</NavLink>
                {link.children && (
                  <button type="button" aria-label={`Show ${link.label} menu`} aria-expanded={openDropdown === link.label} onClick={() => toggleDropdown(link.label)}>
                    <span className={`navbar__caret ${openDropdown === link.label ? "is-up" : ""}`} />
                  </button>
                )}
              </div>
              {link.children && openDropdown === link.label && (
                <ul className="panel__sub">
                  {link.children.map((child) => (
                    <li key={child.label}><NavLink to={child.path}>{child.label}</NavLink></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="panel__contact">
          <h3>Contact us</h3>
          <p>{company.address}</p>
          <p><a href={company.phoneLink}>{company.phone}</a></p>
          <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
          <p>{company.hours}</p>

          <div className="panel__actions">
            <a className="panel__whatsapp" href={quoteLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> WhatsApp
            </a>
            <a className="panel__call" href={company.phoneLink}>Call us</a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Navbar;
