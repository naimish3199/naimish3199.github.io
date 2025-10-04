const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "Miimansa AI",
      period: "Feb 2024 - Present",
      description: [
        "Built Financial AI Copilot using LLMs (Gemini), Python, AI Agents and vector databases, achieving 92% precision across 150+ financial reports, enabling analysts to extract critical insights in under 7 seconds while eliminating 40+ hours of weekly manual review",
        "Developed automated document processing pipeline using OCR and Large Language Models across 15+ document types, achieving 95% data extraction accuracy and accelerating clinical research by digitizing medical records",
        "Enhanced healthcare data privacy by building AI-powered de-identification system, achieving 98% accuracy across 5,000+ patient records, cutting compliance costs by 95% with results published at ACL 2024",
        "Reduced clinical protocol authoring time from weeks to hours by developing AI-assisted document writing tool (custom RAG + advanced post-processing), adopted by clinical teams to accelerate pharma trials and regulatory submissions",
      ],
      technologies: ["Python", "Large Language Models (LLMs)", "AI Agents", "Machine Learning", "Deep Learning", "Vector Databases", "Finetuning"],
    },
    {
      title: "AI Research Intern",
      company: "SHL India Pvt. Ltd.",
      period: "June 2023 - Sept 2023",
      description: [
        "Engineered data extraction pipeline using Python, Selenium, BeautifulSoup to process 10,000+ Fortune 500 earnings transcripts, enabling executive-level sentiment analysis for business intelligence teams",
        "Created AI speech assessment models for pronunciation and fluency evaluation, achieving 92% correlation with human evaluators and enabling reliable candidate assessment",
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "Deep Learning",
        "NLP",
      ],
    },
    {
      title: "MS Thesis Researcher",
      company:
        "Indian Institute of Science Education and Research (IISER), Bhopal",
      period: "Aug 2022 - May 2023",
      description: [
        "Applied unsupervised machine learning algorithms (K-means, hierarchical clustering) for crowd-based smart home requirement classification, achieving 68% F1-score and 98% reduction in manual labeling effort with research published in peer-reviewed venue",
        "Explored topic modeling and embeddings (LDA, Word2Vec, BERT) to improve classification accuracy and detect labeling inconsistencies in software requirements",
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "SQL", "BERT"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            data-testid="experience-title"
          >
            Work Experience
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="experience-description"
          >
            My professional journey and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center flex-shrink-0 relative z-10">
                    <div className="w-8 h-8 bg-primary-foreground rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card border border-card-border rounded-2xl p-6 md:p-8 hover-elevate">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3
                        className="text-xl font-bold mb-1"
                        data-testid={`job-title-${index}`}
                      >
                        {exp.title}
                      </h3>
                      <span
                        className="text-primary font-medium"
                        data-testid={`job-period-${index}`}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <h4
                      className="text-lg font-semibold text-muted-foreground mb-4"
                      data-testid={`company-${index}`}
                    >
                      {exp.company}
                    </h4>

                    <ul
                      className="list-none space-y-2 mb-6"
                      data-testid={`job-description-${index}`}
                    >
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <svg
                            className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          data-testid={`tech-${tech
                            .toLowerCase()
                            .replace(/\./g, "")}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
