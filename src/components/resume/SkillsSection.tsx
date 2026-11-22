import { AnimatedSection } from '@/components/AnimatedSection';
import { MessageSquare, ClipboardCheck, FileSpreadsheet, Briefcase } from 'lucide-react';

const skillCategories = [
  {
    title: 'Core Skills',
    icon: MessageSquare,
    skills: ['Client Relations', 'Client Communication', 'Relationship Management', 'Client Follow-up'],
  },
  {
    title: 'Credit Recovery & Realisation',
    icon: ClipboardCheck,
    skills: ['Collection Follow-up', 'Outstanding Account Monitoring', 'Payment Commitment Tracking', 'Recovery Coordination'],
  },
  {
    title: 'Excel Reporting',
    icon: FileSpreadsheet,
    skills: ['Microsoft Excel', 'Collection Reports', 'Data Cleaning & Organisation', 'Status-wise Reporting'],
  },
  {
    title: 'Additional Experience',
    icon: Briefcase,
    skills: ['Sales Support', 'Customer Service', 'Operational Coordination'],
  },
];

const languages = [
  { name: 'Bengali', level: 'Native' },
  { name: 'English', level: 'Working proficiency' },
  { name: 'Hindi', level: 'Conversational' },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="bg-background py-24 lg:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">What I bring</p>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 transition duration-300 hover:border-primary/40">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={450}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-7">
            <h3 className="mb-5 text-center text-xl font-semibold text-foreground">Languages</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {languages.map((language) => (
                <div key={language.name} className="text-center">
                  <p className="font-semibold text-foreground">{language.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
