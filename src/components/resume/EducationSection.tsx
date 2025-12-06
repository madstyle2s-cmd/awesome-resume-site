import { AnimatedSection } from '@/components/AnimatedSection';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc. in Electrical and Electronics Engineering',
    institution: 'Institute Of Science Trade and Technology',
    location: 'Dhaka, Bangladesh',
    period: '2012 – 2016',
  },
  {
    degree: 'Higher Secondary Certificate (HSC) in Science',
    institution: 'Phultala M. M. College',
    location: 'Khulna, Bangladesh',
    period: '2010 – 2012',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Phultala Re-Union High School & College',
    location: 'Khulna, Bangladesh',
    period: '2010',
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">Academic Background</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Education & <span className="gradient-text">Training</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {education.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="group p-6 lg:p-8 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] card-shadow">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                        <GraduationCap className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground/70">{edu.location}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Award className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
                    </div>
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
