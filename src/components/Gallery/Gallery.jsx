import { Link } from 'react-router-dom';
import Photo from '../common/Photo.jsx';
import SectionTitle from '../common/SectionTitle.jsx';
import galleryImages from '../../data/galleryImages.js';
import './Gallery.css';

function Gallery({ limit = 12, showButton = true }) {
  return (
    <section className="section gallery">
      <div className="container">
        <SectionTitle title="Gallery Of Our Cashews!" text="Discover the care behind every cashew, from farm to your table." />
        {showButton && <div className="gallery__more" data-reveal><Link to="/gallery" className="btn">View More</Link></div>}
        <div className="gallery__grid">
          {galleryImages.slice(0, limit).map((image, index) => (
            <figure key={image.src} className={`gallery__item gallery__item--${index % 3}`} data-reveal data-delay={(index % 4) * 0.08}>
              <Photo src={image.src} alt={image.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
