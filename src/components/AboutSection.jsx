import {  Book, Code, Lightbulb } from "lucide-react";

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
                            Passionate about Software Engineering & Research and Development</h3>

                        <p className="text-muted-foreground">
                            I’m a final year BSc (Hons) Computer Science undergraduate at the University of Sri Jayewardenepura.
                             During my first two years, I studied Mathematics, Statistics, and Computer Science, and was subsequently selected for the BSc (Hons) in Computer Science program. 
                             I also hold an Higher National Diploma in Information Technology from the University of Colombo School of Computing (UCSC).  
                        </p>

                        <p className="text-muted-foreground">
                            I have hands-on experience with Object Oriented Programming, Data Structures & Algorithms, and full-stack projects. 
                            I thrive in collaborative teams, enjoy solving real-world problems, and am seeking an internship to apply my training, deepen my practical skills, and contribute to innovative solutions.

                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
                            <a href="/Naveena-Wimalarathne-CV.pdf"
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
                                    <h4 className="text-semibold text-lg"> Software Engineering</h4>
                                    <p className="text-muted-foreground">                                       
                                     Design and build reliable, accessible web applications
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
                                    <h4 className="text-semibold text-lg">Research & Development</h4>
                                    <p className="text-muted-foreground">
                                       Explore ideas, run experiments, and turn findings into working features.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>


        </section>
    )
}