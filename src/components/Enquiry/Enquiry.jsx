import { useState } from 'react';
import Photo from '../common/Photo.jsx';
import company from '../../data/company.js';
import { grades } from '../../data/products.js';
import './Enquiry.css';

const emptyForm = { name: '', company: '', email: '', phone: '', grade: '', message: '' };

function Enquiry() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const validate = () => {
    const found = {};
    if (!form.name.trim()) found.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) found.email = 'Please enter a valid email address.';
    if (!form.message.trim()) found.message = 'Please tell us what you need.';
    return found;
  };

  // There is no backend yet, so submitting opens the visitor's email app with the details filled in.
  const handleSubmit = (event) => {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nEmail: ${form.email}\nGrade: ${form.grade}\n\n${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('Business enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <section className="section section--peach enquiry">
      <div className="container enquiry__inner">
        <div className="enquiry__visual" data-reveal>
          <Photo className="enquiry__img" src="/images/enquiry.png" alt="Fresh cashew fruit" />
        </div>
        <div data-reveal data-delay="0.15">
          <p className="enquiry__script">Business Enquiry</p>
          <h2>Get Our Cashews Now!</h2>
          {sent && <p className="enquiry__success" role="status">Thank you! Your email app should open with your enquiry. You can also call or WhatsApp us.</p>}
          <form className="enquiry__form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
              {errors.name && <span className="field__error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" value={form.company} onChange={handleChange} />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            </div>
            <div className="field field--full">
              <label htmlFor="grade">Grade you need</label>
              <select id="grade" name="grade" value={form.grade} onChange={handleChange}>
                <option value="">Choose a grade</option>
                {grades.map((grade) => <option key={grade.code} value={grade.code}>{grade.code} {grade.name}</option>)}
              </select>
            </div>
            <div className="field field--full">
              <label htmlFor="message">Quantity and details</label>
              <textarea id="message" name="message" rows="4" value={form.message} onChange={handleChange} aria-invalid={!!errors.message} />
              {errors.message && <span className="field__error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;
