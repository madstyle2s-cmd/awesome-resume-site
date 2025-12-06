import { AnimatedSection } from '@/components/AnimatedSection';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Supply Chain Manager',
    company: 'Protection One Pvt. Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Mar 2024 – Present',
    website: 'protectionone.com.bd',
    responsibilities: [
      'Strategic Planning and Execution',
      'Supplier Relationship Management',
      'Inventory Optimization',
      'Process Improvement & Data Analysis',
      'Cross-Functional Collaboration',
      'Risk Management & Sustainability Initiatives',
      'Team Leadership and Development',
    ],
    achievements: [
      'Achieved significant cost reduction',
      'Improved on-time delivery rates',
      'Enhanced supplier performance metrics',
      'Integrated sustainability practices',
    ],
  },
  {
    title: 'Branch Supervisor - Councilor',
    company: 'Future Track Bangladesh Education Consultancy Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2022 – Jul 2022',
    responsibilities: [
      'Managed daily operations ensuring policy adherence',
      'Led and motivated team to enhance productivity',
      'Provided personalized client services',
      'Contributed to business growth through strategic partnerships',
      'Implemented successful marketing initiatives',
      'Prepared reports on branch performance metrics',
    ],
  },
  {
    title: 'Collection Manager',
    company: 'Standard Credit Collection Agency (SCCA) Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2013 – Feb 2018',
    responsibilities: [
      'Gathered and monitored collection status of credit files',
      'Conducted regular receivable follow-ups',
      'Managed critical customer visits across Bangladesh',
      'Prepared monthly reports on overdue recovery status',
      'Achieved timely overdue collections through client motivation',
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">Career Path</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {experiences.map((exp, index) => (
              <AnimatedSection
                key={index}
                delay={index * 150}
                animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}
              >
                <div className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-bg glow z-10" />

                  {/* Content */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className="gradient-card p-6 lg:p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-shadow">
                      <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                      <p className="text-primary font-medium mb-1">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                      {exp.website && (
                        <a
                          href={`https://${exp.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 text-sm text-primary hover:underline mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          {exp.website}
                        </a>
                      )}

                      <ul className={`space-y-2 text-muted-foreground text-sm ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                        {exp.responsibilities.slice(0, 5).map((resp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.achievements && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-xs uppercase tracking-wider text-primary mb-2">Key Achievements</p>
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                            {exp.achievements.map((achievement, i) => (
                              <span key={i} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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
