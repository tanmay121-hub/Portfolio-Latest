import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import { Toaster } from "react-hot-toast";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Navbar />
      <ParticlesBackground />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <SocialLinks />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default App;
