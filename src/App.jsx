
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar setActiveTab={setActiveTab} />
      <main className="pt-20">
        {activeTab === "home" && <Hero />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "project" && <Projects />}
      </main>
    </div>

  );
}