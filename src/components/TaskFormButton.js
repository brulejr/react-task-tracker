import { Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { toggleShowTaskForm } from '../redux/actions'

const TaskFormButton = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer)
  const { showTaskForm } = taskReducer

  const onToggleShowTaskForm = () => {
    dispatch(toggleShowTaskForm(showTaskForm))
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <Button 
      floated='right' 
      color={showTaskForm ? 'black' : 'blue'}
      content={showTaskForm ? t('page.framework.buttons.close') : t('page.framework.buttons.add')}
      onClick={() => onToggleShowTaskForm()} />
  )
}

export default TaskFormButton
