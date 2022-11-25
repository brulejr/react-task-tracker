import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

import About from './components/About'
import TaskListCard from './components/TaskListCard'

const App = () => {
  return (
    <Router>
      <Container text>
        <Routes> 
          <Route path='/' element={ <TaskListCard /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
