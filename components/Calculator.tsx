import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

export const CalculatorBlock: React.FC<{ defaultType?: string }> = ({ defaultType = 'auto' }) => {
  const [assetType, setAssetType] = useState(defaultType);
  const [cost, setCost] = useState(5000000);
  const [term, setTerm] = useState(36);
  const [advance, setAdvance] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Estimating generic B2B leasing math (NOT a real offer)
    const annualRate = 0.19; 
    const years = term / 12;
    const financedAmount = cost - (cost * (advance / 100));
    const totalInterest = financedAmount * annualRate * years;
    const totalAmount = financedAmount + totalInterest;
    const monthly = totalAmount / term;
    
    setMonthlyPayment(Math.round(monthly));
  }, [cost, term, advance, assetType]);

  const formatCurrency = (val: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-white rounded-sm border border-corporate-200 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8 bg-corporate-50 border-b border-corporate-200">
        <h3 className="text-lg font-semibold text-corporate-900 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-corporate-600" />
          Калькулятор лизинговых платежей
        </h3>
      </div>
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-corporate-700 mb-2">Тип актива</label>
            <select 
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="w-full p-3 bg-white border border-corporate-300 rounded-sm text-corporate-900 focus:ring-1 focus:ring-corporate-500 focus:border-corporate-500 outline-none"
            >
              <option value="auto">Легковой автотранспорт</option>
              <option value="truck">Грузовой транспорт</option>
              <option value="special">Спецтехника</option>
              <option value="real_estate">Коммерческая недвижимость</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-corporate-700">Рыночная стоимость (с НДС)</label>
              <span className="text-sm font-bold text-corporate-900">{formatCurrency(cost)}</span>
            </div>
            <input 
              type="range" 
              min="1000000" 
              max="100000000" 
              step="500000"
              value={cost} 
              onChange={(e) => setCost(Number(e.target.value))}
              className="w-full h-2 bg-corporate-200 rounded-lg appearance-none cursor-pointer accent-corporate-900"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-corporate-700">Авансовый платеж</label>
              <span className="text-sm font-bold text-corporate-900">{advance}%</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="49" 
              step="1"
              value={advance} 
              onChange={(e) => setAdvance(Number(e.target.value))}
              className="w-full h-2 bg-corporate-200 rounded-lg appearance-none cursor-pointer accent-corporate-900"
            />
            <div className="mt-1 text-xs text-corporate-500">Сумма аванса: {formatCurrency(cost * (advance / 100))}</div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-corporate-700">Срок лизинга</label>
              <span className="text-sm font-bold text-corporate-900">{term} мес.</span>
            </div>
            <input 
              type="range" 
              min="12" 
              max="60" 
              step="1"
              value={term} 
              onChange={(e) => setTerm(Number(e.target.value))}
              className="w-full h-2 bg-corporate-200 rounded-lg appearance-none cursor-pointer accent-corporate-900"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center bg-corporate-50 p-6 rounded-sm border border-corporate-200">
          <div className="mb-8">
            <span className="block text-sm text-corporate-500 mb-1 uppercase tracking-wider">Предварительный ежемесячный платеж</span>
            <span className="block text-3xl md:text-4xl font-bold text-corporate-900 text-transparent bg-clip-text bg-gradient-to-r from-corporate-900 to-corporate-700">
              {formatCurrency(monthlyPayment)}
            </span>
            <span className="block text-xs text-corporate-400 mt-2">Включая НДС 22%</span>
          </div>
          
          <a href="#contact" className="w-full block text-center bg-corporate-900 text-white font-medium py-4 px-6 rounded-sm hover:bg-corporate-800 transition-colors">
            Получить консультацию по расчету
          </a>

          <div className="mt-6 text-[10px] text-corporate-400 leading-tight">
            <p>
              Внимание: Данный расчет носит исключительно информационный характер и не является публичной офертой. 
              Итоговый график платежей формируется после финансового анализа компании-лизингополучателя и оценки ликвидности предмета лизинга.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};