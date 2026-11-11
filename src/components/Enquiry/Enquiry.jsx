import { useState } from "react";
import Photo from "../common/Photo.jsx";
import WhatsAppIcon from "../common/WhatsAppIcon.jsx";
import company from "../../data/company.js";
import { products, fullName } from "../../data/catalog.js";
import { whatsappLink } from "../../utils/whatsapp.js";
import "./Enquiry.css";

const emptyForm = { name: "", company: "", email: "", phone: "", grade: "", message: "" };

function Enquiry() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState("");

  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  const validate = () => {
    const found = {};
    if (!form.name.trim()) found.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{7,}$/.test(form.phone.trim()))
      found.phone = "Please enter a valid phone number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      found.email = "This email address does not look right.";
    if (!form.message.trim()) found.message = "Please tell us what you need.";

    setErrors(found);

    // Move the cursor to the first field that needs attention
    const firstWrong = ["name", "phone", "email", "message"].find((key) => found[key]);
    if (firstWrong) document.getElementById(`enq-${firstWrong}`)?.focus();

    return Object.keys(found).length === 0;
  };

  const buildText = () =>
    [
      "Hello Utkal Agro Industries, I would like to enquire about cashews.",
      "",
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Phone: ${form.phone}`,
      form.email ? `Email: ${form.email}` : null,
      form.grade ? `Grade: ${form.grade}` : null,
      `Details: ${form.message}`,
    ]
      .filter((line) => line !== null)
      .join("\n");

  const finish = (text) => {
    setDone(text);
    setForm(emptyForm);
  };

  // Opens WhatsApp with the whole enquiry typed in, ready to send
  const handleWhatsApp = (event) => {
    event.preventDefault();
    if (!validate()) return;
    window.open(whatsappLink(buildText()), "_blank", "noopener");
    finish("WhatsApp should now be open with your enquiry. Just press send.");
  };

  // There is no server yet, so this opens the visitor's email app
  const handleEmail = () => {
    if (!validate()) return;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      "Business enquiry"
    )}&body=${encodeURIComponent(buildText())}`;
    finish("Your email app should now be open with your enquiry. Just press send.");
  };

  return (
    <section className="section section--peach enquiry">
      <div className="container enquiry__inner">
        <div className="enquiry__visual" data-reveal>
          <Photo
            className="enquiry__img"
            src="/images/feedback/home_chef.webp"
            alt="Cashew representative presenting premium cashews"
          />
        </div>

        <div data-reveal data-delay="0.15">
          <p className="enquiry__script">Business Enquiry</p>
          <h2>Get Our Cashews Now!</h2>

          {done && (
            <p className="enquiry__success" role="status">
              {done}
            </p>
          )}

          <form className="enquiry__form" onSubmit={handleWhatsApp} noValidate>
            <div className="field">
              <label htmlFor="enq-name">Name *</label>
              <input
                id="enq-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "enq-name-error" : undefined}
              />
              {errors.name && <span id="enq-name-error" className="field__error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="enq-phone">Phone / WhatsApp *</label>
              <input
                id="enq-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={handleChange}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "enq-phone-error" : undefined}
              />
              {errors.phone && <span id="enq-phone-error" className="field__error">{errors.phone}</span>}
            </div>

            <div className="field">
              <label htmlFor="enq-company">Company</label>
              <input
                id="enq-company"
                name="company"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="enq-email">Email</label>
              <input
                id="enq-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "enq-email-error" : undefined}
              />
              {errors.email && <span id="enq-email-error" className="field__error">{errors.email}</span>}
            </div>

            <div className="field field--full">
              <label htmlFor="enq-grade">Grade you need</label>
              <select id="enq-grade" name="grade" value={form.grade} onChange={handleChange}>
                <option value="">Not sure yet</option>
                {products.map((product) => (
                  <option key={product.id} value={fullName(product)}>
                    {fullName(product)}
                  </option>
                ))}
              </select>
            </div>

            <div className="field field--full">
              <label htmlFor="enq-message">Quantity and details *</label>
              <textarea
                id="enq-message"
                name="message"
                rows="4"
                placeholder="For example: 500 kg of W240 every month"
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "enq-message-error" : undefined}
              />
              {errors.message && <span id="enq-message-error" className="field__error">{errors.message}</span>}
            </div>

            <div className="enquiry__buttons">
              <button type="submit" className="btn enquiry__whatsapp">
                <WhatsAppIcon size={20} /> Send on WhatsApp
              </button>
              <button type="button" className="btn enquiry__email" onClick={handleEmail}>
                Send by Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Enquiry;