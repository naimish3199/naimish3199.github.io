const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Led development of enterprise web applications using React, Node.js, and AWS. Managed a team of 4 developers and improved system performance by 40%.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built responsive web applications and collaborated with design team to create intuitive user interfaces. Implemented modern development practices and increased user engagement by 60%.",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "Firebase"]
    },
    {
      title: "Junior Web Developer",
      company: "WebSolutions Ltd.",
      period: "2019 - 2020",
      description: "Developed and maintained client websites using modern web technologies. Gained experience in full-stack development and agile methodologies.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="experience-title">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="experience-description">
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
                      <h3 className="text-xl font-bold mb-1" data-testid={`job-title-${index}`}>
                        {exp.title}
                      </h3>
                      <span className="text-primary font-medium" data-testid={`job-period-${index}`}>
                        {exp.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-muted-foreground mb-4" data-testid={`company-${index}`}>
                      {exp.company}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`job-description-${index}`}>
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          data-testid={`tech-${tech.toLowerCase().replace(/\./g, '')}`}
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