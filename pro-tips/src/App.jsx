import './App.css'
import React from 'react'
import Forms from './Components/Forms'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import AllRoutes from './AllRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </>
  )
}

export default App