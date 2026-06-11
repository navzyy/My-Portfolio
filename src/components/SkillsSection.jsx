import { useState } from "react";
import { cn } from "../lib/utils";




const skills = [

  // AI / ML
  { name: "Machine Learning", level: 90, category: "ai-ml" },
  { name: "NLP", level: 75, category: "ai-ml" },
  { name: "Computer Vision", level: 75, category: "ai-ml" },
  { name: "RAG", level: 95, category: "ai-ml" },
  { name: "LLMs", level: 80, category: "ai-ml" },
  { name: "LangChain", level: 75, category: "ai-ml" },
  { name: "YOLO", level: 75, category: "ai-ml" },
  { name: "Scikit-learn", level: 80, category: "ai-ml" },
  { name: "TensorFlow", level: 65, category: "ai-ml" },
  { name: "OpenCV", level: 75, category: "ai-ml" },
  { name: "RAGAS", level: 75, category: "ai-ml" },
  { name: "DeepEval", level: 75, category: "ai-ml" },

  // Data Science
  { name: "Python", level: 90, category: "data-science" },
  { name: "R", level: 60, category: "data-science" },
  { name: "Pandas", level: 85, category: "data-science" },
  { name: "NumPy", level: 85, category: "data-science" },
  { name: "Matplotlib", level: 80, category: "data-science" },
  { name: "Jupyter Notebook", level: 85, category: "data-science" },
  { name: "Google Colab", level: 85, category: "data-science" },
  { name: "MATLAB", level: 80, category: "data-science" },
  { name: "Minitab", level: 90, category: "data-science" },
  { name: "GNU Octave", level: 80, category: "data-science" },
  { name: "SPSS", level: 75, category: "data-science" },

  // Big Data
  { name: "Hadoop", level: 70, category: "big-data" },
  { name: "HDFS", level: 70, category: "big-data" },
  { name: "MapReduce", level: 65, category: "big-data" },
  { name: "PySpark", level: 75, category: "big-data" },
  { name: "Tableau", level: 70, category: "big-data" },
  { name: "SSRS", level: 70, category: "big-data" },

  // Frontend
  { name: "HTML", level: 95, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "React", level: 70, category: "frontend" },
  { name: "Figma", level: 60, category: "frontend" },
  { name: "Thymeleaf", level: 60, category: "frontend" },

  // Backend
  { name: "Java", level: 80, category: "backend" },
  { name: "C", level: 70, category: "backend" },
  { name: "Spring Boot", level: 70, category: "backend" },
  { name: "Flask", level: 70, category: "backend" },
  { name: "FastAPI", level: 80, category: "backend" },
  { name: "SQLAlchemy", level: 70, category: "backend" },

  // Databases
  { name: "MySQL", level: 85, category: "databases" },
  { name: "MongoDB", level: 70, category: "databases" },
  { name: "Neo4j", level: 60, category: "databases" },

  // Tools
  { name: "VS Code", level: 95, category: "tools" },
  { name: "IntelliJ IDEA", level: 70, category: "tools" },
  { name: "NetBeans", level: 85, category: "tools" },
  { name: "Eclipse", level: 60, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Git", level: 85, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "GitLab", level: 70, category: "tools" },
  { name: "Jenkins", level: 70, category: "tools" },
  { name: "Postman", level: 95, category: "tools" },
  { name: "SonarQube", level: 60, category: "tools" },
  { name: "Selenium", level: 70, category: "tools" },
  { name: "XAMPP", level: 95, category: "tools" }
];

const categories = [
  "all",
  "ai-ml",
  "data-science",
  "big-data",
  "frontend",
  "backend",
  "databases",
  "tools"
];

export const SkillsSection = () => {
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
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActivateCategory(category)}
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
          {filteredSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}

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