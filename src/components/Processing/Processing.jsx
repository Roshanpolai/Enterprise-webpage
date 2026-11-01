import SectionTitle from '../common/SectionTitle.jsx';
import processSteps from '../../data/processSteps.js';
import './Processing.css';

const colors = ['#17b890', '#13bde6', '#e95fd0', '#169a9a', '#ff6a13', '#e07878', '#3a8ff0', '#7cc43c'];

function Processing() {
  // The list is repeated so the scrolling loop has no gap.
  const loopSteps = [...processSteps, ...processSteps];

  return (
    <section className="section section--peach processing">
      <div className="container">
        <SectionTitle title="Work Progress at Utkal Agro!" text={`Our ${processSteps.length}-step process reflects quality and excellence, from raw nut to sealed pack.`} />
      </div>
      <div className="processing__marquee" aria-label="Processing steps">
        <ol className="processing__track">
          {loopSteps.map((step, index) => (
            <li key={`${step}-${index}`} className="step" aria-hidden={index >= processSteps.length}>
              <span className="step__circle" style={{ background: colors[index % colors.length] }}>{(index % processSteps.length) + 1}</span>
              <span className="step__label">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Processing;
