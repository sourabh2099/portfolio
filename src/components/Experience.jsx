const experience = [
    {
        companyName: "Capgemini Technology Services",
        tenure: " Jul 2021 - Jun 2023 ",
        designation: "Analyst/Software Engineer",
        technologiesUsed: ["Java", "SpringBoot","Microservices"
            ,"Kubernetes","ELK","Grafana","ActiveMq","Kafka",],
        contributions: [`Worked for a global bank on its Investment and traading wing to 
            enable systems that automatically managed trade and changes made to the trades
             from the upstream systems and automating payment flows to counterparities without manual intervention`]
    },
    {
        companyName: "Tata Consultancy Services",
        tenure: " Jun 2023 - Sept 2024 ",
        designation: "Systems Engineer",
        technologiesUsed: ["Java","SpringBoot","kafka","Microservices","Swagger","NoSQL"],
        contributions:[`Worked as developer to develop applcations from scratch to cater to the creation of a realtime payment processing module for core account systems
             for a leader in global banking industry. Worked closely with client to gather requirement
              and stakeholders to fine tune the product as per requirement`]
    },
    {
        companyName: "Accenture",
        designation: "Senior Software Engineer",
        tenure: " Sept 2024 - Till Date ",
        technologiesUsed: ["Java","SpringBoot","kafka","Microservices","Swagger","NoSQL"],
        contributions: [`Worked as a senior software engineer to develop and maintain systems which are existing in the Production. Reduced Occurance of incidents
             logged by 70 percent by dilignetly indentifying issues in the code to fix the root cause.`]
    }
];
export default function Experience() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-20" >
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="grid gap-6">
                {experience.map(e => (
                    <div key={e.companyName} className="bg-grey-900 p-6 rounded-x1">
                        <p className="text-xl font-bold">{e.companyName} </p>
                            <span className="py-1 italic">{e.tenure}</span>
                        
                        <p className="text-gray-400 my-2">{e.designation} </p>
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