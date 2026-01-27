const experience = [
    {
        companyName: "Capgemini Technology Services",
        designation: "Analyst/Software Engineer",
        technologiesUsed: ["Java", "SpringBoot","Microservices"],
        contributions: ["Worked as a junor developer to develop and maintain microservices"]
    },
    {
        companyName: "Tata Consultancy Services",
        designation: "Systems Engineer",
        technologiesUsed: ["Java","SpringBoot","kafka","Microservices","Swagger","NoSQL"],
        contributions:["Worked as a developer responsible to develop systems from scratch"]
    },
    {
        companyName: "Accenture",
        designation: "Senior Software Engineer",
        technologiesUsed: ["Java","SpringBoot","kafka","Microservices","Swagger","NoSQL"],
        contributions: ["Worked as a senior software engineer to develop and maintain systems which are existing in the Production"]
    }
];
export default function Experience() {
    return (
        <section className="py-16 max-w-5xl mx-auto" >
            <h2 className="text-3xl font-semibold mb-6">Experience</h2>
            <div className="grid gap-6">
                {experience.map(e => (
                    <div key={e.companyName} className="bg-ggrat-900 p-6 rounded-x1">
                        <h3 className="text-x1 font-bold">{e.companyName}</h3>
                        <p className="text-gray-400 my-2">{e.designation}</p>
                        <ul className="list-disc pl-6 space-y-2 text-white-800">
                            {e.contributions.map((tech,index) => (
                                <li key={index} className="leading-relaxed">{tech}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}