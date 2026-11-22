import { AnimatedSection } from '@/components/AnimatedSection';
import { MessageCircle, ClipboardList, FileSpreadsheet } from 'lucide-react';

const focusAreas = [
  { icon: MessageCircle, title: 'Client Relations', detail: 'Professional client communication, relationship management and consistent follow-up.' },
  { icon: ClipboardList, title: 'Credit Collection & Recovery', detail: 'Outstanding account monitoring, payment commitment follow-up and credit realisation support.' },
  { icon: FileSpreadsheet, title: 'Sound Knowledge of Microsoft Excel', detail: 'Using Excel to organise data, track collection performance and prepare clear reports.' },
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
              I am a client relations and credit recovery professional with hands-on experience across banking, credit collection and business operations. My experience includes managing client communication, following up on outstanding accounts, monitoring payment commitments and supporting credit realisation.
            </p>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              I bring sound knowledge of Microsoft Excel for organising data, preparing reports and monitoring collection performance. I combine a client-focused approach with practical recovery experience, analytical ability and a strong sense of responsibility.
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
