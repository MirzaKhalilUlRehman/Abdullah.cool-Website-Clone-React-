import Header from "./Components/Header"
import HomeSection from "./Components/Home-Section";
import TechStack from "./Components/Tech-Stack";
import Projects from "./Components/Projects";
import Services from "./Components/Services"; 
import About from "./Components/About";
import Process from "./Components/Process"
import './App.css';
function App() {
  return (
<>
    <Header />
    <HomeSection />
    <TechStack />
    <Projects />
    <Services />
    <About />
  </>   

  );
}
export default App