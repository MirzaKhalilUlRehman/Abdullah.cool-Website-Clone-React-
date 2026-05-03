import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const reviews = [
  {
    title:
      "Clean UI, stable mobile app, and always solution-oriented — Abdullah delivered exactly what our business needed.",
    text: `I had the opportunity to work with Abdullah on the development of our HORECA platform,
where he was responsible for both the mobile application and frontend implementation.
Abdullah demonstrated a high level of technical competence, reliability, and attention to detail
throughout the project. He translated our requirements into a clean, intuitive user interface and
delivered a mobile experience that is both stable and performant.`,
    name: "Hrvoje Lovrekovic",
    role: "Senior Product Manager",
    initials: "HL",
  },
  // ➕ Add more review objects here
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-card">
        <h3 className="testimonial-title">{reviews[current].title}</h3>

        <p className="testimonial-text">{reviews[current].text}</p>

        <div className="testimonial-user">
          <div className="user-avatar">{reviews[current].initials}</div>
          <div>
            <div className="user-name">{reviews[current].name}</div>
            <div className="user-role">{reviews[current].role}</div>
          </div>
        </div>

        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-icon" />
          ))}
        </div>
      </div>

      <div className="testimonial-bottom">
        <div className="dots">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === current ? "active-dot" : ""}`}
            ></div>
          ))}
        </div>

        <div className="arrows">
          <button className="arrow-btn" onClick={prev}>
            <FiArrowLeft />
          </button>
          <button className="arrow-btn" onClick={next}>
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}