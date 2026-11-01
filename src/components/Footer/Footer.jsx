import { Link } from 'react-router-dom';
import Photo from '../common/Photo.jsx';
import company from '../../data/company.js';
import navLinks from '../../data/navLinks.js';
import galleryImages from '../../data/galleryImages.js';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <svg className="footer__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60V30C120 0 240 0 360 30s240 30 360 0 240-30 360 0 240 30 360 0V60z" fill="#212222" />
      </svg>
      <div className="container footer__grid">
        <div>
          <p className="footer__brand">Utkal Agro <span>industries</span></p>
          <p>Utkal Agro Industries brings the finest Odisha cashews from farm to table, with care in every step.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            {navLinks.map((link) => <li key={link.label}><Link to={link.path}>{link.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3>Reach Us</h3>
          <ul className="footer__contact">
            <li>{company.address}</li>
            <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a href={company.phoneLink}>{company.phone}</a></li>
            <li>{company.hours}</li>
          </ul>
        </div>
        <div>
          <h3>Our Gallery</h3>
          <div className="footer__gallery">
            {galleryImages.slice(0, 6).map((image) => (
              <Link to="/gallery" key={image.src}><Photo src={image.src} alt={image.alt} /></Link>
            ))}
          </div>
        </div>
      </div>
      <p className="footer__copy">&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
