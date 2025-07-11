import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "about": "About",
          "works": "Works",
          "in-progress": "In Progress",
          "essays": "Essays",
          "cv": "CV",
          "contacts": "Contacts",
          "privacy-policy": "Privacy Policy",
          "welcome": "Welcome to Yzma's Portfolio",
          "description": "A fusion of art and quantum mechanics"
        }
      },
      ru: {
        translation: {
          "about": "О проекте",
          "works": "Работы",
          "in-progress": "В процессе",
          "essays": "Эссе",
          "cv": "Резюме",
          "contacts": "Контакты",
          "privacy-policy": "Политика конфиденциальности",
          "welcome": "Добро пожаловать в портфолио Yzma",
          "description": "Слияние искусства и квантовой механики"
        }
      }
    },
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
