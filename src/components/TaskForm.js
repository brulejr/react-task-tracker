import { Form } from 'semantic-ui-react'
import { DateTimeInput } from 'semantic-ui-calendar-react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { addTask } from '../redux/actions'

const TaskForm = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer)
  const { showAddTask } = taskReducer

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert(t('page.AddTask.validation.taskRequired'))
      return
    }
    dispatch(addTask({ text, day, reminder }))
      .then(response => {
        setText('')
        setDay('')
        setReminder(false)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return ( showAddTask &&
    <Form onSubmit={onSubmit}>
      <Form.Input required
        label={t('page.AddTask.fields.task.label')}
        placeholder={t('page.AddTask.fields.task.placeholder')}
        icon='tasks'
        iconPosition='left'
        value={text}
        onChange={(e, data) => setText(data.value)} />
      <Form.Field>
        <DateTimeInput
          label={t('page.AddTask.fields.day.label')}
          placeholder={t('page.AddTask.fields.day.placeholder')}
          iconPosition="left"
          value={day}
          onChange={(e, data) => setDay(data.value)}   />
      </Form.Field>
      <Form.Checkbox 
        label={t('page.AddTask.fields.reminder.label')}
        checked={reminder}
        onChange={(e, data) => setReminder(data.checked)} />
      <Form.Button 
        primary
        content={t('page.AddTask.buttons.saveTask')} />
    </Form>
  )
}

export default TaskForm
