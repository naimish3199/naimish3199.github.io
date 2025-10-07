import AnimatedSection from "./AnimatedSection";
import {
  BarChart3,
  Calculator,
  FlaskConical,
  Network,
  Layers,
  Brain,
  Microscope,
  Grid3x3,
  TreePine,
  Database,
  Sparkles,
  Settings,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; icon: string | React.ReactNode }[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      icon: <Network className="w-6 h-6" />,
      title: "Programming & Data Analysis",
      skills: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
        },
        {
          name: "NumPy",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
        },
        {
          name: "Pandas",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
        },
        {
          name: "Matplotlib",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
        },
        {
          name: "Seaborn",
          icon: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
        },
        {
          name: "Jupyter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
        },
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      skills: [
        {
          name: "Classification",
          icon: <Grid3x3 className="w-4 h-4" />,
        },
        {
          name: "Clustering",
          icon: <Network className="w-4 h-4" />,
        },
        {
          name: "Regression",
          icon: <BarChart3 className="w-4 h-4" />,
        },
        {
          name: "scikit-learn",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
        },
        {
          name: "SVM",
          icon: <Layers className="w-4 h-4" />,
        },
        {
          name: "Random Forest",
          icon: <TreePine className="w-4 h-4" />,
        },
        {
          name: "XGBoost",
          icon: "https://raw.githubusercontent.com/dmlc/dmlc.github.io/master/img/logo-m/xgboost.png",
        },
        {
          name: "Model Evaluation",
          icon: <CheckCircle2 className="w-4 h-4" />,
        },
      ],
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Deep Learning",
      skills: [
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        },
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
        },
        {
          name: "Neural Networks",
          icon: <Network className="w-4 h-4" />,
        },
        {
          name: "CNNs",
          icon: <Grid3x3 className="w-4 h-4" />,
        },
        {
          name: "RNNs",
          icon: <Layers className="w-4 h-4" />,
        },
        {
          name: "LSTMs",
          icon: <Brain className="w-4 h-4" />,
        },
        {
          name: "Fine-tuning",
          icon: <Settings className="w-4 h-4" />,
        },
        {
          name: "Transfer Learning",
          icon: <Microscope className="w-4 h-4" />,
        },
      ],
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "NLP & LLMs",
      skills: [
        {
          name: "Hugging Face",
          icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        },
        {
          name: "Transformers",
          icon: <Network className="w-4 h-4" />,
        },
        {
          name: "NLTK",
          icon: <BookOpen className="w-4 h-4" />,
        },
        {
          name: "RAG",
          icon: <Database className="w-4 h-4" />,
        },
        {
          name: "Prompt Engineering",
          icon: <Sparkles className="w-4 h-4" />,
        },
        {
          name: "LangChain",
          icon: "https://python.langchain.com/img/favicon.ico",
        },
        {
          name: "LangGraph",
          icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langgraph-color.png",
        },
        {
          name: "LangSmith",
          icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/langsmith-color.png",
        },
        {
          name: "Vector Databases",
          icon: <Database className="w-4 h-4" />,
        },
        {
          name: "OpenAI API",
          icon: "https://openai.com/favicon.ico",
        },
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Statistics & Experimentation",
      skills: [
        {
          name: "Statistics",
          icon: <BarChart3 className="w-4 h-4" />,
        },
        {
          name: "Linear Algebra",
          icon: <Calculator className="w-4 h-4" />,
        },
        {
          name: "Hypothesis Testing",
          icon: <FlaskConical className="w-4 h-4" />,
        },
        {
          name: "A/B Testing",
          icon: <FlaskConical className="w-4 h-4" />,
        },
        {
          name: "Model Evaluation",
          icon: <CheckCircle2 className="w-4 h-4" />,
        },
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Development & Deployment",
      skills: [
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Flask",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
        },
        {
          name: "Streamlit",
          icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        },
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "MLOps",
          icon: <Settings className="w-4 h-4" />,
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        },
        {
          name: "MLflow",
          icon: "https://raw.githubusercontent.com/mlflow/mlflow/master/assets/logo.svg",
        },
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
                <div className="bg-background border border-border rounded-2xl p-6 hover-elevate h-full">
                  <h3
                    className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground"
                    data-testid={`category-${index}`}
                  >
                    <span className="text-primary">{category.icon}</span>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default flex items-center gap-1.5"
                        data-testid={`skill-${index}-${skillIndex}`}
                      >
                        {typeof skill.icon === "string" ? (
                          <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className="w-4 h-4 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        ) : (
                          skill.icon
                        )}
                        {skill.name}
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
