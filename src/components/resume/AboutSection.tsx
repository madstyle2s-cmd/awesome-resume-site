import { AnimatedSection } from '@/components/AnimatedSection';
import { MessageCircle, ClipboardList, FileSpreadsheet } from 'lucide-react';

const focusAreas = [
  { icon: MessageCircle, title: 'Client Relations', detail: 'Clear communication, relationship management and consistent client follow-up.' },
  { icon: ClipboardList, title: 'Credit Recovery & Realisation', detail: 'Outstanding account monitoring, payment follow-up and recovery coordination.' },
  { icon: FileSpreadsheet, title: 'Excel Reporting', detail: 'Organised data handling, collection tracking and practical Excel-based reports.' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-card py-24 lg:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-primary">A little about me</p>
            <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">
              Professional <span className="gradient-text">Profile</span>
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-secondary/70 p-7 shadow-2xl shadow-black/10 sm:p-10 lg:p-12">
            <p className="text-lg leading-8 text-muted-foreground">
              I am a client-focused professional with experience in credit recovery and realisation, client relationship management and operational reporting. My work involves communicating with clients, following up on outstanding accounts, monitoring payment commitments and maintaining clear, accurate records.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I value practical problem-solving, professional communication and disciplined follow-through. I use Microsoft Excel to organise information, track collection progress and prepare reports that help teams understand account status and take timely action.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              My experience across recovery, client service and business operations has helped me develop an adaptable approach to working with people, information and day-to-day responsibilities.
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-3">
          {focusAreas.map((item, index) => (
            <AnimatedSection key={item.title} delay={150 + index * 100}>
              <div className="h-full rounded-2xl border border-border bg-background/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
                <item.icon className="mb-5 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.detail}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
