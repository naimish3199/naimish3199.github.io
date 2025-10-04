import AnimatedSection from "./AnimatedSection";

interface SkillCategory {
  icon: string;
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: "🐍",
      title: "Programming & Data Analysis",
      skills: [
        "Python",
        "SQL",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Jupyter",
      ],
    },
    {
      icon: "🧠",
      title: "Machine Learning",
      skills: [
        "Classification",
        "Clustering",
        "Regression",
        "scikit-learn",
        "SVM",
        "Random Forest",
        "XGBoost",
        "Model Evaluation",
      ],
    },
    {
      icon: "🎯",
      title: "Deep Learning",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Neural Networks",
        "CNNs",
        "RNNs",
        "LSTMs",
        "Fine-tuning",
        "Transfer Learning",
      ],
    },
    {
      icon: "🤖",
      title: "NLP & LLMs",
      skills: [
        "Hugging Face",
        "Transformers",
        "NLTK",
        "RAG",
        "Prompt Engineering",
        "LangChain",
        "LangGraph",
        "LangSmith",
        "Vector Databases (ChromaDB, Milvus)",
        "OpenAI API",
      ],
    },
    {
      icon: "🤖",
      title: "Statistics & Experimentation",
      skills: [
        "Statistics",
        "Linear Algebra",
        "Hypothesis Testing",
        "A/B Testing",
        "Model Evaluation",
      ],
    },
    {
      icon: "🛠️",
      title: "Development & Deployment",
      skills: [
        "FastAPI",
        "Flask",
        "Streamlit",
        "Docker",
        "AWS",
        "MLOps",
        "Git",
        "Linux",
        "MLflow",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="skills-title"
          >
            Skills & Expertise
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="skills-description"
          >
            Technologies and tools I work with
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 100}
              >
                <div className="bg-background border border-border rounded-2xl p-6 skill-category hover:bg-card/50 h-full">
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2 [color:hsl(var(--foreground))]"
                    data-testid={`category-${index}`}
                  >
                    <span className="text-2xl [color:hsl(var(--foreground))]">
                      {category.icon}
                    </span>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                        data-testid={`skill-${index}-${skillIndex}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
