import { Bot, Code, Lightbulb } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>


                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate about AI/ML Engineering, Data Science& Research and Development</h3>

                        <p className="text-muted-foreground">
                            I am a BSc (Hons) in Computer Science graduate from the University of Sri Jayewardenepura, with a strong academic foundation in Computer Science, Statistics, and Mathematics.
                            I also hold a Higher National Diploma in Information Technology from the University of Colombo School of Computing (UCSC).
                        </p>

                        <p className="text-muted-foreground">
                            I worked as a Big Data and Data Science Intern at Mobitel, where I gained hands-on exposure to Hadoop, PySpark, telecom data processing, AI-assisted enterprise systems, computer vision workflows, RAG-based chatbot development, LLM-powered applications, and business intelligence reporting.
                            I enjoy solving real-world problems, building intelligent applications, and working in collaborative teams. I am currently seeking opportunities in Associate AI/ML Engineering, Data Science and Research & Development.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href="/Naveena Wimalarathne_CV.pdf"
                                download="Naveena_Wimalarathne_CV.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg"> AI/ML Engineering</h4>
                                    <p className="text-muted-foreground">
                                        Build intelligent systems using machine learning, NLP, computer vision, RAG, and LLM-based workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Lightbulb className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-semibold text-lg">Data Science</h4>
                                    <p className="text-muted-foreground">
                                        Analyze data, build predictive models, generate insights, and support data-driven decision-making using statistical and machine learning techniques.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Bot className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-semibold text-lg"> Research & Development</h4>
                                        <p className="text-muted-foreground">
                                            Explore ideas, run experiments, evaluate solutions, and turn findings into practical systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section>
    )
}