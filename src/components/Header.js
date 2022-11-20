import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { toggleShowAddTask } from '../redux/actions'
import Button from './Button'

const Header = () => {
  const location = useLocation()
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer);
  const { showAddTask } = taskReducer

  const onToggleShowAddTask = () => {
    dispatch(toggleShowAddTask(showAddTask))
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <header className='header'>
      <h1>{t('page.framework.title')}</h1>
      { location.pathname === '/' && (
        <Button 
          color={showAddTask ? 'steelblue' : 'green'}
          text={showAddTask ? t('page.framework.buttons.close') : t('page.framework.buttons.add')}
          onClick={() => onToggleShowAddTask()}/>
      )}
    </header>
  )
}

export default Header
