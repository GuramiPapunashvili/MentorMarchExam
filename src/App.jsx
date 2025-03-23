import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import TaskList from "./Pages/TaskList.jsx"
import API from "./Pages/API.jsx"

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/TaskList' element={<TaskList/>}/>
          <Route path='/API' element={<API/>}/>
      </Routes>
    </>
  )
}

export default App
