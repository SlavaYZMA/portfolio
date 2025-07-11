import React from 'react';
import { useTranslation } from 'react-i18next';

function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{t('privacy-policy')}</h1>
      <p className="mb-4">Мы уважаем вашу конфиденциальность. Этот сайт не собирает персональные данные.</p>
      <p>Для деталей свяжитесь с нами через страницу контактов.</p>
    </div>
  );
}

export default PrivacyPolicy;
