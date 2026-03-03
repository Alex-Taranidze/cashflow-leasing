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
  FileText,
  Scale,
  TrendingUp,
  PieChart,
  ShieldCheck
} from 'lucide-react';

const TaxBenefits: React.FC = () => {
  const { taxes } = homeContent;
  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  useSEO(
    "Налоги и бухгалтерский учет при лизинге — Cashflow",
    "Узнайте о налоговых выгодах лизинга: возмещение НДС, уменьшение налога на прибыль, ускоренная амортизация. Экономия до 40% на налогах.",
    "/tax-benefits"
  );

  return (
    <Layout>
      <div className="bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-corporate-900 mb-8 font-display leading-tight">
              {taxes.title}
            </h1>
            <div className="flex items-start gap-8 bg-gray-50 p-12 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="p-6 bg-white rounded-3xl shadow-xl flex-shrink-0">
                <FileText className="w-12 h-12 text-accent" />
              </div>
              <p className="text-2xl text-corporate-800 leading-relaxed font-light">
                {taxes.intro}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section id="tax-details">
        <div className="grid md:grid-cols-2 gap-12">
          {taxes.details && taxes.details.map((detail, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-[40px] p-12 shadow-card hover:shadow-2xl transition-all duration-500 group">
              <h3 className="text-3xl font-bold text-corporate-900 mb-10 flex items-center gap-6 font-display">
                <div className="w-4 h-4 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                {detail.title}
              </h3>
              <ul className="space-y-6">
                {detail.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-6">
                    <div className="bg-accent/10 p-2 rounded-lg mt-1">
                      <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    </div>
                    <span className="text-xl text-corporate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section id="legal" dark>
        <div className="max-w-5xl mx-auto">
          <div className="bg-corporate-900 p-12 md:p-20 rounded-[60px] flex flex-col md:flex-row gap-12 items-center shadow-2xl">
            <div className="p-8 bg-white/10 rounded-[40px] backdrop-blur-xl">
              <Scale className="w-16 h-16 text-accent" />
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-6 font-display">{taxes.legal.title}</h4>
              <p className="text-2xl text-corporate-400 leading-relaxed font-light">
                {taxes.legal.text}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <LeadCTA dark />
    </Layout>
  );
};

export default TaxBenefits;
