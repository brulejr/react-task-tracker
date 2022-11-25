import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import TaskCard from './TaskCard'
import TaskForm from './TaskForm'
import TaskFormButton from './TaskFormButton'

import { fetchTasks } from '../redux/actions'

const TaskListCard = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer)
  const { tasks } = taskReducer

  useEffect(() => {
    dispatch(fetchTasks())
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <Card fluid>
      <Card.Content>
        <TaskFormButton />
        <Card.Header>
          <h1>{t('page.framework.title')}</h1>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <TaskForm />
        <>
        {tasks.length > 0 
          ? (tasks.map((task) => ( <TaskCard key={task.id} task={task} />))) 
          : t('page.Tasks.messages.noTasksAvailable')}
        </>
      </Card.Content>
      <Card.Content>
        <p>{t('page.framework.copyright')}</p>
        <Link to="/about">{t('page.framework.links.about')}</Link>
      </Card.Content>
    </Card>
  )
}

export default TaskListCard
