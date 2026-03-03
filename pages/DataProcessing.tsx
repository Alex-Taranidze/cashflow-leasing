import React from 'react';
import { Layout } from '../components/Layout';
import { Section } from '../components/Section';
import { useSEO } from '../hooks/useSEO';

const DataProcessing: React.FC = () => {
  useSEO(
    "Политика обработки данных — Cashflow",
    "Политика в отношении обработки персональных данных.",
    "/data-processing"
  );

  return (
    <Layout>
      <div className="bg-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-corporate-900 mb-8 font-display tracking-tight">Политика обработки персональных данных</h1>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-10 md:p-16 rounded-[40px] border border-gray-100 shadow-sm">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-corporate-400 font-bold uppercase tracking-widest text-xs mb-12">Дата публикации: 01.01.2025</p>
              
              <h3 className="text-2xl font-bold text-corporate-900 font-display mb-6">1. Введение</h3>
              <p className="text-corporate-600 leading-relaxed mb-10">
                Настоящая политика разработана в соответствии с Федеральным законом от 27.07.2006 г. № 152-ФЗ «О персональных данных».
              </p>

              <h3 className="text-2xl font-bold text-corporate-900 font-display mb-6">2. Цели обработки</h3>
              <p className="text-corporate-600 leading-relaxed mb-10">
                Сайт Cashflow является информационным ресурсом и не производит сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных пользователей.
              </p>

              <h3 className="text-2xl font-bold text-corporate-900 font-display mb-6">3. Безопасность</h3>
              <p className="text-corporate-600 leading-relaxed">
                Мы предпринимаем необходимые организационные и технические меры для защиты любой информации от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default DataProcessing;