import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { useEffect } from 'react'
import ProtecteRoutes from './pages/ProtecteRoutes'
import { useDispatch } from 'react-redux'
import { setCredentialsSlice } from './store/slices/creadentials.slice'


function App() {
const dispatch = useDispatch() 

  useEffect(() => {
    const token = localStorage.removeItem("toke")
    const username = localStorage.removeItem("username")
    const email = localStorage.removeItem("email")
    const obj = {token, username, email}
   dispatch(setCredentialsSlice(obj))

  }, [])


  return (
   <div>
      
     <Routes>
       
        <Route path='/auth/login' element={<LoginPage/>} />
        <Route path='/auth/register' element={<RegisterPage/>} />

          <Route element={<ProtecteRoutes />} />
            <Route path='/' element={<HomePage />} />
          <Route />  
      </Routes>
    </div>
  )
}

export default App
