import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 p-4 text-center">
      <p>&copy; 2025 Yzma. All rights reserved.</p>
      <p>
        <a href="/privacy-policy" className="text-purple-400 hover:underline">
          {t('privacy-policy')}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
