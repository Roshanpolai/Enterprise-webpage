import { useMemo, useRef, useState } from 'react';
import ProductCard from './ProductCard.jsx';
import ProductModal from './ProductModal.jsx';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import { products, categories } from '../../data/catalog.js';
import { whatsappLink } from '../../utils/whatsapp.js';
import './Catalog.css';

const PER_PAGE = 8;

function ProductsCatalog({ onEnquire }) {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(() => window.innerWidth > 991);
  const [selected, setSelected] = useState(null);
  const topRef = useRef(null);

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return products.filter(
      (product) =>
        (category === 'all' || product.category === category) &&
        `${product.name} ${product.code}`.toLowerCase().includes(search)
    );
  }, [category, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const countFor = (id) => products.filter((product) => id === 'all' || product.category === id).length;

  const chooseCategory = (id) => { setCategory(id); setPage(1); };
  const changeQuery = (value) => { setQuery(value); setPage(1); };
  const goToPage = (number) => {
    setPage(number);
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const enquire = (product) => { setSelected(null); onEnquire(product); };

  return (
    <section className="section catalog" ref={topRef}>
      <div className="container">
        <div className="catalog__bar">
          <p className="catalog__count" aria-live="polite">Showing {filtered.length} product{filtered.length === 1 ? '' : 's'}</p>
          <button type="button" className="catalog__toggle" onClick={() => setFilterOpen((open) => !open)} aria-expanded={filterOpen}>
            {filterOpen ? 'Hide Filter' : 'Show Filter'}
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
          </button>
        </div>

        <div className={`catalog__layout ${filterOpen ? '' : 'is-full'}`}>
          <aside className="filters" aria-label="Product filters">
            <div className="filters__box">
              <h2 className="filters__title">Categories</h2>
              <input
                type="search"
                className="filters__search"
                placeholder="Search grade or name"
                value={query}
                onChange={(event) => changeQuery(event.target.value)}
                aria-label="Search products"
              />
              <ul className="filters__list">
                {categories.map((item) => (
                  <li key={item.id}>
                    <button type="button" className={category === item.id ? 'is-active' : ''} onClick={() => chooseCategory(item.id)} aria-pressed={category === item.id}>
                      {item.label}
                      <span>{countFor(item.id)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filters__cta">
              <p className="filters__cta-script">Handpicked and trusted</p>
              <h3>Need bulk quantities?</h3>
              <p>Tell us the grade and quantity and we will reply with a quote.</p>
              <a className="btn btn--whatsapp" href={whatsappLink('Hello Utkal Agro Industries, I would like a quote for bulk cashews.')} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={18} /> WhatsApp us
              </a>
            </div>
          </aside>

          <div>
            {visible.length === 0 ? (
              <p className="catalog__empty">No products match your search. Try another grade or clear the filter.</p>
            ) : (
              // key resets the entrance animation whenever the filter or page changes
              <div className="catalog__grid" key={`${category}-${query}-${page}`}>
                {visible.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} onOpen={setSelected} />
                ))}
              </div>
            )}

            {pageCount > 1 && (
              <nav className="pagination" aria-label="Product pages">
                <button type="button" onClick={() => goToPage(page - 1)} disabled={page === 1} aria-label="Previous page">&lsaquo;</button>
                {Array.from({ length: pageCount }, (_, index) => (
                  <button key={index} type="button" className={page === index + 1 ? 'is-active' : ''} onClick={() => goToPage(index + 1)} aria-current={page === index + 1 ? 'page' : undefined}>
                    {index + 1}
                  </button>
                ))}
                <button type="button" onClick={() => goToPage(page + 1)} disabled={page === pageCount} aria-label="Next page">&rsaquo;</button>
              </nav>
            )}
          </div>
        </div>
      </div>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} onEnquire={enquire} />}
    </section>
  );
}

export default ProductsCatalog;
