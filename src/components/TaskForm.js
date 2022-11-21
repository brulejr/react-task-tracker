import { Form, Modal } from 'semantic-ui-react'
import { DateTimeInput } from 'semantic-ui-calendar-react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { addTask, toggleShowTaskForm } from '../redux/actions'

const TaskForm = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer)
  const { showTaskForm } = taskReducer

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const closeModal = () => {
    dispatch(toggleShowTaskForm(showTaskForm))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert(t('page.AddTask.validation.taskRequired'))
      return
    }
    dispatch(addTask({ text, day, reminder }))
      .then(response => {
        closeModal()
        setText('')
        setDay('')
        setReminder(false)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <Modal
      closeIcon
      open={showTaskForm}
      onClose={() => closeModal()}>
      <Modal.Header>{t('page.AddTask.title')}</Modal.Header>
      <Modal.Content>
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
      </Modal.Content>
    </Modal>
  )
}

export default TaskForm
