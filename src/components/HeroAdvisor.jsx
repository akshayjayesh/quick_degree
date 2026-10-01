import React, { useState, useEffect, useRef } from 'react';
import { CHAT_STATES, HERO_CONTENT } from '../data/content';
import { QuickDegreeLogo } from '../assets/QuickDegreeLogo';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { trackWhatsAppClick, trackSituationSelect } from '../utils/analytics';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

export function HeroAdvisor({ currentSituationKey, onSelectSituation }) {
  const [messages, setMessages] = useState([
    { id: 1, type: 'them', text: 'Hi, welcome to Quick Degree. Where did you leave your degree?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef(null);

  const handleChoose = (key) => {
    onSelectSituation(key);
    trackSituationSelect(CHAT_STATES[key].label);

    // Append user's selection
    setMessages((prev) => [
      ...prev.filter((m) => !m.isDynamic), // keep initial or update previous dynamic message
      { id: Date.now(), type: 'me', text: CHAT_STATES[key].meText, isDynamic: true }
    ]);

    setIsTyping(true);

    const reduceMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduceMotion ? 0 : 650;

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, type: 'them', text: CHAT_STATES[key].reply, isDynamic: true }
      ]);
    }, delay);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const waUrl = getWhatsAppUrl(currentSituationKey);

  return (
    <div className="chat-card max-w-lg w-full mx-auto">
      <div className="chat bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-slate-950/10 dark:shadow-blue-950/40">
        
        {/* Advisor Header */}
        <div className="chat-head flex items-center gap-3.5 p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white border-b border-slate-800">
          <QuickDegreeLogo className="w-11 h-11" />
          <div>
            <b className="font-display font-bold text-base sm:text-lg leading-tight block text-slate-100">
              Quick Degree advisor
            </b>
            <span className="text-xs text-slate-300 block mt-0.5 flex items-center gap-1.5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Education consultants, Dubai and Bengaluru
            </span>
          </div>
        </div>

        {/* Chat Messages Body */}
        <div 
          ref={chatBodyRef}
          id="log"
          className="chat-body bg-slate-100/70 dark:bg-slate-950/80 p-5 min-h-[260px] max-h-[360px] overflow-y-auto flex flex-col gap-3 scroll-smooth"
          role="log"
          aria-live="polite"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`msg ${
                msg.type === 'them'
                  ? 'self-start bg-white dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 rounded-2xl rounded-tl-sm shadow-sm'
                  : 'self-end bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-2xl rounded-tr-sm shadow-md shadow-blue-900/30'
              } max-w-[88%] px-4 py-3 text-sm sm:text-base leading-relaxed animate-fade-in`}
            >
              {msg.text}
            </div>
          ))}

          {isTyping && (
            <div className="typing self-start flex items-center gap-1.5 px-4 py-3.5 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 rounded-2xl rounded-tl-sm shadow-sm">
              <i className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <i className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <i className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          )}
        </div>

        {/* Reply Selection Buttons */}
        <div 
          id="replies" 
          className="replies flex flex-wrap gap-2 p-4 sm:p-5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
          role="group" 
          aria-label="Where did you leave your degree?"
        >
          {Object.entries(CHAT_STATES).map(([key, state]) => {
            const isSelected = currentSituationKey === key;
            return (
              <button
                key={key}
                type="button"
                className={`reply min-h-[42px] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-900/30 scale-[1.02]'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
                }`}
                aria-pressed={isSelected ? 'true' : 'false'}
                data-key={key}
                onClick={() => handleChoose(key)}
              >
                {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-blue-200 flex-none" />}
                {state.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Hero CTA Button */}
      <div className="chat-cta mt-5">
        <a
          className="btn-wa wa-link group flex items-center justify-center gap-3 w-full min-h-[58px] px-7 py-4 rounded-full font-bold text-base text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/20 dark:shadow-emerald-950/40 hover:shadow-emerald-900/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-where="hero"
          onClick={() => trackWhatsAppClick('hero', currentSituationKey)}
        >
          <MessageCircle className="w-6 h-6 fill-current transition-transform group-hover:rotate-[-6deg] group-hover:scale-110" />
          <span>{HERO_CONTENT.ctaText}</span>
        </a>
      </div>
    </div>
  );
}
