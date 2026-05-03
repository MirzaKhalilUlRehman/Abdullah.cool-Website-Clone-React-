import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import React from "react";
export default function ContactMe() {
  return (
    <section className="contactme-wrapper">
        <div className="contactme-header">
    <p className="contactme-eyebrow">CONTACT</p>

    <h2 className="contactme-main-title">
      Let's build something <br />
      you're <span>proud of.</span>
    </h2>

    <p className="contactme-description">
      No pitch, no commitment — just an honest conversation.
    </p>
  </div>

      <div className="contactme-card">

        {/* Badge */}
        <div className="contactme-badge">
          <span className="contactme-dot"></span>
          Available for new projects
        </div>

        {/* Heading */}
        <h1 className="contactme-title">
          Got a project in mind? <br />
          <span>Let’s talk.</span>
        </h1>

        <p className="contactme-subtitle">
          Watch the video, then pick how you'd like to connect.
        </p>

        {/* Buttons */}
        <div className="contactme-actions">
          <button className="contactme-btn contactme-btn-blue">
            📅 Book a 30-min call via Calendly
          </button>

          <button className="contactme-btn contactme-btn-orange">
            <div className="contactme-emailbox">
              <strong>✉ Send an email</strong>
              <span>mrabdullahrafique@gmail.com</span>
            </div>
          </button>
        </div>

        {/* Form */}
        <form
          className="contactme-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="contactme-row">
            <div className="contactme-field">
              <label>NAME</label>
              <input type="text" placeholder="Alex Johnson" />
            </div>

            <div className="contactme-field">
              <label>EMAIL</label>
              <input type="email" placeholder="alex@company.com" />
            </div>
          </div>

          <div className="contactme-field">
            <label>PROJECT TYPE</label>
            <select>
              <option>Select a project type...</option>
              <option value="">Frotend Development</option>
              <option value="">Mobile Development</option>
            </select>
          </div>

          <div className="contactme-field">
            <label>MESSAGE</label>
            <textarea placeholder="Tell me about your project..." />
          </div>

          <div className="contactme-footer">
            <p>⏱ I reply within 24 hours.</p>
            <button type="submit" className="contactme-submit">
              Send message →
            </button>
          </div>
        </form>
<hr />

        <div className="contact-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
}