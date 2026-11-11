import Photo from '../common/Photo.jsx';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import { fullName } from '../../data/catalog.js';
import { whatsappLink, productMessage } from '../../utils/whatsapp.js';

function ProductCard({ product, index, onOpen }) {
  const name = fullName(product);

  return (
    <article className="pcard" style={{ '--i': index }}>
      {product.badge && <span className="pcard__badge">{product.badge}</span>}

      <button type="button" className="pcard__view" onClick={() => onOpen(product)} aria-label={`View details of ${name}`}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
        </svg>
      </button>

      <button type="button" className="pcard__media" onClick={() => onOpen(product)} aria-label={`Open ${name}`}>
        <span className="pcard__bowl"><Photo src={product.image} alt={name} /></span>
      </button>

      <h3>{product.name} <span>({product.code})</span></h3>

      <div className="pcard__actions">
        <button type="button" className="pcard__btn" onClick={() => onOpen(product)}>Details</button>
        <a className="pcard__wa" href={whatsappLink(productMessage(name))} target="_blank" rel="noreferrer" aria-label={`Ask about ${name} on WhatsApp`}>
          <WhatsAppIcon size={18} /> Enquire
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
