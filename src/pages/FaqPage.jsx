import InnerPage from './InnerPage.jsx';
import faqs from '../data/faqs.js';
import './FaqPage.css';

function FaqPage() {
  return (
    <InnerPage title="FAQ">
      <section className="section">
        <div className="container faq">
          {faqs.map((item) => (
            <details key={item.question} className="faq__item" data-reveal>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </InnerPage>
  );
}

export default FaqPage;
