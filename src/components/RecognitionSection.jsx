import React from 'react';
import { RECOGNITION_CONTENT } from '../data/content';
import { FileCheck, ShieldCheck, Landmark, CheckCircle } from 'lucide-react';

export function RecognitionSection() {
  const icons = [
    <Landmark className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    <ShieldCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    <FileCheck className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    <CheckCircle className="w-6 h-6 text-amber-600 dark:text-amber-400" />
  ];

  return (
    <section id="s-docs" aria-labelledby="s-docs-head" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="sec-head max-w-2xl mb-12">
          <h2 id="s-docs-head" className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {RECOGNITION_CONTENT.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {RECOGNITION_CONTENT.subhead}
          </p>
        </div>

        {/* 4 Recognition Document Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {RECOGNITION_CONTENT.docs.map((doc, idx) => (
            <div 
              key={idx} 
              className="doc bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300 shadow-sm flex items-start gap-5"
            >
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex-none">
                {icons[idx]}
              </div>

              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-2">
                  {doc.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
