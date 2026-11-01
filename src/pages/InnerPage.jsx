import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import PageBanner from '../components/common/PageBanner.jsx';

// Shared wrapper for every page except Home: banner + scroll animations.
function InnerPage({ title, children }) {
  const pageRef = useRef(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef}>
      <PageBanner title={title} />
      {children}
    </div>
  );
}

export default InnerPage;
