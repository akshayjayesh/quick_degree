import React from 'react';
import { FAQ_CONTENT } from '../data/content';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  return (
    <section id="s-faq" aria-labelledby="s-faq-head" className="band py-16 lg:py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Section Header Left */}
          <div className="lg:col-span-4">
            <h2 id="s-faq-head" className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {FAQ_CONTENT.title}
            </h2>
          </div>

          {/* Accordion Questions Right */}
          <div className="lg:col-span-8 space-y-4">
            {FAQ_CONTENT.faqs.map((faq, idx) => (
              <details 
                key={idx}
                className="group bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 open:border-blue-500/50 open:shadow-lg open:shadow-blue-950/10"
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white cursor-pointer select-none list-none group-open:text-blue-600 dark:group-open:text-blue-400 transition-colors">
                  <span>{faq.question}</span>
                  <div className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 group-open:rotate-180 group-open:bg-blue-600 group-open:text-white group-open:border-blue-500 transition-all flex-none">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>
                <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
