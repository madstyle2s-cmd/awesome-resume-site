import { AnimatedSection } from '@/components/AnimatedSection';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'CR (Credit Realisation)',
    company: 'Sunset Kuakata Hotel & Resort Ltd.',
    location: 'Bangladesh',
    period: 'Aug 2026 – Present',
    responsibilities: [
      'Follow up with clients on payment commitments and outstanding amounts.',
      'Monitor credit realisation and collection status.',
      'Maintain client communication and support account follow-up.',
      'Prepare and update Excel-based collection reports.',
    ],
  },
  {
    title: 'Collection Officer — Recovery and Legal Department',
    company: 'City Bank PLC',
    location: 'Bangladesh',
    period: 'Dates to be confirmed',
    responsibilities: [],
  },
  {
    title: 'Supply Chain Manager',
    company: 'Protection One Pvt. Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Mar 2024 – date to be confirmed',
    responsibilities: [
      'Coordinated procurement, sourcing and supplier communication.',
      'Supported inventory, logistics and operational reporting.',
    ],
  },
  {
    title: 'Branch Supervisor – Councilor',
    company: 'Future Track Bangladesh Education Consultancy Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2022 – Jul 2022',
    responsibilities: [
      'Supported daily branch operations and client service.',
      'Coordinated team activities and branch reporting.',
    ],
  },
  {
    title: 'Collection Manager',
    company: 'Standard Credit Collection Agency (SCCA) Ltd.',
    location: 'Dhaka, Bangladesh',
    period: 'Jan 2013 – Feb 2018',
    responsibilities: [
      'Monitored collection status and followed up on overdue accounts.',
      'Coordinated customer follow-ups and prepared recovery reports.',
    ],
  },
];

export const ExperienceSection = () => (
  <section id="experience" className="bg-background py-24 lg:py-28">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">Career journey</p>
          <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>
      </AnimatedSection>
      <div className="mx-auto max-w-4xl space-y-5">
        {experiences.map((experience, index) => (
          <AnimatedSection key={experience.company} delay={index * 90}>
            <article className="rounded-2xl border border-border bg-card p-6 transition duration-300 hover:border-primary/40 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                    <p className="mt-1 font-medium text-primary">{experience.company}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.location}</p>
                  </div>
                </div>
                <span className="whitespace-nowrap rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{experience.period}</span>
              </div>
              {experience.responsibilities.length > 0 && (
                <ul className="ml-[3.75rem] mt-5 space-y-2 text-sm leading-6 text-muted-foreground">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="list-disc pl-1">{responsibility}</li>
                  ))}
                </ul>
              )}
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
