import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="navbar-logo-link">
      <img
        src="/images/logo.png"
        alt="Utkal Agro Industries"
        className="navbar-logo-image"
      />
    </Link>
  );
}

export default Logo;
