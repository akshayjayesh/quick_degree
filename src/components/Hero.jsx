import React from 'react';
import { HERO_CONTENT } from '../data/content';
import { HeroAdvisor } from './HeroAdvisor';
import { Check } from 'lucide-react';

export function Hero({ currentSituationKey, onSelectSituation }) {
  return (
    <section className="hero relative py-12 lg:py-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[500px] h-[500px] bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-40 dark:opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 font-semibold text-xs sm:text-sm tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{HERO_CONTENT.pill}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              {HERO_CONTENT.titlePart1}
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400 relative inline-block">
                {HERO_CONTENT.titleEm}
              </em>
            </h1>

            <p className="sub text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              {HERO_CONTENT.subhead}
            </p>

            {/* Credibility checks */}
            <ul className="checks hide-sm pt-2 space-y-3">
              {HERO_CONTENT.checks.map((checkText, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 dark:text-slate-200 font-semibold text-sm sm:text-base">
                  <div className="flex-none p-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 mt-0.5 shadow-sm">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>{checkText}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* Hero Right Interactive Advisor Card */}
          <div className="lg:col-span-5 w-full">
            <HeroAdvisor
              currentSituationKey={currentSituationKey}
              onSelectSituation={onSelectSituation}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
