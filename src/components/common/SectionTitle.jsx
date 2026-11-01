import './SectionTitle.css';

function SectionTitle({ title, text, align = 'center' }) {
  return (
    <div className={`section-title section-title--${align}`} data-reveal>
      <svg className="section-title__flourish" viewBox="0 0 150 24" aria-hidden="true">
        <path d="M2 14c12 0 14-10 24-10 8 0 8 8 2 8s-6-8 4-8c14 0 14 10 30 10h26c16 0 16-10 30-10 10 0 10 8 4 8s-6-8 2-8c10 0 12 10 24 10" fill="none" stroke="#ee5a2b" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M75 4c-3 3-3 8 0 12 3-4 3-9 0-12z" fill="#ee5a2b" />
      </svg>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default SectionTitle;
