// import { useRef } from 'react';
// import Photo from '../common/Photo.jsx';
// import { grades } from '../../data/products.js';
// import './GradesCarousel.css';

// function GradesCarousel() {
//   const trackRef = useRef(null);

//   const scrollTrack = (direction) => {
//     const track = trackRef.current;
//     track.scrollBy({ left: direction * (track.clientWidth * 0.7), behavior: 'smooth' });
//   };

//   return (
//     <section className="section section--peach grades">
//       <div className="container grades__inner">
//         <div className="grades__text" data-reveal>
//           <h2>Explore The Grades We Offer!</h2>
//           <p>From raw to premium varieties, we offer cashews of all grades, carefully selected to meet every preference and ensure quality.</p>
//           <div className="grades__arrows">
//             <button type="button" onClick={() => scrollTrack(-1)} aria-label="Previous grades">&#8249;</button>
//             <button type="button" onClick={() => scrollTrack(1)} aria-label="Next grades">&#8250;</button>
//           </div>
//         </div>
//         <ul className="grades__track" ref={trackRef} data-reveal data-delay="0.15">
//           {grades.map((grade) => (
//             <li key={grade.code} className="grade">
//               <div className="grade__bowl"><Photo src={grade.image} alt={`${grade.name} cashews`} /></div>
//               <span className="grade__label">{grade.code} {grade.name}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default GradesCarousel;

import { useRef } from "react";
import Photo from "../common/Photo.jsx";
import { grades } from "../../data/products.js";
import "./GradesCarousel.css";

function GradesCarousel() {
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    track.scrollBy({
      left: direction * (track.clientWidth * 0.7),
      behavior: "smooth",
    });
  };

  return (
    <section className="section grades">
      <div className="container grades__inner">
        <div className="grades__text" data-reveal>
          <h2>
            Explore The
            <br />
            Grades, We Offer!
          </h2>
          <p>
            From raw to premium varieties, we offer cashews of all grades,
            carefully selected to meet every preference and ensure quality.
          </p>
          <div className="grades__arrows">
            <button
              type="button"
              onClick={() => scrollTrack(-1)}
              aria-label="Previous grades"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollTrack(1)}
              aria-label="Next grades"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <ul
          className="grades__track"
          ref={trackRef}
          data-reveal
          data-delay="0.15"
        >
          {grades.map((grade) => (
            <li key={grade.label} className="grade">
              <div className="grade__bowl">
                <Photo src={grade.image} alt={grade.label} />
              </div>
              <span className="grade__label">{grade.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GradesCarousel;
