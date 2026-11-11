import { useEffect, useRef } from 'react';
import Photo from '../common/Photo.jsx';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import { fullName, categories } from '../../data/catalog.js';
import { whatsappLink, productMessage } from '../../utils/whatsapp.js';

function ProductModal({ product, onClose, onEnquire }) {
  const closeRef = useRef(null);
  const name = fullName(product);
  const categoryLabel = categories.find((item) => item.id === product.category)?.label;

  // Close with Escape, lock page scroll, and move focus into the dialog
  useEffect(() => {
    const onKey = (event) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="pmodal" onClick={onClose}>
      <div className="pmodal__dialog" role="dialog" aria-modal="true" aria-label={name} onClick={(event) => event.stopPropagation()}>
        <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 5l14 14M19 5L5 19" /></svg>
        </button>

        <div className="pmodal__media"><Photo src={product.image} alt={name} /></div>

        <div className="pmodal__info">
          <p className="pmodal__category">{categoryLabel}</p>
          <h2>{product.name} <span>({product.code})</span></h2>
          <p>{product.description}</p>
          <p className="pmodal__note">Prices depend on quantity and current market rates, so please enquire for a quote.</p>

          <div className="pmodal__actions">
            <a className="btn btn--whatsapp" href={whatsappLink(productMessage(name))} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={20} /> Chat on WhatsApp
            </a>
            <button type="button" className="btn" onClick={() => onEnquire(product)}>Send Enquiry</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
