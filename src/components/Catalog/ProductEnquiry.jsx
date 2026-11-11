import { useEffect, useState } from 'react';
import WhatsAppIcon from '../common/WhatsAppIcon.jsx';
import company from '../../data/company.js';
import { products, fullName } from '../../data/catalog.js';
import { whatsappLink } from '../../utils/whatsapp.js';
import './ProductEnquiry.css';

const emptyForm = { name: '', company: '', phone: '', email: '', product: '', quantity: '', message: '' };

// selected = { name, stamp } sent from the page when a visitor clicks "Send Enquiry" on a product
function ProductEnquiry({ selected }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState('');

  useEffect(() => {
    if (selected) setForm((current) => ({ ...current, product: selected.name }));
  }, [selected]);

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const validate = () => {
    const found = {};
    if (!form.name.trim()) found.name = 'Please enter your name.';
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim())) found.phone = 'Please enter a valid phone number.';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) found.email = 'This email address does not look right.';
    setErrors(found);
    return Object.keys(found).length === 0;
  };

  const buildText = () =>
    [
      'Hello Utkal Agro Industries, I would like to enquire about cashews.',
      '',
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.product ? `Product: ${form.product}` : null,
      form.quantity ? `Quantity: ${form.quantity}` : null,
      form.message ? `Message: ${form.message}` : null,
    ].filter((line) => line !== null).join('\n');

  const finish = (text) => { setDone(text); setForm(emptyForm); };

  // Opens WhatsApp with the whole enquiry typed in, ready to send
  const handleWhatsApp = (event) => {
    event.preventDefault();
    if (!validate()) return;
    window.open(whatsappLink(buildText()), '_blank', 'noopener');
    finish('WhatsApp should now be open with your enquiry. Just press send.');
  };

  // No server yet, so this opens the visitor's email app with the details filled in
  const handleEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Product enquiry')}&body=${encodeURIComponent(buildText())}`;
    finish('Your email app should now be open with your enquiry. Just press send.');
  };

  return (
    <section id="enquiry" className="section section--peach penquiry">
      <div className="container penquiry__inner">
        <div className="penquiry__intro" data-reveal>
          <p className="penquiry__script">Let&rsquo;s talk cashews</p>
          <h2>Send Us Your Enquiry</h2>
          <p>Tell us what you need and how much. We will reply with availability and a quote.</p>

          <ul className="penquiry__contact">
            <li>
              <a href={whatsappLink('Hello Utkal Agro Industries, I would like to know more about your cashews.')} target="_blank" rel="noreferrer">
                <span className="penquiry__icon penquiry__icon--wa"><WhatsAppIcon size={22} /></span>
                <span><strong>WhatsApp</strong>{company.phone}</span>
              </a>
            </li>
            <li>
              <a href={company.phoneLink}>
                <span className="penquiry__icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" /></svg>
                </span>
                <span><strong>Call us</strong>{company.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>
                <span className="penquiry__icon">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>
                </span>
                <span><strong>Email</strong>{company.email}</span>
              </a>
            </li>
          </ul>
          <p className="penquiry__hours">{company.hours}</p>
        </div>

        <form className="penquiry__form" onSubmit={handleWhatsApp} noValidate data-reveal data-delay="0.15">
          {done && <p className="penquiry__done" role="status">{done}</p>}

          <div className="field">
            <label htmlFor="pe-name">Name *</label>
            <input id="pe-name" name="name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} autoComplete="name" />
            {errors.name && <span className="field__error">{errors.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="pe-phone">Phone / WhatsApp *</label>
            <input id="pe-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} aria-invalid={!!errors.phone} autoComplete="tel" />
            {errors.phone && <span className="field__error">{errors.phone}</span>}
          </div>
          <div className="field">
            <label htmlFor="pe-company">Company</label>
            <input id="pe-company" name="company" value={form.company} onChange={handleChange} autoComplete="organization" />
          </div>
          <div className="field">
            <label htmlFor="pe-email">Email</label>
            <input id="pe-email" name="email" type="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} autoComplete="email" />
            {errors.email && <span className="field__error">{errors.email}</span>}
          </div>
          <div className="field">
            <label htmlFor="pe-product">Product</label>
            <select id="pe-product" name="product" value={form.product} onChange={handleChange}>
              <option value="">Not sure yet</option>
              {products.map((product) => (
                <option key={product.id} value={fullName(product)}>{fullName(product)}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="pe-quantity">Quantity</label>
            <input id="pe-quantity" name="quantity" placeholder="e.g. 500 kg" value={form.quantity} onChange={handleChange} />
          </div>
          <div className="field field--full">
            <label htmlFor="pe-message">Message</label>
            <textarea id="pe-message" name="message" rows="4" value={form.message} onChange={handleChange} />
          </div>

          <div className="penquiry__buttons">
            <button type="submit" className="btn btn--whatsapp"><WhatsAppIcon size={20} /> Send on WhatsApp</button>
            <button type="button" className="btn penquiry__email" onClick={handleEmail}>Send by Email</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ProductEnquiry;
