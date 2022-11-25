import { Modal, FormGroup } from 'semantic-ui-react'
import { Formik } from 'formik'
import { Form, Checkbox, Input, SubmitButton, ResetButton } from 'formik-semantic-ui-react'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { addTask, toggleShowTaskForm } from '../redux/actions'
import { confirm } from './Confirmation'

const TaskForm = () => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer)
  const { showTaskForm } = taskReducer

  const _closeModal = async (dirty, resetForm) => {
    if (!dirty || await confirm(t('page.AddTask.messages.dirtyTask'))) {
      resetForm()
      dispatch(toggleShowTaskForm(showTaskForm))  
    }
  }

  const _initialValues = {
    text: '',
    day: '',
    reminder: false
  }

  const _validationSchema = Yup.object({
    text: Yup.string().required(t('page.AddTask.validation.taskRequired')),
    day: Yup.string().required(t('page.AddTask.validation.dayRequired')),
    reminder: Yup.boolean()
  })

  const _submitForm = (values, { dirty, resetForm, setSubmitting }) => {
    dispatch(addTask({ ...values }))
      .then(response => {
        setSubmitting(false)
        _closeModal(dirty, resetForm)
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
                type="date"
                errorPrompt />
              <Checkbox
                id="checkbox-reminder"
                fitted
                name="reminder"
                label={t('page.AddTask.fields.reminder.label')} />
              <FormGroup unstackable>
                <SubmitButton
                  fluid
                  primary
                  content={t('page.AddTask.buttons.submit')}
                  loading={isSubmitting}
                  disabled={!isValid}
                  width={8} />
                <ResetButton
                  fluid
                  color="green"
                  content={t('page.AddTask.buttons.reset')}
                  width={8} />
              </FormGroup>
            </Form>
          </Modal.Content>
        </Modal>
      )}
    </Formik>
  )
}

export default TaskForm
