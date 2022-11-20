const createTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  return res.json()
}

const deleteTask = async (id) => {
  return fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
}

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  return res.json()
}

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  return res.json()
}

const updateTask = async (id, task) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
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
