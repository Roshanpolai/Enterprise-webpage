import Photo from "../common/Photo.jsx";
import "./WhyChooseUs.css";

// Sample copy - edit to match what Utkal Agro really offers.
const reasons = [
  {
    title: "Nutrient-Rich",
    text: "Our cashews are packed with essential nutrients, a healthy and tasty snack for any time of day.",
  },
  {
    title: "Freshness Guaranteed",
    text: "Every pack is sealed fresh at our facility and handled with care until it reaches you.",
  },
  {
    title: "Consistent Grading",
    text: "Uniform size and color in every grade, so your product looks and tastes the same each time.",
  },
  {
    title: "Bulk and Business Supply",
    text: "We supply wholesalers, retailers and exporters with reliable quantities and clear communication.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section why">
      <div className="container why__inner">
        <div className="why__visual" data-reveal>
          <Photo
            className="why__img"
            src="/images/why/whychoose.webp"
            alt="Bowl of fresh cashews"
          />
        </div>
        <div>
          <h2 data-reveal>Why Customers Love Our Cashew?</h2>
          <p className="why__intro" data-reveal>
            At Utkal Agro Industries, we pride ourselves on delivering high
            quality cashew nuts. Here is why our customers trust us.
          </p>
          <ul className="why__list">
            {reasons.map((reason, index) => (
              <li key={reason.title} data-reveal data-delay={index * 0.1}>
                {/* <span className="why__icon" aria-hidden="true">
                  <img src="images/why/nutrients.webp" alt="" />
                </span> */}

                <span className="why__icon" aria-hidden="true">
                  <img src={reason.icon} alt="" />
                </span>

                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
