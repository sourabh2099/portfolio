import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Mock Twitter Stream Platform",
        description: "Designed and implemented a distributed mock Twitter backend using microservices and Apache Kafka to simulate real-time social media streams. Built an event-driven architecture for publishing, processing, and delivering tweets across independent services, improving scalability and fault tolerance.",
        tech: ["java", "springBoot" ,"kafka","docker","postgresSql"],
        githubLink: ""
    },
    {
        title: "Shipment Tracker Application",
        description: `Implemented a scalable Shipment Tracker application using microservices with Spring Reactive (WebFlux). Integrated OpenStreetMap for real-time geolocation tracking and Spring Eureka for service discovery. Designed data persistence using MongoDB for tracking data and PostgreSQL for transactional consistency.
        The system supports asynchronous, non-blocking communication, improving responsiveness and enabling efficient handling of concurrent shipment updates in a distributed environment.`,
        tech: ["java", "springBoot", "kafka", "redis","mongoDb","postgresSql"],
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