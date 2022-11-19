import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <p>{t('page.framework.copyright')}</p>
      <Link to="/about">{t('page.framework.links.about')}</Link>
    </footer>
  )
}

export default Footer
