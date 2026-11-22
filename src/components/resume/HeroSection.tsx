import { Download, ArrowDown } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo-approved.jpg';

export const HeroSection = () => (
  <section className="relative overflow-hidden bg-background pt-20 sm:pt-24 lg:min-h-screen">
    <div className="hero-atmosphere absolute inset-0" aria-hidden="true" />
    <div className="container relative z-10 mx-auto flex items-center px-5 py-9 sm:px-6 sm:py-12 lg:min-h-[calc(100vh-5rem)] lg:py-16">
      <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[minmax(280px,0.82fr)_minmax(0,1.18fr)] lg:gap-14 xl:gap-20">
        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-xs lg:max-w-[390px] lg:mx-0">
          <div className="absolute -inset-3 rounded-[1.8rem] border border-primary/20 sm:-inset-4 sm:rounded-[2rem]" />
          <div className="absolute -inset-6 rounded-[2.2rem] bg-primary/10 blur-3xl" />
          <img src={profilePhoto} alt="Portrait of Shibly Sadik" fetchPriority="high"
            className="relative z-10 aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover object-center brightness-[0.94] shadow-2xl sm:rounded-[1.5rem]" />
          <div className="absolute -bottom-4 right-2 z-20 max-w-[90%] rounded-xl border border-white/10 bg-slate-950/90 px-4 py-2.5 shadow-xl backdrop-blur sm:-right-4 sm:px-5 sm:py-3">
            <p className="text-[9px] uppercase tracking-[0.18em] text-primary sm:text-xs">Professional focus</p>
            <p className="mt-1 text-xs font-semibold text-white sm:text-sm">Client Relations &amp; Credit Recovery</p>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:mb-5 sm:text-sm">Hello, I’m</p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl xl:text-7xl">
            Shibly <span className="gradient-text">Sadik</span>
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-sky-200 sm:mt-6 sm:text-xl xl:text-2xl">
            <span className="block">CR – Credit Realisation</span>
            <span className="mt-1 block text-sm font-medium leading-relaxed text-sky-100 sm:mt-2 sm:text-base xl:text-lg">Credit Collection &amp; Recovery and Reporting</span>
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 xl:text-lg">
            I work in client relations, credit collection and recovery, and credit realisation. I bring sound knowledge of Microsoft Excel for organising information, tracking collection progress and preparing clear reports that support day-to-day decisions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-9 sm:gap-4 lg:justify-start">
            <a href="/Shibly_Sadik_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:brightness-110 sm:gap-3 sm:px-7 sm:py-4 sm:text-base">
              <Download className="h-4 w-4 sm:h-5 sm:w-5" /> Download CV
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary sm:px-7 sm:py-4 sm:text-base">
              Explore Profile <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:mt-10 sm:gap-x-7 sm:text-sm lg:justify-start">
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
