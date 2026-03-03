import React from 'react';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { CONFIG } from '../constants/config';

const Consent: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-900 mb-12 font-display leading-tight">
            СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </h1>

          <div className="prose prose-lg prose-slate max-w-none space-y-12 text-corporate-700 leading-relaxed font-light">
            <section>
              <p className="text-xl">
                Я, оставляя заявку на сайте <a href={`https://${CONFIG.DOMAIN}`} className="text-accent font-bold underline hover:no-underline">{CONFIG.DOMAIN}</a>, своей волей и в своем интересе даю согласие ИП Тараненко Александру Игоревичу (ИНН {CONFIG.OWNER.INN}, ОГРНИП {CONFIG.OWNER.OGRNIP}) на обработку моих персональных данных.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">Перечень данных</h2>
              <p>ФИО, номер контактного телефона, ИНН и наименование организации.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">Цель обработки</h2>
              <p>Получение консультационных услуг по вопросам возвратного лизинга, расчет предварительных условий финансирования и передача контактных данных партнерам-лизингодателям для подготовки предложения.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">Перечень действий</h2>
              <p>Сбор, запись, систематизацию, накопление, хранение на территории РФ, уточнение, использование, передача партнерам, уничтожение.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">Срок действия</h2>
              <p>Согласие действует с момента его предоставления до достижения целей обработки или до момента его отзыва.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">Порядок отзыва</h2>
              <p>Я уведомлен, что согласие может быть отозвано путем направления письменного заявления на электронную почту Оператора: <a href={`mailto:${CONFIG.EMAIL}`} className="text-accent font-bold">{CONFIG.EMAIL}</a>.</p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Consent;
