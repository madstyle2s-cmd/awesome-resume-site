import { ArrowDown, Download, BriefcaseBusiness, Handshake, FileSpreadsheet } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo-approved.jpg';

const highlights = [
  { icon: BriefcaseBusiness, value: '5+', title: 'Years Experience' },
  { icon: Handshake, value: 'Client', title: 'Relations' },
  { icon: FileSpreadsheet, value: 'Excel', title: 'Reporting' },
];

export const HeroSection = () => (
  <section id="home" className="hero-reference relative isolate min-h-[100svh] overflow-hidden text-white">
    <div className="hero-office absolute inset-0 -z-30" aria-hidden="true" />
    <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,17,36,.12)_0%,rgba(4,24,48,.34)_46%,rgba(3,17,36,.72)_100%)]" aria-hidden="true" />
    <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(2,14,30,.52)_0%,transparent_22%,transparent_72%,rgba(2,14,30,.48)_100%)]" aria-hidden="true" />
    <div className="pointer-events-none absolute -left-24 top-28 -z-10 h-[32rem] w-[32rem] -skew-x-12 bg-gradient-to-br from-blue-600/25 to-transparent blur-2xl" aria-hidden="true" />

    <div className="mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 items-center px-5 pb-48 pt-28 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-3 lg:px-12 lg:pb-36 lg:pt-24 xl:px-16">
      <div className="relative order-2 flex h-full min-h-[360px] items-end justify-center lg:order-1 lg:min-h-[calc(100svh-9rem)] lg:justify-start">
        <div className="pointer-events-none absolute bottom-10 left-1/2 h-2/3 w-4/5 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[100px] lg:left-1/3" />
        <img
          src={profilePhoto}
          alt="Shibly Sadik"
          fetchPriority="high"
          className="hero-portrait relative z-10 max-h-[76svh] w-full max-w-[760px] object-contain object-bottom lg:absolute lg:bottom-0 lg:left-[-4.5rem] lg:max-h-[82svh] lg:w-[112%] lg:max-w-none lg:object-contain lg:object-bottom"
        />
      </div>

      <div className="relative z-20 order-1 mx-auto w-full max-w-2xl pb-8 text-center lg:order-2 lg:mx-0 lg:pb-10 lg:pl-2 lg:text-left">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.34em] text-sky-300 sm:text-base">Hello, I’m</p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl xl:text-7xl 2xl:text-[5.8rem]">
          Shibly Sadik
        </h1>
        <p className="mt-5 text-lg font-semibold text-sky-300 sm:text-2xl xl:text-[1.7rem]">Professional | Business Minded | Goal Oriented</p>
        <div className="my-7 h-1 w-28 rounded-full bg-sky-400 mx-auto lg:mx-0" />
        <p className="max-w-xl text-lg leading-[1.65] text-slate-200 sm:text-xl xl:text-[1.7rem]">
          With a strong background in client relations, credit collection and recovery, and credit realisation, I am committed to delivering reliable service and results.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
          <a href="/Shibly_Sadik_Resume.pdf" download className="inline-flex min-w-[210px] items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_10px_35px_rgba(0,105,255,.3)] transition hover:-translate-y-0.5 hover:bg-blue-500">
            <Download className="h-5 w-5" /> View My CV
          </a>
          <a href="#about" className="inline-flex min-w-[210px] items-center justify-center gap-3 rounded-full border-2 border-sky-100/90 px-8 py-4 text-base font-semibold text-white transition hover:border-sky-300 hover:bg-white/10">
            <span className="text-xl leading-none">▶</span> Learn More
          </a>
        </div>
      </div>
    </div>

    <div className="absolute inset-x-0 bottom-0 z-30 border-y border-white/20 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/25 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        {highlights.map(({ icon: Icon, value, title }) => (
          <div key={title} className="flex items-center justify-center gap-5 px-4 py-4 sm:py-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sky-300/35 bg-sky-400/5 text-white">
              <Icon className="h-7 w-7" />
            </span>
            <span>
              <span className="block text-2xl font-bold leading-none text-white sm:text-3xl">{value}</span>
              <span className="mt-2 block text-sm text-slate-200 sm:text-base">{title}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
