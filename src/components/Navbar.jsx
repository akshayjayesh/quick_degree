import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/content';
import { QuickDegreeLogo } from '../assets/QuickDegreeLogo';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick } from '../utils/analytics';
import { MessageCircle, Menu, X, Sun, Moon } from 'lucide-react';

export function Navbar({ currentSituationKey, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waUrl = getWhatsAppUrl(currentSituationKey);

  const handleWaClick = () => {
    trackWhatsAppClick('header', currentSituationKey);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Who We Help', href: '#s-you' },
    { label: 'Routes', href: '#s-routes' },
    { label: 'Recognition', href: '#s-docs' },
    { label: 'Process', href: '#s-how' },
    { label: 'FAQ', href: '#s-faq' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-md dark:shadow-black/20' 
        : 'bg-white/80 dark:bg-slate-950/75 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Brand Logo */}
          <a 
            href="#top" 
            className="flex items-center gap-3.5 group text-decoration-none" 
            aria-label={BRAND_INFO.brandName}
          >
            <QuickDegreeLogo className="w-11 h-11 transition-transform duration-300 group-hover:scale-105" />
            <b className="font-display font-extrabold text-xl tracking-wider text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {BRAND_INFO.name}
            </b>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Controls (Theme Switcher & WhatsApp CTA) */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all shadow-sm"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* WhatsApp CTA */}
            <a
              className="wa-link inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-900/20 dark:shadow-emerald-950/40 hover:shadow-emerald-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-where="header"
              onClick={handleWaClick}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp us</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={onToggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <a
              className="wa-link inline-flex items-center justify-center p-2.5 rounded-full text-white bg-emerald-600 hover:bg-emerald-500 shadow-md"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-where="header-mobile"
              onClick={handleWaClick}
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-2xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 border-b border-slate-100 dark:border-slate-800/60"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="wa-link flex items-center justify-center gap-3 w-full py-3 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg transition-all mt-4"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-where="header-drawer"
            onClick={handleWaClick}
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp us</span>
          </a>
        </div>
      )}
    </header>
  );
}
