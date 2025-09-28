import Certificates from "../achievements/Acheive";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import About from "./about/About";
import Contact from "./contact/Contact";
import Header from "./ui/Header";

function App() {
  return (
    <div>
      <Header />

      <div id="About">
        <About />
      </div>

      <div id="Projects">
        <Projects />
      </div>

      <div id="Skills">
        <Skills />
      </div>

      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
