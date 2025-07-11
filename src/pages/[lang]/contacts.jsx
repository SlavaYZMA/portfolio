import React from 'react';
import { useTranslation } from 'react-i18next';

function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{t('contacts')}</h1>
      <p className="mb-4">Свяжитесь со мной для сотрудничества или вопросов:</p>
      <ul className="list-disc pl-5">
        <li>Email: yzma.art@science.com</li>
        <li>Instagram: @yzma_quantum</li>
      </ul>
    </div>
  );
}

export default Contacts;
