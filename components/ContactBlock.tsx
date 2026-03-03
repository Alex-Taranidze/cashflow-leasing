import React from 'react';
import { Send, ShieldCheck, ExternalLink, MessageCircle } from 'lucide-react';

export const ContactBlock: React.FC = () => {
  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  return (
    <div id="contact" className="bg-corporate-900 py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display tracking-tight">
          Получить консультацию <br className="hidden md:block" /> по возвратному лизингу
        </h2>
        <p className="text-corporate-400 mb-12 text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Мы не собираем ваши данные на сайте. Нажмите на кнопку ниже, чтобы перейти в защищенный чат Telegram и обсудить детали сделки с экспертом напрямую.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:gap-6">
          <a 
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#229ED9] text-white font-bold py-5 px-10 rounded-2xl hover:bg-[#1c80b0] transition-all duration-300 flex items-center justify-center gap-4 shadow-2xl shadow-blue-500/40 hover:-translate-y-1 text-lg"
          >
            <Send size={24} /> 
            <span>Telegram</span>
            <ExternalLink size={18} className="opacity-50" />
          </a>
          <a 
            href="https://max.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#0056b3] text-white font-bold py-5 px-10 rounded-2xl hover:bg-[#004494] transition-all duration-300 flex items-center justify-center gap-4 shadow-2xl shadow-blue-500/40 hover:-translate-y-1 text-lg"
          >
            <MessageCircle size={24} /> 
            <span>Max</span>
            <ExternalLink size={18} className="opacity-50" />
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md mt-12">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-white/10 rounded-xl">
              <ShieldCheck size={20} className="text-accent" />
            </div>
            <div className="text-left">
              <p className="text-sm text-corporate-300 leading-relaxed">
                <strong className="text-white">Конфиденциально:</strong> Сайт не содержит форм ввода и не осуществляет сбор, хранение или обработку персональных данных.
              </p>
              <p className="text-xs text-corporate-500 mt-2">
                Дальнейшее взаимодействие происходит в мессенджере Telegram по инициативе пользователя.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};