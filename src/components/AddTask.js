import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const AddTask = ({ onAdd }) => {
  const { t } = useTranslation()

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert(t('page.AddTask.validation.taskRequired'))
      return
    }
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>{t('page.AddTask.fields.task.label')}</label>
        <input type='text' placeholder={t('page.AddTask.fields.task.placeholder')} value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>{t('page.AddTask.fields.day.label')}</label>
        <input type='text' placeholder={t('page.AddTask.fields.day.placeholder')} value={day} onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>{t('page.AddTask.fields.reminder.label')}</label>
        <input 
          type='checkbox'
          checked={reminder} 
          value={reminder} 
          onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <input type='submit' value={t('page.AddTask.buttons.saveTask')} className='btn btn-block' />
    </form>
  )
}

export default AddTask
