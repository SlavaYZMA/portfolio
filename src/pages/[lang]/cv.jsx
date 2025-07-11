import React from 'react';
import { useTranslation } from 'react-i18next';

function CV() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{t('cv')}</h1>
      <p className="mb-4">Yzma — художница и исследовательница, работающая на стыке квантовой физики и цифрового искусства.</p>
      <ul className="list-disc pl-5">
        <li>2023: Выставка «Квантовые грани», Берлин</li>
        <li>2024: Лекция в MIT о квантовом искусстве</li>
      </ul>
    </div>
  );
}

export default CV;
