
export default function Navbar({setActiveTab}) {

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
                <button onClick={() => setActiveTab("project")} className="nav-link">Projects</button>
                <button onClick={() => setActiveTab("experience")} className="nav-link">Experience</button>
            </div>
            </div>
        </nav>
    );
}