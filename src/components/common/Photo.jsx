import { useState } from 'react';

function Photo({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`photo-fallback ${className}`} role="img" aria-label={alt}>
        <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
          <path d="M9 30c0-11 8-19 19-19 6 0 10 3 10 8 0 4-3 6-6 6-4 0-5-3-9-3-5 0-6 6-3 10 3 3 8 3 12 1-3 6-8 9-14 9-5 0-9-4-9-12z" fill="#e9b872" />
        </svg>
        <span>{src.split('/').pop()}</span>
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

export default Photo;
