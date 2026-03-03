import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQItem: React.FC<{ question: string, answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-4">
      <button
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 rounded-2xl border border-gray-100 shadow-card transition-all duration-300 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-corporate-900 group-hover:text-accent transition-colors">{question}</span>
        <div className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-accent text-white rotate-180' : 'bg-gray-50 text-corporate-400'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      {isOpen && (
        <div className="p-6 pt-2 text-corporate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};