import { useState } from "react";
import Photo from "../common/Photo.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import "./Quality.css";

// Sample copy - replace with your real quality checks.
const tabs = [
  {
    id: "testing",
    label: "Quality Checks",
    text: "Every batch is inspected for size, color, moisture and taste before it moves to the next stage, so what reaches you is consistent and fresh.",
  },
  {
    id: "grading",
    label: "Grading",
    text: "Kernels are graded by size and appearance, using both machines and trained hands, so each pack matches the grade on its label.",
  },
  {
    id: "packing",
    label: "Safe Packing",
    text: "Cashews are sealed in food-grade packaging to protect their crunch and aroma on the way to your door or your warehouse.",
  },
];

function Quality() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section quality">
      <div className="container quality__inner">
        <div data-reveal>
          <SectionTitle
            align="left"
            title="Quality You Can Taste!"
            text="Cashews are rich in nutrients, and we protect that goodness at every step."
          />
          <div className="quality__tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={tab.id === activeTab}
                className={tab.id === activeTab ? "is-active" : ""}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="quality__text" key={current.id} role="tabpanel">
            {current.text}
          </p>
        </div>
        <div className="quality__visual" data-reveal data-delay="0.15">
          <Photo
            className="quality__img"
            src="/images/quality.jpg"
            alt="Cashews arranged in a heart shape"
          />
          <div className="quality__badge" aria-hidden="true">
            <svg viewBox="0 0 120 120">
              <defs>
                <path
                  id="badge-path"
                  d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0"
                />
              </defs>
              <text fontSize="11.5" fill="#fff" letterSpacing="1.5">
                <textPath href="#badge-path">
                  Cashews Crafted with Care, Commitment and Quality
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
