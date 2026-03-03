import React from 'react';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { LeadCTA } from '../components/LeadCTA';
import { CONFIG } from '../constants/config';
import { homeContent } from '../content/home';
import { useSEO } from '../hooks/useSEO';
import { 
  CheckCircle2, 
  ArrowRight, 
  Send,
  Scale,
  TrendingUp,
  PieChart,
  ShieldCheck,
  Users
} from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { mechanism, process, howWeWork, forWhom } = homeContent;
  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  useSEO(
    "Как работает возвратный лизинг — этапы сделки и механизм | Cashflow",
    "Подробное описание механизма возвратного лизинга. Узнайте, как получить деньги под залог активов за 3 шага. Процесс сделки, требования и условия.",
    "/how-it-works"
  );

  return (
    <Layout>
      <div className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-corporate-900 mb-8 font-display leading-tight">
              {mechanism.title}
            </h1>
            <div className="space-y-6 text-xl text-corporate-600 leading-relaxed font-light">
              {mechanism.text.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Section id="how-we-work" dark>
        <SectionTitle subtitle>{howWeWork.title}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
           {howWeWork.steps.map((step, index) => (
             <div key={index} className="relative p-10 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300 group">
               <span className="absolute -top-4 left-8 bg-accent text-white text-sm font-bold px-4 py-2 rounded-xl shadow-lg shadow-red-500/20">
                 {step.number}
               </span>
               <h3 className="mt-4 text-2xl font-bold text-corporate-900 mb-4 font-display">{step.title}</h3>
               <p className="text-corporate-600 leading-relaxed">{step.text}</p>
             </div>
           ))}
        </div>
      </Section>

      <Section id="process">
        <SectionTitle subtitle>{process.title}</SectionTitle>
        <div className="max-w-4xl">
          <div className="relative border-l-2 border-corporate-100 ml-4 md:ml-8 space-y-12 py-4">
            {process.steps.map((step, index) => (
              <div key={index} className="relative pl-10 md:pl-16">
                <span className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-white shadow-lg"></span>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h4 className="text-2xl font-bold text-corporate-900 mb-2 font-display">Шаг {index + 1}</h4>
                  <p className="text-xl text-corporate-700">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="forwhom" dark>
        <SectionTitle subtitle>{forWhom.title}</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {forWhom.items.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-card hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-4 font-display">{item.title}</h3>
              <p className="text-base text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <LeadCTA dark />
    </Layout>
  );
};

export default HowItWorks;
