const projects = [
    {
        title: "Mock Twitter Application",
        description: "This is backend application which ",
        tech: ["Java", "Spring Boot", "Microservices", "API", "Stripe"]
    },
    {
        title: "Shipment Tracker Application",
        description: "Kafka based async event processing system",
        tech: ["Java", "Spring boot", "kafka", "WebSockets", "Redis"]
    }
];

export default function Projects() {
    return (
        <section className="py-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Projects</h2>
            <div className="grid grid-cols-2 gap-6">
                {projects.map(p => (
                    <div key={p.title} className="bg-gray-900 p-6 rounded-xl">
                        <h3 className="text-xl font-bold">{p.title}</h3>
                        <p className="text-gray-400 my-2">{p.description}</p>
                        <div className="flex flex-wrap gap-2">{p.tech.map(t => (
                            <span key={t} className="text-sm text-blue-200">{t} </span>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}