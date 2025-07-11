import React from 'react';
import { useTranslation } from 'react-i18next';

function Index() {
  const { t } = useTranslation();

  return (
    <div className="p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
      <p className="mb-4">{t('description')}</p>
      <p>Исследуйте мои работы и идеи на этом сайте.</p>
    </div>
  );
}

export default Index;
