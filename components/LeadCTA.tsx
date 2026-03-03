import React from 'react';
import { Send, MessageCircle, ArrowRight } from 'lucide-react';
import { useLeadModal } from './LeadModal';
import { CONFIG } from '../constants/config';

interface LeadCTAProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const LeadCTA: React.FC<LeadCTAProps> = ({ 
  title = "Готовы получить финансирование?", 
  subtitle = "Оставьте заявку или напишите нам в мессенджеры для оперативной консультации.",
  dark = false 
}) => {
  const { openModal } = useLeadModal();

  return (
    <section className={`py-24 relative overflow-hidden ${dark ? 'bg-corporate-900 text-white' : 'bg-gray-50 text-corporate-900'}`}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 font-display leading-tight ${dark ? 'text-white' : 'text-corporate-900'}`}>
            {title}
          </h2>
          <p className={`text-xl md:text-2xl mb-12 font-light leading-relaxed ${dark ? 'text-corporate-300' : 'text-corporate-600'}`}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={openModal}
              className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-2xl font-bold text-xl hover:bg-accent-hover transition-all shadow-2xl shadow-red-500/30 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              Оставить заявку <ArrowRight size={24} />
            </button>
            
            <div className="flex gap-4 w-full sm:w-auto">
              <a 
                href={CONFIG.TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 sm:flex-none px-8 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 border-2 ${dark ? 'border-white/20 hover:border-white hover:bg-white/10' : 'border-gray-200 hover:border-corporate-900 hover:bg-gray-100'}`}
              >
                <Send size={20} className="text-[#229ED9]" /> Telegram
              </a>
              <a 
                href={CONFIG.MAX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 sm:flex-none px-8 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 border-2 ${dark ? 'border-white/20 hover:border-white hover:bg-white/10' : 'border-gray-200 hover:border-corporate-900 hover:bg-gray-100'}`}
              >
                <MessageCircle size={20} className="text-[#0056b3]" /> Max
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
