import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
  const location = useLocation()
  const { t } = useTranslation()

  return (
    <header className='header'>
      <h1>{t('page.framework.title')}</h1>
      { location.pathname === '/' && (
        <Button 
          color={showAdd ? 'steelblue' : 'green'}
          text={showAdd ? t('page.framework.buttons.close') : t('page.framework.buttons.add')}
          onClick={onAdd}/>
      )}
    </header>
  )
}

export default Header
