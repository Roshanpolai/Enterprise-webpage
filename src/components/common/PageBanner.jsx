import { Link } from 'react-router-dom';
import './PageBanner.css';

function PageBanner({ title }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        <p><Link to="/">Home</Link> / {title}</p>
      </div>
    </section>
  );
}

export default PageBanner;
