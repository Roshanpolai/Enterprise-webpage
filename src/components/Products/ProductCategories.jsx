import { Link } from "react-router-dom";
import Photo from "../common/Photo.jsx";
import SectionTitle from "../common/SectionTitle.jsx";
import { categories } from "../../data/products.js";
import "./ProductCategories.css";

function ProductCategories() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          title="From Our Farms To Fresh Cashews For You!"
          text="Explore the best quality raw and white cashews, carefully processed to retain their natural taste and freshness."
        />
        <div className="categories">
          {categories.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="category"
              style={{ background: item.tint, "--number-color": item.numberColor }}
              data-reveal
              data-delay={index * 0.12}
            >
              <Photo className="category__img" src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link to="/products" className="category__link">
                Explore Now
                <svg className="category__arrow" viewBox="0 0 64 18" aria-hidden="true">
                  <path d="M2 9h56M50 2l9 7-9 7M54 2l9 7-9 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span className="category__number" aria-hidden="true">0{index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCategories;