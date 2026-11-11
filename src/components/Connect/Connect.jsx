import { useState } from "react";
import Photo from "../common/Photo.jsx";
import { CashewAppleSketch } from "../Processing/Sketches.jsx";
import company from "../../data/company.js";
import "./Connect.css";

function Connect() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  // There is no backend yet, so this opens the visitor's email app with a sign-up message.
  // To use a real service later (Mailchimp, Formspree...), replace the mailto line.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    const subject = encodeURIComponent("Please add me to your cashew updates");
    const body = encodeURIComponent(`Please add this email to your list: ${email}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;

    setMessage({ type: "success", text: "Thank you! Your email app should open so you can send your sign-up." });
    setEmail("");
  };

  return (
    <section className="connect">
      {/* Cream band: clipped, so the sketch is cut by the top edge */}
      <div className="connect__bg" aria-hidden="true">
        <CashewAppleSketch className="connect__sketch" />
      </div>

      <div className="container connect__inner">
        <div className="connect__visual" data-reveal>
          <span className="connect__blob" aria-hidden="true" />
          <Photo
            className="connect__img"
            src="/images/connect/cashew-apples.png"
            alt="Fresh red cashew apples"
          />
        </div>

        <div className="connect__content" data-reveal data-delay="0.15">
          <p className="connect__script">Connect With Us</p>
          <h2>Get Our Cashews Now!</h2>

          <form className="connect__form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="connect-email" className="sr-only">Email address</label>
            <input
              id="connect-email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={message.type === "error"}
            />
            <button type="submit">Submit</button>
          </form>

          {message.text && (
            <p className={`connect__message connect__message--${message.type}`} role="status">
              {message.text}
            </p>
          )}

          <p className="connect__note">
            Get the latest cashew news delivered to your inbox, fresh and exciting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Connect;


