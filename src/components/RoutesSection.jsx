import React from 'react';
import { ROUTES_CONTENT } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export function RoutesSection() {
  return (
    <section id="s-routes" aria-labelledby="s-routes-head" className="band py-16 lg:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="sec-head max-w-2xl mb-12">
          <h2 id="s-routes-head" className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {ROUTES_CONTENT.title}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            {ROUTES_CONTENT.subhead}
          </p>
        </div>

        {/* Three Route Cards Grid */}
        <div className="routes grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROUTES_CONTENT.routes.map((route, idx) => {
            let bgStyles = "";
            let tagStyles = "";

            if (route.variant === 'r1') {
              bgStyles = "bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white shadow-blue-950/30";
              tagStyles = "bg-white/15 text-white border-white/20 backdrop-blur-md";
            } else if (route.variant === 'r2') {
              bgStyles = "bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-slate-950/40 border border-slate-800";
              tagStyles = "bg-slate-800 text-blue-300 border-slate-700";
            } else {
              bgStyles = "bg-gradient-to-br from-amber-500 via-orange-600 to-amber-600 text-slate-950 shadow-orange-950/20";
              tagStyles = "bg-slate-950/15 text-slate-950 border-slate-950/20 backdrop-blur-md font-extrabold";
            }

            return (
              <article 
                key={idx} 
                className={`route ${route.variant} rounded-3xl p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1.5 ${bgStyles}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="no font-display font-black text-xs tracking-widest uppercase opacity-80">
                      {route.no}
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-60" />
                  </div>

                  <h3 className="font-display font-extrabold text-2xl mb-4">
                    {route.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed opacity-95">
                    {route.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <span className={`best inline-block px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border ${tagStyles}`}>
                    {route.bestFor}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
