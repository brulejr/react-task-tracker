import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const LOCALES_URL = `${process.env.REACT_APP_I18N_URL}/locales`

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${LOCALES_URL}/{{lng}}`
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

  export default i18n
