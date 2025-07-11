import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const newPath = location.pathname.replace(/\/(en|ru)/, `/${lng}`);
    navigate(newPath);
  };

  return (
    <div className="space-x-2">
      <button onClick={() => changeLanguage('en')} className="hover:text-purple-400">EN</button>
      <button onClick={() => changeLanguage('ru')} className="hover:text-purple-400">RU</button>
    </div>
  );
}

export default LanguageSwitcher;
