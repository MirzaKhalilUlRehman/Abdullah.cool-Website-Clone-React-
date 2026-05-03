import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
function Footer() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        
        <div className="contact-badge">
          <span className="dot"></span>
          Available for new projects
        </div>

        <h2 className="contact-heading">
          Thanks for being here.{" "}
          <span>Let's stay in touch.</span>
        </h2>

        <p className="contact-email">
          mrabdullahrafique@gmail.com
        </p>

        <div className="contact-icons">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>

        <h1 className="contact-bg-text">Abdullah</h1>

        <p className="contact-footer">
          © 2026 Muhammad Abdullah · Crafted with precision
        </p>

      </div>
    </section>
  );
}

export default Footer;