import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';

export const HomeCalculator: React.FC = () => {
  const [price, setPrice] = useState(5000000);
  const [advance, setAdvance] = useState(10); // percentage
  const [term, setTerm] = useState(36);

  const advanceAmount = (price * advance) / 100;
  const financedAmount = price - advanceAmount;
  const monthlyRate = 0.15 / 12; // 15% annual rate placeholder
  const monthlyPayment = Math.round(
    (financedAmount * monthlyRate * Math.pow(1 + monthlyRate, term)) /
    (Math.pow(1 + monthlyRate, term) - 1)
  );

  return (
    <div className="bg-white rounded-[40px] border border-gray-100 shadow-2xl p-8 md:p-12">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-accent/10 rounded-2xl">
          <Calculator className="text-accent w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-corporate-900 font-display">Рассчитайте свой платёж</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          {/* Price */}
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-[10px] text-corporate-400 font-bold uppercase tracking-[0.2em]">Стоимость актива</label>
              <span className="text-xl font-bold text-corporate-900 font-display">{price.toLocaleString()} ₽</span>
            </div>
            <input
              type="range"
              min="500000"
              max="50000000"
              step="100000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>

          {/* Advance */}
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-[10px] text-corporate-400 font-bold uppercase tracking-[0.2em]">Аванс {advance}%</label>
              <span className="text-xl font-bold text-corporate-900 font-display">{advanceAmount.toLocaleString()} ₽</span>
            </div>
            <input
              type="range"
              min="0"
              max="50"
              step="5"
              value={advance}
              onChange={(e) => setAdvance(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>

          {/* Term */}
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-[10px] text-corporate-400 font-bold uppercase tracking-[0.2em]">Срок лизинга</label>
              <span className="text-xl font-bold text-corporate-900 font-display">{term} мес.</span>
            </div>
            <input
              type="range"
              min="12"
              max="60"
              step="6"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-accent"
            />
          </div>
        </div>

        <div className="bg-corporate-900 rounded-[32px] p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div>
            <p className="text-corporate-400 text-sm font-medium mb-2">Ежемесячный платёж</p>
            <p className="text-5xl font-bold text-accent font-display mb-8">
              {monthlyPayment.toLocaleString()} <span className="text-2xl">₽</span>
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex justify-between py-3 border-b border-white/10">
                <span className="text-corporate-400 text-sm">Сумма договора</span>
                <span className="font-bold">{(monthlyPayment * term + advanceAmount).toLocaleString()} ₽</span>
              </div>
              <div className="flex justify-between py-3 border-b border-white/10">
                <span className="text-corporate-400 text-sm">Налоговая выгода</span>
                <span className="font-bold text-emerald-400">до {Math.round((monthlyPayment * term) * 0.4).toLocaleString()} ₽</span>
              </div>
            </div>
          </div>

          <Link
            to="/calculator"
            className="w-full py-5 bg-accent text-white rounded-2xl font-bold text-center hover:bg-accent-hover transition-all shadow-xl shadow-red-500/20 flex items-center justify-center gap-3 group"
          >
            Заполнить заявку
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};
