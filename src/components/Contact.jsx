const contactDetails = {
    email: "sourabhchowdhury82@gmail.com",
    githubLink: "https://github.com/sourabh2099?tab=repositories",
    LinkedIn: "https://www.linkedin.com/in/sourabh-chowdhury-682b89153/"
};

export default function Contact() {
    return (
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">
          Find Me Here 🚀
        </h2>
  
        <div className="flex flex-col items-center gap-4">
          <a
            href={`mailto:${contactDetails.email}`}
            className="w-64 px-2 py-3 rounded-xl bg-white/10 backdrop-blur text-white
                       hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            📬 Gmail
          </a>
  
          <a
            href={contactDetails.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white
                       hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            💻 GitHub
          </a>
  
          <a
            href={contactDetails.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="w-64 px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white
                       hover:bg-sky-500/20 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            🔗 LinkedIn
          </a>
        </div>
      </section>
    );
  }
  