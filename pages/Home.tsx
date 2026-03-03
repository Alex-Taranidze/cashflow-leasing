import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { FAQItem } from '../components/FAQItem';
import { HeroLeadForm } from '../components/HeroLeadForm';
import { LeadCTA } from '../components/LeadCTA';
import { useLeadModal } from '../components/LeadModal';
import { CONFIG } from '../constants/config';
import { homeContent } from '../content/home';
import { useSEO } from '../hooks/useSEO';
import { HomeCalculator } from '../components/HomeCalculator';
import { AssetGrid } from '../components/AssetGrid';
import { 
  ArrowRight,
  Send,
  MessageCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const { openModal } = useLeadModal();
  const { seo, hero, faq } = homeContent;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Cashflow",
        "url": "https://cashflow.ru",
        "logo": "https://cashflow.ru/logo.svg",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+74950000000",
          "areaServed": "RU"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faq.items.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  useSEO(seo.title, seo.description, '/', schema);

  return (
    <Layout>
      {/* 1. HERO */}
      <div id="hero" className="bg-white min-h-[calc(100vh-80px)] flex items-center overflow-hidden relative py-12 md:py-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl relative z-10">
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-corporate-900 leading-[0.95] tracking-tight mb-6 md:mb-8 font-display">
                {hero.title}
              </h1>
              <p className="text-xl md:text-3xl text-corporate-500 font-light mb-6 md:mb-8 leading-tight">
                {hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openModal}
                  className="inline-flex justify-center items-center px-8 py-4 md:px-10 md:py-5 bg-accent text-white hover:bg-accent-hover transition-all duration-300 rounded-2xl font-bold text-lg md:text-xl shadow-2xl shadow-red-500/30 hover:-translate-y-1 gap-3"
                >
                  <ArrowRight size={24} />
                  Оставить заявку
                </button>
                <a 
                  href={CONFIG.TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-4 md:px-10 md:py-5 bg-[#229ED9] text-white hover:bg-[#1c80b0] transition-all duration-300 rounded-2xl font-bold text-lg md:text-xl shadow-2xl shadow-blue-500/30 hover:-translate-y-1 gap-3"
                >
                  <Send size={24} />
                  Telegram
                </a>
                <a 
                  href={CONFIG.MAX_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-4 md:px-10 md:py-5 bg-[#0056b3] text-white hover:bg-[#004494] transition-all duration-300 rounded-2xl font-bold text-lg md:text-xl shadow-2xl shadow-blue-500/30 hover:-translate-y-1 gap-3"
                >
                  <MessageCircle size={24} />
                  Max
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end relative z-10">
               <HeroLeadForm />
            </div>
          </div>
        </div>
      </div>

      {/* 2. QUICK CALCULATOR HOOK */}
      <Section id="quick-calculator" className="py-12 md:py-20">
        <HomeCalculator />
      </Section>

      {/* 4. ASSET SELECTOR */}
      <Section id="assets" dark>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-corporate-900 font-display">Выберите нужную технику</h2>
        </div>
        <AssetGrid />
      </Section>

      {/* 9. FAQ */}
      <Section id="faq">
        <SectionTitle subtitle>{faq.title}</SectionTitle>
        <div className="max-w-3xl mx-auto">
          {faq.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Section>

      <LeadCTA dark />
    </Layout>
  );
};

export default Home;