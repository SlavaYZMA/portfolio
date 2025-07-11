import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{t('about')}</h1>
      <p className="mb-4">
        {t('welcome')}. Я, Yzma, исследую пересечение искусства и квантовой механики, создавая интерактивные работы, которые бросают вызов восприятию реальности.
      </p>
      <p>
        Мои проекты, такие как «Квантовые портреты», сочетают алгоритмы и эмоции, превращая зрителя в соавтора.
      </p>
    </div>
  );
}

export default About;
