import React from 'react';
import { FINAL_CTA_CONTENT, BRAND_INFO } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick, trackCallClick } from '../utils/analytics';
import { MessageCircle, Phone } from 'lucide-react';

export function FinalCTA({ currentSituationKey }) {
  const waUrl = getWhatsAppUrl(currentSituationKey);

  return (
    <section className="final relative py-20 lg:py-28 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <h2 id="s-final" className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {FINAL_CTA_CONTENT.title}
        </h2>

        <p className="lead text-slate-300 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
          {FINAL_CTA_CONTENT.lead}
        </p>

        <div className="pt-4 flex flex-col items-center gap-4">
          <a
            className="btn-wa wa-link group flex items-center justify-center gap-3.5 max-w-md w-full min-h-[60px] px-8 py-4 rounded-full font-bold text-lg text-white bg-emerald-600 hover:bg-emerald-500 shadow-2xl shadow-emerald-950/50 hover:shadow-emerald-900/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-where="final"
            onClick={() => trackWhatsAppClick('final', currentSituationKey)}
          >
            <MessageCircle className="w-6 h-6 fill-current transition-transform group-hover:rotate-[-6deg] group-hover:scale-110" />
            <span>{FINAL_CTA_CONTENT.ctaText}</span>
          </a>

          <a
            className="call call-link inline-flex items-center gap-2.5 pt-2 text-slate-300 hover:text-white font-semibold text-base transition-colors"
            href={`tel:${BRAND_INFO.phoneRaw}`}
            data-where="final-call"
            onClick={() => trackCallClick('final-call')}
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>{FINAL_CTA_CONTENT.callText}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
