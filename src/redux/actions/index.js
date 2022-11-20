import { ADD_TASK, DELETE_TASK, FETCH_TASKS, TOGGLE_SHOW_ADD_TASK, TOGGLE_TASK_REMINDER } from '../types'
import TaskService from "../../services/TaskService"

export const addTask = (task) => async (dispatch, getState) => {
  try {

    const addedTask = await TaskService.createTask(task)

    dispatch({
      type: ADD_TASK,
      payload: { ...addedTask }
    })

    return Promise.resolve(addedTask)

  } catch(err) {
    return Promise.reject(err)
  }
}

export const deleteTask = (id) => async (dispatch) => {
  try {

    await TaskService.deleteTask(id)
    
    dispatch({
      type: DELETE_TASK,
      payload: { id }
    })

    return Promise.resolve(id)

  } catch (err) { 
    return Promise.reject(err)
  }
}

export const fetchTasks = () => async (dispatch) => {
  try {

    const tasks = await TaskService.fetchTasks()

    dispatch({
      type: FETCH_TASKS,
      payload: { tasks: tasks }
    })

    return Promise.resolve(tasks)

  } catch (err) {
    return Promise.reject(err)
  }
}

export const toggleShowAddTask = (showAddTask) => async (dispatch) => {
  try {

    const updatedShowAddTask = !showAddTask
    
    dispatch({
      type: TOGGLE_SHOW_ADD_TASK,
      payload: { showAddTask: updatedShowAddTask }
    })

    return Promise.resolve(updatedShowAddTask)
  
  } catch (err) {
    return Promise.reject(err)
  }
}

export const toggleTaskReminder = (id) => async (dispatch) => {
  try {

    const taskToToggle = await TaskService.fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const task = await TaskService.updateTask(id, updTask)

    dispatch({
      type: TOGGLE_TASK_REMINDER,
      payload: { task }
    })

    return Promise.resolve(task)

  } catch (err) {
    return Promise.reject(err)
  }
}
