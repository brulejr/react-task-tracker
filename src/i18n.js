import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'http://localhost:5000/locales/{{lng}}'
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

  export default i18n
