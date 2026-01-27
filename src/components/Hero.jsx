export default function Hero(){
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-bold">
                Hey, I'm <span className="text-indigo-400">Sourabh</span>
            </h1>

            <p className="mt-4 max-w-wl text-gray-300">
                Backend Engineer building scalable microservices and event-driven system
                with Spring Boot and kafka.
            </p>

            <div className="mt-6 flex gap-4">
                <a href="#projects" className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">
                    View Projects
                </a>
                <a href="/resume.pdf" className="px-5 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
                    Resume
                </a>
            </div>
        </section>
    );
}