import React from 'react';
import { useTranslation } from 'react-i18next';

function Essays() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{t('essays')}</h1>
      <p className="mb-4">Здесь будут опубликованы мои размышления о связи искусства и науки. Проверяйте обновления!</p>
    </div>
  );
}

export default Essays;
