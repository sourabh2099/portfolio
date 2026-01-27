
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden 
      bg-gradient-to-br from-slate-950 via-gray-900 to-black
      text-slate-200">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 bg-blue-500/20 blur/3xl rounded-full"/>
        <div className="absolute top-40 right-0 w-90 h-96 bg-purple-500/20 blur-3xl rounded-full"/>
      </div>

      <div className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>

  );
}