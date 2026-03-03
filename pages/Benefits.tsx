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
  TrendingUp,
  Briefcase,
  Clock,
  Shuffle,
  ShieldCheck,
  PieChart
} from 'lucide-react';

const getIconForBenefit = (index: number) => {
  const icons = [
    <TrendingUp className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    <Briefcase className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    <Clock className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    <Shuffle className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    <ShieldCheck className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
    <PieChart className="w-8 h-8 text-emerald-600" strokeWidth={1.5} />,
  ];
  return icons[index % icons.length];
};

const Benefits: React.FC = () => {
  const { benefits } = homeContent;
  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  useSEO(
    "Преимущества возвратного лизинга для бизнеса — Cashflow",
    "Узнайте все выгоды возвратного лизинга: налоговая оптимизация, быстрое финансирование, сохранение активов в эксплуатации. Сравнение с кредитом.",
    "/benefits"
  );

  return (
    <Layout>
      <div className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-corporate-900 mb-8 font-display leading-tight">
              {benefits.title}
            </h1>
            <p className="text-2xl text-corporate-600 leading-relaxed font-light">
              {benefits.intro}
            </p>
          </div>
        </div>
      </div>

      <Section id="benefits-grid">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {benefits.items.map((item, index) => (
            <div key={index} className="bg-white border border-gray-100 p-12 rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 group">
              <div className="mb-8 bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                {getIconForBenefit(index)}
              </div>
              <h3 className="text-2xl font-bold text-corporate-900 mb-6 font-display leading-tight">{item.title}</h3>
              <p className="text-lg text-corporate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="comparison" dark>
        <div className="bg-white rounded-[60px] p-8 md:p-20 shadow-2xl border border-gray-100">
          <h3 className="text-4xl md:text-5xl font-bold text-corporate-900 mb-12 font-display">{benefits.comparison.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  {benefits.comparison.headers.map((header, index) => (
                    <th key={index} className="p-8 font-bold text-lg uppercase tracking-widest text-corporate-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {benefits.comparison.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-50/50 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className={`p-8 text-xl text-corporate-800 ${cellIndex === 0 ? 'font-bold' : ''}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-12 p-10 bg-accent/5 rounded-3xl border-l-8 border-accent">
            <p className="text-2xl text-corporate-900 font-bold italic leading-relaxed">
              {benefits.comparison.conclusion}
            </p>
          </div>
        </div>
      </Section>

      <Section id="targets">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-4xl font-bold text-corporate-900 mb-10 font-display">Кому особенно подходит инструмент</h3>
            <ul className="space-y-6">
              {benefits.targets.map((target, index) => (
                <li key={index} className="flex items-start gap-6">
                  <div className="bg-accent/10 p-2 rounded-lg mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  </div>
                  <span className="text-2xl text-corporate-700 font-medium leading-tight">{target}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <LeadCTA dark />
    </Layout>
  );
};

export default Benefits;
