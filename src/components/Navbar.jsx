
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ setActiveTab, activeTab }) {

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-slate-950/70 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <span
                    onClick={() => setActiveTab("home")}
                    className="font-bold cursor-pointer"
                >
                    Sourabh.dev
                </span>
                <div className=" md:flex items-center gap-6 text-white">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={() => setActiveTab("project")}
                        className={`nav-link ${activeTab === "project" ? "text-indigo-400" : ""
                            }`}
                    >
                        Projects
                    </motion.button>
                    
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.85 }}
                        onClick={() => setActiveTab("experience")}
                        className={`nav-link ${activeTab === "experience" ? "text-indigo-400" : ""
                            }`}
                    >
                        Experience
                    </motion.button>
                </div>
            </div>
        </nav>
    );
}