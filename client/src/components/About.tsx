import profileImagePath from "@assets/generated_images/Professional_developer_headshot_d11a254b.png";
import AnimatedSection from './AnimatedSection';

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
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* About Content */}
          <AnimatedSection animation="fadeLeft">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="name-title">
                  Hi, I'm <span className="text-primary">Alex Johnson</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6" data-testid="role-subtitle">
                  Full Stack Developer & UI/UX Designer
                </h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="bio-text">
                I'm a passionate developer with over 5 years of experience creating beautiful, 
                functional web applications. I specialize in React, Node.js, and modern web 
                technologies, with a keen eye for design and user experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover-elevate active-elevate-2 font-medium"
                  data-testid="button-hire-me"
                  onClick={() => console.log('Hire me clicked')}
                >
                  Hire Me
                </button>
                <button 
                  className="border border-border px-6 py-3 rounded-lg hover-elevate active-elevate-2 font-medium"
                  data-testid="button-download-cv"
                  onClick={() => console.log('Download CV clicked')}
                >
                  Download CV
                </button>
              </div>

              <div className="flex space-x-6 pt-4">
                {['github', 'linkedin', 'twitter'].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 bg-card border border-card-border rounded-lg flex items-center justify-center hover-elevate active-elevate-2"
                    data-testid={`link-${social}`}
                    onClick={() => console.log(`${social} clicked`)}
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;