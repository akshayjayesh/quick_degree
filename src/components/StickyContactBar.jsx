import React from 'react';
import { STICKY_BAR_CONTENT, BRAND_INFO } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick, trackCallClick } from '../utils/analytics';
import { MessageCircle, Phone } from 'lucide-react';

export function StickyContactBar({ currentSituationKey }) {
  const waUrl = getWhatsAppUrl(currentSituationKey);

  return (
    <div className="bar md:hidden fixed bottom-3 left-3 right-3 z-50 flex items-center gap-2 p-2 rounded-full bg-slate-950/90 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/60">
      
      {/* Primary WhatsApp Action */}
      <a
        className="btn-wa wa-link flex-1 inline-flex items-center justify-center gap-2.5 min-h-[50px] px-4 py-2.5 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-950/40 transition-all"
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-where="sticky"
        onClick={() => trackWhatsAppClick('sticky', currentSituationKey)}
      >
        <MessageCircle className="w-5 h-5 fill-current flex-none" />
        <span className="truncate">{STICKY_BAR_CONTENT.waText}</span>
      </a>

      {/* Direct Call Button */}
      <a
        className="callbtn call-link flex-none w-[50px] h-[50px] rounded-full flex items-center justify-center bg-slate-900 border border-slate-700 text-slate-100 hover:bg-slate-800 transition-all"
        href={`tel:${BRAND_INFO.phoneRaw}`}
        aria-label="Call Quick Degree"
        data-where="sticky-call"
        onClick={() => trackCallClick('sticky-call')}
      >
        <Phone className="w-5 h-5 fill-current text-amber-400" />
      </a>

    </div>
  );
}
