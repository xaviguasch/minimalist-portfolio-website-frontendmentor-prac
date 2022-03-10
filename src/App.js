import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Minimalist Portfolio!</h1>

      <Outlet />
    </div>
  )
}

export default App
