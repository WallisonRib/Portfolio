import NavBar from "./assets/components/Navbar/navbar"
import "./index.css"
import AboutMe from "./assets/components/AboutMe/AboutMe"
import Skills from "./assets/components/Skills/Skills";
import Home from "./assets/components/Home/Home";
import Projects from "./assets/components/Projects/Projects";
import Footer from "./assets/components/Footer/Footer";

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
