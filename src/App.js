import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import About from './components/About'
import TaskListCard from './components/TaskListCard'

const App = () => {
  const taskReducer = useSelector((state) => state.taskReducer);
  const { showAddTask } = taskReducer

  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path='/' element={ <TaskListCard /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
