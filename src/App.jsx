import NavBar from "./assets/components/navbar"
import "./index.css"
import AboutMe from "./assets/components/AboutMe"
import Skills from "./assets/components/Skills";
import Home from "./assets/components/Home";
import Projects from "./assets/components/Projects";
import Footer from "./assets/components/Footer";

import ParticlesComponent from "./assets/components/tsparticles";

function App() {

  return (
    <>
      <ParticlesComponent id="particles" />
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />


    </>



  );
}

export default App
