import { FaTimes } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

import { deleteTask, toggleTaskReminder } from '../redux/actions'

const Task = ({ task }) => {
  const dispatch = useDispatch()
  
  const onDelete = (id) => {
    dispatch(deleteTask(id))
      .catch(e => {
        console.log(e)
      })
  }

  const onToggle = (id) => {
    dispatch(toggleTaskReminder(id))
      .catch(e => {
        console.log(e)
      })    
  }

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
