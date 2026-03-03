import React from 'react';
import { Layout } from '../components/Layout';
import { Section, SectionTitle } from '../components/Section';
import { CONFIG } from '../constants/config';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-corporate-900 mb-12 font-display leading-tight">
            ПОЛИТИКА В ОТНОШЕНИИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </h1>
          <p className="text-xl text-corporate-600 mb-12 font-light italic">
            Индивидуальный предприниматель Тараненко Александр Игоревич
          </p>

          <div className="prose prose-lg prose-slate max-w-none space-y-12 text-corporate-700 leading-relaxed font-light">
            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">1. Общие положения</h2>
              <div className="space-y-4">
                <p>1.1. Настоящий документ определяет политику ИП Тараненко А. И. (далее — Оператор) в отношении обработки персональных данных (далее — ПДн).</p>
                <p>1.2. Оператор является оператором ПДн в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».</p>
                <p>1.3. Политика разработана для обеспечения защиты прав и свобод человека при обработке его ПДн, в том числе защиты права на неприкосновенность частной жизни.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">2. Принципы обработки ПДн</h2>
              <div className="space-y-4">
                <p>2.1. Обработка осуществляется на законной и справедливой основе.</p>
                <p>2.2. Обработка ограничивается достижением конкретных, заранее определенных целей (сбор заявок на лизинг). Не допускается обработка, несовместимая с целями сбора.</p>
                <p>2.3. Обрабатываются только те ПДн, которые отвечают целям их обработки.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">3. Состав обрабатываемых данных</h2>
              <div className="space-y-4">
                <p>Оператор обрабатывает следующие данные, предоставляемые пользователем через формы на сайте:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Фамилия, Имя, Отчество;</li>
                  <li>ИНН компании и ее наименование;</li>
                  <li>Контактный номер телефона.</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">4. Правовые основания и цели обработки</h2>
              <div className="space-y-4">
                <p>4.1. Обработка ПДн осуществляется на основании согласия субъекта ПДн.</p>
                <p>4.2. Целью обработки является предоставление информационных услуг, консультаций по вопросам возвратного лизинга и передача заявок партнерам (лизинговым компаниям) для подготовки предложений.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">5. Порядок и условия обработки</h2>
              <div className="space-y-4">
                <p>5.1. Оператор осуществляет сбор, запись, систематизацию, накопление, хранение, уточнение, использование и уничтожение ПДн.</p>
                <p>5.2. ПДн хранятся исключительно на серверах на территории РФ.</p>
                <p>5.3. Оператор обязуется не раскрывать ПДн третьим лицам без согласия субъекта, кроме случаев, установленных законом.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">6. Права субъектов ПДн</h2>
              <div className="space-y-4">
                <p>6.1. Субъект имеет право на получение информации, касающейся обработки его ПДн, а также на их уточнение, блокирование или уничтожение, если данные являются неполными или неточными.</p>
                <p>6.2. Субъект вправе отозвать согласие на обработку ПДн в любое время.</p>
              </div>
            </section>

            <section className="pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-corporate-900 mb-6 font-display">Контактная информация</h2>
              <div className="space-y-4">
                <p>Запросы и уведомления направляются по адресу: <a href={`mailto:${CONFIG.EMAIL}`} className="text-accent font-bold">{CONFIG.EMAIL}</a>.</p>
                <p>Реквизиты: {CONFIG.OWNER.NAME}, ИНН {CONFIG.OWNER.INN}, ОГРНИП {CONFIG.OWNER.OGRNIP}.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
