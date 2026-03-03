import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { LeadCTA } from '../components/LeadCTA';
import { LeadForm } from '../components/LeadForm';
import { CONFIG } from '../constants/config';
import { useSEO } from '../hooks/useSEO';
import { 
  Calculator, 
  Send, 
  Info, 
  PieChart, 
  Coins, 
  TrendingDown,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CalculatorPage: React.FC = () => {
  useSEO(
    "Лизинговый калькулятор онлайн — расчёт возвратного лизинга | Cashflow",
    "Рассчитайте условия возвратного лизинга для бизнеса. Калькулятор платежей, экономия на налогах (НДС 22%, прибыль 25%), график выплат. Без банков.",
    "/calculator"
  );

  // Default values
  const [price, setPrice] = useState(5200000);
  const [advanceRate, setAdvanceRate] = useState(10); // %
  const [term, setTerm] = useState(60); // months

  // Calculated values
  const [results, setResults] = useState({
    monthlyPayment: 0,
    totalCost: 0,
    contractAmount: 0,
    vatRefund: 0,
    taxSavings: 0,
    advanceAmount: 0
  });

  useEffect(() => {
    // Financial Constants
    const VAT_RATE = 0.22; // 22%
    const PROFIT_TAX_RATE = 0.25; // 25%
    const ANNUAL_RATE = 0.19; // Estimated annual appreciation rate for calculation

    // 1. Advance Amount
    const advanceAmount = Math.round(price * (advanceRate / 100));

    // 2. Financed Amount (Body of lease)
    const financedAmount = price - advanceAmount;

    // 3. Monthly Payment Calculation (Annuity estimation)
    // Monthly interest rate
    const monthlyRate = ANNUAL_RATE / 12;
    // Annuity coefficient
    const k = (monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    
    const monthlyPayment = Math.round(financedAmount * k);

    // 4. Contract Amount (Advance + Sum of all payments)
    const contractAmount = advanceAmount + (monthlyPayment * term);

    // 5. Total Cost (Overpayment is implied in contract amount vs price)
    // In leasing "Total Cost" usually refers to the Contract Amount
    
    // 6. VAT Refund
    // Formula: Contract Amount includes VAT. Refund = Contract / (1 + VAT) * VAT
    const vatRefund = Math.round((contractAmount / (1 + VAT_RATE)) * VAT_RATE);

    // 7. Profit Tax Savings
    // Expenses (excl. VAT) = (Contract Amount - VAT Refund)
    // Savings = Expenses * Profit Tax Rate
    const expenses = contractAmount - vatRefund;
    const taxSavings = Math.round(expenses * PROFIT_TAX_RATE);

    setResults({
      monthlyPayment,
      totalCost: contractAmount,
      contractAmount,
      vatRefund,
      taxSavings,
      advanceAmount
    });

  }, [price, advanceRate, term]);

  const formatCurrency = (val: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(val);

  const telegramCalcUrl = "https://t.me/cashflow_expert?text=" + encodeURIComponent("Здравствуйте, меня интересует возвратный лизинг. Я сделал расчёт на сайте Cashflow.");

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-white pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex items-center text-[10px] text-corporate-400 font-bold uppercase tracking-[0.2em] space-x-3">
              <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-corporate-900">Калькулятор</span>
           </div>
        </div>
      </div>

      <div className="bg-white min-h-screen py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-corporate-900 mb-8 font-display tracking-tight">
              Лизинговый калькулятор
            </h1>
            <p className="text-2xl text-corporate-500 font-light max-w-3xl mx-auto leading-tight">
              Рассчитайте ориентировочные условия возвратного лизинга для бизнеса с учетом налоговых преференций 2025 года.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: CONTROLS */}
            <div className="lg:col-span-7 bg-gray-50 p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="space-y-16">
                
                {/* Price Input */}
                <div>
                  <div className="flex justify-between items-end mb-8">
                    <label className="text-xs font-bold text-corporate-400 uppercase tracking-widest">
                      Стоимость актива (с НДС)
                    </label>
                    <div className="text-right flex items-baseline">
                       <input 
                         type="number"
                         value={price}
                         onChange={(e) => setPrice(Number(e.target.value))}
                         className="text-right font-bold text-4xl text-corporate-900 bg-transparent border-b-2 border-gray-200 focus:border-accent outline-none w-64 py-2 font-display transition-colors"
                       />
                       <span className="text-corporate-400 ml-3 text-2xl font-display">₽</span>
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="1000000" 
                    max="20000000" 
                    step="100000"
                    value={price} 
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent hover:accent-accent-hover transition-all"
                  />
                  <div className="flex justify-between text-[10px] text-corporate-400 mt-4 font-bold uppercase tracking-widest">
                    <span>1 млн ₽</span>
                    <span>20 млн ₽</span>
                  </div>
                </div>

                {/* Advance Input */}
                <div>
                  <div className="flex justify-between items-end mb-8">
                    <label className="text-xs font-bold text-corporate-400 uppercase tracking-widest">
                      Аванс ({advanceRate}%)
                    </label>
                    <div className="text-right font-bold text-4xl text-corporate-900 font-display">
                      {formatCurrency(results.advanceAmount)}
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="50" 
                    step="1"
                    value={advanceRate} 
                    onChange={(e) => setAdvanceRate(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent hover:accent-accent-hover transition-all"
                  />
                  <div className="flex justify-between text-[10px] text-corporate-400 mt-4 font-bold uppercase tracking-widest">
                    <span>5%</span>
                    <span>50%</span>
                  </div>
                </div>

                {/* Term Input */}
                <div>
                  <div className="flex justify-between items-end mb-8">
                    <label className="text-xs font-bold text-corporate-400 uppercase tracking-widest">
                      Срок лизинга
                    </label>
                    <div className="text-right font-bold text-4xl text-corporate-900 font-display">
                      {term} мес.
                    </div>
                  </div>
                  <input 
                    type="range" 
                    min="12" 
                    max="60" 
                    step="1"
                    value={term} 
                    onChange={(e) => setTerm(Number(e.target.value))}
                    className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent hover:accent-accent-hover transition-all"
                  />
                  <div className="flex justify-between text-[10px] text-corporate-400 mt-4 font-bold uppercase tracking-widest">
                    <span>12 мес.</span>
                    <span>60 мес.</span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="bg-white p-8 rounded-3xl flex gap-6 text-base text-corporate-600 border border-gray-100 shadow-sm">
                  <Info className="flex-shrink-0 text-accent w-6 h-6" />
                  <p className="leading-relaxed">
                    Параметры сделки могут быть скорректированы после анализа финансового состояния компании и оценки ликвидности предмета лизинга.
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: RESULTS */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-corporate-900 text-white p-10 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden">
                {/* Decorative bg element */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
                
                <h3 className="text-xs font-bold text-corporate-400 uppercase tracking-[0.3em] mb-12 flex items-center gap-3 relative z-10">
                  <Calculator size={16} className="text-accent" />
                  Наше предложение
                </h3>

                <div className="mb-16 relative z-10">
                  <span className="block text-xs text-corporate-400 uppercase tracking-widest mb-4">
                    Ежемесячный платёж
                  </span>
                  <span className="block text-5xl md:text-6xl font-bold text-white tracking-tight font-display">
                    {formatCurrency(results.monthlyPayment)}
                  </span>
                  <span className="text-sm text-accent mt-4 block font-medium">
                    Включая НДС 22%
                  </span>
                </div>

                <div className="space-y-6 border-t border-corporate-800 pt-10 mb-12 relative z-10">
                  <div className="flex justify-between items-center text-base">
                    <span className="text-corporate-400">Сумма договора лизинга</span>
                    <span className="font-bold font-display">{formatCurrency(results.contractAmount)}</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-corporate-400 flex items-center gap-2">
                      <TrendingDown size={16} className="text-accent"/> Возмещение НДС (22%)
                    </span>
                    <span className="font-bold font-display text-accent">{formatCurrency(results.vatRefund)}</span>
                  </div>
                  <div className="flex justify-between items-center text-base">
                    <span className="text-corporate-400 flex items-center gap-2">
                      <PieChart size={16} className="text-accent"/> Экономия по налогу (25%)
                    </span>
                    <span className="font-bold font-display text-accent">{formatCurrency(results.taxSavings)}</span>
                  </div>
                </div>

                <a 
                  href={telegramCalcUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-hover text-white font-bold py-6 px-10 rounded-2xl transition-all duration-300 shadow-2xl shadow-red-500/30 transform hover:-translate-y-1 text-xl relative z-10"
                >
                  <Send size={20} />
                  Получить расчёт
                </a>
                
                <p className="text-[10px] text-corporate-600 mt-10 text-center leading-relaxed uppercase tracking-widest relative z-10">
                  Расчёт является ориентировочным и не является публичной офертой (ст. 437 ГК РФ).
                </p>
              </div>

              {/* Benefits Summary */}
              <div className="bg-gray-50 p-10 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                   <div className="p-3 bg-white rounded-xl text-emerald-500 shadow-sm">
                     <Coins size={24} />
                   </div>
                   <h4 className="font-bold text-corporate-900 text-xl font-display">Налоговая выгода</h4>
                </div>
                <p className="text-base text-corporate-600 mb-4 relative z-10 leading-relaxed">
                  Общая сумма налоговых преференций за весь срок лизинга:
                </p>
                <p className="text-4xl font-bold text-emerald-600 font-display relative z-10">
                  {formatCurrency(results.vatRefund + results.taxSavings)}
                </p>
              </div>

            </div>
          </div>

          {/* SEO Text Block */}
          <Section className="mt-20">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-2xl text-corporate-500 leading-relaxed font-light italic">
                «Лизинговый калькулятор Cashflow помогает бизнесу оценить выгоду возвратного лизинга, сравнить экономическую эффективность инструмента с классическим кредитованием и принять взвешенное решение. Мы учитываем актуальные налоговые ставки РФ, чтобы вы видели реальную стоимость денег для вашего бизнеса.»
              </p>
            </div>
          </Section>

          {/* Inline Application Form */}
          <div className="max-w-3xl mx-auto mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-corporate-900 mb-4 font-display">Получить точный расчёт</h2>
              <p className="text-xl text-corporate-500 font-light">Оставьте заявку, и наш эксперт подготовит для вас индивидуальное предложение.</p>
            </div>
            <LeadForm inline />
          </div>

        </div>
      </div>
      
      <LeadCTA dark />
    </Layout>
  );
};

export default CalculatorPage;