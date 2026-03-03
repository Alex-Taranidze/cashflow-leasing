import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { FAQItem } from '../components/FAQItem';
import { ContactBlock } from '../components/ContactBlock';
import { finansirovanieContent } from '../content/finansirovanie';
import { useSEO } from '../hooks/useSEO';
import { 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Coins
} from 'lucide-react';

const Finansirovanie: React.FC = () => {
  const { seo, hero, whyNeedMoney, methods, creditLimitations, backLeasing, assets, relevance, faq } = finansirovanieContent;
  const telegramUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг");

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  useSEO(seo.title, seo.description, '/finansirovanie-biznesa', schema);

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-white pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-[10px] text-corporate-400 font-bold uppercase tracking-[0.2em] space-x-3">
              <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-corporate-900">Финансирование бизнеса</span>
           </div>
        </div>
      </div>

      {/* 1. HERO */}
      <div className="bg-white pt-12 pb-24 md:pt-20 md:pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50 text-accent text-xs font-bold uppercase tracking-widest mb-10 border border-gray-100">
              <Coins size={16} />
              {hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-corporate-900 leading-[0.9] tracking-tight mb-8 font-display">
              {hero.title}
            </h1>
            <p className="text-2xl md:text-3xl text-corporate-500 font-light mb-10 leading-tight">
              {hero.subtitle}
            </p>
            <p className="text-lg md:text-xl text-corporate-600 max-w-2xl leading-relaxed mb-12">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-10 py-5 bg-accent text-white hover:bg-accent-hover transition-all duration-300 rounded-2xl font-bold text-xl shadow-2xl shadow-red-500/30 hover:-translate-y-1"
              >
                {hero.ctaPrimary}
              </a>
              <Link 
                to="/calculator"
                className="inline-flex justify-center items-center px-10 py-5 border-2 border-gray-100 text-corporate-900 hover:border-corporate-900 hover:bg-corporate-900 hover:text-white transition-all duration-300 rounded-2xl font-bold text-xl"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. WHY NEED MONEY */}
      <Section>
        <div className="max-w-4xl">
          <SectionTitle>{whyNeedMoney.title}</SectionTitle>
          <div className="space-y-6 text-corporate-700 text-lg leading-relaxed font-light">
            {whyNeedMoney.text.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* 3. METHODS */}
      <Section dark>
        <SectionTitle subtitle>{methods.title}</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {methods.items.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-card flex gap-8 hover:shadow-xl transition-all duration-300 group">
              <div className="shrink-0">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-corporate-900 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-corporate-900 mb-4 font-display">{item.title}</h3>
                <p className="text-base text-corporate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. WHY CREDIT IS NOT FOR EVERYONE */}
      <Section>
        <div className="bg-white border border-gray-100 p-10 md:p-12 rounded-3xl shadow-card max-w-4xl border-l-[12px] border-accent">
          <h2 className="text-3xl font-bold text-corporate-900 mb-8 flex items-center gap-4 font-display">
            <div className="p-3 bg-red-50 rounded-xl">
              <AlertTriangle className="text-accent w-8 h-8" />
            </div>
            {creditLimitations.title}
          </h2>
          <div className="space-y-6 text-xl text-corporate-700 leading-relaxed font-light">
            <p>{creditLimitations.text}</p>
            <p>{creditLimitations.subText}</p>
          </div>
        </div>
      </Section>

      {/* 5. BACK LEASING ALTERNATIVE */}
      <Section dark>
        <div className="max-w-4xl">
          <SectionTitle subtitle>{backLeasing.title}</SectionTitle>
          <div className="space-y-8 text-2xl text-corporate-700 leading-tight font-light mb-12">
            <p>{backLeasing.text}</p>
            <p className="text-corporate-900 font-bold font-display">{backLeasing.subText}</p>
          </div>
          <Link to="/" className="inline-flex items-center text-corporate-900 font-bold hover:text-accent text-lg transition-colors border-b-2 border-transparent hover:border-accent pb-1">
             Подробнее о возвратном лизинге <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </Section>

      {/* 6. ASSETS */}
      <Section>
        <SectionTitle subtitle>{assets.title}</SectionTitle>
        <div className="grid md:grid-cols-4 gap-8">
          {assets.items.map((item, index) => (
            <Link 
              key={index}
              to={item.link} 
              className="group bg-white p-8 border border-gray-100 rounded-2xl block hover:border-accent hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/5 transition-colors duration-500"></div>
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-8 h-8 transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
                </div>
                <ArrowRight className="w-5 h-5 text-corporate-300 group-hover:text-accent transition-all group-hover:translate-x-1" />
              </div>
              <h3 className="text-xl font-bold text-corporate-900 mb-3 font-display relative z-10">{item.title}</h3>
              <p className="text-sm text-corporate-500 leading-relaxed relative z-10">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. RELEVANCE */}
      <Section dark>
        <SectionTitle subtitle>{relevance.title}</SectionTitle>
        <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-card max-w-4xl">
          <ul className="space-y-6">
            {relevance.items.map((item, index) => (
              <li key={index} className="flex items-start gap-5">
                <CheckCircle2 className="w-7 h-7 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xl text-corporate-800 font-medium leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section>
        <SectionTitle subtitle>{faq.title}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {faq.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>

      {/* 9. CTA - REPLACED */}
      <ContactBlock />
    </Layout>
  );
};

export default Finansirovanie;