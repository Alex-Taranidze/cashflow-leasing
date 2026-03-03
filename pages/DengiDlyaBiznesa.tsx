import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { ContactBlock } from '../components/ContactBlock';
import { dengiDlyaBiznesaContent } from '../content/dengiDlyaBiznesa';
import { useSEO } from '../hooks/useSEO';
import { 
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Landmark,
  Banknote,
  Users
} from 'lucide-react';

const DengiDlyaBiznesa: React.FC = () => {
  const { 
    seo, 
    hero, 
    financingMethods, 
    creditIssues, 
    leasebackDef, 
    assets, 
    taxes, 
    comparison, 
    who, 
    risks 
  } = dengiDlyaBiznesaContent;

  useSEO(seo.title, seo.description, '/dengi-dlya-biznesa');

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-white pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-[10px] text-corporate-400 font-bold uppercase tracking-[0.2em] space-x-3">
              <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-corporate-900">Деньги для бизнеса</span>
           </div>
        </div>
      </div>

      {/* 1. HERO - H1 */}
      <div className="bg-white pt-12 pb-24 md:pt-20 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50 text-accent text-xs font-bold uppercase tracking-widest mb-10 border border-gray-100">
              <Banknote size={16} />
              Финансирование
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-corporate-900 leading-[0.9] tracking-tight mb-12 font-display">
              {hero.title}
            </h1>
            <div className="space-y-8 text-2xl text-corporate-500 font-light leading-tight max-w-3xl">
              {hero.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. FINANCING METHODS */}
      <Section>
        <div className="max-w-4xl">
          <SectionTitle>{financingMethods.title}</SectionTitle>
          <p className="text-xl text-corporate-700 mb-10 font-light leading-relaxed">{financingMethods.intro}</p>
          <ul className="space-y-5 mb-12">
            {financingMethods.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-lg text-corporate-800 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-gray-50 p-10 rounded-2xl border-l-8 border-accent shadow-sm">
            <p className="text-xl text-corporate-900 font-bold font-display leading-relaxed">
              {financingMethods.conclusion}
            </p>
          </div>
        </div>
      </Section>

      {/* 3. CREDIT ISSUES */}
      <Section dark>
        <div className="max-w-4xl">
          <SectionTitle>{creditIssues.title}</SectionTitle>
          <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-card">
             <p className="text-xl text-corporate-700 mb-10 font-light leading-relaxed">{creditIssues.intro}</p>
             <ul className="space-y-6 mb-10">
               {creditIssues.items.map((item, index) => (
                 <li key={index} className="flex items-start gap-5 text-lg text-corporate-800 font-medium">
                   <AlertTriangle size={24} className="text-accent mt-0.5 flex-shrink-0" />
                   {item}
                 </li>
               ))}
             </ul>
             <div className="pt-8 border-t border-gray-100">
               <p className="text-corporate-500 text-base leading-relaxed">
                 {creditIssues.conclusion}
               </p>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. LEASEBACK DEFINITION */}
      <Section>
        <div className="max-w-4xl">
          <SectionTitle>{leasebackDef.title}</SectionTitle>
          <p className="text-xl text-corporate-700 mb-10 font-light leading-relaxed">{leasebackDef.intro}</p>
          <div className="bg-gray-50 border border-gray-100 p-10 rounded-3xl mb-10 shadow-sm">
            <ul className="space-y-6">
              {leasebackDef.items.map((item, index) => (
                <li key={index} className="flex items-center gap-5">
                   <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-lg font-bold text-accent flex-shrink-0 border border-gray-100">
                     {index + 1}
                   </div>
                   <span className="text-xl text-corporate-900 font-bold font-display">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-2xl text-corporate-800 font-light leading-tight">
            {leasebackDef.conclusion}
          </p>
        </div>
      </Section>

      {/* 5. ASSETS */}
      <Section dark>
        <SectionTitle>{assets.title}</SectionTitle>
        <p className="text-xl text-corporate-700 mb-12 max-w-4xl font-light leading-relaxed">{assets.intro}</p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {assets.items.map((item, index) => (
            <div key={index} className="bg-white p-10 border border-gray-100 rounded-2xl shadow-card flex items-start gap-6 hover:shadow-xl transition-all duration-300 group">
              <div className="p-4 bg-gray-50 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <item.icon className="w-8 h-8 flex-shrink-0" strokeWidth={1.5} />
              </div>
              <span className="text-xl text-corporate-900 font-bold font-display pt-2 leading-tight">{item.text}</span>
            </div>
          ))}
        </div>
        <p className="text-lg text-corporate-600 max-w-4xl leading-relaxed">
          {assets.conclusion}
        </p>
      </Section>

      {/* 6. TAXES */}
      <Section>
        <div className="max-w-4xl">
          <SectionTitle>{taxes.title}</SectionTitle>
          <p className="text-xl text-corporate-700 mb-10 font-light leading-relaxed">{taxes.intro}</p>
          <ul className="space-y-6 mb-12">
            {taxes.items.map((item, index) => (
              <li key={index} className="flex items-start gap-5">
                <CheckCircle2 size={28} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span className="text-xl text-corporate-800 font-medium leading-tight">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-corporate-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <p className="text-lg text-corporate-100 leading-relaxed relative z-10">
              {taxes.conclusion}
            </p>
          </div>
        </div>
      </Section>

      {/* 7. COMPARISON TABLE */}
      <Section dark>
        <SectionTitle>{comparison.title}</SectionTitle>
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  {comparison.headers.map((header, index) => (
                    <th key={index} className="p-6 text-xs font-bold text-corporate-400 uppercase tracking-[0.2em] border-b border-gray-200">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {comparison.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="group hover:bg-white transition-colors duration-200">
                    {row.map((cell, cellIndex) => (
                      <td 
                        key={cellIndex} 
                        className={`p-6 text-lg text-corporate-800 ${cellIndex === 0 ? 'font-bold font-display' : 'font-light'}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 8. WHO */}
      <Section>
        <div className="max-w-4xl">
          <SectionTitle>{who.title}</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-6">
            {who.items.map((item, index) => (
              <div key={index} className="flex items-center gap-5 p-8 bg-white border border-gray-100 rounded-2xl shadow-card hover:shadow-xl transition-all duration-300">
                 <div className="p-3 bg-gray-50 rounded-xl">
                   <Users size={24} className="text-accent" />
                 </div>
                 <span className="text-xl text-corporate-900 font-bold font-display leading-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 9. RISKS */}
      <Section dark>
        <div className="max-w-4xl">
          <SectionTitle>{risks.title}</SectionTitle>
          <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-card border-l-[12px] border-accent">
            <p className="text-xl text-corporate-700 mb-8 font-light leading-relaxed">{risks.intro}</p>
            <ul className="space-y-5 mb-10">
              {risks.items.map((item, index) => (
                <li key={index} className="flex items-start gap-5 text-lg text-corporate-800 font-medium">
                  <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-gray-100">
              <p className="text-corporate-500 italic text-base leading-relaxed">
                {risks.conclusion}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. CTA */}
      <ContactBlock />
    </Layout>
  );
};

export default DengiDlyaBiznesa;