import { AnimatedSection } from '@/components/AnimatedSection';
import { Code, Briefcase, MessageSquare, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical Skills',
    icon: Code,
    skills: ['Microsoft Excel', 'Microsoft PowerPoint', 'Microsoft Word', 'OpenAI Tools', 'Data Analytics'],
  },
  {
    title: 'Professional Skills',
    icon: Briefcase,
    skills: [
      'Supply Chain Strategy',
      'Procurement & Sourcing',
      'Inventory Management',
      'Logistics & Distribution',
      'Process Improvement',
      'Risk Management',
    ],
  },
  {
    title: 'Soft Skills',
    icon: MessageSquare,
    skills: [
      'Strategic Business Development',
      'Relationship Management',
      'Team Leadership',
      'Cross-functional Collaboration',
      'Excellent Communication',
    ],
  },
  {
    title: 'Core Strengths',
    icon: Lightbulb,
    skills: [
      'Market Analysis & Research',
      'Client Acquisition & Retention',
      'Negotiation & Closing',
      'Adaptability & Innovation',
      'Results-Driven Approach',
    ],
  },
];

const languages = [
  { name: 'Bengali', level: 'Native', percentage: 100 },
  { name: 'English', level: 'Proficient', percentage: 85 },
  { name: 'Hindi', level: 'Conversational', percentage: 70 },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">Expertise</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Skills & <span className="gradient-text">Competencies</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="h-full gradient-card p-6 lg:p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-shadow group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Languages */}
        <AnimatedSection delay={400}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Language <span className="gradient-text">Proficiency</span>
            </h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-muted-foreground text-sm">{lang.level}</span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out group-hover:glow"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
