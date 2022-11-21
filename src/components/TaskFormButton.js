import { Button } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { toggleShowAddTask } from '../redux/actions'

const TaskFormButton = () => {
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
    <Button 
      floated='right' 
      color={showAddTask ? 'black' : 'blue'}
      content={showAddTask ? t('page.framework.buttons.close') : t('page.framework.buttons.add')}
      onClick={() => onToggleShowAddTask()} />
  )
}

export default TaskFormButton
