import React from 'react';
import logoImg from './logo.jpeg';

export function QuickDegreeLogo({ className = "w-10 h-10", alt = "Quick Degree" }) {
  return (
    <div className={`relative flex items-center justify-center flex-none rounded-xl overflow-hidden shadow-sm bg-white p-1 border border-slate-200 dark:border-slate-800 ${className}`}>
      <img 
        src={logoImg} 
        alt={alt} 
        className="w-full h-full object-contain" 
      />
    </div>
  );
}

export default QuickDegreeLogo;
