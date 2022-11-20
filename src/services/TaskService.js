const TASKS_URL = `${process.env.REACT_APP_DATA_URL}/tasks`

const createTask = async (task) => {
  const res = await fetch(TASKS_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  return res.json()
}

const deleteTask = async (id) => {
  return fetch(`${TASKS_URL}/${id}`, {
    method: 'DELETE',
  })
}

const fetchTask = async (id) => {
  const res = await fetch(`${TASKS_URL}/${id}`)
  return res.json()
}

const fetchTasks = async () => {
  const res = await fetch(TASKS_URL)
  return res.json()
}

const updateTask = async (id, task) => {
  const res = await fetch(`${TASKS_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  return res.json()
}

const TaskService = {
  createTask,
  deleteTask,
  fetchTask,
  fetchTasks,
  updateTask
}

export default TaskService
