import profileImagePath from "@assets/generated_images/Naimish_Photo.png";
import AnimatedSection from "./AnimatedSection";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimatedSection animation="fadeRight" delay={200}>
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src={profileImagePath}
                  alt="Profile"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl"
                  data-testid="profile-image"
                />
                {/* <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div> */}
              </div>
            </div>
          </AnimatedSection>

          {/* About Content */}
          <AnimatedSection animation="fadeLeft">
            <div className="space-y-6">
              <div>
                <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  data-testid="name-title"
                >
                  Hi, I'm <span className="text-primary">Naimish Sharma</span>
                </h1>
                <h2
                  className="text-xl md:text-2xl text-muted-foreground mb-6"
                  data-testid="role-subtitle"
                >
                  Data Scientist & AI/ML Expert | IISER Bhopal Alumni
                </h2>
              </div>

              <p
                className="text-lg text-muted-foreground leading-relaxed"
                data-testid="bio-text"
              >
                I'm a developer with 2 years of experience building impactful AI products/solutions from complex data. I specialize in Python, NLP, LLMs, GenAI, Machine Learning and Deep Learning, turning advanced AI techniques into
                real-world tools that drive measurable business impact. I care
                about the full pipeline i.e. understanding requirements, building
                robust solutions, and shipping systems that scale. I thrive on
                learning fast and delivering work that matters.
              </p>

              <div className="flex space-x-8 -mt-2">
                {[
                  {
                    name: "linkedin",
                    icon: (
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    ),
                    url: "https://www.linkedin.com/in/naimishsharma/",
                  },
                  {
                    name: "github",
                    icon: (
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10" />
                    ),
                    url: "https://github.com/naimish3199",
                  },
                  {
                    name: "email",
                    icon: (
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    ),
                    url: "mailto:naimish.s2017@gmail.com",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-card border border-card-border rounded-lg flex items-center justify-center hover-elevate active-elevate-2 hover:text-primary"
                    data-testid={`link-${social.name}`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className="w-8 h-8 [color:hsl(var(--foreground))]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  className="border border-border px-6 py-3 rounded-lg hover-elevate active-elevate-2 font-medium flex items-center gap-2"
                  data-testid="button-download-cv"
                  onClick={() => console.log("Download CV clicked")}
                >
                  <Download size={20} />
                  Download Resume
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
