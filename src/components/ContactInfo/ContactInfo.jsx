import SectionTitle from '../common/SectionTitle.jsx';
import company from '../../data/company.js';
import './ContactInfo.css';

const icons = {
  address: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.800 7 11 7 11zm0-8.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z',
  phone: 'M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200c.3-.3.7-.4 1-.2 1.100.4 2.300.6 3.600.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .7-.2 1l-2.300 2.200z',
  email: 'M3 5h18v14H3zM3 6l9 7 9-7',
  hours: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4v5l3.500 2',
};

function ContactInfo() {
  const items = [
    { key: 'address', title: 'Visit Us', text: company.address },
    { key: 'phone', title: 'Call Us', text: company.phone, href: company.phoneLink },
    { key: 'email', title: 'Email Us', text: company.email, href: `mailto:${company.email}` },
    { key: 'hours', title: 'Working Hours', text: company.hours },
  ];

  return (
    <section className="section">
      <div className="container">
        <SectionTitle title="Reach Us" text="Talk to us about grades, prices and bulk supply." />
        <div className="contact-cards">
          {items.map((item, index) => (
            <div key={item.key} className="contact-card" data-reveal data-delay={index * 0.1}>
              <span className="contact-card__icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={icons[item.key]} /></svg>
              </span>
              <h3>{item.title}</h3>
              {item.href ? <a href={item.href}>{item.text}</a> : <p>{item.text}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
