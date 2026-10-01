import React from 'react';
import { PROCESS_CONTENT } from '../data/content';

export function ProcessSection() {
  return (
    <section id="s-how" aria-labelledby="s-how-head" className="band py-16 lg:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section Header Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 id="s-how-head" className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {PROCESS_CONTENT.title}
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              {PROCESS_CONTENT.subhead}
            </p>
          </div>

          {/* Timeline Right */}
          <div className="lg:col-span-7">
            <ol className="road relative list-none m-0 p-0 space-y-8">
              {PROCESS_CONTENT.steps.map((step, idx) => (
                <li key={idx} className="relative pl-16 sm:pl-20 min-h-[64px] group">
                  
                  {/* Number Circle Badge */}
                  <div className={`absolute left-0 top-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full font-display font-extrabold text-base sm:text-lg flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-105 z-10 ${
                    idx === 5
                      ? 'bg-gradient-to-br from-amber-500 to-orange-600 text-slate-950 ring-4 ring-white dark:ring-slate-900 shadow-amber-500/30'
                      : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white ring-4 ring-white dark:ring-slate-900 shadow-blue-500/20'
                  }`}>
                    {idx + 1}
                  </div>

                  {/* Vertical Connecting Line */}
                  {idx !== PROCESS_CONTENT.steps.length - 1 && (
                    <div className="absolute left-5 sm:left-6 top-12 bottom-0 w-0.5 border-l-2 border-dashed border-slate-300 dark:border-slate-800" />
                  )}

                  {/* Step Body */}
                  <div className="pt-1">
                    <b className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white flex items-center gap-3 flex-wrap">
                      <span>{step.title}</span>
                      {step.badge && (
                        <span className="here bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {step.badge}
                        </span>
                      )}
                    </b>
                    <span className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mt-1 block">
                      {step.description}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}
