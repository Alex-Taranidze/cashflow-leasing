import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[110] p-4 sm:p-6 lg:p-8 animate-in slide-in-from-bottom-full duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="bg-corporate-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 flex-1">
            <div className="p-3 bg-accent/20 text-accent rounded-2xl flex-shrink-0">
              <Info size={24} />
            </div>
            <p className="text-sm sm:text-base text-corporate-300 leading-relaxed">
              Мы используем cookie для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с обработкой данных в соответствии с <a href="/privacy" className="text-white underline hover:no-underline font-bold">Политикой</a>.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={handleAccept}
              className="flex-1 md:flex-none px-8 py-4 bg-accent text-white rounded-2xl font-bold text-sm hover:bg-accent-hover transition-all shadow-lg shadow-red-500/20"
            >
              Принять
            </button>
            <a 
              href="/privacy"
              className="flex-1 md:flex-none px-8 py-4 border border-white/20 text-white rounded-2xl font-bold text-sm hover:bg-white/10 transition-all text-center"
            >
              Подробнее
            </a>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-2 text-corporate-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
