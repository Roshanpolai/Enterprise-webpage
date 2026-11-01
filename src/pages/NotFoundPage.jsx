import { Link } from 'react-router-dom';
import InnerPage from './InnerPage.jsx';

function NotFoundPage() {
  return (
    <InnerPage title="Page not found">
      <section className="section container" style={{ textAlign: 'center' }}>
        <p>We could not find that page.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </section>
    </InnerPage>
  );
}

export default NotFoundPage;
