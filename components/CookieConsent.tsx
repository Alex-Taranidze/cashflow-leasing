import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-corporate-200 shadow-lg z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <p className="text-sm text-corporate-600">
            Мы используем файлы cookie для корректной работы сайта и анализа трафика. Продолжая использовать сайт, вы даете согласие на обработку файлов cookie и пользовательских данных.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleAccept}
            className="bg-corporate-900 text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-corporate-800 transition-colors"
          >
            Хорошо
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-corporate-400 hover:text-corporate-600 p-1"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};