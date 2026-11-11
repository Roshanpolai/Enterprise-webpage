import { Link } from "react-router-dom";
import { CashewAppleSketch, LeafSketch } from "./Sketches.jsx";
import "./Processing.css";

// Your running strip image (in public/images/processing/)
const STRIP = "/images/processing/work-process.png";

function Processing({ showButton = true }) {
  return (
    <section className="processing">
      <div className="processing__banner">
        <CashewAppleSketch className="processing__apple" />
        <LeafSketch className="processing__leaf" />

        <div className="processing__text" data-reveal>
          <h2>Work Progress at Utkal Agro!</h2>
          <p>Utkal Agro follows a 14-step process reflecting quality and excellence.</p>
          {showButton && <Link to="/facility" className="btn">View More</Link>}
        </div>

        <div className="processing__marquee" data-reveal data-delay="0.15">
          {/* Two copies, so the loop has no gap or jump */}
          <div className="processing__track">
            <img src={STRIP} alt="Our cashew processing steps, from raw nut to packing" />
            <img src={STRIP} alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Processing;