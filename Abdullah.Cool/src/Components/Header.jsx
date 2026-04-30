import logo from '../assets/images/logo.png';
function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Abdullah.cool Logo" />
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
                <button>Contact Me</button>
            </div>

        </header>
    )
}
export default Header;