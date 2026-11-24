import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
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

  const navClass = cn(
    'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
    isScrolled || isMobileMenuOpen
      ? 'border-white/10 bg-slate-950/95 shadow-lg shadow-black/20 backdrop-blur-xl'
      : 'border-white/10 bg-slate-950/55 backdrop-blur-md',
  );

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="font-display text-xl font-extrabold text-white sm:text-2xl">
            <span className="gradient-text">Shibly Sadik</span>
          </a>
          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navItems.map((item) => <li key={item.href}>
              <a href={item.href} className="group relative text-sm font-medium text-slate-200/90 transition-colors hover:text-white">
                {item.label}
                <span className="gradient-bg absolute -bottom-2 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>)}
          </ul>
          <div className="hidden lg:block">
            <a href="/Shibly_Sadik_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:brightness-110">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
          <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-primary hover:text-primary lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)} aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        <div id="mobile-navigation" className={cn('overflow-hidden transition-[max-height,opacity,padding] duration-300 lg:hidden',
          isMobileMenuOpen ? 'max-h-[28rem] pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0')} aria-hidden={!isMobileMenuOpen}>
          <ul className="space-y-1">
            {navItems.map((item) => <li key={item.href}>
              <a href={item.href} onClick={() => setIsMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white">
                {item.label}
              </a>
            </li>)}
            <li className="pt-2">
              <a href="/Shibly_Sadik_Resume.pdf" download onClick={() => setIsMobileMenuOpen(false)} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
