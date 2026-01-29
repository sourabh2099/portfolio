import icon_formal from "../assets/logos/hero_formal.png";
import { Download } from "lucide-react";
import linkedInLogo from "../assets/logos/linkedin.svg";
import gitHubLogo from "../assets/logos/github.svg";

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-6">
            <img src={icon_formal}
                alt="icon-image"
                className="w-52 h-52 md:w-60 md:h-60 rounded-full object-cover border-2 border-indigo-400 ring-4 ring-indigo-400/30 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold">
                Hey, I'm <span className="text-indigo-400">Sourabh</span>
            </h1>

            <p className="mt-4 max-w-wl text-gray-300">
                Backend Engineer building scalable microservices and event-driven system
                with Spring Boot and kafka.
            </p>

            <div className="px-4 py-4 flex items-center gap-4">
                <a href="/Java_SpringBoot_developer_Sourabh_Chowdhury.pdf"
                    download
                    className="px=3 py-3">
                    <Download size={20} />
                </a>

                <a href="https://www.linkedin.com/in/sourabh-chowdhury-682b89153/">
                    <img src={linkedInLogo} alt="linked-in-logo" className="w-5 h-5" />
                </a>

                <a href="https://github.com/sourabh2099?tab=repositories">
                    <img src={gitHubLogo} alt="github-logo" className="w-5 h-5 invert" /></a>


            </div>

        </section>
    );
}