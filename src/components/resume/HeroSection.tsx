import { Mail, Phone, MapPin, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

export const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float delay-500" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-full blur-2xl opacity-30 animate-pulse-glow" />
              <img
                src={profilePhoto}
                alt="Shibly Sadik"
                className="w-48 h-48 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-primary/30 relative z-10 glow"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left flex-1">
            <p className="text-primary font-medium tracking-wider uppercase mb-4 animate-fade-up delay-100">
              Supply Chain Manager
            </p>
            <h1 className="font-display text-5xl lg:text-7xl font-bold mb-6 animate-fade-up delay-200">
              Shibly <span className="gradient-text">Sadik</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mb-8 animate-fade-up delay-300 leading-relaxed">
              Seasoned professional with extensive experience in supply chain management, 
              branch supervision, and strategic operations optimization.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-fade-up delay-400">
              <a
                href="mailto:saikat2s@hotmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground">saikat2s@hotmail.com</span>
              </a>
              <a
                href="tel:+8801303136631"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground">+880 01303136631</span>
              </a>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-secondary-foreground">Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-up delay-500">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-bg rounded-full text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 glow"
              >
                <Download className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-700">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
