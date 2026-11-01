import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Logo from '../common/Logo.jsx';
import navLinks from '../../data/navLinks.js';
import company from '../../data/company.js';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // used inside the mobile panel
  const headerRef = useRef(null);
  const location = useLocation();

  // Shrink the header after scrolling a little
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the panel when the page changes
  useEffect(() => {
    setIsPanelOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Close with Escape and lock page scroll while the panel is open
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && setIsPanelOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = isPanelOpen ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isPanelOpen]);

  // One entrance animation when the site loads
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('.navbar__logo, .navbar__item, .navbar__menu-btn', {
        y: -24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power3.out',
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const toggleDropdown = (label) =>
    setOpenDropdown((current) => (current === label ? null : label));

  return (
    <header ref={headerRef} className={`navbar ${isScrolled ? 'navbar--small' : ''}`}>
      <div className="navbar__logo"><Logo /></div>

      <nav className="navbar__links" aria-label="Main navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.label} className="navbar__item">
              <NavLink to={link.path} end={link.path === '/'} className="navbar__link">
                {link.label}
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

      <button
        type="button"
        className="navbar__menu-btn"
        aria-label={isPanelOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isPanelOpen}
        onClick={() => setIsPanelOpen((open) => !open)}
      >
        {isPanelOpen ? (
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" />
            <rect x="3" y="14" width="7" height="7" rx="2" /><rect x="14" y="14" width="7" height="7" rx="2" />
          </svg>
        )}
      </button>

      {/* Side panel: full menu on mobile, contact details on every screen */}
      <div className={`panel-overlay ${isPanelOpen ? 'is-open' : ''}`} onClick={() => setIsPanelOpen(false)} />
      <aside className={`panel ${isPanelOpen ? 'is-open' : ''}`} aria-hidden={!isPanelOpen}>
        <ul className="panel__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <div className="panel__row">
                <NavLink to={link.path} end={link.path === '/'}>{link.label}</NavLink>
                {link.children && (
                  <button type="button" aria-label={`Show ${link.label} menu`} aria-expanded={openDropdown === link.label} onClick={() => toggleDropdown(link.label)}>
                    <span className={`navbar__caret ${openDropdown === link.label ? 'is-up' : ''}`} />
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
        </div>
      </aside>
    </header>
  );
}

export default Navbar;
