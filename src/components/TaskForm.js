import { Modal } from 'semantic-ui-react'
import { Formik } from 'formik'
import { Form, Checkbox, Input, SubmitButton } from 'formik-semantic-ui-react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { addTask, toggleShowTaskForm } from '../redux/actions'

const TaskForm = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer)
  const { showTaskForm } = taskReducer

  const _closeModal = (dirty, resetForm) => {
    console.log('dirty', dirty)
    resetForm()
    dispatch(toggleShowTaskForm(showTaskForm))
  }

  const _initialValues = {
    text: '',
    day: '',
    reminder: false
  }

  const _validationSchema = Yup.object({
    text: Yup.string().required("Required"),
    reminder: Yup.boolean()
  })

  const _submitForm = (values, { resetForm, setSubmitting }) => {
    dispatch(addTask({ ...values }))
      .then(response => {
        resetForm()
        setSubmitting(false)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <Formik 
      initialValues={_initialValues} 
      validationSchema={_validationSchema} 
      onSubmit={_submitForm}
    >
      {({ dirty, isSubmitting, isValid, resetForm }) => (
        <Modal
          closeIcon
          open={showTaskForm}
          onClose={() => _closeModal(dirty, resetForm)}
        >
          <Modal.Header>{t('page.AddTask.title')}</Modal.Header>
          <Modal.Content>
            <Form size="large">
              <Input
                id='input-text'
                name='text'
                label={t('page.AddTask.fields.task.label')}
                placeholder={t('page.AddTask.fields.task.placeholder')}
                icon='tasks'
                iconPosition='left'
                autoComplete='off'
                errorPrompt />
              <Input
                id='input-day'
                name='day'
                label={t('page.AddTask.fields.day.label')}
                placeholder={t('page.AddTask.fields.day.placeholder')}
                icon='calendar'
                iconPosition='left'
                autoComplete='off'
                errorPrompt />
              <Checkbox
                id="checkbox-reminder"
                fitted
                name="reminder"
                label={t('page.AddTask.fields.reminder.label')} />
              <SubmitButton
                fluid
                primary
                content={t('page.AddTask.buttons.submit')}
                loading={isSubmitting}
                disabled={!isValid} />
            </Form>
          </Modal.Content>
        </Modal>
      )}
    </Formik>
  )
}

export default TaskForm
