const Publications = () => {
  const publications = [
    {
      title: "Building Scalable Web Applications with Modern JavaScript",
      type: "Article",
      platform: "Medium",
      date: "Dec 2023",
      description: "A comprehensive guide on building scalable web applications using React, Node.js, and microservices architecture.",
      link: "#",
      tags: ["JavaScript", "React", "Node.js", "Architecture"]
    },
    {
      title: "The Future of Frontend Development: Trends and Predictions",
      type: "Blog Post",
      platform: "Dev.to",
      date: "Oct 2023",
      description: "Exploring emerging trends in frontend development including Web3, AI integration, and new frameworks.",
      link: "#",
      tags: ["Frontend", "Web3", "AI", "Trends"]
    },
    {
      title: "Machine Learning Applications in Web Development",
      type: "Research Paper",
      platform: "IEEE Conference",
      date: "Sep 2023",
      description: "Research on integrating machine learning algorithms into web applications for enhanced user experience.",
      link: "#",
      tags: ["Machine Learning", "Web Development", "UX"]
    },
    {
      title: "CSS Grid vs Flexbox: A Practical Comparison",
      type: "Tutorial",
      platform: "YouTube",
      date: "Aug 2023",
      description: "Video tutorial comparing CSS Grid and Flexbox with practical examples and use cases.",
      link: "#",
      tags: ["CSS", "Tutorial", "Layout"]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Article':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 00-1 1v6a1 1 0 001 1v1a2 2 0 01-2-2V5zM15 5a2 2 0 00-2-2v1a1 1 0 011 1v6a1 1 0 01-1 1v1a2 2 0 002-2V5z" clipRule="evenodd" />
          </svg>
        );
      case 'Research Paper':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fillRule="evenodd" d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="publications-title">
            Publications & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="publications-description">
            My thoughts and insights shared with the developer community
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-card border border-card-border rounded-2xl p-6 hover-elevate group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {getTypeIcon(pub.type)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full" data-testid={`pub-type-${index}`}>
                        {pub.type}
                      </span>
                      <span className="text-sm text-muted-foreground" data-testid={`pub-platform-${index}`}>
                        {pub.platform}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground" data-testid={`pub-date-${index}`}>
                      {pub.date}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors" data-testid={`pub-title-${index}`}>
                    {pub.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed" data-testid={`pub-description-${index}`}>
                    {pub.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        data-testid={`pub-tag-${tag.toLowerCase().replace(' ', '-')}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                    data-testid={`pub-link-${index}`}
                    onClick={() => console.log(`Publication ${index} clicked`)}
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;