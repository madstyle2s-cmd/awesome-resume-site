import { AnimatedSection } from '@/components/AnimatedSection';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saikat2s@hotmail.com',
    href: 'mailto:saikat2s@hotmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 01303136631',
    href: 'tel:+8801303136631',
  },
  {
    icon: Phone,
    label: 'Alternative',
    value: '+880 01908474286',
    href: 'tel:+8801908474286',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nikunja 2, Khilkhat, Dhaka-1229',
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-wider uppercase mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold">
              Contact <span className="gradient-text">Me</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                {info.href ? (
                  <a
                    href={info.href}
                    className="group p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:animate-pulse-glow">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="p-6 rounded-xl bg-secondary border border-border flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>

          {/* Social Links */}
          <AnimatedSection delay={400}>
            <div className="text-center">
              <p className="text-muted-foreground mb-6">Connect with me on social platforms</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-6 h-6 text-foreground" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl bg-secondary border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6 text-foreground" />
                </a>
                <a
                  href="mailto:saikat2s@hotmail.com"
                  className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center hover:opacity-90 transition-all duration-300 hover:scale-110 glow"
                >
                  <Send className="w-6 h-6 text-primary-foreground" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
