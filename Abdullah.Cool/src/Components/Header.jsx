import { IoCall } from "react-icons/io5";   // Ionic style
import logo from "../assets/images/logo.png";
function Header() {
  return (
    <header className="header">
    
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#tech-stack">Tech Stack</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Testimonials</a>
        </div>
        <div className="btn">
          <button>Contact Me <span className="icon-box"><IoCall /></span></button>
        </div>

    </header>
  );
}
export default Header;
