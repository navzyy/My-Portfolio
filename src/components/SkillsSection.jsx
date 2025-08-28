import { useState } from "react";
import { cn } from "../lib/utils";




const skills = [

     //frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 50, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  
  

  // Backend
  { name: "Python", level: 75, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "R", level: 60, category: "backend" },
  { name: "C", level: 70, category: "backend" },
  { name: "SpringBoot", level: 70, category: "backend" },
  { name: "Flask", level: 60, category: "backend" },
  { name: "Thymleaf", level: 60, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 85, category: "backend" },
  { name: "Neo4j", level: 60, category: "backend" },


  // Tools
  { name: "IntelliJ IDEA", level: 70, category: "tools" },
  { name: "NetBeans", level: 85, category: "tools" },
  { name: "Eclispe", level: 60, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Jupyter Notebook", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "GitLab", level: 70, category: "tools" },
  { name: "Jenkins", level: 70, category: "tools" },
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Postman", level: 95, category: "tools" },
  { name: "SonarQube", level: 60, category: "tools" },
  { name: "Selenium", level:70, category: "tools" },
  { name: "XAMPP", level: 95, category: "tools" },
  { name: "GNU Octave", level: 90, category: "tools" },
  { name: "MATLAB", level: 80, category: "tools" },
  { name: "Minitab", level: 95, category: "tools" },
  { name: "SPSS", level: 75, category: "tools" },
  { name: "Figma", level: 60, category: "tools" },
  
];

const categories=["all", "frontend","backend","tools"]

export const SkillsSection = ()=>{
    const [activeCategory, setActivateCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );


    

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category,key)=>(
                <button
                key={key}
                onClick={()=> setActivateCategory(category)}
                className={cn(
                "px-5 py-2 rounded-full transitio-colors duration-300 capitalize",
                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}
                >
                  {category}
                </button>


              ))}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key)=>(
                  <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                  <div className="text-left mb-4">
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                  style={{width:skill.level + "%"}}
                  
                  />     
                  </div>
                  <div className="text-right mt-1"> 
                    <span className="text-sm text=muted-foreground">{skill.level}%</span>
                  </div>
                  </div>

  

                ))}

            </div>
        </div>

    </section>
    )
}