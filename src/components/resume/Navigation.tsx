import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn('fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
      isScrolled || isMobileMenuOpen ? 'border-white/10 bg-[#06172d]/95 shadow-lg shadow-black/20 backdrop-blur-xl' : 'border-white/5 bg-[#06172d]/35 backdrop-blur-md')}>
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex h-[4.5rem] items-center justify-between lg:h-24">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-3xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-300 via-blue-500 to-blue-800 text-2xl font-black text-[#06172d] shadow-lg shadow-blue-500/25">S</span>
            Shibly Sadik
          </a>
          <ul className="hidden items-center gap-7 lg:flex xl:gap-10">
            {navItems.map((item) => <li key={item.href}>
              <a href={item.href} className="group relative py-4 text-base font-medium text-slate-100 transition-colors hover:text-white xl:text-lg">
                {item.label}
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-sky-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>)}
          </ul>
          <a href="/Shibly_Sadik_Resume.pdf" download className="hidden items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 lg:inline-flex">
            <Download className="h-5 w-5" /> Download CV
          </a>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-sky-300 hover:text-sky-200 lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)} aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div id="mobile-navigation" className={cn('overflow-hidden transition-[max-height,opacity,padding] duration-300 lg:hidden',
          isMobileMenuOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0')} aria-hidden={!isMobileMenuOpen}>
          <ul className="space-y-1">
            {navItems.map((item) => <li key={item.href}><a href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white">{item.label}</a></li>)}
            <li><a href="/Shibly_Sadik_Resume.pdf" download className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white"><Download className="h-4 w-4" /> Download CV</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
