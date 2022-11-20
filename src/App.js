import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import About from './components/About'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const taskReducer = useSelector((state) => state.taskReducer);
  const { showAddTask } = taskReducer

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask />}
                <Tasks />
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
