import React from 'react';
import { WHY_CONTENT } from '../data/content';
import { Shield, Award, HeartHandshake, Globe, CreditCard, Compass } from 'lucide-react';

export function WhyQuickDegree() {
  const icons = [
    <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    <HeartHandshake className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  ];

  return (
    <section id="s-why" aria-labelledby="s-why-head" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="sec-head max-w-2xl mb-12">
          <h2 id="s-why-head" className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {WHY_CONTENT.title}
          </h2>
        </div>

        {/* 5 Feature Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CONTENT.tiles.map((tile, idx) => (
            <div 
              key={idx}
              className="tile bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 w-fit mb-4">
                  {icons[idx]}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                  {tile.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {tile.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Study Abroad Banner */}
        <div className="abroad mt-8 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-900/60 rounded-3xl p-6 sm:p-8 flex items-start gap-4 shadow-xl text-white">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-none mt-1">
            <Compass className="w-6 h-6" />
          </div>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            <b className="text-amber-400 font-bold block sm:inline mr-2">
              {WHY_CONTENT.abroadNote.title}
            </b>
            {WHY_CONTENT.abroadNote.text}
          </p>
        </div>

      </div>
    </section>
  );
}
