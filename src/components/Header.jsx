import React from 'react';
import { Link, useParams } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const { lang } = useParams();

  return (
    <header className="fixed top-0 w-full bg-gray-800 p-4 z-10">
      <nav className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link to={`/${lang || 'en'}/about`} className="hover:text-purple-400">{t('about')}</Link></li>
          <li><Link to={`/${lang || 'en'}/works`} className="hover:text-purple-400">{t('works')}</Link></li>
          <li><Link to={`/${lang || 'en'}/in-progress`} className="hover:text-purple-400">{t('in-progress')}</Link></li>
          <li><Link to={`/${lang || 'en'}/essays`} className="hover:text-purple-400">{t('essays')}</Link></li>
          <li><Link to={`/${lang || 'en'}/cv`} className="hover:text-purple-400">{t('cv')}</Link></li>
          <li><Link to={`/${lang || 'en'}/contacts`} className="hover:text-purple-400">{t('contacts')}</Link></li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
