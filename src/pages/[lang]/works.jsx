import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

function Works() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-4">{t('works')}</h1>
      <ul className="list-disc pl-5">
        <li><Link to={`/${lang}/works/quantum-portraits`} className="text-purple-400 hover:underline">Quantum Portraits</Link></li>
        <li><Link to={`/${lang}/works/sensitivity`} className="text-purple-400 hover:underline">Sensitivity</Link></li>
      </ul>
    </div>
  );
}

export default Works;
