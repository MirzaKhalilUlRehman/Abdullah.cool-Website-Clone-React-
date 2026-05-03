import Header from "./Components/Header"
import HomeSection from "./Components/Home-Section";
import TechStack from "./Components/Tech-Stack";
import Projects from "./Components/Projects";
import Services from "./Components/Services"; 
import About from "./Components/About";
import Process from "./Components/Process";
import Testimonials from "./Components/Testimonials";
import ContactME from "./Components/Contact-Me";  
import Footer from "./Components/Footer";
import ContactMe from "./Components/Contact-Me";
import './App.css';
import "./layout/navbar.css";
import "./layout/hero.css";
import "./layout/techstack.css";
import "./layout/projects.css";
import "./layout/services.css";
import "./layout/contact-me.css";
import "./layout/footer.css";
import "./layout/testimonials.css"
import "./layout/about.css";
import "./layout/process.css";
import "./layout/responsive.css";
function App() {
  return (
<>
    <Header />
    <HomeSection />
    <TechStack />
    <Projects />
    <Services />
    <About />
    <Process />
    <Testimonials />
    <ContactME/>
    <Footer />
  </>   

  );
}
export default App