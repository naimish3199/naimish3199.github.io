const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Technology",
      period: "2017 - 2019",
      description: "Specialized in Software Engineering and Machine Learning. Graduated with distinction.",
      achievements: ["Dean's List", "Research Assistant", "Thesis on AI Applications"]
    },
    {
      degree: "Bachelor of Science in Information Technology",
      school: "State University",
      period: "2013 - 2017",
      description: "Comprehensive study of software development, databases, and system design.",
      achievements: ["Summa Cum Laude", "Programming Competition Winner", "Student Council Member"]
    }
  ];

  const certifications = [
    { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
    { name: "React Professional Certificate", issuer: "Meta", year: "2022" },
    { name: "Google Cloud Professional", issuer: "Google", year: "2021" }
  ];

  return (
    <section id="education" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="education-title">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="education-description">
            My academic background and professional certifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center" data-testid="formal-education-title">
              Formal Education
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-background border border-border rounded-2xl p-6 hover-elevate">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold mb-2" data-testid={`degree-${index}`}>
                      {edu.degree}
                    </h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-semibold text-primary" data-testid={`school-${index}`}>
                        {edu.school}
                      </span>
                      <span className="text-muted-foreground" data-testid={`period-${index}`}>
                        {edu.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4" data-testid={`description-${index}`}>
                    {edu.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold">Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-center text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span data-testid={`achievement-${index}-${achIndex}`}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center" data-testid="certifications-title">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-background border border-border rounded-xl p-6 text-center hover-elevate">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2" data-testid={`cert-name-${index}`}>
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1" data-testid={`cert-issuer-${index}`}>
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-primary font-medium" data-testid={`cert-year-${index}`}>
                    {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;