import { AnimatedSection } from '@/components/AnimatedSection';
import { User, Calendar, Globe } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">About Me</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              My <span className="gradient-text">Story</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="gradient-card p-8 lg:p-12 rounded-2xl border border-border card-shadow">
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                As a seasoned professional with extensive experience in supply chain management, 
                branch supervision, and collections, I bring a wealth of knowledge and a proven 
                track record of success in optimizing operations and driving business growth.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                My career has been marked by a commitment to strategic planning, process improvement, 
                and cross-functional collaboration. As a Supply Chain Manager, I have honed my skills 
                in developing and executing comprehensive supply chain strategies, fostering strong 
                supplier relationships, and implementing advanced inventory management techniques.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With a strong foundation in supply chain strategy, procurement, logistics, 
                process improvement, and data analytics, I am well-equipped to lead teams 
                and drive operational efficiency. My leadership style emphasizes teamwork, 
                continuous improvement, and a focus on achieving strategic objectives.
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <AnimatedSection delay={200}>
              <div className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-1">Date of Birth</p>
                <p className="font-semibold text-foreground">May 17, 1995</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <Globe className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-1">Nationality</p>
                <p className="font-semibold text-foreground">Bangladeshi</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <User className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-1">Experience</p>
                <p className="font-semibold text-foreground">10+ Years</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
