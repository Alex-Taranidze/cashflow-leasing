import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { LeadForm } from '../components/LeadForm';
import { CONFIG } from '../constants/config';
import { useSEO } from '../hooks/useSEO';
import { Building2, Mail, ShieldCheck } from 'lucide-react';

const Apply: React.FC = () => {
  useSEO(
    "Оставить заявку на возвратный лизинг — Cashflow",
    "Заполните форму для получения предварительного решения по возвратному лизингу. Быстрое рассмотрение, выгодные условия.",
    "/apply"
  );

  return (
    <Layout>
      <div className="bg-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-corporate-900 mb-4 font-display tracking-tight text-center">
            Оставить заявку
          </h1>
          <p className="text-xl text-corporate-500 font-light text-center max-w-2xl mx-auto">
            Заполните форму ниже, и наши эксперты свяжутся с вами для обсуждения условий финансирования.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl border border-gray-100 mb-12">
            <LeadForm />
          </div>

          <div className="bg-gray-50 p-10 rounded-[32px] border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-corporate-900 mb-8 flex items-center gap-3 font-display">
              <Building2 className="text-accent" />
              Юридическая информация
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-sm text-corporate-700">
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-corporate-400 uppercase tracking-widest font-bold mb-1">Наименование</p>
                  <p className="font-bold">{CONFIG.OWNER.NAME}</p>
                </div>
                <div>
                  <p className="text-[10px] text-corporate-400 uppercase tracking-widest font-bold mb-1">ИНН</p>
                  <p className="font-bold">{CONFIG.OWNER.INN}</p>
                </div>
                <div>
                  <p className="text-[10px] text-corporate-400 uppercase tracking-widest font-bold mb-1">ОГРНИП</p>
                  <p className="font-bold">{CONFIG.OWNER.OGRNIP}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-corporate-400 uppercase tracking-widest font-bold mb-1">Email</p>
                  <a href={`mailto:${CONFIG.EMAIL}`} className="font-bold text-accent hover:underline">{CONFIG.EMAIL}</a>
                </div>
                <div className="pt-4 flex items-start gap-3 text-emerald-600">
                  <ShieldCheck size={20} className="flex-shrink-0" />
                  <p className="text-xs leading-relaxed">
                    Ваши данные защищены в соответствии с 152-ФЗ. Обработка и хранение осуществляются на территории РФ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Apply;
