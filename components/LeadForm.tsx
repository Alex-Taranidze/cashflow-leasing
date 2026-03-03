import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { CONFIG } from '../constants/config';

interface LeadFormProps {
  inline?: boolean;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({ inline = false, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    inn: '',
    honeypot: '' // Anti-spam
  });
  const [consents, setConsents] = useState({
    dataProcessing: false,
    privacyPolicy: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    // Full Name: min 2 words, normalized spaces
    const nameParts = formData.fullName.trim().split(/\s+/);
    if (nameParts.length < 2) {
      newErrors.fullName = 'Введите имя и фамилию (минимум 2 слова)';
    }

    // Phone: RU format, basic check
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 11) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    // TIN: 10 or 12 digits, optional
    if (formData.inn && !/^\d{10}$|^\d{12}$/.test(formData.inn)) {
      newErrors.inn = 'ИНН должен содержать 10 или 12 цифр';
    }

    // Consents
    if (!consents.dataProcessing || !consents.privacyPolicy) {
      newErrors.consents = 'Необходимо подтвердить согласие с документами';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fullName: formData.fullName.trim().replace(/\s+/g, ' '),
          consents
        }),
      });

      if (response.ok) {
        setStatus('success');
        if (onSuccess) onSuccess();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-corporate-900 mb-4 font-display">Заявка отправлена.</h3>
        <p className="text-corporate-600 mb-10 text-lg">Мы свяжемся с вами в ближайшее время.</p>
        
        <div className="space-y-4">
          <p className="text-sm font-bold text-corporate-400 uppercase tracking-widest">Или напишите нам прямо сейчас:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={CONFIG.TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#229ED9] text-white rounded-2xl font-bold hover:bg-[#1c80b0] transition-all shadow-lg shadow-blue-500/20"
            >
              <Send size={20} /> Telegram
            </a>
            <a 
              href={CONFIG.MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0056b3] text-white rounded-2xl font-bold hover:bg-[#004494] transition-all shadow-lg shadow-blue-900/20"
            >
              <MessageCircle size={20} /> Max
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${inline ? 'bg-white p-8 md:p-12 rounded-3xl shadow-card border border-gray-100' : ''}`}>
      {/* Honeypot for anti-spam */}
      <input 
        type="text" 
        name="honeypot" 
        style={{ display: 'none' }} 
        tabIndex={-1} 
        autoComplete="off"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
      />

      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-bold text-corporate-900 mb-2 uppercase tracking-wider">ФИО *</label>
          <input
            type="text"
            required
            placeholder="Иванов Иван Иванович"
            className={`w-full px-5 py-4 bg-gray-50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12} /> {errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-corporate-900 mb-2 uppercase tracking-wider">Телефон *</label>
          <input
            type="tel"
            required
            placeholder="+7 (___) ___-__-__"
            className={`w-full px-5 py-4 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-corporate-900 mb-2 uppercase tracking-wider">ИНН компании (необязательно)</label>
          <input
            type="text"
            placeholder="10 или 12 цифр"
            className={`w-full px-5 py-4 bg-gray-50 border ${errors.inn ? 'border-red-500' : 'border-gray-200'} rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all`}
            value={formData.inn}
            onChange={(e) => setFormData({ ...formData, inn: e.target.value })}
          />
          {errors.inn && <p className="text-red-500 text-xs mt-2 flex items-center gap-1"><AlertCircle size={12} /> {errors.inn}</p>}
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            className="mt-1 w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer"
            checked={consents.dataProcessing}
            onChange={(e) => setConsents({ ...consents, dataProcessing: e.target.checked })}
          />
          <span className="text-sm text-corporate-600 leading-tight group-hover:text-corporate-900 transition-colors">
            Я даю согласие на <a href="/consent" target="_blank" className="text-accent underline hover:no-underline">обработку персональных данных</a>.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            className="mt-1 w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer"
            checked={consents.privacyPolicy}
            onChange={(e) => setConsents({ ...consents, privacyPolicy: e.target.checked })}
          />
          <span className="text-sm text-corporate-600 leading-tight group-hover:text-corporate-900 transition-colors">
            Я ознакомлен и согласен с <a href="/privacy" target="_blank" className="text-accent underline hover:no-underline">Политикой обработки персональных данных</a>.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-5 bg-accent text-white rounded-2xl font-bold text-xl hover:bg-accent-hover transition-all shadow-xl shadow-red-500/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? <Loader2 className="animate-spin" /> : <Send size={24} />}
        Получить расчёт
      </button>

      <div className="text-[10px] text-corporate-400 leading-relaxed text-center space-y-1 pt-4 border-t border-gray-100">
        <p>Работаем в соответствии с законодательством РФ.</p>
        <p>Данные обрабатываются и хранятся на территории Российской Федерации.</p>
        <p>Информация на сайте не является публичной офертой.</p>
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-center text-sm font-bold animate-pulse">
          Произошла ошибка при отправке. Пожалуйста, попробуйте позже или напишите нам в Telegram.
        </p>
      )}
    </form>
  );
};
