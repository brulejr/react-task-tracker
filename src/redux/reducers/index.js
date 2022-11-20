import { ADD_TASK, DELETE_TASK, FETCH_TASKS, TOGGLE_SHOW_ADD_TASK, TOGGLE_TASK_REMINDER } from '../types'

const INITIAL_STATE = {
  showAddTask: false,
  tasks: []
}

const reducers = (state = INITIAL_STATE, action) => {
  const { type, payload } = action 
  const { tasks } = state

  switch (type) {

    case ADD_TASK:
      console.log('task to add', payload)
      return {
        ...state,
        tasks: [ ...tasks, payload ]
      }

    case DELETE_TASK:
      return {
        ...state,
        tasks: tasks.filter(({ id }) => id !== payload.id)
      }

    case FETCH_TASKS:
      return {
        ...state,
        tasks: payload.tasks
      }

    case TOGGLE_SHOW_ADD_TASK:
      return {
        ...state,
        showAddTask: payload.showAddTask
      }

    case TOGGLE_TASK_REMINDER:
      return {
        ...state,
        tasks: tasks.map((task) => (task.id === payload.task.id) ? payload.task : task)
      }

    default:
      return INITIAL_STATE

  }
}

export default reducers
