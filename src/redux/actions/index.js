import { ADD_TASK, DELETE_TASK, FETCH_TASKS, TOGGLE_SHOW_ADD_TASK, TOGGLE_TASK_REMINDER } from '../types'

export const addTask = (task) => async (dispatch, getState) => {
  try {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const addedTask = await res.json()

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

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    
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

    const res = await fetch('http://localhost:5000/tasks')
    const tasks = await res.json()

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

    const res1 = await fetch(`http://localhost:5000/tasks/${id}`)
    const taskToToggle = await res1.json()

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res2 = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })
    const task = await res2.json()

    dispatch({
      type: TOGGLE_TASK_REMINDER,
      payload: { task }
    })

    return Promise.resolve(task)

  } catch (err) {
    return Promise.reject(err)
  }
}
