import { FaFolder } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoSendOutline } from "react-icons/io5";

function HomeSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="available">
          <div className="geen"></div>
          Available Now
        </div>
        <h1>
          Craftings <span> Web & Mobile</span> applications that perform
        </h1>
        <p>
          Hey, I'm Abdullah. Whether it's a performance issue, a broken flow, or
          a product you need built from scratch — I've spent 7+ years solving
          exactly those problems with React, React Native, Next.js and Supabase.
          I know the craft deeply, and I use AI to move twice as fast.
        </p>
        <button className="book-call-btn">
          Book a Free Call
          <span className="icon-box">
            <FaArrowRight />
          </span>
        </button>
        <button className="project-btn">
          <span className="icon-box">
            <FaFolder />
          </span>
          See Project
        </button>
        <br />
        <div className="data">

        <div className="project-data">
          20+ <small>Projects shipped</small>
        </div>
        <div className="client-data">
          10+ <small>Happy Clients</small>
        </div>
        <div className="craft-data">
          7+ <small>Years of Craft</small>
        </div>
        </div>
      </div>
      <div className="brd"></div>
      <div className="hero-avtar">
        <div className="avtar">
          <img src="https://www.abdullah.cool/my-pic-transparent.png" alt="Abdullah" />
        </div>
        <div className="avtar-about">
            <div className="about-data">
          <h4>Muhammad Abdullah</h4>
          <p>Full-Stack Developer</p>
          </div>
          <div className="mail-icon">
          <a href="mailto:abdullah@example.com"> <span className="icon-box"><IoSendOutline size={30} /></span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeSection;
