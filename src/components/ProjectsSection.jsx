import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "LLM based Intelligent Assistant for Navigating Procurement Guidelines in Sri Lanka ",
        decription: "LLM-based assistant to navigate Sri Lanka's procurement guidelines using RAG, document chunking, and a vector database. (ongoing final year research )",
        image: "../public/projects/project 1.png",
        tags: ["Python", "RAG", "LLM", "FAISS", "PyMuPDF"],

    },

    {
        id: 2,
        title: "NEXU – News Verification Robot using Crowdsourcing",
        decription: "Real-time Reddit news verification with crowdsourced signals with physical interaction.",
        image: "../public/projects/project 2.jpeg",
        tags: ["Python", "PRAW", "Groq", "Raspberry Pi", "Arduino"],
        demoUrl: "https://drive.google.com/drive/folders/18bxgjUIWrdRY55cdnAs56BBWTkEibkmG",
        githubUrl: "#"
    },

    {
        id: 3,
        title: "University Hall Booking System",
        decription: "Full-stack reservation platform with login, availability, booking, approvals, and dashboard.",
        image: "../public/projects/project 3.png",
        tags: ["Java", "Spring Boot", "Thymeleaf", "HTML", "CSS", "MySQL", "Docker"],
        githubUrl: "https://github.com/navzyy/USJ-Hall-Booking-System-Fullstack.git"
    },

    {
        id: 4,
        title: "Video Storing Problem with Genetic Algorithm",
        decription: "Genetic Algorithm approach with experiments on population size and crossover/mutation strategies.",
        image: "../public/projects/project 4.png",
        tags: ["Python", "Genetic Algorithm", "NumPy", "Matplotlib"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/Video-Storage-Genetic-Algorithm.git"
    },

    {
        id: 5,
        title: "Medicine Recommendation System",
        decription: "Symptom-based medicine recommender with a Flask frontend and ML pipeline.",
        image: "../public/projects/project 5.png",
        tags: ["Python", "Flask", "Pandas", "Scikit-learn", "HTML"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/Medicine-Recommendation-System.git"
    },

    {
        id: 6,
        title: "Hand Gesture Game for Kids",
        decription: "Touchless game using real-time hand tracking and gesture controls.",
        image: "../public/projects/project 6.png",
        tags: ["Python", "OpenCV"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/Hand-gesture-game.git"
    },

    {
        id: 7,
        title: "Glow Hatty – Smart Lamp",
        decription: "ML-powered smart lamp that detects objects and adapts lighting.",
        image: "../public/projects/project 7.jpeg",
        tags: ["Arduino", "Edge Impulse"],
        demoUrl: "https://drive.google.com/file/d/1_ABgUI2KbEUTJmnZvOdfT1k7JEhzi3ZJ/view?usp=drivesdk",
        githubUrl: "https://github.com/navzyy/Glow-Hatty-HCI-Project.git"
    },

    {
        id: 8,
        title: "COVID-19 Country Report",
        decription: "Exploratory analysis and charts for Germany’s COVID-19 trends.",
        image: "../public/projects/project 8.png",
        tags: ["R", "ggplot2", "dplyr", "RStudio"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/COVID-19-Country-Report-Germany.git"
    },

    {
        id: 9,
        title: "Hall Allocation System",
        decription: "GUI app for bookings with update/cancel, validation, and MySQL.",
        image: "../public/projects/project 9.png",
        tags: ["Java", "Swing", "OOP", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/Hall-Booking-System.git"
    },

    {
        id: 10,
        title: "To-Do List Manager",
        decription: "Console task manager using core data structures and algorithms.",
        image: "../public/projects/project 10.png",
        tags: ["Java", "DSA"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/To-Do-List.git"
    },

    {
        id: 11,
        title: "Data Pal – Mobile Data Recommender",
        decription: "Prototype that suggests cost-effective mobile data plans for Sri Lankan users.",
        image: "../public/projects/project 11.jpeg",
        tags: ["Figma"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/DataPal.git"
    },
    {
        id: 12,
        title: "Mobile Phone Purchase Automation",
        decription: "End-to-end purchase flow automation on eBay using Selenium WebDriver, TestNG, Page Object Model, and Maven with cross-browser support.",
        image: "../public/projects/project 12.png",
        tags: ["Java", "Selenium WebDriver", "TestNG"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/selenium-testng-ebay.git"
    },

    {
        id: 13,
        title: "TripTrix",
        decription: "Responsive travel guide built with HTML, CSS, and JavaScript featuring destination search and map highlights.",
        image: "../public/projects/project 13.png",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "https://github.com/navzyy/Triptrix-website.git"
    }



]





export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary">Projects
                    </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project, key) => (

                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">

                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>

                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.decription}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && project.demoUrl !== "#" && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                        {project.githubUrl && project.githubUrl !== "#" && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                    <div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/navzyy">
                        Check My Github <ArrowRight size={16} />
                    </a>

                </div>

            </div>

        </section>

    )
}