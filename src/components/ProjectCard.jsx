import javaLogo from "../assets/logos/java-original.svg";
import springLogo from "../assets/logos/spring-original.svg";
import dockerLogo from "../assets/logos/docker-original.svg";
import kafkaLogo from "../assets/logos/apachekafka-original.svg";

const logo = {
    java: javaLogo,
    springBoot: springLogo,
    kafka: kafkaLogo,
    docker: dockerLogo
};

function computeCssString(techString){
    const invertImageColor = ["kafka"];
    const defaultCss = "w-7 h-7 object-contain";

    return invertImageColor.includes(techString) ? defaultCss.concat(" invert") : defaultCss;



}

export default function ProjectCard({project}){

    return (
        <div className="bg-white/5 p-6 rounded-x1 border border-white/10 hover:translate-y-1 transition-all">
            <h3 className="text-x1 font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => {
                    console.log(t);
                    return <img src={logo[t]} alt="{t}" className={computeCssString(t)} />
                } 
                )}
            </div>

            <div className="mt-4 flex gap-4 text-indigo-400">
                <a href="{project.github}" target="_blank">{project.title}</a>
            </div>
        </div>
    );
}