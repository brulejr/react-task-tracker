import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h4>{t('page.About.version', {version: '1.0.0'})}</h4>
      <Link to="/">{t('page.framework.links.returnToHome')}</Link>
    </div>
  )
}

export default About
