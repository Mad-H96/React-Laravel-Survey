import './App.css'
import LoginForm from './components/LoginForm'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
    <>

      
    <Routes>
      <Route>
        
      <Route path='/' element={<LoginForm/>}/>

      </Route>
    </Routes>



    </>
  )
}

export default App
