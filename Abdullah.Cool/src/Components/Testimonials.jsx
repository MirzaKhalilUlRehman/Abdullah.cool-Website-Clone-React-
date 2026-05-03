import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const reviews = [
  {
    title:
      "Clean UI, stable mobile app, and always solution-oriented — Abdullah delivered exactly what our business needed.",
    text: `I had the opportunity to work with Abdullah on the development of our HORECA platform, where he was responsible for both the mobile application and frontend implementation. Abdullah demonstrated a high level of technical competence, reliability, and attention to detail throughout the project. He translated our requirements into a clean, intuitive user interface and delivered a mobile experience that is both stable and performant.`,
    name: "Hrvoje Lovrekovic",
    role: "Senior Product Manager",
    initials: "HL",
  },
  {
    title:
      "A true gem. We keep coming back to Abdullah because the quality of his work speaks for itself.",
    text: "Abdullah has been an invaluable asset to us. I had the pleasure of hiring Abdullah to work on numerous projects, and I must say, he is truly a gem among the talents we have encountered. Abdullah consistently goes above and beyond to ensure the success of every project he undertakes. His dedication and commitment are unparalleled, and he consistently delivers outstanding results. His expertise lies primarily in frontend development, and we have benefited greatly from his contributions across a wide range of projects. Furthermore, I would like to highlight that we continue to engage Abdullah on different projects, which is a testament to the exceptional quality of his work. I highly recommend Abdullah for any future opportunities.",
    name: "Qazi A. Majid",
    role: "Founder Solaceltd.io",
    initials: "QM",
  },
  {
    title:
      "A true gem. We keep coming back to Abdullah because the quality of his work speaks for itself.",
    text: "I had the opportunity to work with Abdullah on the development of our HORECA platform, where he was responsible for both the mobile application and frontend implementation. Abdullah demonstrated a high level of technical competence, reliability, and attention to detail throughout the project. He translated our requirements into a clean, intuitive user interface and delivered a mobile experience that is both stable and performant.",
    name: "Qazi A. Majid",
    role: "Founder Solaceltd.io",
    initials: "QM",
  },
  {
    title:
      "Clean UI, stable mobile app, and always solution-oriented — Abdullah delivered exactly what our business needed.",
    text: "Abdullah has been an invaluable asset to us. I had the pleasure of hiring Abdullah to work on numerous projects, and I must say, he is truly a gem among the talents we have encountered. Abdullah consistently goes above and beyond to ensure the success of every project he undertakes. His dedication and commitment are unparalleled, and he consistently delivers outstanding results. His expertise lies primarily in frontend development, and we have benefited greatly from his contributions across a wide range of projects. Furthermore, I would like to highlight that we continue to engage Abdullah on different projects, which is a testament to the exceptional quality of his work. I highly recommend Abdullah for any future opportunities.",
    name: "Qazi A. Majid",
    role: "Founder Solaceltd.io",
    initials: "QM",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      {/* CARD */}
      <div className="testimonial-header">
        <p className="testimonial-label">Testimonials</p>

        <h2 className="testimonial-heading">
          Real Words From <br /> Real
          <span> Clients</span>
        </h2>

        <p className="testimonial-subtext">
          Honest feedback from people I've had the pleasure of building with.
        </p>
      </div>
      <div className="testimonial-card">
        <div className="testimonial-contant">
          <h3 className="testimonial-title">{reviews[current].title}</h3>

          <p className="testimonial-text">{reviews[current].text}</p>

          <div className="testimonial-user">
            <div className="avatar">{reviews[current].initials}</div>

            <div>
              <div className="name">{reviews[current].name}</div>
              <div className="role">{reviews[current].role}</div>
            </div>
          </div>
        </div>

        <div className="stars">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FaStar key={i} />
            ))}
        </div>

        {/* big quote watermark */}
        <div className="quote-mark">“</div>
      </div>
      <div className="testimonials-navigation">
        {/* bottom bar */}
        <div className="slider-bar">
          <div className="dots">
            {reviews.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
              />
            ))}
          </div>

          <div className="arrows">
            <button onClick={prev}>
              <FiArrowLeft />
            </button>
            <button onClick={next}>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
