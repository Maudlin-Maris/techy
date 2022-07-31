import React from 'react'
import  Login  from './Components/Login'
import Register  from './Components/Register'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage'
import Dashboard from './Components/Dashboard'
import './css/styles.css'

function App() {

  return (
    
      
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='/Login' element={<Login />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    
    
  )
    // <div>
    //   {/* <Login /> */}
    //   <Register />

    // </div>
  
}

export default App
