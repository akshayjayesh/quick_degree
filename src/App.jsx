import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AudienceSection } from './components/AudienceSection';
import { RoutesSection } from './components/RoutesSection';
import { RecognitionSection } from './components/RecognitionSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyQuickDegree } from './components/WhyQuickDegree';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyContactBar } from './components/StickyContactBar';

export function App() {
  const [currentSituationKey, setCurrentSituationKey] = useState(null);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('qd_theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark'; // Default to dark premium mode
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('qd_theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectSituation = (key) => {
    setCurrentSituationKey(key);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 transition-colors duration-300">
      
      {/* Sticky Header Navbar */}
      <Navbar
        currentSituationKey={currentSituationKey}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main id="top">
        <Hero
          currentSituationKey={currentSituationKey}
          onSelectSituation={handleSelectSituation}
        />
        
        <TrustStrip />

        <AudienceSection />

        <RoutesSection />

        <RecognitionSection />

        <ProcessSection />

        <WhyQuickDegree />

        <FAQSection />

        <FinalCTA currentSituationKey={currentSituationKey} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Contact Bar */}
      <StickyContactBar currentSituationKey={currentSituationKey} />

    </div>
  );
}

export default App;
