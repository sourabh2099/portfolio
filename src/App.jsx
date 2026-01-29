
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="bg-slate-950 text-white min-h-[calc(100vh-4rem)]">
      <Navbar setActiveTab={setActiveTab} activeTab={activeTab} />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-20">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="hero"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <Hero />
            </motion.div>)}
          {activeTab === "experience" &&
            (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
              >
                <Experience />
              </motion.div>)
          }
          {activeTab === "project" && (
            <motion.div
              key="project"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>)
          }
        </AnimatePresence>
      </motion.main>
    </div>

  );
}