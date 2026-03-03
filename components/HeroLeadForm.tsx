import React, { useState } from 'react';
import { Send, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../constants/config';
import { Link } from 'react-router-dom';

export const HeroLeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    inn: '',
    honeypot: ''
  });
  const [consents, setConsents] = useState({
    dataProcessing: false,
    privacyPolicy: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (formData.fullName.trim().split(/\s+/).length < 2) {
      newErrors.fullName = 'Введите имя и фамилию';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (phoneDigits.length < 11) {
      newErrors.phone = 'Введите корректный номер';
    }

    if (formData.inn && !/^\d{10}$|^\d{12}$/.test(formData.inn)) {
      newErrors.inn = '10 или 12 цифр';
    }

    if (!consents.dataProcessing || !consents.privacyPolicy) {
      newErrors.consents = 'Нужно согласие';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    try {
      // База данных и сервер должны размещаться на территории РФ
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          fullName: formData.fullName.trim(),
          source: 'hero_form'
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-[20px] shadow-xl border border-gray-100 max-w-[420px] w-full animate-in fade-in slide-in-from-bottom-4 duration-300 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-bold text-corporate-900 mb-3 font-display">Заявка отправлена.</h3>
        <p className="text-corporate-600 mb-0">Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-[20px] shadow-xl border border-gray-100 max-w-[420px] w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-bold text-corporate-900 mb-2 font-display leading-tight">
        Получите расчёт за 15 минут
      </h3>
      <p className="text-sm text-corporate-500 mb-8 font-light leading-snug">
        Подготовим предварительные условия финансирования под ваш актив
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="honeypot" 
          style={{ display: 'none' }} 
          tabIndex={-1} 
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />

        <div>
          <input
            type="text"
            placeholder="ФИО *"
            required
            className={`w-full px-4 py-3 bg-gray-50 border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm`}
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>

        <div>
          <input
            type="tel"
            placeholder="Телефон *"
            required
            className={`w-full px-4 py-3 bg-gray-50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm`}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="ИНН компании (необязательно)"
            className={`w-full px-4 py-3 bg-gray-50 border ${errors.inn ? 'border-red-500' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all text-sm`}
            value={formData.inn}
            onChange={(e) => setFormData({ ...formData, inn: e.target.value })}
          />
        </div>

        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-2 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer"
              checked={consents.dataProcessing}
              onChange={(e) => setConsents({ ...consents, dataProcessing: e.target.checked })}
            />
            <span className="text-[11px] text-corporate-500 leading-tight group-hover:text-corporate-900 transition-colors">
              Я даю согласие на <Link to="/consent" target="_blank" className="text-accent underline hover:no-underline">обработку персональных данных</Link>
            </span>
          </label>

          <label className="flex items-start gap-2 cursor-pointer group">
            <input
              type="checkbox"
              required
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent cursor-pointer"
              checked={consents.privacyPolicy}
              onChange={(e) => setConsents({ ...consents, privacyPolicy: e.target.checked })}
            />
            <span className="text-[11px] text-corporate-500 leading-tight group-hover:text-corporate-900 transition-colors">
              Я ознакомлен и согласен с <Link to="/privacy" target="_blank" className="text-accent underline hover:no-underline">Политикой обработки персональных данных</Link>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-hover transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {status === 'loading' ? <Loader2 className="animate-spin w-5 h-5" /> : <Send size={18} />}
          Получить расчёт
        </button>

        <div className="text-[9px] text-corporate-400 leading-relaxed text-center space-y-0.5 pt-4 border-t border-gray-100">
          <p>Работаем в соответствии с законодательством РФ.</p>
          <p>Данные обрабатываются и хранятся на территории Российской Федерации.</p>
          <p>Информация на сайте не является публичной офертой.</p>
        </div>

        {status === 'error' && (
          <p className="text-red-500 text-center text-[10px] font-bold animate-pulse">
            Ошибка при отправке. Попробуйте позже.
          </p>
        )}
      </form>
    </div>
  );
};
