import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function InProgress() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{t('in-progress')}</h1>
      <ul className="list-disc pl-5">
        <li><Link to={`/${lang}/in-progress/rajm`} className="text-purple-400 hover:underline">Rajm</Link></li>
        <li><Link to={`/${lang}/in-progress/teabag`} className="text-purple-400 hover:underline">Teabag</Link></li>
      </ul>
    </div>
  );
}

export default InProgress;
