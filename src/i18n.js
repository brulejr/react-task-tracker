import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      page: {
        framework: {
          title: 'Task Tracker',
          buttons: {
            add: 'Add',
            close: 'Close'
          },
          links: {
            about: 'About',
            returnToHome: 'Go Back'
          },
          copyright: 'Copyright \u00A9 2022'
        },
        About: {
          version: 'Version {{version}}'
        },
        AddTask: {
          fields: {
            task: {
              label: 'Task',
              placeholder: 'Add Task'
            },
            day: {
              label: 'Day \u0026 Time',
              placeholder: 'Add Day \u0026 Time'
            },
            reminder: {
              label: 'Reminder'
            }
          },
          buttons: {
            saveTask: 'Save Task'
          },
          validation: {
            taskRequired: 'Please add a task'
          }
        }
      }
    }
  },
  es: {
    translation: {
      page: {
        framework: {
          title: 'Rastreador de Tareas',
          buttons: {
            add: 'Agregar',
            close: 'Cerrar'
          },
          links: {
            about: 'Sobre',
            returnToHome: 'Regresa'
          },
          copyright: 'Derechos de Autor \u00A9 2022'
        },
        About: {
          version: 'Version {{version}}'
        },
        AddTask: {
          fields: {
            task: {
              label: 'Tarea',
              placeholder: 'Agregar Tarea'
            },
            day: {
              label: 'Dia y Hora',
              placeholder: 'Agregar Dia y Hora'
            },
            reminder: {
              label: 'Recordatorio'
            }
          },
          buttons: {
            saveTask: 'Guardar Tarea'
          },
          validation: {
            taskRequired: 'Por favor agregue una tarea'
          }
        }
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

  export default i18n
