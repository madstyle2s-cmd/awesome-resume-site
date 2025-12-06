import { Navigation } from '@/components/resume/Navigation';
import { HeroSection } from '@/components/resume/HeroSection';
import { AboutSection } from '@/components/resume/AboutSection';
import { ExperienceSection } from '@/components/resume/ExperienceSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { ContactSection } from '@/components/resume/ContactSection';
import { Footer } from '@/components/resume/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
