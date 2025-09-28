import Certificates from "../achievements/Acheive";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import About from "./about/About";
import Contact from "./contact/Contact";
import Header from "./ui/Header";

function App() {
  return (
    <div className="w-full">
      <Header />

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
