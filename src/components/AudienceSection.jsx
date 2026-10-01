import React from 'react';
import { AUDIENCE_CONTENT } from '../data/content';
import { Briefcase, GraduationCap, AlertCircle, RotateCcw, Globe2 } from 'lucide-react';

export function AudienceSection() {
  const icons = [
    <Briefcase className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    <GraduationCap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    <RotateCcw className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    <Globe2 className="w-6 h-6 text-amber-600 dark:text-amber-400" />
  ];

  return (
    <section id="s-you" aria-labelledby="s-you-head" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="sec-head max-w-2xl mb-12">
          <h2 id="s-you-head" className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {AUDIENCE_CONTENT.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {AUDIENCE_CONTENT.subhead}
          </p>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AUDIENCE_CONTENT.items.map((item, idx) => (
            <div 
              key={idx} 
              className="who group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 hover:border-amber-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm dark:shadow-black/20 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-600" />

              <div>
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 w-fit mb-5 group-hover:scale-110 transition-transform">
                  {icons[idx]}
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
