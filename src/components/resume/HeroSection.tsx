import { ArrowDown, Download, BriefcaseBusiness, Handshake, FileSpreadsheet } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo-approved.jpg';

const highlights = [
  { icon: BriefcaseBusiness, title: 'Credit Realisation', detail: 'Collection follow-up & account support' },
  { icon: Handshake, title: 'Client Relations', detail: 'Professional client communication' },
  { icon: FileSpreadsheet, title: 'Excel Reporting', detail: 'Tracking, analysis & reporting' },
];

export const HeroSection = () => (
  <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-[#06172d] pt-20 text-white">
    <div className="hero-cinematic-bg absolute inset-0 -z-20" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#06172d]/20 via-[#06172d]/55 to-[#06172d]/85" aria-hidden="true" />
    <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[110px]" aria-hidden="true" />
    <div className="pointer-events-none absolute -right-32 bottom-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-blue-600/20 blur-[120px]" aria-hidden="true" />

    <div className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1500px] items-center gap-8 px-5 pb-36 pt-10 sm:px-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10 lg:px-14 lg:pb-40 lg:pt-8">
      <div className="relative order-1 mx-auto flex h-full w-full max-w-[560px] items-end justify-center self-end lg:mx-0 lg:max-w-none">
        <div className="pointer-events-none absolute bottom-8 left-1/2 h-[72%] w-[82%] -translate-x-1/2 rounded-full bg-sky-400/20 blur-[90px]" />
        <div className="relative w-full max-w-[540px] overflow-hidden rounded-t-[48%] border-x border-t border-white/10 bg-gradient-to-b from-slate-100/95 via-slate-200/95 to-slate-300/70 p-1 shadow-[0_0_90px_rgba(14,165,233,0.16)] lg:rounded-t-[48%]">
          <img
            src={profilePhoto}
            alt="Portrait of Shibly Sadik"
            fetchPriority="high"
            className="relative z-10 aspect-[4/5] w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-[#071a32]/55 to-transparent" />
        </div>
      </div>

      <div className="order-2 mx-auto w-full max-w-2xl pb-8 text-center lg:mx-0 lg:pb-14 lg:text-left">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-sky-300 sm:text-sm">Hello, I’m</p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl xl:text-7xl 2xl:text-8xl">
          Shibly Sadik
        </h1>
        <p className="mt-5 text-xl font-semibold text-sky-300 sm:text-2xl xl:text-3xl">CR – Credit Realisation</p>
        <div className="my-6 h-1 w-24 rounded-full bg-sky-400 mx-auto lg:mx-0" />
        <p className="mx-auto max-w-xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-8 lg:mx-0 xl:text-xl">
          Credit Collection &amp; Recovery and Reporting
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:mx-0">
          I work across client relations, credit collection and recovery, credit realisation, and Excel-based reporting. I focus on clear communication, consistent follow-up, and organised information that supports effective decisions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
          <a href="/Shibly_Sadik_Resume.pdf" download className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500 sm:px-8 sm:py-4 sm:text-base">
            <Download className="h-5 w-5" /> Download CV
          </a>
          <a href="#about" className="inline-flex items-center gap-3 rounded-full border border-sky-200/80 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-sky-300 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-base">
            <ArrowDown className="h-4 w-4" /> Learn More
          </a>
        </div>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-0 border-y border-white/15 bg-slate-950/45 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/15 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
        {highlights.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="flex items-center justify-center gap-4 px-3 py-4 sm:justify-start sm:px-6 sm:py-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-sky-400/50 bg-sky-400/10 text-sky-200 sm:h-14 sm:w-14">
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-white sm:text-base">{title}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-300 sm:text-sm">{detail}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
