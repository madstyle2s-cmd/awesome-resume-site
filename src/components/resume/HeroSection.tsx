import { Download, ArrowDown, BriefcaseBusiness, Handshake, FileSpreadsheet } from 'lucide-react';
import profilePhoto from '@/assets/Profile_Photo.jpg';

const highlights = [
  { icon: BriefcaseBusiness, value: '5+ Years', label: 'Professional Experience' },
  { icon: Handshake, value: 'Client Focus', label: 'Relations & Recovery' },
  { icon: FileSpreadsheet, value: 'Excel', label: 'Reporting & Analysis' },
];

export const HeroSection = () => (
  <section id="home" className="relative isolate flex min-h-screen flex-col overflow-hidden bg-background pt-16 sm:pt-20">
    <div className="hero-atmosphere absolute inset-0 -z-20" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 opacity-40" aria-hidden="true">
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-blue-600/30 blur-[120px]" />
      <div className="absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-sky-500/15 blur-[140px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 via-slate-950/10 to-slate-950/70" />
    </div>

    <div className="container mx-auto flex flex-1 items-center px-5 py-10 sm:px-6 lg:py-12">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        <div className="relative mx-auto w-full max-w-[310px] sm:max-w-[390px] lg:mx-0 lg:max-w-none">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-primary/15 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/15 bg-slate-100 shadow-2xl shadow-black/40 sm:rounded-[2.2rem]">
            <img
              src={profilePhoto}
              alt="Portrait of Shibly Sadik"
              fetchPriority="high"
              className="aspect-[4/5] w-full object-cover object-center lg:aspect-[0.88/1]"
            />
          </div>
          <div className="absolute -bottom-4 right-2 z-10 rounded-xl border border-white/15 bg-slate-950/90 px-4 py-2.5 shadow-xl backdrop-blur-md sm:-right-5 sm:px-5 sm:py-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-[10px]">Professional focus</p>
            <p className="mt-1 text-xs font-semibold text-white sm:text-sm">Client Relations &amp; Credit Recovery</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-sky-300 sm:mb-5 sm:text-sm">Hello, I’m</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Shibly <span className="gradient-text">Sadik</span>
          </h1>
          <p className="mt-5 text-base font-semibold leading-relaxed text-sky-200 sm:text-xl xl:text-2xl">
            CR – Credit Realisation
          </p>
          <p className="mt-1 text-sm font-medium leading-relaxed text-slate-200 sm:text-base xl:text-lg">
            Credit Collection &amp; Recovery and Reporting
          </p>
          <div className="mt-6 h-1 w-20 rounded-full bg-primary sm:mt-8 lg:mt-9" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-200/90 sm:text-base sm:leading-8 xl:text-lg lg:mx-0">
            I specialise in client relations, credit collection and recovery, and credit realisation. I bring sound knowledge of Microsoft Excel to organise information, monitor collection progress, and prepare clear reports that support informed decisions and effective follow-up.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-9 sm:gap-4 lg:justify-start">
            <a href="/Shibly_Sadik_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:brightness-110 sm:px-8 sm:py-4 sm:text-base">
              <Download className="h-5 w-5" /> View My CV
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-sky-200/70 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-primary hover:bg-white/5 sm:px-8 sm:py-4 sm:text-base">
              <ArrowDown className="h-4 w-4" /> Learn More
            </a>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-300/85 sm:mt-9 sm:gap-x-7 sm:text-sm lg:justify-start">
            <span>Dhaka, Bangladesh</span>
            <a className="transition hover:text-primary" href="mailto:saikat2s@hotmail.com">saikat2s@hotmail.com</a>
            <a className="transition hover:text-primary" href="tel:+8801303136631">+880 1303-136631</a>
          </div>
        </div>
      </div>
    </div>

    <div className="relative border-t border-white/15 bg-slate-950/35 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/15 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
        {highlights.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center justify-center gap-4 py-5 sm:py-6 lg:py-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sky-200 sm:h-14 sm:w-14">
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <span className="text-left">
              <span className="block text-lg font-bold text-white sm:text-xl">{value}</span>
              <span className="mt-0.5 block text-xs text-slate-300 sm:text-sm">{label}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
