import { Button, Card } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { deleteTask, toggleTaskReminder } from '../redux/actions'

const TaskCard = ({ task }) => {
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
    <Card 
      fluid 
      color={task.reminder ? 'green' : ''}
      onDoubleClick={() => onToggle(task.id)}>
      <Card.Content>
        <Button 
          basic
          negative
          floated='right'
          circular
          icon='cancel'
          onClick={() => onDelete(task.id)} />
        <Card.Header>{task.text}</Card.Header>
        <Card.Meta>{task.day}</Card.Meta>
      </Card.Content>        
    </Card>
  )
}

export default TaskCard
