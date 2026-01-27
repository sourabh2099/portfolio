import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(true);

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur bg-slate-950/70 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="font-bold text-lg">
                    Sourabh.dev
                </a>

                <div className="hidden md:flex items-center gap-6">
                    <a href="#about" className="relative hover:text-indigo-400
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-indigo-400
             hover:after:w-full after:transition-all">About</a>
                    <a href="#projects" className="relative hover:text-indigo-400
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-indigo-400
             hover:after:w-full after:transition-all">Projects</a>
                    <a href="#skills" className="relative hover:text-indigo-400
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-indigo-400
             hover:after:w-full after:transition-all">Skills</a>
                    <a href="#contact" className="relative hover:text-indigo-400
             after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 after:bg-indigo-400
             hover:after:w-full after:transition-all">Contact</a>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>

            </div>
            {open && (
                <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-slate-950/95">
                    <a onClick={() => setOpen(false)} href="#about">About</a>
                    <a onClick={() => setOpen(false)} href="#projects">Projects</a>
                    <a onClick={() => setOpen(false)} href="#skills">Skills</a>
                    <a onClick={() => setOpen(false)} href="#contact">Contact</a>
                </div>
            )}

        </nav>
    );
}