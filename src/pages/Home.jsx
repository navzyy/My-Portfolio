import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export const Home = () =>{
    return (
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* theme*/}
        <ThemeToggle />
        
        {/* background effect*/}
        <StarBackground />


        {/* nav bar*/}
        <Navbar />


        
        {/* main content*/}
        <main>
         <HomeSection />
         <AboutSection />
         <SkillsSection />
         <ProjectSection />
         <ContactSection />

        </main>


        {/* footer*/}
        <Footer />

    </div>
    );
};