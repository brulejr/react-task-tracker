import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTasks } from '../redux/actions'
import Task from './Task'

const Tasks = () => {
  const dispatch = useDispatch()
  const taskReducer = useSelector((state) => state.taskReducer);
  const { tasks } = taskReducer

  useEffect(() => {
    dispatch(fetchTasks())
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <>
    {tasks.length > 0 
      ? (tasks.map((task) => ( <Task key={task.id} task={task} />))) 
      : ('No Tasks To Show')}
    </>
  )
}

export default Tasks
