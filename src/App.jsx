
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <div className="bg-slate-950 text-white scroll-smooth">
        <Navbar/>
        <Hero />
        <About/>
        {/* <Skills /> */}
        <Projects />
        <Contact />
      </div>
    </main>

  );
}