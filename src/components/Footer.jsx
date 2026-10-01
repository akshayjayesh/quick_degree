import React from 'react';
import { BRAND_INFO } from '../data/content';
import { QuickDegreeLogo } from '../assets/QuickDegreeLogo';

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 py-12 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-900 pb-6">
          <div className="flex items-center gap-3">
            <QuickDegreeLogo className="w-10 h-10" />
            <span className="font-display font-bold text-slate-900 dark:text-white text-base tracking-wide">
              {BRAND_INFO.brandName}
            </span>
          </div>
          <p className="text-slate-800 dark:text-slate-300 font-semibold">
            {BRAND_INFO.brandName} | {BRAND_INFO.locations}
          </p>
        </div>

        <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-4xl text-xs sm:text-sm">
          {BRAND_INFO.disclaimer}
        </p>

      </div>
    </footer>
  );
}
