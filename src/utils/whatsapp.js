import { BRAND_INFO, CHAT_STATES } from '../data/content';

export function getRef() {
  if (typeof window === 'undefined') return 'direct';
  const params = new URLSearchParams(window.location.search);
  const ref = [params.get('utm_source'), params.get('utm_campaign'), params.get('utm_content')]
    .filter(Boolean)
    .join('/') || 'direct';
  return ref;
}

export function generateWhatsAppMessage(currentSituationKey) {
  let message = `Hi ${BRAND_INFO.brandName}, I'd like a free degree pathway check.`;
  if (currentSituationKey && CHAT_STATES[currentSituationKey]) {
    message += `\nWhere I stopped: ${CHAT_STATES[currentSituationKey].label}`;
  }
  message += `\nRef: ${getRef()}`;
  return message;
}

export function getWhatsAppUrl(currentSituationKey) {
  const message = generateWhatsAppMessage(currentSituationKey);
  return `https://wa.me/${BRAND_INFO.waNumber}?text=${encodeURIComponent(message)}`;
}
