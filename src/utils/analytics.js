import { getRef } from './whatsapp';

export function trackEvent(name, data = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'quickdegree_' + name.toLowerCase(),
        detail: data
      });
    }
  } catch (e) {}

  try {
    if (window.fbq) {
      window.fbq('trackCustom', 'QuickDegreeLP_' + name, data);
    }
  } catch (e) {}
}

export function trackWhatsAppClick(where, currentSituationLabel) {
  const ref = getRef();
  const detail = {
    where,
    situation: currentSituationLabel || 'none',
    ref
  };

  try {
    if (window.fbq) {
      window.fbq('track', 'Contact', detail);
    }
  } catch (e) {}

  trackEvent('WhatsAppClick', detail);
}

export function trackCallClick(where) {
  const ref = getRef();
  trackEvent('CallClick', { where, ref });
}

export function trackSituationSelect(situationLabel) {
  trackEvent('Situation', { situation: situationLabel });
}
