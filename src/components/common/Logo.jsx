import { Link } from 'react-router-dom';
import './Logo.css';

// Placeholder wordmark. Swap for your real logo image when ready.
function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Utkal Agro Industries - home">
      <svg className="logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M9 30c0-11 8-19 19-19 6 0 10 3 10 8 0 4-3 6-6 6-4 0-5-3-9-3-5 0-6 6-3 10 3 3 8 3 12 1-3 6-8 9-14 9-5 0-9-4-9-12z" fill="#ee5a2b" />
        <path d="M32 6c4 0 8 3 8 7-4 0-8-2-8-7z" fill="#1d3b2a" />
      </svg>
      <span className="logo__text">
        <span className="logo__name">Utkal Agro</span>
        <span className="logo__tag">industries</span>
      </span>
    </Link>
  );
}

export default Logo;
