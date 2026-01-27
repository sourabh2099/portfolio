const skills = ["Java", "Spring Boot","Mircoservices","APIs",
    "SQL","NoSQL","Docker","Kubernetes",
    "PostgresSQL","Redis","Docker","Kafka",
    "AWS"
];
export default function Skills() {
    return (
        <section className="py-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map(s => 
                    (<button 
                        key={s} 
                        className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-md
                        transition-all duration-300 ease-in-out
                        hover:bg-blue-600 hover:scale-105">{s} </button>
                    ))}
            </div>
        </section>
    );
}