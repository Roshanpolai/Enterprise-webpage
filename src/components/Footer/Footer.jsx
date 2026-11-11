import { Link } from "react-router-dom";
import { Sprout, MapPin, Mail, Phone, Clock } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Photo from "../common/Photo.jsx";
import company from "../../data/company.js";
import navLinks from "../../data/navLinks.js";
import galleryImages from "../../data/galleryImages.js";
import "./Footer.css";

function Footer() {
  const socials = [
    {
      Icon: FaWhatsapp,
      label: "WhatsApp",
      url: company.whatsappLink,
    },
    {
      Icon: FaInstagram,
      label: "Instagram",
      url: company.socials?.instagram || "#",
    },
    {
      Icon: FaFacebookF,
      label: "Facebook",
      url: company.socials?.facebook || "#",
    },
    {
      Icon: FaXTwitter,
      label: "X (Twitter)",
      url: company.socials?.x || "#",
    },
  ].filter((item) => item.url?.trim());

  const contacts = [
    { Icon: MapPin, value: company.address },
    { Icon: Mail, value: company.email, href: `mailto:${company.email}` },
    { Icon: Phone, value: company.phone, href: company.phoneLink },
    { Icon: Clock, value: company.hours },
  ];

  return (
    <footer className="footer">
      <svg
        className="footer__wave"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40V20Q72 0 144 20T288 20T432 20T576 20T720 20T864 20T1008 20T1152 20T1296 20T1440 20V40z"
          fill="currentColor"
        />
      </svg>

      <div className="container footer__grid">
        <div className="footer__brand-column">
            <Link to="/" className="footer__brand-logo">
              <img
                src="/images/logo.png"
                alt="Utkal Agro Industries"
                loading="lazy"
              />
            </Link>

            <p className="footer__description">
              Utkal Agro Industries brings the finest Odisha cashews from farm to
              table, with care in every step.
            </p>


            <div className="footer__socials">
              {socials.map(({ Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer__links-column" aria-label="Footer">
            <h3>Quick Links</h3>

            <ul className="footer__links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Sprout size={14} aria-hidden="true" />
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact-column">
            <h3>Reach Us</h3>

            <ul className="footer__contact">
              {contacts.map(({ Icon, value, href }) => (
                <li key={value}>
                  <span className="footer__contact-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__gallery-column">
            <h3>Our Gallery</h3>

            <div className="footer__gallery">
              {galleryImages.slice(0, 6).map((image) => (
                <Link
                  to="/gallery"
                  key={image.src}
                  className="footer__gallery-item"
                  aria-label="Open the gallery"
                >
                  <Photo src={image.src} alt={image.alt} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__copy">
          &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
    </footer>
  );
}

export default Footer;
