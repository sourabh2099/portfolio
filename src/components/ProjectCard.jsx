export default function ProjectCard({project}){
    return (
        <div className="bg-white/5 p-6 rounded-x1 border border-white/10 hover:translate-y-1 transition-all">
            <h3 className="text-x1 font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm rounded-full bg-white/10">{t}</span>
                ))}
            </div>

            <div className="mt-4 flex gap-4 text-indigo-400">
                <a href="{project.github}" target="_blank">{project.title}</a>
            </div>
        </div>
    );
}