import { Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { addTask } from '../redux/actions'

const TaskForm = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

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
        console.log(e);
      })
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Input required
        label={t('page.AddTask.fields.task.label')}
        placeholder={t('page.AddTask.fields.task.placeholder')}
        icon='tasks'
        value={text}
        onChange={(e, data) => setText(data.value)} />
      <Form.Input
        label={t('page.AddTask.fields.day.label')}
        placeholder={t('page.AddTask.fields.day.placeholder')}
        icon='calendar'
        value={day}
        onChange={(e, data) => setDay(data.value)} />
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
