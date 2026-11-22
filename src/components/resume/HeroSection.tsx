import { Download, ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24">
      <div className="absolute inset-0 hero-atmosphere" aria-hidden="true" />
      <div className="absolute left-0 top-1/4 h-72 w-24 bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] items-center px-6 py-12 lg:py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md animate-fade-up lg:mx-0">
            <div className="absolute -inset-4 rounded-[2rem] border border-primary/20" />
            <div className="absolute -inset-8 rounded-[2.5rem] bg-primary/10 blur-3xl" />
            <img
              src={profilePhoto}
              alt="Portrait of Shibly Sadik"
              className="relative z-10 aspect-[4/5] w-full rounded-[1.5rem] border border-white/10 object-cover object-center brightness-[0.94] shadow-2xl"
            />
            <div className="absolute -bottom-5 -right-4 z-20 rounded-xl border border-white/10 bg-slate-950/90 px-5 py-3 shadow-xl backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-primary">Professional focus</p>
              <p className="mt-1 text-sm font-semibold text-white">Client Relations & Credit Recovery</p>
            </div>
          </div>

          <div className="max-w-2xl text-center lg:text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-primary">Hello, I’m</p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Shibly <span className="gradient-text">Sadik</span>
            </h1>
            <p className="mt-6 text-xl font-medium leading-relaxed text-sky-200 sm:text-2xl">
              <span className="block">CR – Credit Realisation</span>
              <span className="mt-2 block text-base font-medium leading-relaxed text-sky-100 sm:text-lg">Credit Collection &amp; Recovery and Reporting</span>
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-muted-foreground lg:mx-0 lg:text-lg">
              I work in client relations, credit collection and recovery, and credit realisation. I bring sound knowledge of Microsoft Excel for organising information, tracking collection progress and preparing clear reports that support day-to-day decisions.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
              <a href="/Shibly_Sadik_Resume.pdf" download className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:brightness-110">
                <Download className="h-5 w-5" /> Download CV
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-semibold text-foreground transition hover:border-primary hover:text-primary">
                Explore Profile <ArrowDown className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-muted-foreground lg:justify-start">
              <span>Dhaka, Bangladesh</span>
              <a className="transition hover:text-primary" href="mailto:saikat2s@hotmail.com">saikat2s@hotmail.com</a>
              <a className="transition hover:text-primary" href="tel:+8801303136631">+880 1303-136631</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};
