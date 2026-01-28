import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Mock Twitter Application",
        description: "This is backend application which ",
        tech: ["java", "springBoot", "Microservices", "API", "Stripe"],
        githubLink: ""
    },
    {
        title: "Shipment Tracker Application",
        description: "Kafka based async event processing system",
        tech: ["java", "springBoot", "kafka", "WebSockets", "Redis"],
        githubLink: ""
    }
];

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-8">
                Projects 
            </h2>

            <div className="grid md:grid-col-2 gap-6">
                {projects.map((p) => 
                   <ProjectCard key={p.title} project={p}/>
                )}
            </div>
        </section>
    );
}