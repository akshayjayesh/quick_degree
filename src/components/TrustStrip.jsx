import React from 'react';
import { TRUST_ITEMS } from '../data/content';
import { Award, Laptop, MapPin } from 'lucide-react';

export function TrustStrip() {
  const icons = [
    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    <Laptop className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  ];

  return (
    <div className="strip bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 m-0 p-0 list-none">
          {TRUST_ITEMS.map((itemText, idx) => (
            <li key={idx} className="flex items-center gap-4 text-slate-800 dark:text-slate-100 font-bold text-sm sm:text-base">
              <div className="p-3 rounded-2xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700/80 flex-none shadow-sm">
                {icons[idx]}
              </div>
              <span>{itemText}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
